import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Redirect } from '@reach/router';
import BlockContent from '../components/block-content';
import Layout from '../components/layout';
import SidebarContents from '../components/layout/SidebarContents';
import { BlogContext } from '../utils/contexts';
import '../styles/blog/blog-page.scss';

const BlogPage = ({ data }) => {
  const contextData = useContext(BlogContext);
  const pageData = data.sanityBlogPage;

  const recentBlogPost = contextData.allBlogPosts.find(post => post._id === contextData.current);
  // console.log(contextData);

  // const redirectToContext = () => <Redirect to={`/en`} />;

  return (
    <Layout>
      <div id="blogPageContent">
        <div className="blogPostContent">
          <h1>{recentBlogPost.title}</h1>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
          <BlockContent blocks={recentBlogPost._rawBody} />
        </div>
        <SidebarContents pageType="blog" />
      </div>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const BLOG_PAGE_QUERY = graphql`
  query BLOG_PAGE_QUERY {
    sanityBlogPage {
      _id
      title
      _rawMainImage
      tags
      _rawDescription
    }
  }
`;
