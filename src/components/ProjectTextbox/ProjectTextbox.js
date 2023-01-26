import "./ProjectTextbox.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import "./ProjectTextbox.css";

export default function ProjectTextbox(props) {
  return (
    <FlexWrapper className="project-textbox">
      <p className="project-title title">{props.title}</p>
      <p className="project-description">{props.description}</p>
      <button className="project-view-btn btn">View project</button>
    </FlexWrapper>
  );
}
