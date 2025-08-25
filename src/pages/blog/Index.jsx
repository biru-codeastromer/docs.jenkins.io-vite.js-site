import { useEffect, useMemo, useState } from 'react';
import BlogFrame from '../../components/blog/BlogFrame';

function AuthorChips({ post, authorsMeta }) {
  const ids = post.authors || [];
  return (
    <div className="app-card__details__authors">
      {ids.map((id) => {
        const a = authorsMeta[id];
        const label = a?.name || id;
        const avatar = a?.avatar;
        return (
          <a key={id} href={`/blog/authors/${id}/`} className="app-author-link" data-user-name={label}>
            <span className="app-avatar" style={{ width: '1.4rem', height: '1.4rem' }}>
              {avatar ? (
                <img
                  className="app-avatar__image"
                  src={avatar}
                  alt={label}
                  loading="lazy"
                  onLoad={(e)=>{ e.currentTarget.style.opacity = 1; }}
                />
              ) : null}
            </span>
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}

function BlogCard({ post, authorsMeta }) {
  return (
    <li className="app-card">
      <a href={post.url}>
        <div className="app-card__preview">
          {post.opengraph_image ? <img src={post.opengraph_image} loading="lazy" alt={post.title} onLoad={(e)=>e.currentTarget.style.opacity=1} /> : null}
        </div>
        <h5 className="app-card__title">{post.title}</h5>
        <p className="app-card__teaser">{post.summary}</p>
      </a>
      <div className="app-card__details">
        <AuthorChips post={post} authorsMeta={authorsMeta} />
        <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </li>
  );
}

function buildPageModel(current, total) {
  if (total <= 10) return Array.from({ length: total }, (_, i) => i + 1);

  const items = [];
  const add = (v) => { if (items[items.length - 1] !== v) items.push(v); };
  const addRange = (a, b) => { for (let i = a; i <= b; i++) add(i); };

  addRange(1, 3);

  const midStart = Math.max(4, current - 1);
  const midEnd   = Math.min(total - 3, current + 1);

  if (midStart > 4) add('…');
  if (midStart <= midEnd) addRange(midStart, midEnd);
  if (midEnd < total - 3) add('…');

  addRange(total - 2, total);

  return items;
}

function Pager({ page, total, onChange }) {
  if (total <= 1) return null;

  const items = buildPageModel(page, total);
  const hrefFor = (n) => (n === 1 ? '/blog/' : `/blog/page/${n}/`);
  const goto = (n) => { if (n >= 1 && n <= total && n !== page) onChange(n); };

  return (
    <nav className="app-pagination" aria-label="Pagination">
      <ul className="pagination">
        {items.map((it, idx) => {
          if (it === '…') {
            return (
              <li key={`dots-${idx}`} className="page-item disabled" aria-hidden="true">
                <span className="page-link">…</span>
              </li>
            );
          }
          const n = it;
          const active = n === page;
          return (
            <li key={n} className={`page-item ${active ? 'active' : ''}`}>
              {active ? (
                <span className="page-link" aria-current="page">{n}</span>
              ) : (
                <a
                  className="page-link"
                  href={hrefFor(n)}
                  onClick={(e)=>{ e.preventDefault(); goto(n); }}
                >
                  {n}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      {page < total ? (
        <a
          className="next-arrow"
          href={hrefFor(page + 1)}
          aria-label="Next page"
          onClick={(e)=>{ e.preventDefault(); goto(page + 1); }}
        >
          →
        </a>
      ) : null}

      <style>{`
        /* Center numbers exactly; keep arrow on far right */
        .app-pagination{
          display:grid;
          grid-template-columns: 1fr auto 1fr; /* left filler | numbers | right filler */
          align-items:center;
          margin:2rem 0 1rem;
        }
        .app-pagination .pagination{
          grid-column: 2;                     /* middle column = true center */
          display:flex;
          gap:.75rem;                         /* tighter spacing */
          margin:0;
          padding:0;
          list-style:none;
          justify-self:center;
        }

        /* Small, neat pills */
        .app-pagination .page-item .page-link{
          background:transparent;
          border:none;
          font-size:.95rem;                   /* smaller text */
          padding:.35rem .55rem;              /* smaller pill */
          border-radius:.55rem;
          color:currentColor;                 /* default text color (white/black by theme) */
          text-decoration:none;
        }
        .app-pagination .page-item .page-link:visited{ color:currentColor; }

        /* Active pill tint — auto-adjust for light/dark */
        .app-pagination .page-item.active .page-link{ background:rgba(255,255,255,.10); }
        @media (prefers-color-scheme: light){
          .app-pagination .page-item.active .page-link{ background:rgba(0,0,0,.08); }
        }
        :root[data-theme="light"] .app-pagination .page-item.active .page-link,
        html[data-theme="light"]  .app-pagination .page-item.active .page-link,
        body[data-theme="light"]  .app-pagination .page-item.active .page-link{ background:rgba(0,0,0,.08); }
        :root[data-theme="dark"]  .app-pagination .page-item.active .page-link,
        html[data-theme="dark"]   .app-pagination .page-item.active .page-link,
        body[data-theme="dark"]   .app-pagination .page-item.active .page-link{ background:rgba(255,255,255,.10); }

        .app-pagination .page-item.disabled .page-link{
          opacity:.45;
          pointer-events:none;
        }

        /* Right arrow stays pinned to the right edge */
        .app-pagination .next-arrow{
          grid-column:3;
          justify-self:end;
          font-size:1rem;
          line-height:1;
          padding:.35rem;
          text-decoration:none;
          color:currentColor;
        }
      `}</style>
    </nav>
  );
}

export default function BlogIndex({ tag, pageIndex = 1 }) {
  const [posts, setPosts] = useState([]);
  const [authorsMeta, setAuthorsMeta] = useState({});
  const [tags, setTags] = useState([]);
  const pageSize = 9;

  useEffect(() => {
    fetch('/data/blog/index.json').then(r=>r.json()).then(setPosts);
    fetch('/data/blog/authors.json').then(r=>r.json()).then(({ authors }) => setAuthorsMeta(authors || {}));
    fetch('/data/blog/tags.json').then(r=>r.json()).then(setTags);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll(".app-card__details__authors").forEach(authors => {
        if (authors.offsetHeight > 30) authors.classList.add("app-card__details__authors--compact");
      });
      const cards = document.querySelector(".app-cards");
      if (cards) cards.style.opacity = 1;
    }, 0);
    return () => clearTimeout(id);
  });

  const filtered = useMemo(() => {
    if (!tag) return posts;
    return posts.filter(p => (p.tags || []).includes(tag));
  }, [posts, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const clampedPage = Math.min(totalPages, Math.max(1, pageIndex));
  const pageItems = filtered.slice((clampedPage - 1) * pageSize, clampedPage * pageSize);

  return (
    <BlogFrame title="The Jenkins Blog">
      {!tag ? (
        <>
          {clampedPage > 1 ? <p className="blog-date">Page {clampedPage}</p> : null}
          <div className="app-app-bar">
            <div className="app-app-bar__content">
              <h1><a href="/blog/" tabIndex={-1}>The Jenkins Blog</a></h1>
            </div>
            <div className="app-app-bar__controls app-mobile-hide">
              <div className={`app-button app-button--tertiary app-tags-picker ${tag ? 'app-tags-picker--active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40"/><path d="M384 160a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor" /></svg>
                <select id="tag-switcher" defaultValue={tag || 'all'} onChange={(e) => {
                  const v = e.target.value;
                  window.location.href = v === 'all' ? '/blog/' : `/blog/tags/${encodeURIComponent(v)}/`;
                }}>
                  <option value="all">All</option>
                  <optgroup label="Tags">
                    {tags.map(t => <option key={t.tag} value={t.tag}>{t.tag}</option>)}
                  </optgroup>
                </select>
              </div>
              <a href="https://feeds.feedburner.com/ContinuousBlog/" className="app-button app-button--tertiary" aria-label="RSS">
                <img alt="rss" src="/images/symbols/rss.svg" />
              </a>
              <a href="https://twitter.com/jenkinsci" className="app-button app-button--tertiary" aria-label="X / Twitter">
                <img alt="x" src="/images/symbols/x.svg" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <p className="blog-date">Tag: {tag}</p>
      )}

      <ul className="app-cards">
        {pageItems.map(p => <BlogCard key={p.url} post={p} authorsMeta={authorsMeta} />)}
      </ul>

      <Pager
        page={clampedPage}
        total={totalPages}
        onChange={(n)=>{ window.location.href = n === 1 ? '/blog/' : `/blog/page/${n}/`; }}
      />
    </BlogFrame>
  );
}
