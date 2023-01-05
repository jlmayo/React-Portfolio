import React from "react";
import "./NavbarStyles.css";
import { NavHashLink } from "react-router-hash-link";

/* import { FaBars, FaTimes } from "react-icons/fa"; */

const Navbar = () => {
  /* const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

 const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }; 

  window.addEventListener("scroll", changeColor); */

  return (
    <div className="header">
      <NavHashLink to="/">
        <h1>Portfolio</h1>
      </NavHashLink>
      <ul className="nav-menu">
        <li>
          <NavHashLink
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            smooth
            to="/#hero"
          >
            Home
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            smooth
            to="/#about"
          >
            About
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            smooth
            to="/#project"
          >
            Projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            smooth
            to="/#form"
          >
            Contact
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            smooth
            to="/#resume"
          >
            Resume
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
