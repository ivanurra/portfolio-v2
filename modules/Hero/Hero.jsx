"use client";

import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div>
      <p className="not-italic text-8xl">Iván Urra</p>
      <p className="text-green-primary not-italic text-3xl">
        Full Stack Web Developer
      </p>
      <div>
        <Link
          className="text-font-color-rgb hover:text-green-primary cursor-pointer"
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="text-green-primary">04. </span>
          Contact
        </Link>
      </div>
    </div>
  );
};
