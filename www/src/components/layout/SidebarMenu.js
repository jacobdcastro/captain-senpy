import React from 'react';
import { Link } from 'gatsby';

const SidebarMenu = () => {
  return (
    <div id="sidebarMenu">
      {/* <Logo /> */}
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Comics</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
      <ul className="social-links">
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
      <footer>&copy; {new Date().getFullYear()} - Alexis Maddox</footer>
    </div>
  );
};

export default SidebarMenu;
