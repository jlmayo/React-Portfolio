import "./HeroImgStyles.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import IntroImg from "../assets/CoffeeAndCodingLg.jpg";

const HeroImage = () => {
  return (
    <div className="hero" id="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Jennifer Mayo</p>
        <h1>Student Developer</h1>
        <div>
          <HashLink smooth to="/#project" className="btn">
            Projects
          </HashLink>
          <HashLink smooth to="/#form" className="btn btn-light">
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
