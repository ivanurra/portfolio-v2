import { Link } from "react-scroll";
import React, { useState } from "react";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="hidden md:block">
      <div className="mt-6">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section1" ? "active" : ""
          }`}
          to="section1"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 4 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          {/* <span className="text-green-primary">01. </span> */}
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
          offset={typeof window !== "undefined" ? -window.innerHeight / 4 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          {/* <span className="text-green-primary">02. </span> */}
          Experience
        </Link>
      </div>
      <div className="mt-4">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section3" ? "active" : ""
          }`}
          to="section3"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 4 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          {/* <span className="text-green-primary">03. </span> */}
          Projects
        </Link>
      </div>
      <div className="mt-4">
        <Link
          className={`text-font-color-rgb hover:text-xl hover:font-bold cursor-pointer ${
            activeLink === "section4" ? "active" : ""
          }`}
          to="section4"
          spy={true}
          smooth={true}
          offset={typeof window !== "undefined" ? -window.innerHeight / 4 : 0}
          duration={1000}
          onSetActive={handleSetActiveLink}
        >
          {/* <span className="text-green-primary">04. </span> */}
          Contact
        </Link>
      </div>
    </div>
  );
};
