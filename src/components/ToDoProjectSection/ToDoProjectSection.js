import "./ToDoProjectSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import countries from "../../images/rest-countries.png";
import ipAddress from "../../images/ip-address-tracker.png";
import nayaraShopping from "../../images/nayara-shopping.png";
import bankapp from "../../images/bank-app.png";

import Projects from "../Projects/Projects";

export default function ToDoProjectSection() {
  const projects = [
     {
      id: 5,
      title: "Bank App",
      description:
        "A bank application that allows users to check their balance and transaction history, deposit and withdraw money, and transfer funds using UPI id.",
      tags: ["EmberJS", "CSS", "Scala", "Postgresql"],
      screenshot: bankapp,
      link: "https://github.com/sree-lakshmi-n/piggy-bank-app.git",
    },
    {
      id: 6,
      title: "Nayara Shopping Website",
      description:
        "A fictional online store that lets you search from a variety of categories and add items to your basket.",
      tags: ["ReactJS", "CSS", "Google Firebase", "FakeStore API"],
      screenshot: nayaraShopping,
      link: "https://github.com/sree-lakshmi-n/nayara-shopping-website.git",
    },
    {
      id: 7,
      title: "REST Countries API with color theme switcher",
      description:
        "Countries info page with functionality to search for a particular country, filter countries by region, and choice to hide or display additional information.",
      tags: ["ReactJS", "CSS", "REST Countries API"],
      screenshot: countries,
      link: "https://sree-lakshmi-n.github.io/rest-countries-api-with-color-theme-switcher",
    },

    {
      id: 8,
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
      link: "https://sree-lakshmi-n.github.io/ip-address-tracker"
    }
  ];
  return (
    <section id="projects" className="section-projects container">
      <h2 className="note title">*Note: Projects below are currently archived and not maintained. Live demos may be unavailable. Source code is available on GitHub
      </h2>
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
