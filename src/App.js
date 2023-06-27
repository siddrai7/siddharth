import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NameAnimation from "./components/NameAnimation/NameAnimation";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 6500);
  }, []);
  return (
    <div className="App">
      {showAnimation ? <NameAnimation /> : ""}
      <Header />
      <Hero />
    </div>
  );
}

export default App;
