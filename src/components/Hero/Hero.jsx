import Button from "../Button/Button";
import "./Hero.scss";

import React, { forwardRef, useRef } from "react";

import heroImage from "../../assets/images/heroImage.png";

import linkedIn from "../../assets/images/linkedIn.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";

import Header from "../Header/Header";
import { AnimatePresence, motion } from "framer-motion";

const Hero = forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="hero-left">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          viewport={{ once: true }}
          className="hero-left-title"
        >
          Hey! I’m
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="hero-left-title-name"
        >
          {" "}
          Siddharth Rai.{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="hero-left-title"
        >
          Founder of Lancehawks, a passionate Software Engineer, an experienced
          project manager and a tech enthusiast.
        </motion.div>
        {/* <div className="hero-left-subtitle">
          Do you need a website for yourself? Need someone to manage your
          projects? Need a host for your event? You’re at the right place.
        </div> */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          viewport={{ once: true }}
          className="hero-left-buttons"
        >
          {/* <Button type="primary" text="Contact Me" /> */}
          <Button
            type="secondary-arrow"
            text="Lancehawks"
            url="https://lancehawks.com"
          />
        </motion.div>
      </div>
      <div className="hero-right">
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="hero-right-image"
        >
          {/* <div className="hero-right-image-bg"></div> */}
          <img src={heroImage} alt="Siddharth Rai" />
        </motion.div>
        <div className="hero-right-links">
          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/siddrai7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            href="https://wa.me/9915697333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/i.siddharthrai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
});

export default Hero;
