import "./ProjectTextbox.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import "./ProjectTextbox.css";

export default function ProjectTextbox(props) {
  return (
    <FlexWrapper className="project-textbox">
      <p className="project-title title">{props.title}</p>
      <p className="project-description">{props.description}</p>
      <FlexWrapper className="tags-wrapper flex-center-v">
        {props.tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </FlexWrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${props.link}`}
        className="project-view-btn btn"
      >
        View project
      </a>
    </FlexWrapper>
  );
}
