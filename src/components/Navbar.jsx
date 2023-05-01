import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLink";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroad" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        {/* left this comment on purpose */}
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />

      </div>
    </nav>
  );
};

export default Navbar;
