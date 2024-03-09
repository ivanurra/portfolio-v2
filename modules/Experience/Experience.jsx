import { useState } from "react";
import { ButtonStack } from "@components/ButtonStack";
import experienceData from "./experienceData.json";

const ExperienceEntry = ({
  startDate,
  endDate,
  company,
  jobTitle,
  website,
  description,
  techStack,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="mb-12 md:p-8">
      <div className={`md:grid grid-cols-4  `}>
        <div className="md:col-span-1">
          <p className="text-sm text-font-color-secondary">
            {startDate} - {endDate}
          </p>
        </div>

        <div className="md:col-span-3">
          <a
            href={website}
            className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <p className="mb-2 text-base ">{company}</p>
            </div>

            <div className="ml-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className={`h-4 w-4 mt-1 fill-current transition-transform ${
                  isHovered ? "-translate-y-1 translate-x-1" : ""
                }`}
              >
                <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
              </svg>
            </div>
          </a>
          <p className="mb-2 text-base text-font-color-secondary">{jobTitle}</p>
          <p className="text-sm text-font-color-secondary">{description}</p>
          <div>
            {techStack.map((stack) => (
              <ButtonStack key={stack} stack={stack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div>
      <p className="text-xl mb-4 font-bold block lg:hidden">Experience</p>
      {experienceData.map((entry, index) => (
        <ExperienceEntry key={index} {...entry} />
      ))}
    </div>
  );
};
