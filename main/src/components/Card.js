import React from "react";
import "./CardStyles.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Speedrunner Project Logo" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
