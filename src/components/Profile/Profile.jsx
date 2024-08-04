import "./Profile.scss";
import React, { useRef, useState } from "react";

import herobg from "../../assets/images/herobg.png";
import linkedIn from "../../assets/images/linkedIn.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import { ReactComponent as Cross } from "../../assets/images/Cross.svg";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";

import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const { innerWidth: width } = window;

const MenuVariant = {
  initial: { x: width, scaleX: 0 },
  animate: { x: 0, scaleX: 1, transition: { duration: 0.4 } },
  exit: { x: width, transition: { duration: 0.4 } },
};

const Profile = () => {
  const targetRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  const handleMenu = (value) => {
    setClicked(!clicked);
  };

  return (
    <div className="profile">
      <AnimatePresence>
        {clicked ? <Menu handleMenu={handleMenu} /> : ""}
      </AnimatePresence>
      <div
        className="profile-contents"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="profile-contents-header">
          <Header handleMenu={handleMenu} />
        </div>
        <div className="profile-contents-intro">
          <Intro scrollToRef={targetRef} />
        </div>
        <div className="profile-contents-hero">
          <Hero ref={targetRef} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

function Menu({ handleMenu }) {
  return (
    <motion.div
      className="menu"
      key="loader"
      variants={MenuVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="menu-contents">
        <motion.div className="menu-contents-cross" onClick={handleMenu}>
          <Cross />
        </motion.div>
        <Link to={"/"} className="menu-contents-name">
          Siddharth Rai
        </Link>
        <div className="menu-contents-links">
          <div className="menu-contents-links">
            <div className="menu-contents-links-title">
              For business, please visit
            </div>
            <a href="https://lancehawks.com/" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={handleMenu}
                className="menu-contents-links-link"
              >
                Lancehawks
              </motion.div>
            </a>
            {/* <Link to={`/contacts`}>
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={handleMenu}
                className="menu-contents-links-link"
              >
                Contact Me
              </motion.div>
            </Link> */}
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="menu-contents-header"
        >
          Siddharth
        </motion.div> */}
        {/* <div className="menu-contents-links">
          <Link to={`/Contact`}>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              viewport={{ once: true }}
              onClick={handleMenu}
              className="menu-contents-links-link"
              to="#Contact"
            >
              Contact Us
            </motion.div>
          </Link>
        </div> */}
        <div className="menu-contents-email">
          <div className="menu-contents-email-title">Email me at -</div>
          <a href="mailto:contact@lancehawks.com">
            contact@lancehawks.com
          </a>{" "}
          <br />
          <a href="mailto:contactsiddrai@gmail.com">contactsiddrai@gmail.com</a>
        </div>
        <div className="menu-contents-social">
          <div className="menu-contents-social-title">Connect with me -</div>
          <a
            href="https://www.linkedin.com/in/siddrai7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="" />
          </a>
          <a
            href="https://wa.me/9915697333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            href="https://www.instagram.com/i.siddharthrai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
