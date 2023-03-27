import React, { useState } from "react";
import "./dropDown.css";
import { Link } from "react-scroll";

const DropDownNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredIndex(-1);
  };

  const handleLinkHover = (index) => {
    setHoveredIndex(index);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
    setHoveredIndex(-1);
  };

  return (
    <div
      className="dropDownBox"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="dropbtn" onFocus={handleFocus} onBlur={handleBlur}>
        Achèvements
        <img
          src="images/caret-vers-le-bas.svg"
          alt="arrow"
          className="dropDown_Arrow"
        />
      </p>
      {isOpen && (
        <div className="dropdown-content">
          <Link activeClass="active"
            className={`projetsLink ${hoveredIndex === 0 ? "active" : ""}`}
            to="pro"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={1500} 
            onMouseEnter={() => handleLinkHover(0)}
          >
            Formation
          </Link>
          <Link
            activeClass="active"
            className={`projetsLink ${hoveredIndex === 1 ? "active" : ""}`}
            to="perso"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={2000} 
            onMouseEnter={() => handleLinkHover(1)}
          >
            Personnels
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDownNav;
