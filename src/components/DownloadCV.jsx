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
