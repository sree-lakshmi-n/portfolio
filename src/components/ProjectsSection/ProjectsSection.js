import "./ProjectsSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import wordsOfPower from "../../images/words-of-power.png";
import countries from "../../images/rest-countries.png";
import todo from "../../images/todoapp.png";
import ipAddress from "../../images/ip-address-tracker.png";
import nimGame from "../../images/nim-game.png";
import nayaraShopping from "../../images/nayara-shopping.png";
import wordle from "../../images/wordle.png";

import Projects from "../Projects/Projects";

export default function ProjectsSection() {
  const projects = [
    {
      id: 0,
      title: "Nayara Shopping Website",
      description:
        "A fictional online store that lets you search from a variety of categories and add items to your basket.",
      tags: ["ReactJS", "CSS", "Google Firebase", "FakeStore API"],
      screenshot: nayaraShopping,
      link: "https://nayara-shopping.web.app/",
    },
    {
      id: 1,
      title: "Words of Power",
      description:
        "Words of Power is a fun and challenging game that tests your ability to match definitions to words. Inspired from the popular vocabulary game, 'Knoword'.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: wordsOfPower,
      link: "https://words-of-power.sree112.repl.co",
    },
    {
      id: 2,
      title: "To Do App",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
      tags: ["HTML", "CSS", "JavaScript", "JQuery", "Responsive"],
      screenshot: todo,
      link: "https://to-do-list.sree112.repl.co",
    },
    {
      id: 3,
      title: "Wordle Game",
      description:
        "Inspired by the popular word game Wordle, it gives you 6 chances to guess the 5 letter word. ",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: wordle,
      link: "https://sree-lakshmi-n.github.io/wordle/",
    },
    {
      id: 4,
      title: "REST Countries API with color theme switcher",
      description:
        "Countries info page with functionality to search for a particular country, filter countries by region, and choice to hide or display additional information.",
      tags: ["ReactJS", "CSS", "REST Countries API"],
      screenshot: countries,
      link: "https://sree-lakshmi-n.github.io/rest-countries-api-with-color-theme-switcher",
    },

    {
      id: 5,
      title: "IP Address Tracker",
      description:
        " IP Address tracking app using the IP Geolocation API to get the IP Address locations and LeafletJS API to generate the map.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "IP Geolocation API by IPify",
        "LeafletJS API",
        "Responsive",
      ],
      screenshot: ipAddress,
      link: "https://sree-lakshmi-n.github.io/ip-address-tracker",
    },

    {
      id: 6,
      title: "Nim Game",
      description:
        "Nim is a mathematical game of strategy in which two players take turns removing matchsticks from distinct rows. ",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      screenshot: nimGame,
      link: "https://sree-lakshmi-n.github.io/nim-game",
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
            link={project.link}
            tags={project.tags}
          />
        ))}
      </GridWrapper>
    </section>
  );
}
