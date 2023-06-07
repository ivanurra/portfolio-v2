import { Link } from "react-scroll";

export const Navigation = () => {
  return (
    <>
      <div className="mt-6">
        <Link
          className="text-font-color-rgb hover:text-green-primary cursor-pointer"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="text-green-primary">01. </span>
          About
        </Link>
      </div>
      <div className="mt-4">
        <Link
          className="text-font-color-rgb hover:text-green-primary cursor-pointer"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="text-green-primary">02. </span>
          Jobs
        </Link>
      </div>
      <div className="mt-4">
        <Link
          className="text-font-color-rgb hover:text-green-primary cursor-pointer"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="text-green-primary">03. </span>
          Projects
        </Link>
      </div>
      <div className="mt-4">
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
    </>
  );
};
