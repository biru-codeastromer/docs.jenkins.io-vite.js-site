/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import slugify from 'slugify';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC_POSTS = path.resolve(__dirname, '../content/blog');
const SRC_AUTHORS = path.resolve(__dirname, '../content/_data/authors');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DATA_DIR = path.join(PUBLIC_DIR, 'data/blog');
const RSS_PATH = path.join(PUBLIC_DIR, 'blog', 'rss.xml');

const BASE_URL = 'https://www.jenkins.io';
const ensureDir = (p) => fs.mkdir(p, { recursive: true });
const write = (p, s) => fs.writeFile(p, s, 'utf8');
const read = (p) => fs.readFile(p, 'utf8');

async function adocToHtmlFragment(asciidoc) {
  try {
    const { execFile } = await import('child_process');
    const args = [
      '-s', '-o', '-', '-S', 'safe',
      '-a', 'icons=font',
      '-a', 'idprefix=',
      '-a', 'idseparator=-',
      '-a', 'sectanchors',
      '-a', 'linkattrs',
      '-a', 'prewrap',
      '-a', 'imagesdir=/images',
      '-a', 'outfilesuffix=/',
      '-'
    ];
    const html = await new Promise((resolve, reject) => {
      const child = execFile('asciidoctor', args, { maxBuffer: 20 * 1024 * 1024 }, (err, stdout) => {
        if (err) reject(err);
        else resolve(stdout);
      });
      child.stdin.end(asciidoc);
    });
    return String(html).trim();
  } catch {
    const AsciidoctorFactory = (await import('asciidoctor')).default || (await import('asciidoctor'));
    const asciidoctor = typeof AsciidoctorFactory === 'function' ? AsciidoctorFactory() : AsciidoctorFactory();
    const html = asciidoctor.convert(asciidoc, {
      safe: 'safe',
      backend: 'html5',
      header_footer: false,
      attributes: {
        icons: 'font', idprefix: '', idseparator: '-', sectanchors: true, linkattrs: true, prewrap: true,
        imagesdir: '/images', outfilesuffix: '/'
      }
    });
    return String(html).trim();
  }
}

const htmlEscape = (s) =>
  String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');

const stripHtml = (s) => String(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g,' ').trim();
const takeWords = (s, w=60) => {
  const parts = String(s).split(/\s+/);
  return parts.length <= w ? s : parts.slice(0, w).join(' ') + '…';
};

function key(meta, k) {
  return meta[k] ?? meta[`:${k}`];
}

function slugifyLoose(s) {
  return slugify(s, { lower: true, strict: true });
}

