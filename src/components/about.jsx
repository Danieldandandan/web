import React from "react";
import { getUnValuedSkills, getSkills, getAboutMe } from "../services/skillService";
import ProgressBar from "@ramonak/react-progress-bar";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: getUnValuedSkills(),
      about_me: getAboutMe(),
      value: 0,
    };
    this.progressBarAnmi = this.progressBarAnmi.bind(this);
    this.met = false;
  }
  getLabelColor(value) {
    if (value <= 60) return "#de1616";
    if (value < 80) return "#f0d330";
    return "#24d648";
  }
  progressBarAnmi() {
    if (this.state.met) {
      window.removeEventListener("scroll", this.progressBarAnmi);
      return;
    }
    const prevHeight = document.getElementById("about").getBoundingClientRect().top;
    const height = window.innerHeight;
    if (prevHeight < height / 2) {
      this.setState({ met: true });
      this.setState({ skills: getSkills() });
    }
  }

  componentDidMount() {
    this.setState({ met: false });
    window.addEventListener("scroll", this.progressBarAnmi);
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="title-box text-center">
          <h3 className="title-a">About Me</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="skill-mf col-md-6">
              {this.state.skills.map((skill) => {
                return (
                  <div key={skill.id} style={{ border: "15px solid rgba(0, 0, 0, 0)" }}>
                    <div>
                      <span>{skill.content}</span>
                      <span className="pull-right">{skill.porcentage}</span>
                    </div>
                    <div id="progressBar">
                      <ProgressBar
                        completed={skill.value}
                        animateOnRender
                        bgColor={this.getLabelColor(skill.value)}
                        transitionTimingFunction="ease"
                        transitionDuration="6s"
                      />
                    </div>
                  </div>
                );
              })}
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
