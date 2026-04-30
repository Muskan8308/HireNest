import React from 'react'
import { DreamJob } from "../Components/LandingPage/DreamJob";
import Companies from "../Components/LandingPage/Companies";
import JobCategory from "../Components/LandingPage/JobCategory";
import Working from "../Components/LandingPage/Working";
import Testimonials from "../Components/LandingPage/Testimonials";
import Subscribe from "../Components/LandingPage/Subscribe";

const Home = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-[poppins]">
      <DreamJob/>
      <Companies/>
      <JobCategory/>
      <Working/>
      <Testimonials/>
      <Subscribe/>
    </div> 
  )
}

export default Home