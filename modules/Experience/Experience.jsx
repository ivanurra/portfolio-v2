import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="mb-12 md:p-8">
        <p className="text-xl mb-4 font-bold block lg:hidden">Experience</p>
        <div className={`md:grid grid-cols-4  `}>
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              JUN 2023 - Present
            </p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <a
              href="https://www.philotech.net/"
              className="cursor-pointer flex flex-row hover:text-green-primary hover:fill-green-primary"
              target="_blank"
            >
              <div>
                <p className="mb-2 text-base ">Philotech</p>
              </div>

              <div className="ml-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 fill-current transition-transform ${
                    isHovered ? "-translate-y-1" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
            {/* <div>
                <ButtonStack stack="Docker" />
                <ButtonStack stack="TailwindCSS" />
                <ButtonStack stack="JavaScript" />
                <ButtonStack stack="React" />
              </div> */}
          </div>
        </div>
      </div>
      <div className="mb-12 md:p-8">
        <div className={`md:grid grid-cols-4 `}>
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              AUG 2021 - JUN 2023
            </p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <a
              href="https://secuoyas.com/"
              className="cursor-pointer"
              target="_blank"
            >
              <p className={`mb-2 text-base hover:text-green-primary`}>
                Secuoyas
              </p>
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
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              MAR 2021 - AUG 2021
            </p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <a
              href="https://www.auro.travel/"
              className="cursor-pointer"
              target="_blank"
            >
              <p className={`mb-2 text-base hover:text-green-primary`}>Auro</p>
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
      <div className="mb-20 md:p-8">
        <div className={`md:grid grid-cols-4  `}>
          {/* 1st Column */}
          <div className="md:col-span-1">
            <p className="text-sm text-font-color-secondary">
              MAR 2019 - MAR 2021
            </p>
          </div>

          {/* 2nd Column */}
          <div className="md:col-span-3">
            <a
              href="https://www.iberostar.com/"
              className="cursor-pointer"
              target="_blank"
            >
              <p className={`mb-2 text-base hover:text-green-primary`}>
                Iberostar
              </p>
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
    </div>
  );
};
