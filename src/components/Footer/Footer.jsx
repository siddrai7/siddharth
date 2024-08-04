import "./Footer.scss";

import React from "react";

import footerimg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="footer-image">
          <img src={footerimg} alt="Siddharth Rai banner" />
        </div>
        <div className="footer-links">
          <div className="footer-links-title">Other Links</div>
          <a
            className="footer-links-link"
            target="_blank"
            href="https://lancehawks.com"
          >
            Lancehawks
          </a>
          <a
            className="footer-links-link"
            target="_blank"
            href="https://github.com/sidd35070"
          >
            Github
          </a>
          <a
            className="footer-links-link"
            target="_blank"
            href="https://www.instagram.com/sidd_htrah/"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-rights">All rights reserved.</div>
    </div>
  );
};

export default Footer;
