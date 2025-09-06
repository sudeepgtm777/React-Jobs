import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListing from "../components/JobsListing";
import ViweAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero title="Hero" subtitle="The place is awesome" />
      <HomeCards />
      <JobsListing />
      <ViweAllJobs />
    </>
  );
};

export default Homepage;
