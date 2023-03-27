import React from "react";
import { Link } from "react-scroll";
import DropDownNav from "./dropDownNavigation/DropDownNav";


const Navbar = () => {
  return (
    <div>
      <nav
        className="containerNav"
        role="navigation"
        aria-label="main navigation"
      >
        <Link className="btnNavBar active" to="/">
          Home
        </Link>
        <Link
          className="btnNavBar"
          activeClass="active"
          to="CurriculumVitae"
          spy={true}
          smooth={true}
         //  offset={-70}
          duration={800} 
        >
          Curriculum
        </Link>
        <DropDownNav />
        <Link activeClass="active"
          className="btnNavBar"
          to="Contact"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={2500} 
        >
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/thierry-friedrich/"
          rel="noreferrer"
          target={"_blank"}
          className=" linkedIn"
        >
          <img
            src="images/LinkedIn-icon.webp"
            className="linkedIn"
            alt="logo_LinkedIn"
          />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
