import React from 'react';
import PropTypes from 'prop-types';

import SEO from './seo';
import Header from './Header';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />
      <Header siteTitle="Captain Senpy" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
