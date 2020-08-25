import React from "react";
import logo from "../assets/Logo/InStock-Logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img alt="logo" src={logo} className="header__logo" />
      <nav className="header__nav">
        <div className="header__warehouses-btn">
          <a>Warehouses</a>
        </div>
        <div className="header__warehouses-btn">
          <a>Inventory</a>
        </div>
      </nav>
    </div>
  );
}
