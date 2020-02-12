import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Sidebar from './SidebarMenu';
import '../../styles/layout/layout.css';
import '../../styles/layout/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />

      <div id="wrapper">
        {/* <Sidebar /> */}
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
