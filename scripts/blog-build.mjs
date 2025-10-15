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

function decodeHtmlEntities(text) {
  if (!text) return text;
  
  const entityMap = {
    '&amp;': '&',
    '&lt;': '<', 
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#8217;': "'",
    '&#8216;': "'", 
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8230;': '…',
    '&#8211;': '–',
    '&#8212;': '—',
    '&nbsp;': ' ',
  };
  
  return text.replace(/&[#a-zA-Z0-9]+;/g, (match) => {
    return entityMap[match] || match;
  });
}

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

  if (parts.length >= 4 && /\.(ad|adoc|md)$/i.test(parts[parts.length - 1])) {
    dd = parts[2];
    const file = parts[parts.length - 1] || '';
    slug = file.replace(/\.(ad|adoc|md)$/i, '');
  }
  else if (parts.length >= 5 && /^index\.(ad|adoc|md)$/i.test(parts[parts.length - 1])) {
    dd = parts[2];
    slug = parts[3];
  }
  else if (parts.length === 3) {
    dd = '01';
    const file = parts[2] || '';
    slug = file.replace(/\.(ad|adoc|md)$/i, '');
  }
  else {
    return {};
  }

  return { yyyy, mm, dd, slug };
}

function removePassthroughBlocks(content) {
  if (!content) return '';
  
  let cleanContent = content.replace(/\+\+\+\+[\s\S]*?\+\+\+\+/g, '');
  
  cleanContent = cleanContent.replace(/\[subs?=".*?"\]\s*`\+\+\+`[\s\S]*?`\+\+\+`/g, '');
  
  return cleanContent;
}

function extractCleanTextForExcerpt(rawContent) {
  if (!rawContent) return '';
  
  let cleanContent = removePassthroughBlocks(rawContent);
  
  cleanContent = cleanContent
    .replace(/^=+ .*$/gm, '')
    .replace(/^\. .*$/gm, '')
    .replace(/^\[.*\]$/gm, '')
    .replace(/<<[^>]*>>/g, '')
    .replace(/^:.*$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/include::.*\[\]$/gm, '')
    .replace(/image:.*\[[^\]]*\]/g, '')
    .replace(/link:.*\[([^\]]*)\]/g, '$1')
    .replace(/image::.*\[\]$/gm, '')
    .replace(/\*{2,}([^*]+)\*{2,}/g, '$1')
    .replace(/\n+/g, ' ')
    .trim();
  
  return cleanContent;
}

