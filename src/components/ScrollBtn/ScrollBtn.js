import "./ScrollBtn.css";
import uparr from "../../images/up-arrows.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import React, { useState } from "react";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <BrowserRouter>
      <Link
        to="#home"
        className=" btn-scroll"
        style={{ display: visible ? "inline-block" : "none" }}
        smooth
      >
        <img src={uparr} alt="downward arrow" className="darr-icon" />
      </Link>
    </BrowserRouter>
  );
}
