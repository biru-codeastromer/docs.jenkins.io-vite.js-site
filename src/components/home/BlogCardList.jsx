import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                  style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.classList.add('is-loaded');
                  }}
                  onError={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.classList.add('is-loaded');
                    }, 100);
                  }}
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
      <Link to={post.url}>
        <div className="app-card__preview">
          {post.opengraph_image ? (
            <img 
              src={post.opengraph_image} 
              loading="lazy" 
              alt={post.title} 
              style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.classList.add('is-loaded');
              }}
              onError={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.classList.add('is-loaded');
                }, 100);
              }}
            /> 
          ) : null}
        </div>
        <h5 className="app-card__title">{post.title}</h5>
        <p className="app-card__teaser">{post.summary}</p>
      </Link>
      <div className="app-card__details">
        <AuthorChips post={post} authorsMeta={authorsMeta} />
        <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </li>
  );
}

export default function BlogCardList({ posts = [] }) {
  const [authorsMeta, setAuthorsMeta] = useState({});

  useEffect(() => {
    fetch('/data/blog/authors.json')
      .then(r => r.json())
      .then(({ authors }) => setAuthorsMeta(authors || {}));
  }, []);

  useEffect(() => {
    const adjustAuthorHeights = () => {
      document.querySelectorAll(".app-card__details__authors").forEach(authors => {
        if (authors.offsetHeight > 30) {
          authors.classList.add("app-card__details__authors--compact");
        }
      });
      
      const cardsContainer = document.querySelector(".app-cards");
      if (cardsContainer) {
        cardsContainer.style.opacity = "1";
      }
    };

    const id = setTimeout(adjustAuthorHeights, 0);
    window.addEventListener('resize', adjustAuthorHeights);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', adjustAuthorHeights);
    };
  }, [posts]);

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <p style={{ color: 'var(--color--secondary)' }}>No recent posts available.</p>
      </div>
    );
  }

  return (
    <ul className="app-cards" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}>
      {posts.map((post, index) => (
        <BlogCard key={post.url || index} post={post} authorsMeta={authorsMeta} />
      ))}
    </ul>
  );
}
