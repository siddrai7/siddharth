import "./WorkCard.scss";

import React from "react";

function WorkCard({ title, description, image }) {
  return (
    <div className="workCard hidden abottom">
      <div className="workCard-title">{title}</div>
      <div className="workCard-description">{description}</div>
      <div className="workCard-image">{image}</div>
    </div>
  );
}

export default WorkCard;
