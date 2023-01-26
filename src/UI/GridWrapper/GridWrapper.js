import "./GridWrapper.css";
import React from "react";

export default function GridWrapper(props) {
  return (
    <section className={`grid ${props.className}`}>{props.children}</section>
  );
}
