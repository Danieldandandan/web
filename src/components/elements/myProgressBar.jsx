import React, { Component } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function getLabelColor(value) {
  if (value < 60) return "#de1616";
  if (value < 80) return "#f0d330";
  return "#24d648";
}
const MyProgressBar = ({ skill }) => {
  return (
    <div key={skill.id} style={{ border: "15px solid rgba(0, 0, 0, 0)" }}>
      <div>
        <span>{skill.content}</span>
        <span className="pull-right">{skill.value + "%"}</span>
      </div>
      <div id="progressBar">
        <ProgressBar
          completed={skill.value}
          animateOnRender
          bgColor={getLabelColor(skill.value)}
          transitionTimingFunction="ease"
          transitionDuration="6s"
        />
      </div>
    </div>
  );
};

export default MyProgressBar;
