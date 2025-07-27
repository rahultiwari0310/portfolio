import React from "react";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import TechStackGrid from "./components/TechStackGrid";
import Education from "./components/Education";

function App() {
  return (
    <main className="bg-cream min-h-screen text-charcoal">
      {/* Navigation Header */}
      <nav className="bg-cream border-b bordercream px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold text-charcoal">
            Rahul Tiwari
          </div>
          <div className="flex gap-4">
            <Link
              to="/game"
              className="px-4 py-2 bg-tan text-charcoal rounded-lg font-medium hover:bg-accent transition-colors border bordercream text-sm"
            >
              Person Clicker Game
            </Link>
            <Link
              to="/archery"
              className="px-4 py-2 bg-tan text-charcoal rounded-lg font-medium hover:bg-accent transition-colors border bordercream text-sm"
            >
              Archery Game
            </Link>
          </div>
        </div>
      </nav>

      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <TechStackGrid />
        <Timeline />
        <Education />
      </div>
      <footer className="text-center text-xs py-10 text-charcoal/50 bg-cream border-t bordercream">
        © Rahul Tiwari {new Date().getFullYear()} •{" "}
        <a href="https://github.com/rahultiwari0310" className="underline">
          GitHub
        </a>
      </footer>
    </main>
  );
}
export default App;
