import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { parse as yamlParse } from 'yaml';
import slugify from 'slugify';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC_DIR = path.resolve(__dirname, '../content/security/advisory');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DATA_DIR = path.join(PUBLIC_DIR, 'data/security');
const ISSUE_REDIRECT_DIR = path.join(PUBLIC_DIR, 'security/issue');
const RSS_PATH = path.join(PUBLIC_DIR, 'security/advisories/rss.xml');
const BASE_URL = 'https://www.jenkins.io'; // for absolute links in RSS
const UPDATE_CENTER_JSON = 'https://updates.jenkins.io/current/update-center.actual.json';

const ASSETS = [
  '/assets/bower/bootstrap/css/bootstrap.min.css',
  '/css/jenkins.css',
  '/css/copy-to-clipboard.css',
  '/stylesheets/styles.css',
  '/css/footer.css',
  '/css/font-awesome.min.css',
  '/assets/bower/jquery/jquery.min.js',
  '/js/copy-to-clipboard.js',
  '/assets/bower/anchor-js/anchor.min.js',
  '/assets/bower/@popperjs/core/umd/popper.min.js',
  '/assets/bower/bootstrap/js/bootstrap.min.js'
];

const ensureDir = async p => fs.mkdir(p, { recursive: true });
const write = (p, s) => fs.writeFile(p, s, 'utf8');
const read = (p) => fs.readFile(p, 'utf8');

const htmlEscape = (s) =>
  s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');

function runAsciidoctorToHtmlFragment(asciidoc) {
  return new Promise(async (resolve, reject) => {
    const args = [
      '-s',
      '-o', '-',
      '-S', 'safe',
      '-a', 'icons=font',
      '-a', 'idprefix=',
      '-a', 'idseparator=-',
      '-a', 'sectanchors',
      '-a', 'linkattrs',
      '-a', 'source-highlighter=rouge',
      '-a', 'prewrap',
      '-a', 'outfilesuffix=/',
      '-a', 'relfileprefix=../',
      '-a', 'imagesdir=/images@',
      '-'
    ];

    try {
      const child = execFile('asciidoctor', args, { maxBuffer: 10 * 1024 * 1024 }, (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          resolve(stdout.trim());
        }
      });
      child.stdin.end(asciidoc);
    } catch (e) {
      try {
        const html = await runAsciidoctorJS(asciidoc);
        resolve(html);
      } catch (e2) {
        reject(e2);
      }
    }
  });
}

async function runAsciidoctorJS(asciidoc) {
  const AsciidoctorFactory = (await import('asciidoctor')).default || (await import('asciidoctor'));
  const asciidoctor = typeof AsciidoctorFactory === 'function' ? AsciidoctorFactory() : AsciidoctorFactory();
  const html = asciidoctor.convert(asciidoc, {
    safe: 'safe',
    backend: 'html5',
    doctype: 'article',
    header_footer: false,
    attributes: {
      icons: 'font',
      idprefix: '',
      idseparator: '-',
      sectanchors: true,
      linkattrs: true,
      prewrap: true,
      outfilesuffix: '/',
      relfileprefix: '../',
      'imagesdir': '/images@'
    }
  });
  return String(html).trim();
}


async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await ensureDir(path.dirname(outPath));
  await fs.writeFile(outPath, buf);
}

async function fetchUpdateCenter() {
  try {
    const res = await fetch(UPDATE_CENTER_JSON);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const map = {};
    for (const [shortName, meta] of Object.entries(json.plugins || {})) {
      map[shortName] = meta.title || shortName;
    }
    return map;
  } catch (e) {
    console.warn('WARN: Could not fetch update center metadata; falling back to short names.', e.message);
    return {};
  }
}

function ymdFromTitle(title) {
  const m = title.match(/(Security Advisory)\s+(\d{4}-\d{2}-\d{2})$/);
  return m ? m[2] : null;
}

