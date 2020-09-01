import React from "react";
import logo from "../assets/Logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/warehouses">
        <img alt="logo" src={logo} className="header__logo" />
      </Link>
      <nav className="header__nav">
        <div className="header__warehouses-btn">
          <NavLink to="/warehouses">Warehouses </NavLink>
        </div>
        <div className="header__warehouses-btn">
          <NavLink to="/inventory">Inventory </NavLink>
        </div>
      </nav>
    </div>
  );
}
