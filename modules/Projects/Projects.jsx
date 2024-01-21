import { useState } from "react";
import Image from "next/image";
import { ButtonStack } from "../../components";
import project1Pic from "../../public/ivanurradevv2.webp";
import project2Pic from "../../public/ivanurradevv1.webp";
import project3Pic from "../../public/cinemabox.webp";
import project4Pic from "../../public/politico.webp";

export const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  return (
    <div>
      <div className="mb-20 md:p-8">
        <p className="text-xl mb-4 font-bold block lg:hidden">Projects</p>
        <div className={`md:grid grid-cols-4`}>
          <div className="md:col-span-1 mb-4 pr-3">
            <Image src={project1Pic} alt="Picture of project" />
          </div>

          <div className="md:col-span-3">
            <a
              href="https://ivanurra.dev/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div>
                <p className="mb-2 text-base ">ivanurra.dev (v2)</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 mt-1 fill-current transition-transform ${
                    isHovered1 ? "-translate-y-1 translate-x-1" : ""
                  }`}
                >
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                </svg>
              </div>
            </a>

            <p className="text-sm text-font-color-secondary">
              My new portfolio, developed with Next.js (v13) and TailwindCSS.
              The aim was to create a minimalist portfolio showcasing my
              projects and providing easy contact options.
            </p>
            <div>
              <ButtonStack stack="NextJS" />
              <ButtonStack stack="React" />
              <ButtonStack stack="TailwindCSS" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4`}>
          <div className="md:col-span-1 mb-4 pr-3">
            <Image src={project2Pic} alt="Picture of project" />
          </div>

          <div className="md:col-span-3">
            <a
              href="https://github.com/ivanurra/portfolio-v1/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div>
                <p className="mb-2 text-base ">ivanurra.dev (v1)</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 mt-1 fill-current transition-transform ${
                    isHovered2 ? "-translate-y-1 translate-x-1" : ""
                  }`}
                >
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                </svg>
              </div>
            </a>

            <p className="text-sm text-font-color-secondary">
              My initial portfolio as a developer, constructed using React and
              NextJS.
            </p>
            <div>
              <ButtonStack stack="NextJS" />
              <ButtonStack stack="React" />
              <ButtonStack stack="Framer-Motion" />
              <ButtonStack stack="SASS" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1 mb-4 pr-3">
            <Image src={project3Pic} alt="Picture of project" />
          </div>

          <div className="md:col-span-3">
            <a
              href="https://cinemabox.netlify.app/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <div>
                <p className="mb-2 text-base ">Cinemabox</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 mt-1 fill-current transition-transform ${
                    isHovered3 ? "-translate-y-1 translate-x-1" : ""
                  }`}
                >
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                </svg>
              </div>
            </a>

            <p className="text-sm text-font-color-secondary">
              It's a CRUD app centered around movies and TV shows. You can
              explore the latest releases and current blockbusters. Save your
              favorite movies or TV shows from any era to ensure you don't miss
              anything. Grab some popcorn!
            </p>
            <div>
              <ButtonStack stack="React" />
              <ButtonStack stack="Express" />
              <ButtonStack stack="NodeJS" />
              <ButtonStack stack="MongoDB" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1 mb-4 pr-3">
            <Image src={project4Pic} alt="Picture of project" />
          </div>

          <div className="md:col-span-3">
            <a
              href="https://ivanurra.github.io/elPolitico-videogame/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <div>
                <p className="mb-2 text-base ">El Político (Videogame)</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 mt-1 fill-current transition-transform ${
                    isHovered4 ? "-translate-y-1 translate-x-1" : ""
                  }`}
                >
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                </svg>
              </div>
            </a>

            <p className="text-sm text-font-color-secondary">
              A video game created with the challenge of completing it in just
              four days. I utilized Canvas for the 2D graphics, and it is
              developed with JavaScript, HTML, & CSS. This project serves as a
              tribute to the video games of my childhood.
            </p>
            <div>
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="Canvas" />
              <ButtonStack stack="HTML" />
              <ButtonStack stack="CSS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
