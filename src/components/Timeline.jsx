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
