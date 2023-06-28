import { useState } from "react";
import { ButtonStack } from "../../components";

export const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

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

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };
  return (
    <div>
      <div className="mb-20 md:p-8">
        <p className="text-xl mb-4 font-bold block lg:hidden">Projects</p>
        <div className={`md:grid grid-cols-4  `}>
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              Photo here
            </p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <a
              href="https://www.philotech.net/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div>
                <p className="mb-2 text-base ">Project1</p>
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
            <p className="mb-2 text-sm text-font-color-secondary">
              DevOps Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Provision of the infrastructure in a cloud environment for
              microservices. Central contact person for application operation.
              Implementation of changes and deployments. Troubleshooting and
              analysis of logs.
            </p>
            <div>
              <ButtonStack stack="AWS" />
              <ButtonStack stack="Docker" />
              <ButtonStack stack="Kubernetes" />
              <ButtonStack stack="Jenkins" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
