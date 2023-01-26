import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import React from "react";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
