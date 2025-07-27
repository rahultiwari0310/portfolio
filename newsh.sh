#!/bin/bash
set -e

echo "Updating Tailwind config for light/cream palette..."

cat <<'EOF' > tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6F0',
        tan: '#FFF4E3',
        white: '#FFFFFF',
        bordercream: '#F3EDE7',
        accent: '#FFB96A',
        accenthover: '#FFCB98',
        charcoal: '#252422',
        chip: '#F7E5D8',
      }
    }
  },
  plugins: [],
}
EOF

echo "Updating major components to use new light/cream colors..."

# Update App.jsx
cat <<'EOF' > src/App.jsx
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
EOF

# Update Hero.jsx
cat <<'EOF' > src/components/Hero.jsx
import React from "react";
import SocialLinks from "./SocialLinks";
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col items-center py-12 bg-cream"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <img
        src="/rahul-photo.jpg"
        alt="Rahul Tiwari"
        className="w-32 h-32 mb-4 rounded-full border-4 border-accent shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold mb-2 text-charcoal">Rahul Tiwari</h1>
      <p className="text-lg mb-6 text-charcoal/80">Front-End Engineer | React, TypeScript, Redux | 9+ Years</p>
      <SocialLinks />
      <DownloadCV />
    </motion.section>
  );
}
EOF

# Update DownloadCV.jsx
cat <<'EOF' > src/components/DownloadCV.jsx
import React from "react";
import { motion } from "framer-motion";

export default function DownloadCV() {
  return (
    <motion.a
      href="/Rahul_Tiwari_CV.pdf"
      download="Rahul_Tiwari_CV.pdf"
      className="bg-accent text-charcoal px-4 py-2 rounded-xl shadow hover:bg-accenthover transition mb-4 inline-block border bordercream"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Download CV"
    >
      Download CV
    </motion.a>
  );
}
EOF

# Update CompanySection.jsx (cards)
cat <<'EOF' > src/components/CompanySection.jsx
import React, { useState } from "react";
import ProjectTabs from "./ProjectTabs";

export default function CompanySection({ company }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 border bordercream">
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        <img src={company.logo} alt={company.name} className="w-14 h-14 rounded-full border-2 border-accent mb-3 md:mb-0 bg-white" />
        <div>
          <h3 className="text-xl font-bold text-charcoal">{company.name}</h3>
          <div className="text-md text-charcoal/80">{company.role}</div>
          <div className="text-xs text-charcoal/40 mb-2">{company.start} — {company.end}</div>
        </div>
      </div>
      <div className="mt-4">
        <ProjectTabs projects={company.projects} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
EOF

# Update ProjectTabs.jsx (tabs/chips)
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
                ? "bg-tan text-charcoal border bordercream"
                : "bg-cream text-charcoal/70 hover:bg-tan border bordercream")
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
            <div className="mb-2 text-charcoal/90">{projects[activeTab].description}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {projects[activeTab].tech.map(tech => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 bg-chip text-charcoal px-2 py-1 rounded-md text-xs"
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

# Update Timeline.jsx (section bg)
cat <<'EOF' > src/components/Timeline.jsx
import React from "react";
import { companies } from "../data/companies";
import CompanySection from "./CompanySection";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section className="mt-10 mb-20 max-w-4xl mx-auto bg-tan rounded-2xl p-4">
      <h2 className="text-3xl font-bold mb-8 text-charcoal text-center">Work Experience</h2>
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

# Update TechStackGrid.jsx (chips)
cat <<'EOF' > src/components/TechStackGrid.jsx
import React from "react";
import { techStack } from "../data/techStack";
import { motion } from "framer-motion";

export default function TechStackGrid() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-charcoal">Tech Stack</h2>
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
            className="flex flex-col items-center p-2 bg-chip rounded-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={tech.icon} alt={tech.name + ' logo'} width={40} height={40} className="mb-1" />
            <span className="mt-1 text-xs text-charcoal">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
EOF

echo "✅ Theme updated! All main sections now use a light cream/tan palette."

echo "Now run: npm run dev"
echo "Your portfolio should now use a cream theme—no more harsh blues. All logos will look great!"
