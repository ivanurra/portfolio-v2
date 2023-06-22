import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
  const [isGridHoveredJobOne, setIsGridHoveredJobOne] = useState(false);
  const [isGridHoveredJobTwo, setIsGridHoveredJobTwo] = useState(false);
  const [isGridHoveredJobThree, setIsGridHoveredJobThree] = useState(false);
  const [isGridHoveredJobFour, setIsGridHoveredJobFour] = useState(false);

  return (
    <div>
      <div className="md:p-8">
        <a
          href="https://secuoyas.com/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobOne(true)}
          onMouseLeave={() => setIsGridHoveredJobOne(false)}
        >
          <p className="text-2xl mb-4">Experience</p>
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobOne ? "bg-background-secondary" : ""
            } md:p-2`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHoveredJobOne ? "text-green-primary font-bold" : ""
                }`}
              >
                Secuoyas
              </p>
              <p className="mb-2">IT Boss</p>
              <p>A great company, a great opportunity.</p>
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
      <div className="md:p-8">
        <a
          href="https://iberostar.com/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobTwo(true)}
          onMouseLeave={() => setIsGridHoveredJobTwo(false)}
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobTwo ? "bg-background-secondary" : ""
            } md:p-2`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHoveredJobTwo ? "text-green-primary font-bold" : ""
                }`}
              >
                Iberostar
              </p>
              <p className="mb-2">IT Support</p>
              <p>A great company, a great opportunity.</p>
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
      <div className="md:p-8">
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
            } md:p-2`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHoveredJobThree ? "text-green-primary font-bold" : ""
                }`}
              >
                Auro Travel
              </p>
              <p className="mb-2">IT Support</p>
              <p>A great company, a great opportunity.</p>
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
      <div className="mb-20 md:mb-40 md:p-8">
        <a
          href="https://www.elpais.com/"
          className="cursor-pointer"
          target="_blank"
          onMouseEnter={() => setIsGridHoveredJobFour(true)}
          onMouseLeave={() => setIsGridHoveredJobFour(false)}
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHoveredJobFour ? "bg-background-secondary" : ""
            } md:p-2`}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHoveredJobFour ? "text-green-primary font-bold" : ""
                }`}
              >
                El País
              </p>
              <p className="mb-2">IT Support</p>
              <p>A great company, a great opportunity.</p>
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
    </div>
  );
};
