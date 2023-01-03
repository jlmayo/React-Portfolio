import "./ResumeStyles.css";
import React from 'react'

const ResumeContent = () => {

  function handleClick()
  {
       window.open("../assets/Resume.pdf","_blank");
  }

  return (
    <div className="resume">
      <div className="resume-left">
        <h1>Hi. I'm Jen.</h1>
        <p>Click the button to download a copy of my work history.</p>
      </div>
      <div className="resume-right">
        <div className="btn-container">
            <button onClick={handleClick} className="btn">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
