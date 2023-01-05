import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import ProjectCard from "../components/ProjectCard";
import Form from "../components/Form";
import ResumeContent from "../components/ResumeContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <AboutContent />
      <ProjectCard />
      <Form />
      <ResumeContent />
      <Footer />
    </div>
  );
};

export default Home;
