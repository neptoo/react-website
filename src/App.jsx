import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 px-16 lg:px-24">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  );
};

export default App;
