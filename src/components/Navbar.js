import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import useHeaderSettings from "../hooks/useHeaderSettings";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { logoImage, menuItems, cta } = useHeaderSettings();

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logoImage} alt="Impactopia" style={{}} />
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
          {menuItems.map(({ label, url, external }, i) => (
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
            <div className="navbar-item">
              <Link
                className="button is-primary"
                style={{
                  background: "#e8b643ff",
                  // color: "white",
                  // background: "#5c9b67ff", // green
                  // borderColor: "#e8b643ff", // yellow
                }}
                to={cta.url}
                target={cta.external ? "_blank" : null}
                rel={cta.external ? "noopener noreferrer" : null}
              >
                {cta.label}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
