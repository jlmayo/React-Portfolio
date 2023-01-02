import { Link } from "react-router-dom";
import "./AboutStyles.css";
import Avatar from "../assets/Avatar.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hi. I'm Jen.</h1>
        <p>
          After many tech side projects over the years, I finally took the
          plunge and enrolled in a full-stack web development bootcamp.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-avatar">
            <img src={Avatar} className="avatar-pic" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
