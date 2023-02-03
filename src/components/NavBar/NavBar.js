import "./NavBar.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const sections = [
    { name: "home" },
    { name: "projects" },
    { name: "skills" },
    { name: "contact" },
  ];
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav className="nav__sections">
        {sections.map((section, index) => (
          <li className="nav__section-item" key={index}>
            <Link to={`#${section.name}`} smooth>
              {section.name}
            </Link>
          </li>
        ))}
      </nav>
    </BrowserRouter>
  );
}
