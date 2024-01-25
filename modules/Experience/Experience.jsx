import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
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
      <div className="mb-12 md:p-8">
        <p className="text-xl mb-4 font-bold block lg:hidden">Experience</p>
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              JAN 2024 - PRESENT
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.secuoyas.com/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div>
                <p className="mb-2 text-base ">Secuoyas</p>
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
            <p className="mb-2 text-base text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Develop modern, high-performance, clean, and maintainable code
              with a focus on Griddo.io, the company's proprietary CMS, widely
              utilized by top universities. Engage with various programming
              languages and frameworks, including JavaScript, React, and Gatsby.
              Communication and collaboration with cross-functional teams
              composed of engineers, designers, and stakeholders on a daily
              basis.
            </p>
            <div>
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="React" />
              <ButtonStack stack="Gatsby" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              JUN 2023 - JAN 2024
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.bertrandt.com/en/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div>
                <p className="mb-2 text-base ">Bertrandt</p>
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
            <p className="mb-2 text-base text-font-color-secondary">
              DevOps Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Provisioning infrastructure in a cloud environment for
              microservices. Serving as the central point of contact for
              application operation. Implementing changes and managing
              deployments. Conducting troubleshooting and analysis of logs.
            </p>
            <div>
              <ButtonStack stack="AWS" />
              <ButtonStack stack="Docker" />
              <ButtonStack stack="Kubernetes" />
              <ButtonStack stack="Terraform" />
              <ButtonStack stack="GitHub Actions" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 md:p-8">
        <div className={`md:grid grid-cols-4 `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              AUG 2021 - JUN 2023
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.secuoyas.com/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <div>
                <p className="mb-2 text-base ">Secuoyas</p>
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
            <p className="mb-2 text-base text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Develop modern, high-performance, clean, and maintainable code
              with a focus on griddo.io, the company's proprietary CMS, widely
              utilized by top universities. Engage with various programming
              languages and frameworks, including JavaScript, React, and Gatsby.
              Communication and collaboration with cross-functional teams
              composed of engineers, designers, and stakeholders on a daily
              basis.
            </p>
            <div>
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="React" />
              <ButtonStack stack="Gatsby" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 md:p-8">
        <div className={`md:grid grid-cols-4 `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              MAR 2021 - AUG 2021
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.auro.travel/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <div>
                <p className="mb-2 text-base ">Auro</p>
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
            <p className="mb-2 text-base text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Built and launched the new Auro website. Collaborated closely with
              the designer and commercial team to develop the website using
              JavaScript, Vue, Nuxt, and Vuetify. Responsible for developing and
              maintaining code for in-house projects predominantly.
            </p>
            <div>
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="Vue" />
              <ButtonStack stack="Nuxt" />
              <ButtonStack stack="Vuetify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
