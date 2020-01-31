import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';
import { blogPostListingTypes } from '../utils/propTypes';

const BlogPostListing = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link to={data.slug}>
        <h3>{data.title}</h3>
        <h5>
          <Moment date={data.publishedAt} />
        </h5>
      </Link>
    </div>
  );
};

BlogPostListing.propTypes = blogPostListingTypes;

export default BlogPostListing;
