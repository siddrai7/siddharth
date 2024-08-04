import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./ContactCard.scss";

import React from "react";

function ContactCard() {
  const handleSend = (e) => {
    e.preventDefault();
    console.log("Send message");
  };

  return (
    <div className="contactCard">
      <form>
        <InputBox type="text" placeholder="Full Name" />
        <InputBox type="text" placeholder="Email/Mobile" />
        <InputBox type="textarea" placeholder="How can I help?" /> <br />
        <Button type="tablet" text="Send Message" onclick={handleSend} />
      </form>
    </div>
  );
}

export default ContactCard;
