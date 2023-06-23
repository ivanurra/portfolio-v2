import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
  const [isGridHoveredJobOne, setIsGridHoveredJobOne] = useState(false);
  const [isGridHoveredJobTwo, setIsGridHoveredJobTwo] = useState(false);
  const [isGridHoveredJobThree, setIsGridHoveredJobThree] = useState(false);
  const [isGridHoveredJobFour, setIsGridHoveredJobFour] = useState(false);

  return (
    <div>
      <div className="mb-12 md:p-8">
        <a
          href="https://www.philotech.net/"
          d
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobOne(true)}
          onMouseLeave={() => setIsGridHoveredJobOne(false)}
        >
          {/* <p className="text-xl mb-4 font-bold">Experience</p> */}
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobOne ? "bg-background-secondary" : ""
            } `}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p className="text-sm">JUN 2023 - Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 text-base ${
                  isGridHoveredJobOne ? "text-green-primary font-bold" : ""
                }`}
              >
                Philotech
              </p>
              <p className="mb-2 text-sm">DevOps Developer</p>
              <p className="text-sm">
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
        </a>
      </div>
      <div className="mb-12 md:p-8">
        <a
          href="https://secuoyas.com/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobTwo(true)}
          onMouseLeave={() => setIsGridHoveredJobTwo(false)}
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobTwo ? "bg-background-secondary" : ""
            }`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p className="text-sm">AUG 2021 - JUN 2023</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 text-base ${
                  isGridHoveredJobTwo ? "text-green-primary font-bold" : ""
                }`}
              >
                Secuoyas
              </p>
              <p className="mb-2 text-sm">Full Stack Web Developer</p>
              <p className="text-sm">
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
        </a>
      </div>
      <div className="mb-12 md:p-8">
        <a
          href="https://www.auro.travel/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobThree(true)}
          onMouseLeave={() => setIsGridHoveredJobThree(false)}
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobThree ? "bg-background-secondary" : ""
            }`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p className="text-sm">MAR 2021 - AUG 2021</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 text-base ${
                  isGridHoveredJobThree ? "text-green-primary font-bold" : ""
                }`}
              >
                Auro
              </p>
              <p className="mb-2 text-sm">Full Stack Web Developer</p>
              <p className="text-sm">
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
        </a>
      </div>
      <div className="mb-20 md:p-8">
        <a
          href="https://www.iberostar.com/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobFour(true)}
          onMouseLeave={() => setIsGridHoveredJobFour(false)}
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobFour ? "bg-background-secondary" : ""
            } `}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p className="text-sm">MAR 2019 - MAR 2021</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 text-base ${
                  isGridHoveredJobFour ? "text-green-primary font-bold" : ""
                }`}
              >
                Iberostar
              </p>
              <p className="mb-2 text-sm">IT Support Technician</p>
              <p className="text-sm">
                Performed high-level support to more than 50 hotels in EMEA
                countries. Facilitated Cloud software installation and
                configuration in updates or openings of new hotels. As a team,
                we were able to reduce helpdesk tickets by 60%.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
