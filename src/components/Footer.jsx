import React from "react";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLink";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer" id="footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />

      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date" />
        {new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
