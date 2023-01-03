import "./ResumeStyles.css";
import React from "react";
import { Document } from 'react-pdf/dist/esm/entry.webpack5'

const ResumeContent = () => {
  return (
    <div className="resume">
      <div className="resume-left">
        <h1>Hi. I'm Jen.</h1>
        <p>Click the button to download a copy of my work history.</p>
      </div>
      <div className="resume-right">
        <div className="btn-container">
          <a href="../assets/Resume.pdf" download>
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
