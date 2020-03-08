import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { BlogContext } from '../../../utils/contexts';

const BlogSidebar = () => {
  const { allBlogPosts } = useContext(BlogContext);
  console.log(allBlogPosts);
  return (
    <nav>
      <h2>Blog Posts</h2>
      <ul>
        {allBlogPosts.map(post => (
          <li>
            <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogSidebar;