async function scanAvatars() {
  const repoRoot = path.resolve(__dirname, '..');
  const entries = await fg(['public/images/avatars/*.{bmp,gif,ico,jpg,jpeg,png,svg}'], { cwd: repoRoot });
  const map = {};
  for (const rel of entries) {
    const base = path.basename(rel).replace(/\.(bmp|gif|ico|jpg|jpeg|png|svg)$/i, '');
    const webPath = '/' + rel.replace(/\\/g, '/').replace(/^public\//, '');
    map[base] = webPath;
  }
  return map;
}

async function loadAuthors(avatarMap) {
  const files = await fg([`${SRC_AUTHORS}/*.adoc`], { dot: false });
  const authors = {};
  for (const file of files) {
    const raw = await read(file);
    const fm = matter(raw, { language: 'yaml' });
    const meta = fm.data || {};
    const content = fm.content || '';

    const id = path.basename(file, '.adoc');
    const name = key(meta, 'name') || id;
    const gh = key(meta, 'github') || null;
    const tw = key(meta, 'twitter') || null;
    const li = key(meta, 'linkedin') || null;

    const bio_html = content.trim() ? await adocToHtmlFragment(content) : '';

    authors[id] = {
      id, name, github: gh, twitter: tw, linkedin: li,
      avatar: avatarMap[id] || null,
      bio_html
    };
  }
  return authors;
}

function parsePostPath(p) {
  const rel = String(p).replace(/\\/g, '/').split('/content/blog/')[1];
  if (!rel) return {};

  const parts = rel.split('/').filter(Boolean);
  const yyyy = parts[0];
  const mm = parts[1];

  let dd, slug;

  if (parts.length >= 5 && /^index\.(ad|adoc|md)$/i.test(parts[parts.length - 1])) {
    dd = parts[2];
    slug = parts[3];
  } else if (parts.length >= 4) {
    dd = /^\d{2}$/.test(parts[2]) ? parts[2] : '01';
    const file = parts[parts.length - 1] || '';
    slug = file.replace(/\.(ad|adoc|md)$/i, '');
  } else if (parts.length === 3) {
    dd = '01';
    const file = parts[2] || '';
    slug = file.replace(/\.(ad|adoc|md)$/i, '');
  } else {
    return {};
  }

  return { yyyy, mm, dd, slug };
}

async function build() {
  await ensureDir(DATA_DIR);
  const avatarMap = await scanAvatars();
  const authors = await loadAuthors(avatarMap);

  const files = await fg([`${SRC_POSTS}/**/*.{ad,adoc}`], { dot: false });
  const posts = [];

  for (const file of files) {
    const { yyyy, mm, dd, slug } = parsePostPath(file);
    if (!yyyy || !mm || !slug) continue;

    const raw = await read(file);
    const fm = matter(raw, { language: 'yaml' });
    const meta = fm.data || {};
    const body = fm.content || '';

    const title = key(meta, 'title') || slugifyLoose(slug).replace(/-/g, ' ');
    const date = key(meta, 'date') || `${yyyy}-${mm}-${dd || '01'}`;
    const authorSingle = key(meta, 'author') || null;
    const authorsField = meta.authors || (authorSingle ? [authorSingle] : []);
    const tags = key(meta, 'tags') || meta.tags || [];
    const description = meta.description || key(meta, 'description') || '';
    const og = meta.opengraph || key(meta, 'opengraph') || {};
    const opengraph_image = og.image || '/images/logo-title-opengraph.png';

    const content_html = await adocToHtmlFragment(body);
    const summary = description ? String(description).trim() : takeWords(stripHtml(content_html), 60);

    const url = `/blog/${yyyy}/${mm}/${dd || '01'}/${slug}/`;
    const outDir = path.join(DATA_DIR, 'posts', yyyy, mm, slug);
    await ensureDir(outDir);
    await write(path.join(outDir, 'index.json'), JSON.stringify({
      id: `${yyyy}-${mm}-${slug}`,
      url, title, date,
      authors: authorsField,
      tags, summary, opengraph_image, content_html
    }, null, 2));

    posts.push({
      url, title, date,
      y: yyyy, m: mm, d: dd || '01',
      authors: authorsField,
      tags, summary, opengraph_image
    });
  }

  posts.sort((a,b) => b.date.localeCompare(a.date));

  const tagMap = {};
  for (const p of posts) {
    for (const t of (p.tags || [])) tagMap[t] = (tagMap[t] || 0) + 1;
  }
  const tags = Object.entries(tagMap).map(([tag, count]) => ({ tag, count }))
    .sort((a,b) => a.tag.localeCompare(b.tag));

  const authorPosts = {};
  for (const p of posts) {
    for (const a of (p.authors || [])) {
      (authorPosts[a] ||= []).push(p);
    }
  }
  for (const a of Object.keys(authorPosts)) authorPosts[a].sort((x,y) => y.date.localeCompare(x.date));

  await ensureDir(DATA_DIR);
  await write(path.join(DATA_DIR, 'index.json'), JSON.stringify(posts, null, 2));
  await write(path.join(DATA_DIR, 'tags.json'), JSON.stringify(tags, null, 2));
  await write(path.join(DATA_DIR, 'authors.json'), JSON.stringify({ authors, authorPosts }, null, 2));

  const items = posts.slice(0, 50);
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="https://www.w3.org/2005/Atom">
  <channel>
    <title>The Jenkins Blog</title>
    <link>${BASE_URL}/blog/</link>
    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Posts from the Jenkins project</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
`;
  for (const it of items) {
    const pub = new Date(`${it.date}T12:00:00Z`).toUTCString();
    rss += `    <item>
      <title>${htmlEscape(it.title)}</title>
      <link>${BASE_URL}${it.url}</link>
      <guid isPermaLink="true">${BASE_URL}${it.url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${htmlEscape(it.summary || '')}</description>
    </item>
`;
  }
  rss += `  </channel>\n</rss>\n`;
  await ensureDir(path.dirname(RSS_PATH));
  await write(RSS_PATH, rss);

  console.log(`✔ Blog build: ${posts.length} posts, ${tags.length} tags, ${Object.keys(authors).length} authors. RSS written.`);
}

build().catch((e) => {
  console.error('Blog build failed:', e);
  process.exit(1);
});
