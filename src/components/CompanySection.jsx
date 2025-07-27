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
