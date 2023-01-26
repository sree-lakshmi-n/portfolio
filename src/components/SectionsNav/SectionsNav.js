import "./SectionsNav.css";
import React from "react";

export default function SectionsNav() {
  const sections = [
    { name: "home" },
    { name: "projects" },
    { name: "skills" },
    { name: "contact" },
  ];
  return (
    <nav className="nav__sections">
      {sections.map((section, index) => (
        <li className="nav__section-item" key={index}>
          <a href={`#${section.name}`}>{section.name}</a>
        </li>
      ))}
    </nav>
  );
}
