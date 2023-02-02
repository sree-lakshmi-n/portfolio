import "./SkillsSection.css";
import React from "react";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import js from "../../images/skills/js.png";
import sass from "../../images/skills/sass.png";
import jquery from "../../images/skills/jquery.png";
import node from "../../images/skills/node-js.png";
import react from "../../images/skills/react.png";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";

export default function SkillsSection() {
  const skills = [
    {
      icon: html,
      name: "HTML",
    },
    {
      icon: css,
      name: "CSS",
    },
    {
      icon: js,
      name: "JavaScript",
    },
    {
      icon: sass,
      name: "Sass",
    },
    {
      icon: jquery,
      name: "JQuery",
    },
    {
      icon: node,
      name: "NodeJS",
    },
    {
      icon: react,
      name: "React JS",
    },
  ];
  return (
    <section id="skills" className="section-skills container">
      <h2 className="heading-secondary title">My Skills</h2>
      <GridWrapper className="skills-wrapper">
        {skills.map((skill) => (
          <div className="skill">
            <img src={skill.icon} className="skill-icon" alt="skill icon" />
            <span className="skill-name">{skill.name} </span>
          </div>
        ))}
      </GridWrapper>
    </section>
  );
}
