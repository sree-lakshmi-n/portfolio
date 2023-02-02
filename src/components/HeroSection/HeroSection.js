import "./HeroSection.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import darr from "../../images/down-arrows.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <BrowserRouter>
      <section className="hero container">
        <FlexWrapper className="hero-textbox flex-center-v">
          <p className="title">
            Hey, I’m Sree Lakshmi N and I love building beautiful websites
          </p>
          <Link to="#skills" className=" btn-hero" smooth>
            <img src={darr} alt="downward arrow" className="darr-icon" />
          </Link>
        </FlexWrapper>
      </section>
    </BrowserRouter>
  );
}
