import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
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
          <img src={"/menu_fresh.png"} alt="menu" className="imgBtn" />
        </button>
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto md:h-[35px] ${
            menuOpen ? "h-[150px]" : "h-0"
          } overflow-hidden transition-all`}
        ></div>
      </nav>
    </header>
  );
};

export default Header;
