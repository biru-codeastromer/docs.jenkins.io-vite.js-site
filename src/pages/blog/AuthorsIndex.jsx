import { useEffect, useMemo, useState } from 'react';
import BlogFrame from '../../components/blog/BlogFrame';

function MaskIcon({ src }) {
  return <span className="app-social-icon" style={{ '--icon': `url("${src}")` }} />;
}

function AuthorCard({ id, a }) {
  return (
    <div className="author-card" onClick={()=>location.href=`/blog/authors/${id}/`}>
      <a className="author name" href={`/blog/authors/${id}/`}>{a.name}</a>

      <div className="app-avatar app-avatar-image">
        {a.avatar ? (
          <img
            className="app-avatar__image"
            src={a.avatar}
            alt={a.name}
            loading="lazy"
            onLoad={(e)=>{ e.currentTarget.style.opacity = 1; }}
          />
        ) : null}
      </div>

      <div className="app-social-media-buttons__container" onClick={(e)=>e.stopPropagation()}>
        <ul className="app-social-media-buttons">
          {a.twitter && (
            <li>
              <a
                href={`https://twitter.com/${a.twitter}`}
                className="app-button app-social-media-button-x"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="𝕏 (formerly Twitter)"
              >
                <MaskIcon src="/images/symbols/x.svg" />
              </a>
            </li>
          )}
          {a.linkedin && (
            <li>
              <a
                href={`https://www.linkedin.com/in/${a.linkedin}`}
                className="app-button app-social-media-button-linkedin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <MaskIcon src="/images/symbols/linkedin.svg" />
              </a>
            </li>
          )}
          {a.github && (
            <li>
              <a
                href={`https://github.com/${a.github}`}
                className="app-button app-social-media-button-github"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <MaskIcon src="/images/symbols/github.svg" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function AuthorsIndex() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/blog/authors.json').then(r=>r.json()).then(setData);
  }, []);

  const ordered = useMemo(() => {
    if (!data) return [];
    const counts = Object.fromEntries(Object.entries(data.authorPosts || {}).map(([id, arr]) => [id, arr.length]));
    return Object.entries(data.authors || {})
      .sort((a,b) => (counts[b[0]]||0) - (counts[a[0]]||0) || a[0].localeCompare(b[0]));
  }, [data]);

  return (
    <BlogFrame title="Jenkins Community Blog Contributors">
      <div className="container">
        <div className="body row">
          <h1>Jenkins Community Blog Contributors</h1>
          <div className="author-list" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {ordered.map(([id, a]) => <AuthorCard key={id} id={id} a={a} />)}
          </div>
        </div>
      </div>

      <style>{`
        :root{
          --color: hsl(212,100%,5%);
          --color--secondary: hsl(212,30%,40%);
          --bluesky: hsl(213,100%,52%);
          --linkedin: hsl(210,91%,40%);
          --mastodon: hsl(240,100%,69%);
          --github: hsl(264,28%,45%);
          --twitter: hsl(0,0%,0%);
        }
        @media (prefers-color-scheme: dark){
          :root{ --color: hsl(240,15%,95%); --color--secondary: hsl(240,20%,70%); --twitter: hsl(0,0%,100%); }
        }

        .app-social-media-buttons__container{ display:flex; align-items:center; gap:.75rem; margin-top:.5rem; }
        .app-social-media-buttons{ display:contents; padding:0; margin:0; list-style:none; }
        .app-social-media-buttons li{ display:contents; }

        .app-button{
          --button-background: var(--color--secondary);
          --button-color: var(--color);
          --button-background-opacity: 10%;
          position:relative; display:inline-flex; align-items:center; justify-content:center;
          gap:.5rem; padding:.5rem 1.125rem; border-radius:.66rem; font:inherit; font-weight:450; font-size:.875rem;
          border:none; background: color-mix(in srgb, var(--button-background) var(--button-background-opacity), transparent);
          color:var(--button-color); text-decoration:none; line-height:1.66; transition:.2s ease;
        }
        .app-button:hover{ --button-background-opacity:15%; }
        .app-button:active,.app-button:focus{ --button-background-opacity:25%; }

        .app-social-media-buttons a.app-button{
          --button-color: var(--color);
          --button-background: var(--button-color);
          width:2.5rem; height:2.5rem; padding:0; font-size:0; flex-shrink:0; border-radius:.9rem; box-sizing:border-box;
        }

        .app-social-media-button-x        { --button-color: var(--twitter) !important; --button-background: color-mix(in srgb, var(--twitter), transparent) !important; }
        .app-social-media-button-linkedin { --button-color: var(--linkedin) !important; }
        .app-social-media-button-mastodon { --button-color: var(--mastodon) !important; }
        .app-social-media-button-bluesky  { --button-color: var(--bluesky)  !important; }
        .app-social-media-button-github   { --button-color: var(--github)  !important; }

        .app-social-icon{
          width:1.25rem; height:1.25rem; display:block; background: var(--button-color);
          -webkit-mask-image: var(--icon); mask-image: var(--icon);
          -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
          -webkit-mask-position:center; mask-position:center;
          -webkit-mask-size:contain; mask-size:contain;
        }
      `}</style>
    </BlogFrame>
  );
}
