import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { BlogContext } from '../../../utils/contexts';

const BlogSidebar = ({ isOpen, setIsOpen }) => {
  const data = useContext(BlogContext);
  const { file } = useStaticQuery(graphql`
    query STAR_IMG_QUERY {
      file(relativePath: { eq: "star.png" }) {
        childImageSharp {
          fixed(height: 35, width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <nav className={`sidebar-contents blog${isOpen ? ' open' : ''}`}>
      <h2>
        Captain SenPy's
        <br />
        Recent Blog Posts
      </h2>
      <ul>
        {data.allBlogPosts.map(post => (
          <li key={post._id} onClick={() => data.setCurrentBlogPost(post._id)}>
            <Link to={`/blog/${post.slug.current}`}>
              {post._id === data.current ? (
                <Img className="post-identifier" fixed={file.childImageSharp.fixed} />
              ) : (
                <div className="post-identifier" />
              )}
              <div>
                <h3>{post.title}</h3>
                <span>{post.publishedAt}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogSidebar;
