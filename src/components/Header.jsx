import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="menuNav">
        <ul className={menuOpen ? "navBar" : "active"}>
          <li className="navbarHome">
            <Link to="/" className="navbarTitle" onClick={toggleMenu}>
              HOME
            </Link>
          </li>
          <li className="navbarHome">
            <Link to="/work" className="navbarTitle" onClick={toggleMenu}>
              WORK
            </Link>
          </li>
          <li className="navbarHome">
            <Link to="/about" className="navbarTitle" onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
        </ul>
        <button className="buttonHome" onClick={toggleMenu}>
          <img
            src={menuOpen ? "/menu_fresh.png" : "/croix.png"}
            alt="menu"
            className="imgBtn"
          />
        </button>
      </div>

      <button className="buttonHome" onClick={toggleMenu}>
        <img
          src={menuOpen ? "/menu_fresh.png" : "/croix.png"}
          alt="menu"
          className="imgBtn"
        />
      </button>
    </header>
  );
};

export default Header;
