import "./InputBox.scss";

import React from "react";

function InputBox({ type, placeholder }) {
  return (
    <div className="inputBox">
      {type === "textarea" ? (
        <textarea placeholder={placeholder} />
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
}

export default InputBox;
