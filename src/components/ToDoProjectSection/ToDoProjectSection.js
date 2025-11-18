import "./ToDoProjectSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import nayaraShopping from "../../images/nayara-shopping.png";
import bankapp from "../../images/bank-app.png";

import Projects from "../Projects/Projects";

export default function ToDoProjectSection() {
  const projects = [
     {
      id: 1,
      title: "Bank App",
      description:
        "A bank application that allows users to check their balance and transaction history, deposit and withdraw money, and transfer funds using UPI id.",
      tags: ["EmberJS", "CSS", "Scala", "Postgresql"],
      screenshot: bankapp,
      link: "https://github.com/sree-lakshmi-n/piggy-bank-app.git",
    },
    {
      id: 2,
      title: "Nayara Shopping Website",
      description:
        "A fictional online store that lets you search from a variety of categories and add items to your basket.",
      tags: ["ReactJS", "CSS", "Google Firebase", "FakeStore API"],
      screenshot: nayaraShopping,
      link: "https://github.com/sree-lakshmi-n/nayara-shopping-website.git",
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
