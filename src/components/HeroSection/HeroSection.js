import "./HeroSection.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import darr from "../../images/down-arrows.svg";

export default function HeroSection() {
  return (
    <section className="hero container">
      <FlexWrapper className="hero-textbox flex-center-v">
        <p>Hey, I’m Sree Lakshmi N and I love building beautiful websites</p>
        <a href="#projects" className="btn btn-hero">
          <img src={darr} alt="downward arrow" className="darr-icon" />
        </a>
      </FlexWrapper>
    </section>
  );
}
