import React from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";

export default function NavBar() {
  const sections = [
    { name: "home" },
    { name: "projects" },
    { name: "skills" },
    { name: "contact" },
  ];
  return (
    <nav className="nav__top">
      <div className="logo-wrapper">
        <img src={logo} alt="company logo" className="logo" />
      </div>
      <nav className="nav__sections">
        {sections.map((section, index) => (
          <li className="nav__section-item">
            <a href={`#${section.name}`}>{section.name}</a>
          </li>
        ))}
      </nav>
    </nav>
  );
}
