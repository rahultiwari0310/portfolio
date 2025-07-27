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
