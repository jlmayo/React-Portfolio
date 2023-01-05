import React from "react";
import "./CardStyles.css";
import Card from "./Card";
import ProjectCardData from "./ProjectCardData";

const ProjectCard = () => {
  return (
    <div className="card-container">
      <h1 className="project-heading" id="project">
        PROJECTS
      </h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
