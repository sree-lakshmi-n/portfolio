import "./ProjectsSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import wordsOfPower from "../../images/words-of-power.png";
import countries from "../../images/rest-countries.png";
import todo from "../../images/todoapp.png";
import ipAddress from "../../images/ip-address-tracker.png";
import nimGame from "../../images/nim-game.png";

import Projects from "../Projects/Projects";

export default function ProjectsSection() {
  const projects = [
    {
      id: 0,
      title: "Words of Power",
      description: "Words of Power",
      screenshot: wordsOfPower,
    },
    {
      id: 1,
      title: "REST Countries API with color theme switcher",
      description: "REST Countries API with color theme switcher",
      screenshot: countries,
    },
    {
      id: 2,
      title: "To Do App",
      description: "To Do App",
      screenshot: todo,
    },
    {
      id: 3,
      title: "IP Address Tracker",
      description: "IP Address Tracker",
      screenshot: ipAddress,
    },

    {
      id: 4,
      title: "Nim Game",
      description: "Nim Game",
      screenshot: nimGame,
    },
  ];
  return (
    <section id="projects" className="section-projects container">
      <h2 className="heading-secondary title">My Projects</h2>
      <GridWrapper className="project-card grid--2-cols">
        {projects.map((project) => (
          <Projects
            key={project.id}
            pos={project.id}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
          />
        ))}
      </GridWrapper>
    </section>
  );
}
