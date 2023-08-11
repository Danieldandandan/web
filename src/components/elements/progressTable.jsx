// import React, {  } from "react";
import React, { Component, useState, useEffect } from "react";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import MyProgressBar from "./myProgressBar";
import { getUnValuedSkills, getSkills, getAboutMe } from "../../services/skillService";

const pageSize = 7;
class ProgressTable extends Component {
  constructor() {
    super();
    this.state = {
      data: getUnValuedSkills(),
      alignment: "All",
      onShowed: [],
      met: false,
      page: 0,
    };
    this.progressBarAnmi = this.progressBarAnmi.bind(this);
  }
  progressBarAnmi() {
    const prevHeight = document.getElementById("about").getBoundingClientRect().top;
    const height = window.innerHeight;
    if (prevHeight < height / 2) {
      this.setState({ met: true });
      this.setState({ data: getSkills() });
      window.removeEventListener("scroll", this.progressBarAnmi);
    }
  }

  componentDidMount() {
    if (!this.state.met) {
      window.addEventListener("scroll", this.progressBarAnmi);
    }
  }

  handleChange = (event, newAlignment) => {
    this.setState({ alignment: newAlignment });
  };

  render() {
    const { data, alignment, page } = this.state;
    const onShowed = alignment === "All" ? data : data.filter((data) => data.stack === alignment);
    const start = page * pageSize;
    const toShowed = onShowed.slice(start, start + pageSize);
    let pageNumber = Math.ceil(onShowed.length / pageSize);
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ToggleButtonGroup size="small" value={alignment} exclusive onChange={this.handleChange}>
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Front End">Front End</ToggleButton>
            <ToggleButton value="Back End">Back End</ToggleButton>
            <ToggleButton value="Cloud">Cloud</ToggleButton>
            <ToggleButton value="DataBase">DataBase</ToggleButton>
            <ToggleButton value="Programming Language">Language</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {toShowed.map((skill) => {
          return <MyProgressBar key={skill.content} skill={skill} />;
        })}
        {pageNumber > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button
              type="button"
              className="btn btn-md  btn-outline-primary"
              disabled={page === 0}
              onClick={() => this.setState({ page: page - 1 })}
            >
              Previous
            </button>
            <span style={{ width: 200, textAlign: "center" }}>{`${
              page + 1
            } out of ${pageNumber}`}</span>
            <button
              type="button"
              className="btn btn-outline-primary btn-md"
              onClick={() => this.setState({ page: page + 1 })}
              disabled={page + 1 === pageNumber}
            >
              next
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProgressTable;

// const ProgressTable = () => {
//   const [data, setData] = useState(getUnValuedSkills());
//   const [alignment, setAlignment] = useState("All");
//   const [onShowed, setOnShowed] = useState(data);
//   const [met, setMet] = useState(false);
//   const [page, setPageNumber] = useState(1);

// function progressBarAnmi() {
//   const prevHeight = document.getElementById("about").getBoundingClientRect().top;
//   const height = window.innerHeight;
//   if (prevHeight < height / 2) {
//     const skills = getSkills();
//     setOnShowed(skills);
//     setData(skills);
//     setMet(true);
//     window.removeEventListener("scroll", progressBarAnmi);
//   }
// }

//   useEffect(() => {
//     if (!met) {
//       window.addEventListener("scroll", progressBarAnmi);
//     }
//   });

// const handleChange = (event, newAlignment) => {
//   setAlignment(newAlignment);
//   if (newAlignment === "All") setOnShowed(data);
//   else {
//     const newData = data.filter((data) => data.stack === newAlignment);
//     setOnShowed(newData);
//   }
// };

//   return (
//     <React.Fragment>
// <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//   <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
//     <ToggleButton value="All">All</ToggleButton>
//     <ToggleButton value="Front End">Front End</ToggleButton>
//     <ToggleButton value="Back End">Back End</ToggleButton>
//     <ToggleButton value="Cloud">Cloud</ToggleButton>
//     <ToggleButton value="DataBase">DataBase</ToggleButton>
//     <ToggleButton value="Programming Language">Language</ToggleButton>
//   </ToggleButtonGroup>
// </div>
// {onShowed.map((skill) => {
//   return <MyProgressBar skill={skill} />;
// })}
//     </React.Fragment>
//   );
// };

// export default ProgressTable;
