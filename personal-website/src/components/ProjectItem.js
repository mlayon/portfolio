import React from "react";

const ProjectItem = (props) => {
  if (props.render) {
    return props.render;
  } else {
    return (
      <div className="project-item">
        Ï<div className="project-item__title">Default Title</div>
        <div className="project-item__desc">
          This is the default project description
        </div>
        <div className="project-item__tag"></div>
        <div className="portfolio-item__links"></div>
      </div>
    );
  }
};
export default ProjectItem;