(async () => {
  await Promise.all(ASSETS.map(async rel => {
    const src = `https://www.jenkins.io${rel}`;
    const out = path.join(PUBLIC_DIR, rel);
    try { await download(src, out); } catch (e) { console.warn('asset fetch failed', rel, e.message); }
  }));

  const pluginTitle = await fetchUpdateCenter();

  const files = await fg([`${SRC_DIR}/*.{ad,adoc}`], { dot: false });
  const advisories = [];
  await ensureDir(DATA_DIR);
  await ensureDir(path.join(PUBLIC_DIR, 'security/advisories'));
  await ensureDir(ISSUE_REDIRECT_DIR);

  const issueMap = {};

  for (const file of files) {
    const raw = await read(file);
    const fm = matter(raw, { language: 'yaml' });
    const meta = fm.data || {};
    const content = fm.content || '';
    const title = meta.title || path.basename(file).replace(/\.(ad|adoc)$/,'');
    const date = ymdFromTitle(title) || (title.match(/\d{4}-\d{2}-\d{2}/)?.[0]) || '0000-00-00';
    const url = `/security/advisory/${date}/`;

    let indexDetailsHtml = null;
    if (meta.index_details) {
      indexDetailsHtml = await runAsciidoctorToHtmlFragment(String(meta.index_details));
    }

    const issues = Array.isArray(meta.issues) ? meta.issues : [];
    const describedIssues = issues.filter(i => i.title && i.description);
    let contentHtml = null;
    if (describedIssues.length === 0 && content.trim()) {
      contentHtml = await runAsciidoctorToHtmlFragment(content);
    }

    const normalized = {
      title,
      date,
      url,
      kind: meta.kind || null,
      core: meta.core || null,
      issues: issues.map(issue => ({
        id: issue.id,
        reporter: issue.reporter || null,
        title: issue.title || null,
        cve: issue.cve || null,
        cvss: issue.cvss || null,
        description_adoc: issue.description || null,
        plugins: (issue.plugins || []).map(p => ({
          name: p.name,
          title: p.title || pluginTitle[p.name] || null,
          previous: p.previous || null,
          fixed: p.fixed || null
        })),
        components: (issue.components || [])
      })),
      components: (meta.components || []),
      index_details_html: indexDetailsHtml,
      content_html: contentHtml
    };

    for (const issue of normalized.issues) {
      if (!issue.description_adoc) continue;
      let pn = null;
      if (issue.plugins && issue.plugins[0]) {
        pn = issue.plugins[0].title || issue.plugins[0].name;
      }
      const adoc = pn
        ? String(issue.description_adoc).replace(/PLUGIN_NAME/g, `${pn} Plugin`)
        : String(issue.description_adoc);
      issue.description_html = await runAsciidoctorToHtmlFragment(adoc);
    }

    const outJson = path.join(DATA_DIR, `advisory-${date}.json`);
    await write(outJson, JSON.stringify(normalized, null, 2));
    advisories.push(normalized);

    for (const issue of issues) {
      if (!issue.id) continue;
      const base = issue.id.replace(/\s+\(\d+\)$/, '');
      if (!issueMap[base]) {
        issueMap[base] = { url: `${url}#${base}` };
      }
    }
  }

  for (const [id, info] of Object.entries(issueMap)) {
    const dir = path.join(ISSUE_REDIRECT_DIR, id);
    await ensureDir(dir);
    const html = `<!doctype html><html><head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="refresh" content="0;URL=${info.url}">
</head><body><center>This content has moved to <a href="${info.url}">${info.url}</a></center>
<script>window.location="${info.url}";</script>
</body></html>`;
    await write(path.join(dir, 'index.html'), html);
  }

  advisories.sort((a,b) => b.date.localeCompare(a.date));
  const indexItems = advisories.map(a => {
    const pluginsFlat = [];
    const seen = new Set();
    for (const i of a.issues) {
      for (const p of (i.plugins || [])) {
        if (!seen.has(p.name)) { seen.add(p.name); pluginsFlat.push(p); }
      }
    }
    pluginsFlat.sort((a, b) =>
      (a.title || a.name).toLowerCase().localeCompare((b.title || b.name).toLowerCase())
    );
    
    const componentsFlat = [];
    
    for (const i of a.issues) {
      for (const c of (i.components || [])) componentsFlat.push(c);
    }
    return {
      title: a.title,
      date: a.date,
      url: a.url,
      kind: a.kind,
      core: !!a.core,
      index_details_html: a.index_details_html,
      plugins: pluginsFlat.map(p => ({ name: p.name, title: p.title || pluginTitle[p.name] || p.name })),
      components: componentsFlat
    };
  });
  await ensureDir(path.join(PUBLIC_DIR, 'data/security'));
  await write(path.join(PUBLIC_DIR, 'data/security/advisories.index.json'), JSON.stringify(indexItems, null, 2));

  const itemsForFeed = advisories.filter(a => a.date.startsWith('202'));
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jenkins Security Advisories</title>
    <link>${BASE_URL}/security/advisories/</link>
    <atom:link href="${BASE_URL}/security/advisories/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Security advisories published by the Jenkins project</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
`;
  for (const a of itemsForFeed) {
    const pub = new Date(`${a.date}T12:00:00Z`);
    let desc = '';
    if (a.index_details_html) {
      desc = a.index_details_html;
    } else {
      const parts = [];
      if (a.core) parts.push('<li>Affects Jenkins Core</li>');
      const plugTitles = [];
      for (const i of a.issues) {
        for (const p of (i.plugins || [])) {
          const t = pluginTitle[p.name] || p.title || p.name;
          plugTitles.push(t);
        }
      }
      const unique = Array.from(new Set(plugTitles)).sort((x,y)=>x.localeCompare(y));
      for (const t of unique) {
        parts.push(`<li>Affects plugin: ${t}</li>`);
      }
      const comps = [];
      for (const i of a.issues) for (const c of (i.components||[])) comps.push(`<li>Affects ${c.title || c.name}</li>`);
      if (comps.length) parts.push(...comps);
      desc = `<ul>${parts.join('')}</ul>`;
    }
    rss += `    <item>
      <title>${htmlEscape(a.title)}</title>
      <pubDate>${pub.toUTCString()}</pubDate>
      <link>${BASE_URL}${a.url}</link>
      <guid isPermaLink="false">jenkins-advisory-${a.date}</guid>
      <description>${htmlEscape(desc)}</description>
    </item>
`;
  }
  rss += `  </channel>\n</rss>\n`;
  await ensureDir(path.dirname(RSS_PATH));
  await write(RSS_PATH, rss);

  const allIssues = [];
  for (const [id] of Object.entries(issueMap)) {
    const numeric = parseInt(id.replace('SECURITY-',''),10);
    allIssues.push({ id: numeric, redirect_id: id });
  }
  allIssues.sort((a,b)=>b.id - a.id);
  await write(path.join(DATA_DIR, 'issues.json'), JSON.stringify(allIssues, null, 2));

  console.log(`✔ Security build: ${advisories.length} advisories, ${Object.keys(issueMap).length} issue redirects, RSS written.`);
})();
