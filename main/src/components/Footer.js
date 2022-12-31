import React from "react";
import "./FooterStyles.css";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaMobile
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Main Street</p>
              <p>Anytown, ST 12345</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaMobile
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              123.456.7890
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:jlmayo22@gmail.com">jlmayo22@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Developer</h4>
          <p>
            Jennifer Mayo is currently a student with the University of Arizona
            Coding Bootcamp. Expected completion date is January 2023.
          </p>
          <div className="social">
            <a href="https://github.com/jlmayo">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></a>
            <a href="www.linkedin.com/in/jlmayo22">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
