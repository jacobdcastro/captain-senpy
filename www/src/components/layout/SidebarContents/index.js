import React from 'react';
import PropTypes from 'prop-types';
import BlogSidebar from './BlogSidebar';
import ComicSidebar from './ComicSidebar';

const SidebarContents = props => {
  if (props.pageType === 'blog') {
    return <BlogSidebar />;
  } else if (props.pageType === 'comic') {
    return <ComicSidebar />;
  } else {
    return null;
  }
};

SidebarContents.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default SidebarContents;
