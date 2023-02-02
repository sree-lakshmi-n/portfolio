import "./ContactSection.css";
import React from "react";
import Logo from "../Logo/Logo";
import SocialNav from "../SocialNav/SocialNav";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function ContactSection() {
  return (
    <section id="contact" className="section-contact ">
      <FlexWrapper className="contact-container container flex-center-v">
        <Logo />
        <SocialNav />
      </FlexWrapper>
    </section>
  );
}
