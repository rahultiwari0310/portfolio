import React from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import TechStackGrid from "./components/TechStackGrid";

function App() {
  return (
    <main className="bg-cream min-h-screen text-charcoal">
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <TechStackGrid />
        <Timeline />
      </div>
      <footer className="text-center text-xs py-10 text-charcoal/50 bg-cream border-t bordercream">
        © Rahul Tiwari {new Date().getFullYear()} • <a href="https://github.com/rahultiwari0310" className="underline">GitHub</a>
      </footer>
    </main>
  );
}
export default App;
