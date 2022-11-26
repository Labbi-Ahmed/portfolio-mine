import React from "react";
import LinkElement from "../LinkElement/LinkElement";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Labbi Ahmed
        </a>

        <div className="nav__menu">
          <LinkElement title="Home" />
          <LinkElement title="About" />
          <LinkElement title="Skills"/>
          <LinkElement title="Servies"/>
          <LinkElement title="Portfolio"/>
          <LinkElement title="Contact" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
