import "./Intro.scss";

import React from "react";
import { motion } from "framer-motion";

const Intro = ({ scrollToRef }) => {
  const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="intro">
      <div className="intro-contents">
        <div className="intro-contents-main">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="intro-contents-main-text"
          >
            An Engineer
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="intro-contents-main-text"
          >
            An Entrepreneur.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
            viewport={{ once: true }}
            className="intro-contents-main-text"
          >
            A public speaker and a Freelancer.
          </motion.div>
          {/* <br /> A public speaker and a Freelancer. */}
        </div>
      </div>
      {/* <div className="scroll-down-indicator">
        <span></span>
      </div> */}

      {/* <div className="scroll-down-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div> */}

      <div className="scroll-down-indicator" onClick={handleClick}>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Intro;
