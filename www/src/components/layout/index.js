import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Header from './Header';
import Sidebar from './SidebarMenu';
import '../../styles/layout/layout.css';
import '../../styles/layout/layout.scss';
import { useWindowWidth } from 'window-dimensions-hooks';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();

  return (
    <>
      <SEO title="Home" />
      <div id="wrapper">
        {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="wrapper2">
          {width >= 650 && <div className="filler" />}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
