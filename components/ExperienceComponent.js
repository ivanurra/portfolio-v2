import { useState } from "react";
import { ButtonStack } from "./ButtonStack";

export const ExperienceComponent = ({ period, company, role, description }) => {
  const [isGridHovered, setIsGridHovered] = useState(false);
  return (
    <div className="mb-20 md:mb-40 md:p-8">
      <a
        href="https://secuoyas.com/"
        className="cursor-pointer"
        target="_blank"
      >
        <p className="text-2xl mb-4">Experience</p>
        <div
          className={`md:grid grid-cols-4 ${
            isGridHovered ? "bg-background-secondary" : ""
          } md:p-2`}
          onMouseEnter={() => setIsGridHovered(true)}
          onMouseLeave={() => setIsGridHovered(false)}
        >
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p>{period}</p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <p className={`mb-2 ${isGridHovered ? "text-green-primary" : ""}`}>
              {company}
            </p>
            <p className="mb-2">{role}</p>
            <p>{description}</p>
            <div>
              <ButtonStack stack="NextJS" />
              <ButtonStack stack="TailwindCSS" />
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="React" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
