import "./Button.scss";

import React from "react";

function Button({ type, text }) {
  return (
    <div>
      <button className={`button ${type}-button`}>
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
