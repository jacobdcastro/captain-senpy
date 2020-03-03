import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';
import BlockContent from '../components/block-content';
import { blogPostListingTypes } from '../utils/propTypes';
import '../styles/blog/blog-post-listing.scss';

const BlogPostListing = props => {
  const data = props.data.node;
  const slug = '/' + data.slug.current;
  console.log(data);

  return (
    <Link to={slug}>
      <div className="blogPostListing">
        <div>
          <div>
            <h3>{data.title}</h3>
            <h4>
              Author: {data.authors.length > 0 ? data.authors[0].author.name : 'Featured Writer'}
            </h4>
            <span>
              Published: <Moment format="DD/MM/YYYY" date={data.publishedAt} />
            </span>
          </div>
          {data._rawExcerpt && <BlockContent blocks={data._rawExcerpt} />}
        </div>
      </div>
    </Link>
  );
};

BlogPostListing.propTypes = blogPostListingTypes;

export default BlogPostListing;
