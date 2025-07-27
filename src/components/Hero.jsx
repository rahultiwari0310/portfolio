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
        src="/rahul-photo.jpeg"
        alt="Rahul Tiwari"
        className="w-32 h-32 mb-4 rounded-full border-4 border-accent shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold mb-2 text-charcoal">Rahul Tiwari</h1>
      <p className="text-lg mb-6 text-charcoal/80">
        Front-End Engineer | React, TypeScript, Redux | 9+ Years
      </p>
      <SocialLinks />
      <DownloadCV />
    </motion.section>
  );
}
