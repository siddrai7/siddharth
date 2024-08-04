import "./Header.scss";

import React from "react";

//import { ReactComponent as Logo } from "../../assets/images/Siddharth.svg";
import namelogo from "../../assets/images/namelogo.png";
import { ReactComponent as Burger } from "../../assets/images/Burger.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header({ handleMenu }) {
  return (
    <div className="header">
      {/* <Logo className="logo" /> */}
      <img className="logo" src={namelogo} alt="" />
      {/* <Button type="primary" text="Contact Me" /> */}
      {/* <div className="header-links">
        <a
          href="https://lancehawks.com/"
          target="_blank"
          className="header-links-link"
        >
          Lancehawks
        </a>
        <Link to="/contact" className="header-links-link">
          Contact Me
        </Link>
      </div> */}
      <div className="header-phone">
        <Burger onClick={handleMenu} />
      </div>
    </div>
  );
}

export default Header;
