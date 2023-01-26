import "./Hamburger.css";
import React from "react";
import hamIcon from "../../images/hamburger.svg";

export default function HamburgerIcon(props) {
  return (
    <div className={`ham-icon-wrapper ${props.className}`}>
      <img src={hamIcon} alt="hamburger icon" className="ham-icon" />
    </div>
  );
}
