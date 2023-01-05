import React from "react";
import "./ResumeStyles.css";
import MyResume from "../assets/MayoResume.pdf";

const ResumeContent = () => {
  return (
    <div className="resume" id="resume">
      <h1 className="resume-heading">RESUME</h1>
      <div className="resume-left">
        <p>Click the button to download a copy of my work history.</p>
      </div>
      <div className="resume-right">
        <div className="btn-container">
          <a href={MyResume} target="_blank" rel="noreferrer">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
