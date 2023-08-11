import React from "react";

const PortfolioCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <a href={project.img} data-lightbox="gallery-vmarine">
          <div className="work-img">
            <img src={project.img} alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <h2 className="w-title"> {project.title} </h2>
          <div className="w-more">
            {project.skills.map((skill) => (
              <span key={skill} className="w-ctegory">
                {skill}
              </span>
            ))}
            <div style={{ border: "5px solid rgba(0, 0, 0, 0)" }}></div>
          </div>
          {project.GitHub && (
            <a href={project.GitHub}>
              <i className="bi bi-github  fa-lg pr-3"></i>
            </a>
          )}
          {project.publishLink && (
            <a href={project.publishLink}>
              <i className="bi bi-globe fa-lg pr-3"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
