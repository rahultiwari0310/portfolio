#!/bin/bash
set -e

mkdir -p src/components

# Hero.jsx
cat <<'EOF' > src/components/Hero.jsx
import React from "react";
import SocialLinks from "./SocialLinks";
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero flex flex-col items-center py-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <img src="/icons/react.svg" alt="Rahul Tiwari" className="w-24 h-24 mb-4 rounded-full border-4 border-blue-400 shadow-xl" />
      <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-400">Rahul Tiwari</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-200">Front-End Engineer | React, TypeScript, Redux | 9+ Years</p>
      <SocialLinks />
      <DownloadCV />
    </motion.section>
  );
}
EOF

# SocialLinks.jsx
cat <<'EOF' > src/components/SocialLinks.jsx
import React from "react";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rahul-tiwari-b623b355/", icon: "/icons/linkedin.svg" },
  { name: "GitHub", url: "https://github.com/rahultiwari0310", icon: "/icons/github.svg" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 my-4">
      {socials.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-transform transform hover:scale-110"
        >
          <img src={icon} alt={name} width={32} height={32} />
        </a>
      ))}
    </div>
  );
}
EOF

# DownloadCV.jsx
cat <<'EOF' > src/components/DownloadCV.jsx
import React from "react";
import { motion } from "framer-motion";

export default function DownloadCV() {
  return (
    <motion.a
      href="/Rahul_Tiwari_CV.pdf"
      download="Rahul_Tiwari_CV.pdf"
      className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition mb-4 inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Download CV"
    >
      Download CV
    </motion.a>
  );
}
EOF

# TechStackGrid.jsx
cat <<'EOF' > src/components/TechStackGrid.jsx
import React from "react";
import { techStack } from "../data/techStack";
import { motion } from "framer-motion";

export default function TechStackGrid() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Tech Stack</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }
        }}
      >
        {techStack.map(tech => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={tech.icon} alt={tech.name + ' logo'} width={40} height={40} className="mb-1" />
            <span className="mt-1 text-xs text-gray-700 dark:text-gray-200">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
EOF

# Timeline.jsx
cat <<'EOF' > src/components/Timeline.jsx
import React from "react";
import { companies } from "../data/companies";
import CompanySection from "./CompanySection";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section className="mt-10 mb-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400 text-center">Work Experience</h2>
      <div className="flex flex-col gap-12">
        {companies.map((company, idx) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <CompanySection company={company} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
EOF

# CompanySection.jsx
cat <<'EOF' > src/components/CompanySection.jsx
import React, { useState } from "react";
import ProjectTabs from "./ProjectTabs";

export default function CompanySection({ company }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900">
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        <img src={company.logo} alt={company.name} className="w-14 h-14 rounded-full border-2 border-blue-400 mb-3 md:mb-0" />
        <div>
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">{company.name}</h3>
          <div className="text-md text-gray-500">{company.role}</div>
          <div className="text-xs text-gray-400 mb-2">{company.start} — {company.end}</div>
        </div>
      </div>
      <div className="mt-4">
        <ProjectTabs projects={company.projects} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
EOF

# ProjectTabs.jsx
cat <<'EOF' > src/components/ProjectTabs.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectTabs({ projects, activeTab, setActiveTab }) {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        {projects.map((p, idx) => (
          <button
            key={p.name}
            className={
              "px-4 py-1 rounded-full text-sm font-medium transition " +
              (activeTab === idx
                ? "bg-blue-600 text-white"
                : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800")
            }
            onClick={() => setActiveTab(idx)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0"
          >
            <div className="mb-2 text-gray-700 dark:text-gray-200">{projects[activeTab].description}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {projects[activeTab].tech.map(tech => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-md text-xs"
                >
                  <img src={`/icons/${tech.toLowerCase().replace(/\.|\s|\+/g, "").replace("-", "").replace("2.0", "2")}.svg`} alt={tech} width={18} height={18} />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
EOF

# App.jsx
cat <<'EOF' > src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import TechStackGrid from "./components/TechStackGrid";

function App() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <TechStackGrid />
        <Timeline />
      </div>
      <footer className="text-center text-sm py-10 text-gray-400">
        © Rahul Tiwari {new Date().getFullYear()} • <a href="https://github.com/rahultiwari0310" className="underline">GitHub</a>
      </footer>
    </main>
  );
}

export default App;
EOF

echo "✅ All components created! Now move your CV PDF to public/Rahul_Tiwari_CV.pdf"
echo "Then run: npm install && npm run dev"
echo "Open http://localhost:5173 to view your animated portfolio!"
