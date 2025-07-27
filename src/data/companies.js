export const companies = [
  {
    name: "Apollo.io",
    logo: "/icons/apolloio.svg",
    role: "Senior Front-End Engineer",
    start: "Dec 2023",
    end: "Present",
    projects: [
      {
        name: "Lead Filters Revamp",
        description:
          "Architected and led the complete overhaul of Apollo.io’s lead filtering system—core to how users segment and discover leads. Introduced a fully config-driven architecture that supported over 60 filters, enabling dynamic configuration and extensibility. Coordinated closely with backend teams, product managers, and QA to ensure pixel-perfect and performant UI. System-wide changes led to smoother user experience and easier filter onboarding for future updates.",
        tech: [
          "React",
          "Redux",
          "TypeScript",
          "Vite",
          "Vitest",
          "Cypress",
          "Playwright",
          "Ruby on Rails",
          "RSpec",
          "MongoDB",
          "date-fns",
        ],
      },
      {
        name: "Performance & Testing Enhancements",
        description:
          "Led platform-wide performance profiling efforts that reduced page LCP by 3 seconds by removing unused APIs, optimizing date libraries with date-fns, and introducing lazy loading strategies. Introduced comprehensive test frameworks including unit (Vitest), integration (Cypress), and E2E (Playwright), improving engineering velocity and confidence across the org.",
        tech: [
          "Vite",
          "Vitest",
          "Cypress",
          "Playwright",
          "date-fns",
          "Ruby on Rails",
          "RSpec",
          "MongoDB",
        ],
      },
    ],
  },
  {
    name: "Interface.ai",
    logo: "/icons/interfaceai.svg",
    role: "Software Engineer (SDE3)",
    start: "Jan 2023",
    end: "Dec 2023",
    projects: [
      {
        name: "Chatbot Platform & Academy",
        description:
          "Contributed to the UI layer of Interface.ai’s flagship chatbot configuration platform used by regional banks. Developed a modular content management system to allow clients to control the tone, voice, and conditional logic of chatbot workflows. Also contributed to a holiday management and working-hour configuration app, increasing chatbot adaptability for enterprise clients.",
        tech: [
          "React",
          "Redux",
          "Node.js",
          "jQuery",
          "HTML",
          "CSS",
          "AWS",
          "Kubernetes",
        ],
      },
    ],
  },
  {
    name: "Coinbase",
    logo: "/icons/coinbase.svg",
    role: "Front-End Engineer",
    start: "Sep 2021",
    end: "Jan 2023",
    projects: [
      {
        name: "Split Test Portal",
        description:
          "Designed and implemented an internal A/B experimentation management tool from scratch. Enabled experiment creation, metric tracking, and status monitoring across the data platform. Migrated from JavaScript to TypeScript, improving type safety and reducing bugs. Enhanced test coverage from 5% to 80%.",
        tech: ["React", "Redux", "TypeScript", "ReactVis"],
      },
      {
        name: "Data Lineage Visualization",
        description:
          "Visualized lineage of 50,000+ BigQuery tables and their interdependencies using React Flow. Built efficient rendering logic for graph traversal, zoom/pan performance, and edge handling. Used custom API backends written in Node.js and Golang to provide performant data to frontend.",
        tech: [
          "React",
          "Redux",
          "TypeScript",
          "React Flow",
          "Node.js",
          "Golang",
        ],
      },
    ],
  },
  {
    name: "Myntra Designs Pvt. Ltd.",
    logo: "/icons/myntra.jpg",
    role: "Senior Software Engineer / Software Engineer",
    start: "Feb 2018",
    end: "Oct 2021",
    projects: [
      {
        name: "Seller Registration Revamp",
        description:
          "Led a team of 5 engineers to completely rebuild the seller onboarding flow from scratch. Designed the system’s architecture including form schema, validation, API contracts, and service integrations. Integrated multiple third-party APIs (GST, Aadhaar, PAN, bank verification, e-sign) to enable seamless verification. Cut seller onboarding turnaround from 45 days to 15.",
        tech: [
          "React",
          "Redux",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Elasticsearch",
          "Redis",
          "RabbitMQ",
          "New Relic",
          "Sentry",
        ],
      },
      {
        name: "GodMode (Admin Impersonation)",
        description:
          "Built an internal administrative interface allowing authorized admins to impersonate any seller account to troubleshoot and debug. System included full audit logs and scoped permissioning, integrated across all seller-facing apps.",
        tech: ["React", "Redux", "TypeScript", "Node.js"],
      },
      {
        name: "Slot Booking System (Inward Assist)",
        description:
          "Developed warehouse capacity planning tool to allow sellers to pre-book slots for dispatching goods. Integrated it with seller portal and real-time inventory feeds.",
        tech: ["React", "Redux", "TypeScript", "Node.js"],
      },
      {
        name: "OAuth 2.0 Library",
        description:
          "Created reusable OAuth 2.0 authentication layer for all Myntra apps, published as internal NPM package, allowing seamless single sign-on for developers and partners.",
        tech: ["Node.js", "NPM", "OAuth 2.0"],
      },
    ],
  },
  {
    name: "Avizva Solutions Pvt. Ltd.",
    logo: "/icons/avizva.svg",
    role: "Associate Front-End Engineer",
    start: "Jul 2016",
    end: "Feb 2018",
    projects: [
      {
        name: "Group Insurance Portal",
        description:
          "Built front-end for a US-based group insurance product, allowing users to buy health plans, top-up, add dependents, and submit claims. Delivered reusable UI components using React and Redux.",
        tech: ["React", "Redux", "HighCharts", "SASS"],
      },
      {
        name: "Agent Website Builder",
        description:
          "Created a drag-and-drop builder for insurance agents to create custom microsites. Enabled templated themes, real-time preview, and hosted deployment.",
        tech: ["BackboneJS", "jQuery", "JavaScript"],
      },
    ],
  },
];
