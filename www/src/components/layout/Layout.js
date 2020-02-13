import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './Header';
import Sidebar from './SidebarMenu';
import '../../styles/layout/layout.css';
import '../../styles/layout/layout.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SEO title="Home" />
      <div id="wrapper">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
