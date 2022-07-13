import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

/**
 * @description Calling Logo and NavBar components
 * @returns Returns Logo/NavBar components
 */
const Header = () => {
  return (
    <div className="navH">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
