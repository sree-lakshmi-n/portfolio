import "./SocialNav.css";
import React from "react";

export default function SocialNav() {
  return (
    <nav className="social-nav">
      <ul className="social-nav-wrapper">
        <li className="social-nav-item social-nav-twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/its_sreelakshmi"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-nav-item social-nav-github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sree-lakshmi-n"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-nav-item social-nav-linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sree-lakshmi-n/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
}
