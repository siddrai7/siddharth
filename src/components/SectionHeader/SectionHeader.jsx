import "./SectionHeader.scss";

import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="sectionHeader hidden abottom">
      <div className="sectionHeader-title">{title}</div>
      <div className="sectionHeader-backtitle">{title}</div>
      <svg
        width="335"
        height="22"
        viewBox="0 0 335 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="11.5" x2="335" y2="11.5" stroke="white" stroke-width="3" />
        <circle cx="164" cy="11" r="11" fill="#408364" />
      </svg>
    </div>
  );
}

export default SectionHeader;
