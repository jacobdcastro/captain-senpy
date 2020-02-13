import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../styles/layout/sidebar-menu.scss';

const SidebarMenu = ({ isOpen, setIsOpen }) => {
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
    <header id="sidebarMenu" className={isOpen ? 'isOpen' : 'isClosed'}>
      <Img
        id="sidebarLogo"
        fluid={logo.childImageSharp.fluid}
        title="Captain Senpy Logo"
        alt="heart logo"
        style={{ height: '200px', width: '200px' }}
      />
      <ul className="nav">
        <li>
          <Link activeClassName="activeLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="activeLink" to="/comics">
            Comics
          </Link>
        </li>
        <li>
          <Link activeClassName="activeLink" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link activeClassName="activeLink" to="/about">
            About
          </Link>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="https://instagram.com/pymadd/">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/pymadd/">Twitter</a>
        </li>
      </ul>
      <footer>&copy; {new Date().getFullYear()} - Alexis Maddox</footer>
    </header>
  );
};

export default SidebarMenu;
