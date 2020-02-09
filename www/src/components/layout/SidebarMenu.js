import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const SidebarMenu = () => {
  const { file } = useStaticQuery(graphql`
    query LOGO_QUERY {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div id="sidebarMenu">
      <Img
        id="sidebarLogo"
        fluid={file.childImageSharp.fluid}
        title="Captain Senpy Logo"
        alt="heart logo"
        style={{ height: '300px', width: '300px' }}
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
    </div>
  );
};

export default SidebarMenu;
