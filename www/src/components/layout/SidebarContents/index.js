import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlogSidebar from './BlogSidebar';
import ComicSidebar from './ComicSidebar';
import ToggleButton from './ToggleButton';
import '../../../styles/layout/sidebar-contents.scss';

const SidebarContents = props => {
  const [isOpen, setIsOpen] = useState(false);
  if (props.pageType === 'blog') {
    return (
      <>
        <BlogSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    );
  } else if (props.pageType === 'comic') {
    return (
      <>
        <ComicSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    );
  } else {
    return null;
  }
};

SidebarContents.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default SidebarContents;
