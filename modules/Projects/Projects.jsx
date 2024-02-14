import { useState } from "react";
import Image from "next/image";
import { ButtonStack } from "../../components";
import projectData from "./projectsData.json";

const Project = ({
  imgSrc,
  imgWidth,
  imgHeight,
  projectLink,
  projectName,
  projectDescription,
  stacks,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="mb-20 md:p-8">
      <div className={`md:grid grid-cols-4`}>
        <div className="md:col-span-1 mb-4 pr-3">
          <Image
            src={imgSrc}
            alt={`Picture of ${projectName}`}
            width={imgWidth}
            height={imgHeight}
          />
        </div>

        <div className="md:col-span-3">
          <a
            href={projectLink}
            className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <p className="mb-2 text-base ">{projectName}</p>
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

          <p className="text-sm text-font-color-secondary">
            {projectDescription}
          </p>
          <div>
            {stacks.map((stack, index) => (
              <ButtonStack key={index} stack={stack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div>
      <p className="text-xl mb-5 font-bold block lg:hidden">Projects</p>
      {Object.values(projectData).map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
