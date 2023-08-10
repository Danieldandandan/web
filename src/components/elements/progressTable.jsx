// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import MyProgressBar from "./myProgressBar";
import { getUnValuedSkills, getSkills, getAboutMe } from "../../services/skillService";

const ProgressTable = () => {
  const [data, setData] = useState(getUnValuedSkills());
  const [alignment, setAlignment] = useState("All");
  const [onShowed, setOnShowed] = useState(data);
  const [met, setMet] = useState(false);

  function progressBarAnmi() {
    const prevHeight = document.getElementById("about").getBoundingClientRect().top;
    const height = window.innerHeight;
    if (prevHeight < height / 2) {
      const skills = getSkills();
      setOnShowed(skills);
      setData(skills);
      setMet(true);
      window.removeEventListener("scroll", progressBarAnmi);
    }
  }

  useEffect(() => {
    if (!met) {
      window.addEventListener("scroll", progressBarAnmi);
    }
  });

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment === "All") setOnShowed(data);
    else {
      const newData = data.filter((data) => data.stack === newAlignment);
      setOnShowed(newData);
    }
    console.log("to", newAlignment);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Front End">Front End</ToggleButton>
          <ToggleButton value="Back End">Back End</ToggleButton>
          <ToggleButton value="Cloud">Cloud</ToggleButton>
          <ToggleButton value="DataBase">DataBase</ToggleButton>
          <ToggleButton value="Programming Language">Language</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {onShowed.map((skill) => {
        return <MyProgressBar skill={skill} />;
      })}
    </React.Fragment>
  );
};

export default ProgressTable;
