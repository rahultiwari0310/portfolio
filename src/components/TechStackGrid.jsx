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
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col justify-center items-center h-24 p-2 bg-chip rounded-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={tech.icon}
              alt={tech.name + " logo"}
              width={tech.width || 40}
              height={tech.height || 40}
              className="mb-1"
            />
            <span className="mt-1 text-xs text-charcoal">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
