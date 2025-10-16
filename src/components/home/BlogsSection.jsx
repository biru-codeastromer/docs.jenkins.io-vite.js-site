import React, { useState, useEffect } from 'react';
import BlogCardList from './BlogCardList';
import BlogFrame from '../blog/BlogFrame';

export default function BlogsSection() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        const response = await fetch('/data/blog/index.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const allPosts = await response.json();
        
        const recent = allPosts.slice(0, 9);
        setRecentPosts(recent);
      } catch (error) {
        console.error('Error loading recent posts:', error);
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRecentPosts();
  }, []);

  if (loading) {
    return (
      <BlogFrame title="Recent Posts">
        <div className="container" style={{ padding: '4rem 0' }}>
          <div className="section">
            <h2 className="app-events__heading">Recent posts</h2>
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p>Loading recent posts...</p>
            </div>
          </div>
        </div>
      </BlogFrame>
    );
  }

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <BlogFrame title="Recent Posts">
      <div className="container" style={{ padding: '4rem 0' }}>
        <div className="section">
          <h2 className="app-events__heading">Recent posts</h2>
          <BlogCardList posts={recentPosts} />
        </div>
      </div>
    </BlogFrame>
  );
}