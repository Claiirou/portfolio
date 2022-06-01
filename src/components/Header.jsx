import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="navbarHome">
            <NavLink to="/" className="navbarTitle">
              HOME
            </NavLink>
          </li>
          <li className="navbarHome">
            <NavLink to="/" className="navbarTitle">
              WORK
            </NavLink>
          </li>
          <li className="navbarHome">
            <NavLink to="/about" className="navbarTitle">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
