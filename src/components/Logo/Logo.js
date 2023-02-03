import React from "react";
import "./Logo.css";
import logo from "../../images/logo.png";

export default function Logo() {
  return (
    <a href="#top" className="logo-wrapper" smooth>
      <img src={logo} alt="company logo" className="logo" />
    </a>
  );
}
