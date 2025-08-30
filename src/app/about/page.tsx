"use client"

import React from "react";
import HowItWorks from "@/components/elements/HowItWorks";
import Benefits from "@/components/elements/Benefits";
import Testimonials from "@/components/elements/Testimonials";
import JoinUs from "@/components/elements/JoinUs";
import FAQ from "@/components/elements/FAQ";

const About = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HowItWorks/>
        <Benefits/>
        <Testimonials/>
        <JoinUs/>
        <FAQ/>
      </main>
    </div>
  );
};

export default About;
