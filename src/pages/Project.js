import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Some of my best work." />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
