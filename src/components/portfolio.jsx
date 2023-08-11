import React from "react";
import PortfolioCard from "./elements/portfolioCard";
import { getProjects } from "../services/projectService";

class Portfolio extends React.Component {
  state = {
    projects: getProjects(),
  };

  render() {
    const projects = this.state.projects;
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="title-box text-center">
          <h3 className="title-a">Portfolio</h3>
        </div>
        <div className="container">
          <div className="row">
            {projects.map((p) => (
              <PortfolioCard project={p} key={p.title} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
