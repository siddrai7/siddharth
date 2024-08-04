import SectionHeader from "../SectionHeader/SectionHeader";
import "./Experience.scss";

import experience from "../../assets/images/experience.png";
import data from "../../data.json";

import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <div
      className="experience"
      style={{ backgroundImage: `url(${experience})` }}
    >
      <SectionHeader title="Experience" />
      {data.Experience.map((item) => (
        <ExperienceCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          total={item.total}
        />
      ))}
    </div>
  );
}

export default Experience;
