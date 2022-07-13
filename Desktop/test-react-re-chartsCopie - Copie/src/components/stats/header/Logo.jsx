import React from "react";

/**
 * @description Creation of the container for the logo
 * @returns (JSX.Element) logo
 */
const Logo = () => {
  return (
    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/img/logo.svg"}
        className="logo"
        alt="logo_SportSee"
      ></img>
    </div>
  );
};

export default Logo;
