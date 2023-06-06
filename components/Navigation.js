import { Link } from "react-scroll";

export const Navigation = () => {
  return (
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
  );
};
