import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
// import menu from "../assets/menu.png";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const handleChangeClick = () => {
    setActive(!active);
  };
  return (
    <header>
      <nav>
        <ul>
          <li className="navbarHome">
            <NavLink to="/" className="navbarTitle" onClick={handleChangeClick}>
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
        <button className="buttonHome">
          <img src={"/menu_fresh.png"} alt="menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
