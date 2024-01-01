import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  // const [isHovered4, setIsHovered4] = useState(false);
  // const [isHovered5, setIsHovered5] = useState(false);

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

  // const handleMouseEnter4 = () => {
  //   setIsHovered4(true);
  // };

  // const handleMouseLeave4 = () => {
  //   setIsHovered4(false);
  // };

  // const handleMouseEnter5 = () => {
  //   setIsHovered5(true);
  // };

  // const handleMouseLeave5 = () => {
  //   setIsHovered5(false);
  // };
  return (
    <div>
      {/* <div className="mb-12 md:p-8">
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
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
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
            <p className="mb-2 text-sm text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Write modern, performant, clean and maintainable code focused on
              Griddo.io, the company's own CMS, which is used by the best
              universities in the country. Work with a variety of different
              languages and frameworks such as JavaScript, React and Gatsby.
              Communicate and collaborate with multi-disciplinary teams of
              engineers, designers, and stakeholders on a daily basis.
            </p>
            <div>
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="React" />
              <ButtonStack stack="Gatsby" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-12 md:p-8">
        <p className="text-xl mb-4 font-bold block lg:hidden">Experience</p>
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
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div>
                <p className="mb-2 text-base ">Bertrandt</p>
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
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div>
                <p className="mb-2 text-base ">Secuoyas</p>
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
            <p className="mb-2 text-sm text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Write modern, performant, clean and maintainable code focused on
              Griddo.io, the company's own CMS, which is used by the best
              universities in the country. Work with a variety of different
              languages and frameworks such as JavaScript, React and Gatsby.
              Communicate and collaborate with multi-disciplinary teams of
              engineers, designers, and stakeholders on a daily basis.
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
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <div>
                <p className="mb-2 text-base ">Auro</p>
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
            <p className="mb-2 text-sm text-font-color-secondary">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-font-color-secondary">
              Built and shipped the new Auro website. Worked closely with
              designer and commercial team to develop the website using
              JavaScript, Vue, Nuxt and Vuetify. Developed and maintained code
              for in-house projects primarily.
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

      {/* <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              MAR 2019 - MAR 2021
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.iberostar.com/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <div>
                <p className="mb-2 text-base ">Iberostar</p>
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
            <p className="mb-2 text-sm text-font-color-secondary">
              IT Support Technician
            </p>
            <p className="text-sm text-font-color-secondary">
              Performed high-level support to more than 50 hotels in EMEA
              countries. Facilitated Cloud software installation and
              configuration in updates or openings of new hotels. As a team, we
              were able to reduce helpdesk tickets by 60%.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              JAN 2016 - FEB 2017
            </p>
          </div>

          <div className="md:col-span-3">
            <a
              href="https://www.latamairlines.com/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <div>
                <p className="mb-2 text-base ">LATAM Airlines</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 mt-1 fill-current transition-transform ${
                    isHovered5 ? "-translate-y-1 translate-x-1" : ""
                  }`}
                >
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path>
                </svg>
              </div>
            </a>
            <p className="mb-2 text-sm text-font-color-secondary">
              IT Support Manager Europe & Asia
            </p>
            <p className="text-sm text-font-color-secondary">
              Managed a cross-functional team of 5 in 3 locations (Madrid,
              Frankfurt and Paris). Led operational continuity of all systems
              and services that support business processes in Europe. Reduced
              customer support calls by 80% and increased satisfaction by 90%.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
