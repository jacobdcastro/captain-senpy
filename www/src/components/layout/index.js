import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../seo';
import Sidebar from './SidebarMenu';
import '../layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />
      <Sidebar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
