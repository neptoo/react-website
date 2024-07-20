import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Workflow from "./components/Workflow";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 px-16 lg:px-24">
        <HeroSection />
        <Skills />
        <Workflow />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
