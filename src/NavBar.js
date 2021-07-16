import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/beer">
        Beer
      </NavLink>
      <NavLink exact to="/peanuts">
        Peanuts
      </NavLink>
      <NavLink exact to="/crackerjacks">
        Cracker Jacks
      </NavLink>
    </nav>
  );
}

export default NavBar;