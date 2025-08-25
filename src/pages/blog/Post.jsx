import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogFrame from '../../components/blog/BlogFrame';

function applyJenkinsShortcodes(html) {
  if (!html) return html;
  return html.replace(/author:([a-z0-9_-]+)\[([^\]]+)\]/gi, (_m, id, label) => {
    return `<a href="/blog/authors/${id}/">${label}</a>`;
  });
}

function MaskIcon({ src }) {
  return <span className="app-social-icon" style={{ '--icon': `url("${src}")` }} />;
}

function ShareButtons({ title, url }) {
  const pageUrl = `https://www.jenkins.io${url}`;
  return (
    <div className="app-social-media-buttons__container share-buttons__container">
      <span>Share</span>
      <ul className="app-social-media-buttons">
        <li>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(pageUrl)}`}
            className="app-button app-social-media-button-x"
            rel="noreferrer nofollow"
            target="_blank"
            aria-label="Share on X (Twitter)"
          >
            <MaskIcon src="/images/symbols/x.svg" />
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
            className="app-button app-social-media-button-linkedin"
            rel="noreferrer nofollow"
            target="_blank"
            aria-label="Share on LinkedIn"
          >
            <MaskIcon src="/images/symbols/linkedin.svg" />
          </a>
        </li>
        <li>
          <a
            href={`https://mastodon.social/share?text=${encodeURIComponent(`${title} ${pageUrl}`)}`}
            className="app-button app-social-media-button-mastodon"
            rel="noreferrer nofollow"
            target="_blank"
            aria-label="Share on Mastodon"
          >
            <MaskIcon src="/images/symbols/mastodon.svg" />
          </a>
        </li>
        <li>
          <a
            href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${pageUrl}`)}`}
            className="app-button app-social-media-button-bluesky"
            rel="noreferrer nofollow"
            target="_blank"
            aria-label="Share on Bluesky"
          >
            <MaskIcon src="/images/symbols/bluesky.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

function AuthorBlock({ id, meta }) {
  const a = meta?.authors?.[id];
  if (!a) return null;
  return (
    <div className="app-author" id="about-the-author">
      <div className="app-avatar app-avatar-image" style={{ minWidth: 64, width: '25vw', maxWidth: 128 }}>
        {a.avatar ? (
          <img
            className="app-avatar__image"
            src={a.avatar}
            alt={a.name}
            loading="lazy"
            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          />
        ) : null}
      </div>
      <div className="app-author__content">
        <p className="app-author__name">
          <a href={`/blog/authors/${id}/`}>{a.name}</a>
        </p>
        <div dangerouslySetInnerHTML={{ __html: a.bio_html || 'This author has no biography defined.' }} />

        <ul className="app-social-media-buttons" style={{ display: 'inline-flex', gap: '.5rem', marginTop: '.5rem' }}>
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

export default function BlogPost() {
  const { yyyy, mm, dd, slug } = useParams();
  const [post, setPost] = useState(null);
  const [authorsMeta, setAuthorsMeta] = useState(null);

  useEffect(() => {
    fetch(`/data/blog/posts/${yyyy}/${mm}/${slug}/index.json`).then((r) => r.json()).then(setPost);
    fetch('/data/blog/authors.json').then((r) => r.json()).then(setAuthorsMeta);
  }, [yyyy, mm, slug]);

  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll('.app-card__details__authors').forEach((authors) => {
        if (authors.offsetHeight > 30) authors.classList.add('app-card__details__authors--compact');
      });
    }, 0);
    return () => clearTimeout(id);
  });

  const contentHtml = useMemo(
    () => applyJenkinsShortcodes(post?.content_html || ''),
    [post?.content_html]
  );

  if (!post || !authorsMeta) return null;

  const authors = post.authors && post.authors.length ? post.authors : [];
  const title = post.title;

  return (
    <BlogFrame title={title} description={post.summary}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <article className="app-post-typography container app-post-page">
        <div className="app-!-display-flex">
          <a className="app-back-link" href="/blog">Back to blog</a>
        </div>

        <h1 className="app-post-typography__title">{title}</h1>

        <div className="post-attrs">
          <div className="app-card__details__authors">
            {authors.map((id) => {
              const a = authorsMeta.authors?.[id];
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
                        onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                      />
                    ) : null}
                  </span>
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
          <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <ShareButtons title={title} url={post.url} />
        </div>

        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        {post.tags?.length ? (
          <ul className="app-tags">
            {post.tags.map((tag) => (
              <li key={tag}>
                <a className="app-tags__tag" href={`/blog/tags/${encodeURIComponent(tag)}`}>{tag}</a>
              </li>
            ))}
          </ul>
        ) : null}

        <h2 className="app-post-typography__section">{authors.length > 1 ? 'About the authors' : 'About the author'}</h2>
        {authors.map((id) => (
          <AuthorBlock key={id} id={id} meta={authorsMeta} />
        ))}

        <style>{`
          /* Typography (match your Artwork/Conduct pages) */
          .app-post-typography{
            max-width:1060px;
            margin:0 auto;
            padding: clamp(16px, 2vw, 32px);
            font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
            line-height:1.65;
            color:inherit;
          }
          .app-post-typography__title{
            font-weight:800; font-size:2rem; margin:0 0 .5rem; line-height:1.2;
          }
          .app-post-typography__section{
            font-weight:800; font-size:2rem; margin:2.5rem 0 .75rem; line-height:1.25;
          }
          .app-post-typography .blog-content p{ font-size:1rem; font-weight:500; margin:0 0 1rem; }
          .app-post-typography .blog-content h2{ font-weight:800; font-size:2rem; margin:2.5rem 0 .75rem; }
          .app-post-typography .blog-content h3{ font-weight:800; font-size:1.5rem; margin:2rem 0 .5rem; }
          .app-post-typography .blog-content h4{ font-weight:700; font-size:1.25rem; margin:1.5rem 0 .5rem; }
          .app-post-typography .blog-content ul,.app-post-typography .blog-content ol{ margin:0 0 1rem; padding-left:1.5rem; line-height:1.5; }
          .app-post-typography .blog-content ul{ list-style:disc; }
          .app-post-typography .blog-content ol{ list-style:decimal; }
          .app-post-typography .blog-content table{ width:100%; border-collapse:collapse; margin:1rem 0; }
          .app-post-typography .blog-content th,.app-post-typography .blog-content td{ padding:.5rem .75rem; border-bottom:1px solid rgba(127,127,127,.25); }
          .app-post-typography .blog-content pre{ font:.95rem/1.5 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace; overflow:auto; padding:1rem; border-radius:.5rem; }
          .app-post-typography .blog-content code{ font:.95rem ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace; }

          /* Palette like jenkins.io (only what's needed here) */
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

          /* Post header row */
          .post-attrs{ display:flex; align-items:center; gap:1rem; flex-wrap:wrap; color:var(--color--secondary); font-weight:500; }
          .app-post-page .share-buttons__container{ margin-left:auto; height:2rem; }
          .share-buttons__container > span{ color:var(--color--secondary); }

          /* Social chips (exact mechanics as jenkins.io) */
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

          /* Masked SVG so glyph = brand color */
          .app-social-icon{
            width:1.25rem; height:1.25rem; display:block; background: var(--button-color);
            -webkit-mask-image: var(--icon); mask-image: var(--icon);
            -webkit-mask-repeat: no-repeat; mask-repeat:no-repeat;
            -webkit-mask-position:center; mask-position:center;
            -webkit-mask-size:contain; mask-size:contain;
          }
        `}</style>
      </article>
    </BlogFrame>
  );
}
