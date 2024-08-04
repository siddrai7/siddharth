import "./Button.scss";
import React from "react";

function Button({ type, text, onclick, url }) {
  const handleClick = () => {
    if (onclick) {
      onclick();
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={`button ${type}-button`}>
        {type === "secondary-arrow" ? (
          <div className="button-text">
            {text} <span className="button-arrow">&#8594;</span>
          </div>
        ) : (
          <div className="button-text">{text}</div>
        )}
      </button>
    </div>
  );
}

export default Button;
