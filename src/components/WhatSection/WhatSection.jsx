import "./WhatSection.scss";

import SectionHeader from "../SectionHeader/SectionHeader";
import WorkCard from "../WorkCard/WorkCard";
import { ReactComponent as Designer } from "../../assets/images/designer.svg";
import { ReactComponent as Speak } from "../../assets/images/Speak.svg";
import { ReactComponent as Transform } from "../../assets/images/Transform.svg";
import data from "../../data.json";

import React from "react";

const whatIDoImgs = [<Transform />, <Designer />, <Speak />];

function WhatSection() {
  return (
    <div className="whatSection">
      <SectionHeader title="What I Do" />
      <div className="whatSection-content">
        {data.whatIDo.map((item) => (
          <WorkCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={whatIDoImgs[item.id - 1]}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatSection;
