import "./Header.scss";

import React from "react";

//import { ReactComponent as Logo } from "../../assets/images/Siddharth.svg";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";

function Header() {
  return (
    <header>
      {/* <Logo className="logo" /> */}
      <img className="logo" src={logo} alt="" />
      <Button type="primary" text="Contact Me" />
    </header>
  );
}

export default Header;
