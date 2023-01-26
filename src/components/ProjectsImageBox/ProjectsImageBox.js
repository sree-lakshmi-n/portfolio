import "./ProjectsImageBox.css";
import React from "react";

export default function ProjectsImageBox(props) {
  return (
    <div className="project-imagebox">
      <img
        src={props.screenshot}
        alt="project screenshot"
        className="project-img"
      />
    </div>
  );
}
