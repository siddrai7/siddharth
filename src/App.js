import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatSection from "./components/WhatSection/WhatSection";
import NameAnimation from "./components/NameAnimation/NameAnimation";
import Experience from "./components/Experience/Experience";
import Connect from "./components/Connect/Connect";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  function animate() {
    var elements;
    var windowHeight;

    function init() {
      elements = document.querySelectorAll(".hidden");
      windowHeight = window.innerHeight;
    }

    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().y;

        if (positionFromTop <= windowHeight / 1.3) {
          if (element.classList.contains("aleft")) {
            element.classList.add("fade-in-left");
          } else if (element.classList.contains("aright")) {
            element.classList.add("fade-in-right");
          } else if (element.classList.contains("abottom")) {
            element.classList.add("fade-in-bottom");
          } else element.classList.add("fade-in-element");
          element.classList.remove("hidden");
        }
      }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);

    init();
    checkPosition();
  }

  useEffect(() => {
    animate();
    setTimeout(() => {
      setShowAnimation(false);
    }, 6500);
  }, []);

  return (
    <div className="App">
      {showAnimation && <NameAnimation />}
      <Profile />
      {/* <Header />
      <Hero /> */}
      <WhatSection />
      <Experience />
      <Connect />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
