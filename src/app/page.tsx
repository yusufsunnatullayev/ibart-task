import Hero from "@/components/elements/Hero";
import MockIelts from "@/components/elements/MockIelts";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-0">
        <Hero />
        <MockIelts />
      </main>
    </div>
  );
};

export default Home;
