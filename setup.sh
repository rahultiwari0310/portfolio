#!/bin/bash
set -e

echo "==> Creating folder structure..."

mkdir -p src/components
mkdir -p src/data
mkdir -p public/icons

echo "==> Downloading SVG icons..."
cd public/icons

# Download icons for your tech stack (replace/add URLs if needed)
curl -LO https://cdn.simpleicons.org/react/61DAFB
curl -LO https://cdn.simpleicons.org/typescript/3178C6
curl -LO https://cdn.simpleicons.org/redux/764ABC
curl -LO https://cdn.simpleicons.org/node-dot-js/339933
curl -LO https://cdn.simpleicons.org/vite/646CFF
curl -LO https://cdn.simpleicons.org/vitest/6E9F18
curl -LO https://cdn.simpleicons.org/cypress/17202C
curl -LO https://cdn.simpleicons.org/playwright/2EAD33
curl -LO https://cdn.simpleicons.org/rails/CC0000
curl -LO https://cdn.simpleicons.org/rspec/8E2447
curl -LO https://cdn.simpleicons.org/mongodb/47A248
curl -LO https://cdn.simpleicons.org/awslambda/FF9900
curl -LO https://cdn.simpleicons.org/kubernetes/326CE5
curl -LO https://cdn.simpleicons.org/jquery/0769AD
curl -LO https://cdn.simpleicons.org/html5/E34F26
curl -LO https://cdn.simpleicons.org/css3/1572B6
curl -LO https://cdn.simpleicons.org/sass/CC6699
curl -LO https://cdn.simpleicons.org/elasticsearch/005571
curl -LO https://cdn.simpleicons.org/redis/DC382D
curl -LO https://cdn.simpleicons.org/rabbitmq/FF6600
curl -LO https://cdn.simpleicons.org/newrelic/008C99
curl -LO https://cdn.simpleicons.org/sentry/362D59
curl -LO https://cdn.simpleicons.org/highcharts/008FFB
curl -LO https://cdn.simpleicons.org/backbone-dot-js/0071B5
curl -LO https://cdn.simpleicons.org/npm/CB3837
curl -LO https://cdn.simpleicons.org/golang/00ADD8
curl -LO https://cdn.simpleicons.org/github/181717
curl -LO https://cdn.simpleicons.org/linkedin/0A66C2

# Some icons don't exist in SimpleIcons; you may need to add them manually:
# - date-fns, React Flow, ReactVis, Velocity.js, OAuth 2.0
# Use project or brand SVGs for those (or I can help you source later!)

cd ../../

echo "==> Creating config files..."

# package.json
cat <<EOF > package.json
{
  "name": "rahul-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.7",
    "vite": "^4.4.9"
  }
}
EOF

# vite.config.js
cat <<EOF > vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

# tailwind.config.js
cat <<EOF > tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# postcss.config.js
cat <<EOF > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# index.html
cat <<EOF > index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Rahul Tiwari | Portfolio</title>
    <link rel="icon" type="image/svg+xml" href="/icons/react.svg" />
  </head>
  <body class="bg-gray-50 dark:bg-gray-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# src/main.jsx
cat <<EOF > src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# src/index.css
cat <<EOF > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth animations everywhere */
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
EOF

# src/data/companies.js
cat <<EOF > src/data/companies.js
// (paste your companies.js content from previous message here)
EOF

# src/data/techStack.js
cat <<EOF > src/data/techStack.js
// (paste your techStack.js content from previous message here)
EOF

echo "==> Now add the rest of your React components in src/components/"
echo "==> Add your CV PDF as public/Rahul_Tiwari_CV.pdf"
echo "==> Run: npm install && npm run dev"
echo "==> Done!"


