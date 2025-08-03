import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "../data/techStack";

// Helper function to find icon path for a tech name
const getTechIcon = (techName) => {
  const tech = techStack.find((t) => t.name === techName);
  return tech ? tech.icon : null;
};

export default function ProjectTabs({ projects, activeTab, setActiveTab }) {
  return (
    <div>
      <div className="flex gap-2 mb-2 overflow-x-auto">
        {projects.map((p, idx) => (
          <button
            key={p.name}
            className={
              "px-4 py-1 rounded-full text-sm font-medium transition whitespace-nowrap flex-shrink-0 " +
              (activeTab === idx
                ? "bg-tan text-charcoal border bordercream"
                : "bg-cream text-charcoal/70 hover:bg-tan border bordercream")
            }
            onClick={() => setActiveTab(idx)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-2 text-charcoal/90">
              {projects[activeTab].description}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {projects[activeTab].tech.map((tech) => {
                const iconPath = getTechIcon(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 bg-chip text-charcoal px-2 py-1 rounded-md text-xs"
                  >
                    {iconPath && (
                      <img src={iconPath} alt={tech} width={18} height={18} />
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
