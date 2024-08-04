import Button from "../Button/Button";
import "./Hero.scss";

import React from "react";

import heroImage from "../../assets/images/heroImage.jpg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-title">
          Hey! I’m Siddharth Rai. <br /> A Freelancer, Software Engineer, Public
          Speaker and an Entrepreneur in the making.
        </div>
        <div className="hero-left-subtitle">
          Do you need a website for yourself? Need someone to manage your
          projects? Need a host for your event? You’re at the right place.
        </div>
        <div className="hero-left-buttons">
          <Button type="primary" text="Contact Me" />
          <Button type="secondary-arrow" text="View Projects" />
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-image">
          <img src={heroImage} alt="Siddharth Rai" />
        </div>
        <div className="hero-right-links">
          <a
            href="https://www.linkedin.com/in/siddharth-rai28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/sidd35070"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/sidd_htrah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
