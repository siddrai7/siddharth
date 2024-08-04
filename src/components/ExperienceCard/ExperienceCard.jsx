import "./ExperienceCard.scss";

import React from "react";

function ExperienceCard({ title, description, total, id }) {
  return (
    <div
      className={`${id % 2 === 0 ? "aleft" : "aright"} hidden experienceCard`}
    >
      <div className="experienceCard-content">
        <div className="experienceCard-content-title">{title}</div>
        <div className="experienceCard-content-description">{description}</div>
      </div>
      {total === id ? null : <hr className="experienceCard-line"></hr>}
    </div>
  );
}

export default ExperienceCard;
