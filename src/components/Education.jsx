import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="py-12 bg-cream"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-charcoal">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 border bordercream"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-start space-x-6">
              {/* Placeholder for logo - you can replace this with actual logo */}
              <div className="flex-shrink-0">
                <img
                  src="/icons/manit.png"
                  alt="MANIT Logo"
                  className="w-16 h-16 rounded-lg object-contain bg-white bordercream"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Maulana Azad National Institute of Technology, Bhopal
                </h3>
                <p className="text-lg text-charcoal/80 mb-1">
                  Bachelor of Technology (B.Tech)
                </p>
                <p className="text-charcoal/70 mb-3">
                  Electronics and Communication Engineering
                </p>
                <p className="text-sm text-charcoal/60">Graduated in 2016</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
