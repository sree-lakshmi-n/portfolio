import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <FlexWrapper className="nav__top flex-center-v container">
        <Logo />
        <NavBar />
      </FlexWrapper>
    </header>
  );
}