function validateExcerpt(excerpt) {
  if (!excerpt) return { valid: false, reason: 'Empty excerpt' };
  
  const forbiddenPatterns = [
    { pattern: /^:root\s*\{/, name: 'CSS root block' },
    { pattern: /^--[a-z-]+:\s*/i, name: 'CSS variable declaration' },
    { pattern: /^radial-gradient\(/, name: 'CSS gradient' },
    { pattern: /^<style/, name: 'HTML style tag' },
    { pattern: /^@import/, name: 'CSS import' },
    { pattern: /^var\(--/, name: 'CSS variable usage' },
    { pattern: /^[\{\}];?$/, name: 'CSS syntax' },
    { pattern: /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})\s*$/, name: 'CSS color code' },
    { pattern: /^[a-z-]+\s*:\s*[^;]+;?$/i, name: 'CSS declaration' },
    { pattern: /^\+\+\+\+/, name: 'AsciiDoc passthrough block' },
    { pattern: /^== /, name: 'AsciiDoc section header' },
    { pattern: /^\. /, name: 'AsciiDoc list item' },
    { pattern: /<<[^>]*>>/, name: 'AsciiDoc cross-reference' },
    { pattern: /^Table of Contents/, name: 'Table of Contents heading' }
  ];
  
  for (const { pattern, name } of forbiddenPatterns) {
    if (pattern.test(excerpt.trim())) {
      return { valid: false, reason: `Contains ${name}` };
    }
  }
  
  return { valid: true };
}

function extractFirstParagraphFromRawContent(rawContent) {
  if (!rawContent) return '';
  
  const cleanContent = extractCleanTextForExcerpt(rawContent);
  
  const sentences = cleanContent.split(/[.!?]+/);
  
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    
    if (trimmed.length > 40 && 
        !trimmed.match(/^(Table of Contents|Summary|TL;DR|Acknowledgements|Useful Links)/i) &&
        !trimmed.match(/^[=#\-*]\s?/) &&
        !trimmed.match(/^\[/) &&
        !trimmed.match(/<<.*>>/) &&
        validateExcerpt(trimmed).valid &&
        trimmed.match(/[a-zA-Z]{4,}/) && 
        trimmed.split(' ').length > 5) {
      
      let cleanSentence = trimmed;
      if (!cleanSentence.endsWith('.') && !cleanSentence.endsWith('!') && !cleanSentence.endsWith('?')) {
        cleanSentence += '.';
      }
      return takeWords(cleanSentence, 60);
    }
  }
  
  return '';
}

async function build() {
  await ensureDir(DATA_DIR);
  const avatarMap = await scanAvatars();
  const authors = await loadAuthors(avatarMap);

  const files = await fg([`${SRC_POSTS}/**/*.{ad,adoc}`], { dot: false });
  const posts = [];
  let excerptWarnings = 0;

  for (const file of files) {
    const { yyyy, mm, dd, slug } = parsePostPath(file);
    if (!yyyy || !mm || !slug) continue;

    const raw = await read(file);
    const fm = matter(raw, { language: 'yaml' });
    const meta = fm.data || {};
    const body = fm.content || '';

    const title = decodeHtmlEntities(key(meta, 'title') || slugifyLoose(slug).replace(/-/g, ' '));
    const date = key(meta, 'date') || `${yyyy}-${mm}-${dd || '01'}`;
    const authorSingle = key(meta, 'author') || null;
    const authorsField = meta.authors || (authorSingle ? [authorSingle] : []);
    const tags = key(meta, 'tags') || meta.tags || [];
    const description = meta.description || key(meta, 'description') || '';
    const og = meta.opengraph || key(meta, 'opengraph') || {};
    const opengraph_image = og.image || '/images/logo-title-opengraph.png';

    const content_html = decodeHtmlEntities(await adocToHtmlFragment(body));

    let summary = '';
    
    if (description) {
      summary = decodeHtmlEntities(String(description).trim());
    } 
    else {
      summary = extractFirstParagraphFromRawContent(body);
      
      if (!summary) {
        let cleanHtml = content_html
          .replace(/<pre[\s\S]*?<\/pre>/gi, '')
          .replace(/<code[\s\S]*?<\/code>/gi, '')
          .replace(/<style[\s\S]*?<\/style>/gi, '')
          .replace(/<script[\s\S]*?<\/script>/gi, '')
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        cleanHtml = decodeHtmlEntities(cleanHtml);
        
        if (cleanHtml && cleanHtml.length > 20) {
          const sentences = cleanHtml.split(/[.!?]+/).filter(s => {
            const trimmed = s.trim();
            return trimmed.length > 30 && validateExcerpt(trimmed).valid;
          });
          
          if (sentences.length > 0) {
            let firstSentence = sentences[0].trim();
            if (!firstSentence.endsWith('.') && !firstSentence.endsWith('!') && !firstSentence.endsWith('?')) {
              firstSentence += '.';
            }
            summary = firstSentence;
          } else {
            summary = cleanHtml.length > 150 ? cleanHtml.substring(0, 150) + '…' : cleanHtml;
          }
        }
      }
    }
    
    if (!summary || !validateExcerpt(summary).valid) {
      summary = `Read more about ${title}...`;
    }
    
    const validation = validateExcerpt(summary);
    if (!validation.valid && summary !== `Read more about ${title}...`) {
      console.warn(`⚠️  Excerpt issue in "${title}": ${validation.reason}`);
      console.warn(`   Generated excerpt: "${summary}"`);
      excerptWarnings++;
    }

    const url = `/blog/${yyyy}/${mm}/${dd || '01'}/${slug}/`;
    const outDir = path.join(DATA_DIR, 'posts', yyyy, mm, slug);
    await ensureDir(outDir);
    await write(path.join(outDir, 'index.json'), JSON.stringify({
      id: `${yyyy}-${mm}-${slug}`,
      url, title, date,
      authors: authorsField,
      tags, summary, opengraph_image, 
      content_html
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

  if (excerptWarnings > 0) {
    console.warn(`\n⚠️  ${excerptWarnings} posts had excerpt generation issues`);
  }
  console.log(`Blog build: ${posts.length} posts, ${tags.length} tags, ${Object.keys(authors).length} authors. RSS written.`);
}

build().catch((e) => {
  console.error('Blog build failed:', e);
  process.exit(1);
});