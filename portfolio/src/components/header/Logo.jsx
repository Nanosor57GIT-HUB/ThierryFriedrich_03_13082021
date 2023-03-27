import React from "react";

const Logo = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "./logoPortfolio.svg"}
        className="logo"
        alt="logo_My Portfolio inline"
      ></img>
    </div>
  );
};

export default Logo;
