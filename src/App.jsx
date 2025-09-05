import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListing from "./components/JobsListing";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="React developers"
        subtitle="The react developers are put togther to achieve the common goal."
      />
      <HomeCards />
      <JobsListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
