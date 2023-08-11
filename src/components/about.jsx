import React from "react";
import { getAboutMe } from "../services/skillService";
import ProgressTable from "./elements/progressTable";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: getAboutMe(),
      value: 0,
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="title-box text-center">
          <h3 className="title-a">About Me</h3>
        </div>
        <div className="container">
          <div className="row">
            <div style={{ height: "800px" }} className="skill-mf col-md-6">
              <ProgressTable />
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                {this.state.about_me.map((content) => {
                  return (
                    <p className="lead" key={content.id}>
                      {content.content}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
