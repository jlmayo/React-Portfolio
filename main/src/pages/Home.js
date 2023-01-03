import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import ProjectCard from "../components/ProjectCard";
import Form from "../components/Form";
import ResumeContent from "../components/ResumeContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <ProjectCard />
      <Form />
      <ResumeContent />
      <Footer />
    </div>
  );
};

export default Home;
