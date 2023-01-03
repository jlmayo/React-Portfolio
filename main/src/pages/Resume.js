import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import ResumeContent from "../components/ResumeContent";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="RESUME" />
      <ResumeContent />
      <Footer />
    </div>
  );
};

export default Resume;
