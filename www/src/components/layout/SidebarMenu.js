import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowWidth } from 'window-dimensions-hooks';
import '../../styles/layout/sidebar-menu.scss';

const SidebarMenu = ({ isOpen, setIsOpen }) => {
  const width = useWindowWidth();
  const { logo } = useStaticQuery(graphql`
    query LOGO_QUERY {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <header id="sidebar-menu" className={isOpen && 'open'}>
      <button
        className={`hamburger hamburger--arrow${isOpen ? ' is-active' : ''}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="logo-section">
        <Img
          id="sidebar-logo"
          fluid={logo.childImageSharp.fluid}
          title="Captain Senpy Logo"
          alt="heart logo, @captainsenpy"
          style={{ height: '200px', width: '200px' }}
        />
        <h1 className="menu-title">Captain SenPy</h1>
      </div>

      <div className="link-section">
        <nav>
          <ul>
            <li>
              <Link activeClassName="active-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active-link" to="/comics">
                Comics
              </Link>
            </li>
            <li>
              <Link activeClassName="active-link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="active-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="divider" />

        <ul className="social-links">
          <li>
            <a href="https://instagram.com/pymadd/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/pymadd/">Twitter</a>
          </li>
        </ul>
      </div>

      <footer>&copy;{new Date().getFullYear()} - Senpy Crafts</footer>
    </header>
  );
};

export default SidebarMenu;
