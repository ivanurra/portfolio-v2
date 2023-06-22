import { useState } from "react";
import { ButtonStack } from "../../components";

export const Experience = () => {
  const [isGridHovered, setIsGridHovered] = useState(false);
  return (
    <div>
      <div className="mb-20 md:mb-40 md:p-8">
        <a
          href="https://secuoyas.com/"
          className="cursor-pointer"
          target="_blank"
        >
          <p className="text-2xl mb-4">Experience</p>
          <div
            className={`md:grid grid-cols-4 ${
              isGridHovered ? "bg-background-secondary" : ""
            } md:p-2`}
            onMouseEnter={() => setIsGridHovered(true)}
            onMouseLeave={() => setIsGridHovered(false)}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHovered ? "text-green-primary font-bold" : ""
                }`}
              >
                Secuoyas
              </p>
              <p className="mb-2">IT Boss</p>
              <p>A great company, a great oportunity.</p>
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
          href="https://iberostar.com/"
          className="cursor-pointer"
          target="_blank"
        >
          <div
            className={`md:grid grid-cols-4 ${
              isGridHovered ? "bg-background-secondary" : ""
            } md:p-2`}
            onMouseEnter={() => setIsGridHovered(true)}
            onMouseLeave={() => setIsGridHovered(false)}
          >
            {/* 1st Column */}
            <div className="md:col-span-1">
              <p>2018-Present</p>
            </div>

            {/* 2nd Column */}
            <div className="md:col-span-3">
              <p
                className={`mb-2 ${
                  isGridHovered ? "text-green-primary font-bold" : ""
                }`}
              >
                Iberostar
              </p>
              <p className="mb-2">IT Support</p>
              <p>A great company, a great oportunity.</p>
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
