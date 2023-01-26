import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import SectionsNav from "../SectionsNav/SectionsNav";

export default function Header() {
  return (
    <header className="header">
      <FlexWrapper className="nav__top flex-center-v">
        <Logo />
        <SectionsNav />
      </FlexWrapper>
    </header>
  );
}
