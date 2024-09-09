import React from "react";
import "./Progressbar.scss";

const ProgressBar = ({ skill, level }) => {
  return (
    <div className="progress-bar">
      <span className="progress-bar__skill">{skill}</span>
      <div className="progress-bar__container">
        <div className="progress-bar__fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
