import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import useHeaderSettings from "../hooks/useHeaderSettings";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const headerSettings = useHeaderSettings()

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={headerSettings.logo_image} alt="Impactopia" style={{}} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          {headerSettings.menu_items.map(({ label, url, external }, i) => (
            <li key={i} className="navbar-item" style={{ padding: "0px" }}>
              <Link
                className="navbar-item"
                to={url}
                target={external ? "_blank" : null}
                rel={external ? "noopener noreferrer" : null}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
