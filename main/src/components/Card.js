import React from "react";
import "./CardStyles.css";
import Speedrunner from "../assets/Speedrunner.jpg";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-container">
      <h1 className="project-heading">project</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Speedrunner} alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="project-details">
            <p>Project summary goes here.</p>
            <div className="project-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
