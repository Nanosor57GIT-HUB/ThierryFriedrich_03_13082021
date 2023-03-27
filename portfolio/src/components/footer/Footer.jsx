import React from "react";
import "./footer.css";
import LogoDeveloppeur from "./LogoDeveloppeur";

const Footer = () => {
  return (
    <div className="containerFooter">
      <p className="copyright">
        © 2023 My-Portfolio-inline. All rights reserved
      </p>
      <LogoDeveloppeur />
    </div>
  );
};

export default Footer;
