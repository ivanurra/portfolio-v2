import React, { useState } from "react";
import { Link } from "react-scroll";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="hidden md:block">
      <div className="mt-12">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section1" ? "active" : ""
          }`}
          to="section1"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 22 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          About
        </Link>
      </div>
      <div className="mt-4">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section2" ? "active" : ""
          }`}
          to="section2"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 22 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          Experience
        </Link>
      </div>
      {/* <div className="mt-4">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section3" ? "active" : ""
          }`}
          to="section3"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 22 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          Projects
        </Link>
      </div> */}
    </div>
  );
};
