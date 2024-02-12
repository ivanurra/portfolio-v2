import { useState } from "react";
import Image from "next/image";
import { ButtonStack } from "../../components";
import project1Pic from "../../public/ivanurradevv2.webp";
import project2Pic from "../../public/ivanurradevv1.webp";
import project3Pic from "../../public/cinemabox.webp";
import project4Pic from "../../public/politico.webp";

const Project = ({
  imgSrc,
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
          <Image src={imgSrc} alt={`Picture of ${projectName}`} />
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
  const projectImages = {
    project1: project1Pic,
    project2: project2Pic,
    project3: project3Pic,
    project4: project4Pic,
  };

  const projectsData = [
    {
      imgSrc: projectImages.project1,
      projectLink: "https://ivanurra.dev/",
      projectName: "ivanurra.dev (v2)",
      projectDescription:
        "My new portfolio, developed with Next.js (v13) and TailwindCSS. The aim was to create a minimalist portfolio showcasing my projects and providing easy contact options.",
      stacks: ["NextJS", "React", "TailwindCSS"],
    },
    {
      imgSrc: projectImages.project2,
      projectLink: "https://github.com/ivanurra/portfolio-v1/",
      projectName: "ivanurra.dev (v1)",
      projectDescription:
        "My initial portfolio as a developer, constructed using React and NextJS.",
      stacks: ["NextJS", "React", "Framer-Motion", "SASS"],
    },
    {
      imgSrc: projectImages.project3,
      projectLink: "https://cinemabox.netlify.app/",
      projectName: "Cinemabox",
      projectDescription:
        "It's a CRUD app centered around movies and TV shows. You can explore the latest releases and current blockbusters. Save your favorite movies or TV shows from any era to ensure you don't miss anything. Grab some popcorn!",
      stacks: ["React", "Express", "NodeJS", "MongoDB"],
    },
    {
      imgSrc: projectImages.project4,
      projectLink: "https://ivanurra.github.io/elPolitico-videogame/",
      projectName: "El Político (Videogame)",
      projectDescription:
        "A video game created with the challenge of completing it in just four days. I utilized Canvas for the 2D graphics, and it is developed with JavaScript, HTML, & CSS. This project serves as a tribute to the video games of my childhood.",
      stacks: ["JavaScript", "Canvas", "HTML", "CSS"],
    },
  ];

  return (
    <div>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
