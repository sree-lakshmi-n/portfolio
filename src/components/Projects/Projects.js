import "./Projects.css";
import React from "react";

import ProjectsImageBox from "../ProjectsImageBox/ProjectsImageBox";
import ProjectTextbox from "../ProjectTextbox/ProjectTextbox";

const Projects = (props) => {
  return (
    <>
      {props.pos % 2 === 0 && (
        <>
          <ProjectsImageBox screenshot={props.screenshot} />
          <ProjectTextbox
            title={props.title}
            description={props.description}
            link={props.link}
            tags={props.tags}
          />
        </>
      )}
      {props.pos % 2 !== 0 && (
        <>
          <ProjectTextbox
            title={props.title}
            description={props.description}
            link={props.link}
            tags={props.tags}
          />
          <ProjectsImageBox screenshot={props.screenshot} />
        </>
      )}
    </>
  );
};

export default Projects;
