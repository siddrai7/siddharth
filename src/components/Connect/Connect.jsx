import ContactCard from "../ContactCard/ContactCard";
import "./Connect.scss";

import React from "react";

import { ReactComponent as Message } from "../../assets/images/message.svg";

function Connect() {
  return (
    <div className="connect">
      <div className="connect-want">Want to discuss something?</div>
      <div className="connect-title">Let's connect</div>
      <div className="connect-email">EMAIL </div>
      <a className="connect-add" href="mailto:contact@lancehawks.com">
        contact@lancehawks.com
      </a>
      <a className="connect-add" href="mailto:contactsiddrai@gmail.com">
        contactsiddrai@gmail.com
      </a>

      <div className="connect-email">SOCIALS </div>
      <div className="connect-socials">
        <a
          className="connect-add"
          href="https://www.linkedin.com/in/siddharth-rai28/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="connect-add"
          href="https://wa.me/9915697333"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
      <div className="connect-email">For business, please visit - </div>
      <a className="connect-add" target="_blank" href="https://lancehawks.com">
        Lancehawks
      </a>
    </div>
  );
}

export default Connect;
