import "./Home.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import React from "react";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import SkillsSection from "../../components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <ScrollBtn />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
