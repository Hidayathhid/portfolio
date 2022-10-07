import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkCard from "../components/WorkCard";
import ProjectCardData from "../components/WorkCardData";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      {/* <WorkCard ProjectCardData={ProjectCardData} /> */}
      {/* <ProjectCardData/> */}
      <Work/>
      <Footer />
    </div>
  );
}

export default Project;
