import React from "react";
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <h1>Portfolio</h1>
      </NavLink>
      <ul className="nav-menu">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/project">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
