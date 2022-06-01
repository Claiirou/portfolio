import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

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
