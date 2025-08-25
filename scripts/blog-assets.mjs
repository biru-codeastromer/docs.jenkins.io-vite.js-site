/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import https from 'https';

const root = path.resolve(new URL('.', import.meta.url).pathname, '..');
const PUBLIC = path.join(root, 'public');

const files = [
  { url: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
    out: 'assets/bower/jquery/jquery.min.js' },

  { url: 'https://cdn.jsdelivr.net/npm/anchor-js@4.3.1/anchor.min.js',
    out: 'assets/bower/anchor-js/anchor.min.js' },

  { url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
    out: 'assets/bower/bootstrap/js/bootstrap.min.js' },
  { url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    out: 'assets/bower/bootstrap/css/bootstrap.min.css' },

  { url: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
    out: 'assets/bower/@popperjs/core/umd/popper.min.js' },

  { url: 'https://www.jenkins.io/css/jenkins.css', out: 'css/jenkins.css' },
  { url: 'https://www.jenkins.io/css/copy-to-clipboard.css', out: 'css/copy-to-clipboard.css' },
  { url: 'https://www.jenkins.io/css/footer.css', out: 'css/footer.css' },
  { url: 'https://www.jenkins.io/stylesheets/styles.css', out: 'stylesheets/styles.css' },

  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    out: 'css/font-awesome.min.css' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2',
    out: 'fonts/fontawesome-webfont.woff2' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff',
    out: 'fonts/fontawesome-webfont.woff' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf',
    out: 'fonts/fontawesome-webfont.ttf' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg',
    out: 'fonts/fontawesome-webfont.svg' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot',
    out: 'fonts/fontawesome-webfont.eot' },
];

async function ensureDir(p) { await fs.mkdir(path.dirname(p), { recursive: true }); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) return reject(new Error(`GET ${url} -> ${res.statusCode}`));
      const chunks = [];
      res.on('data', (d) => chunks.push(d));
      res.on('end', async () => {
        await ensureDir(dest);
        await fs.writeFile(dest, Buffer.concat(chunks));
        resolve();
      });
    }).on('error', reject);
  });
}

async function copyIfExists(srcRel, destRel) {
  const src = path.join(root, srcRel);
  const dest = path.join(PUBLIC, destRel);
  try {
    const stat = await fs.stat(src);
    if (stat.isFile()) {
      await ensureDir(dest);
      await fs.copyFile(src, dest);
      console.log(`copied local ${srcRel} -> /${destRel}`);
      return true;
    }
  } catch {}
  return false;
}

async function main() {
  for (const f of files) {
    const outPath = path.join(PUBLIC, f.out);
    await ensureDir(outPath);
    try {
      await download(f.url, outPath);
      console.log(`fetched ${f.url} -> /${f.out}`);
    } catch (e) {
      console.warn(`WARN: failed ${f.url}: ${e.message}`);
    }
  }

  const localPairs = [
    ['content/css/jenkins.css', 'css/jenkins.css'],
    ['content/css/copy-to-clipboard.css', 'css/copy-to-clipboard.css'],
    ['content/css/footer.css', 'css/footer.css'],
    ['content/stylesheets/styles.css', 'stylesheets/styles.css'],
    ['content/js/copy-to-clipboard.js', 'js/copy-to-clipboard.js'],
  ];
  for (const [src, dest] of localPairs) await copyIfExists(src, dest);

  const fallbackPath = path.join(PUBLIC, 'js/copy-to-clipboard.js');
  try {
    await fs.access(fallbackPath);
  } catch {
    await ensureDir(fallbackPath);
    await fs.writeFile(fallbackPath, `
      (function(){
        document.addEventListener('click', async (e) => {
          const btn = e.target.closest('[data-copy]');
          if (!btn) return;
          try {
            await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
            btn.setAttribute('data-tooltip', 'Copied!');
            setTimeout(()=>btn.removeAttribute('data-tooltip'), 1200);
          } catch {}
        });
      })();
    `, 'utf8');
    console.log('wrote fallback /js/copy-to-clipboard.js');
  }

  console.log('✔ blog/assets parity ready');
}

main().catch((e) => { console.error(e); process.exit(1); });
