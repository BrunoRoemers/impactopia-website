import * as React from "react";
import { Link } from "gatsby";

import useFooterSettings from "../hooks/useFooterSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const supportedIcons = {
  twitter: {
    tooltip: "Twitter",
    icon: faTwitter,
  },
  youtube: {
    tooltip: "YouTube",
    icon: faYoutube,
  },
  telegram: {
    tooltip: "Join our public Telegram Group",
    icon: faTelegram,
  },
  whatsapp: {
    tooltip: "Join our public WhatsApp Group",
    icon: faWhatsapp,
  },
  linkedin: {
    tooltip: "LinkedIn",
    icon: faLinkedinIn,
  },
};

const Footer = () => {
  const { logoImage, leftMenuItems, rightMenuItems, icons } =
    useFooterSettings();

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="content has-text-centered"
          style={{
            background: "white",
            borderRadius: "50%",
          }}
        >
          <img
            src={logoImage}
            alt="Impactopia"
            style={{
              width: "10em",
              height: "10em",
              padding: "10px",
              display: "block",
            }}
          />
        </div>
      </div>
      <div className="content has-text-centered has-text-white-ter">
        <div className="container has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  {leftMenuItems.map(({ label, url, external }, i) => (
                    <li key={label}>
                      <Link
                        to={url}
                        className="navbar-item"
                        target={external ? "_blank" : null}
                        rel={external ? "noopener noreferrer" : null}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  {rightMenuItems.map(({ label, url, external }, i) => (
                    <li key={label}>
                      <Link
                        to={url}
                        className="navbar-item"
                        target={external ? "_blank" : null}
                        rel={external ? "noopener noreferrer" : null}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <div style={{ display: "flex", justifyContent: "center" }}>
                {icons
                  .filter(({ id }) => supportedIcons.hasOwnProperty(id))
                  .map((icon) => ({ ...icon, ...supportedIcons[icon.id] }))
                  .map(({ id, url, external, tooltip, icon }, i) => (
                    <Link
                      key={id}
                      to={url}
                      title={tooltip}
                      target={external ? "_blank" : null}
                      rel={external ? "noopener noreferrer" : null}
                      style={{
                        color: "black",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        padding: "0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
