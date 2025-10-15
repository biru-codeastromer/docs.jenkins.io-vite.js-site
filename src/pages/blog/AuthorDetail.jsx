import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogFrame from '../../components/blog/BlogFrame';

function MaskIcon({ src }) {
  return <span className="app-social-icon" style={{ '--icon': `url("${src}")` }} />;
}

export default function AuthorDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/blog/authors.json').then(r => r.json()).then(setData);
  }, []);

  const author = data?.authors?.[id];
  const posts = useMemo(() => (data?.authorPosts?.[id] || []).slice(), [data, id]);

  if (!author) return null;

  return (
    <BlogFrame title={author.name}>
      <div className="container">
        <div className="body row">
          <div className="app-author" id="about-the-author">
            <div className="app-avatar app-avatar-image" style={{ minWidth: 64, width: '25vw', maxWidth: 128 }}>
              {author.avatar ? (
                <img
                  className="app-avatar__image"
                  src={author.avatar}
                  alt={author.name}
                  loading="lazy"
                  onLoad={(e)=>e.currentTarget.style.opacity=1}
                />
              ) : null}
            </div>

            <div className="app-author__content">
              <p className="app-author__name">{author.name}</p>
              <div dangerouslySetInnerHTML={{ __html: author.bio_html || 'This author has no biography defined.' }} />

              <div className="app-social-media-buttons__container" style={{ marginTop: '0.5rem' }}>
                <ul className="app-social-media-buttons">
                  {author.twitter && (
                    <li>
                      <a
                        href={`https://twitter.com/${author.twitter}`}
                        className="app-button app-social-media-button-x"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="𝕏 (formerly Twitter)"
                      >
                        <MaskIcon src="/images/symbols/x.svg" />
                      </a>
                    </li>
                  )}
                  {author.linkedin && (
                    <li>
                      <a
                        href={`https://www.linkedin.com/in/${author.linkedin}`}
                        className="app-button app-social-media-button-linkedin"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn"
                      >
                        <MaskIcon src="/images/symbols/linkedin.svg" />
                      </a>
                    </li>
                  )}
                  {author.github && (
                    <li>
                      <a
                        href={`https://github.com/${author.github}`}
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
          </div>

          <h2>Recent posts</h2>
          <ul className="app-cards" style={{ opacity: 1 }}>
            {posts.map(p => (
              <li key={p.url} className="app-card">
                <a href={p.url}>
                  <div className="app-card__preview">
                    {p.opengraph_image ? (
                      <img
                        src={p.opengraph_image}
                        loading="lazy"
                        alt={p.title}
                        onLoad={(e)=>e.currentTarget.style.opacity=1}
                      />
                    ) : null}
                  </div>
                  <h5 className="app-card__title">{p.title}</h5>
                  <p className="app-card__teaser">{p.summary}</p>
                </a>
                <div className="app-card__details">
                  <div className="app-card__details__authors">
                    <a href={`/blog/authors/${id}/`} className="app-author-link" data-user-name={author.name}>
                      <span className="app-avatar" style={{ width: '1.4rem', height: '1.4rem' }}>
                        {author.avatar ? (
                          <img className="app-avatar__image" src={author.avatar} alt={author.name} loading="lazy" />
                        ) : null}
                      </span>
                      <span>{author.name}</span>
                    </a>
                  </div>
                  <span>{new Date(p.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </li>
            ))}
          </ul>
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
          :root{
            --color: hsl(240,15%,95%);
            --color--secondary: hsl(240,20%,70%);
            --twitter: hsl(0,0%,100%);
          }
        }

        .app-social-media-buttons__container{ display:flex; align-items:center; gap:.75rem; }
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
