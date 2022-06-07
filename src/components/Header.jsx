import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <nav>
        <ul className={menuOpen ? "navBar" : "active"}>
          <li className="navbarHome">
            <NavLink to="/" className="navbarTitle">
              HOME
            </NavLink>
          </li>
          <li className="navbarHome">
            <NavLink to="/header" className="navbarTitle">
              WORK
            </NavLink>
          </li>
          <li className="navbarHome">
            <NavLink to="/about" className="navbarTitle">
              ABOUT
            </NavLink>
          </li>
        </ul>
        <button className="buttonHome" onClick={toggleMenu}>
          <img
            src={menuOpen ? "/menu_fresh.png" : "/croix.png"}
            alt="menu"
            className="imgBtn"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
