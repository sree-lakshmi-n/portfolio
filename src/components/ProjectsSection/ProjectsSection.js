import "./ProjectsSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import wordsOfPower from "../../images/words-of-power.png";
import todo from "../../images/todoapp.png";
import nimGame from "../../images/nim-game.png";
import wordle from "../../images/wordle.png";

import Projects from "../Projects/Projects";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Words of Power",
      description:
        "Words of Power is a fun and challenging game that tests your ability to match definitions to words. Inspired from the popular vocabulary game, 'Knoword'.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: wordsOfPower,
      link: "https://55d8b8b6-5845-4b50-a72a-a97e3c9bb6e9-00-2zbk25keu8bzv.kirk.replit.dev/",
    },
    {
      id: 2,
      title: "Wordle Game",
      description:
        "Inspired by the popular word game Wordle, it gives you 6 chances to guess the 5 letter word. ",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: wordle,
      link: "https://sree-lakshmi-n.github.io/wordle/",
    },
    {
      id: 3,
      title: "To Do App",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
      tags: ["HTML", "CSS", "JavaScript", "JQuery", "Responsive"],
      screenshot: todo,
      link: "https://951e5a45-725d-4320-bdf8-e564b76b3cd8-00-1jvemsvdwxjce.worf.replit.dev/",
    },
    {
      id: 4,
      title: "Nim Game",
      description:
        "Nim is a mathematical game of strategy in which two players take turns removing matchsticks from distinct rows. ",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: nimGame,
      link: "https://sree-lakshmi-n.github.io/nim-game",
    }
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
            link={project.link}
            tags={project.tags}
          />
        ))}
      </GridWrapper>
    </section>
  );
}
