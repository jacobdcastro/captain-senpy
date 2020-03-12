import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { BlogContext } from '../../../utils/contexts';

const BlogSidebar = () => {
  const data = useContext(BlogContext);

  return (
    <nav className="sidebar-contents blog">
      <h3>Recent Blog Posts</h3>
      <ul>
        {data.allBlogPosts.map(post => (
          <li key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h4>{post.title}</h4>
              <span>{post.publishedAt}</span>
            </Link>
          </li>
        ))}
        {data.allBlogPosts.map(post => (
          <li key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h4>{post.title}</h4>
              <span>{post.publishedAt}</span>
            </Link>
          </li>
        ))}
        {data.allBlogPosts.map(post => (
          <li key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h4>{post.title}</h4>
              <span>{post.publishedAt}</span>
            </Link>
          </li>
        ))}
        {data.allBlogPosts.map(post => (
          <li key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <h4>{post.title}</h4>
              <span>{post.publishedAt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogSidebar;
