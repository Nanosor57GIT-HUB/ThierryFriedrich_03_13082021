import React from "react";
import { Link } from "react-router-dom";

/**
 * @description Creation of links on the vertical menu
 * @returns Returns vertical navigation icons(links) and copyright
 */
const SideBar = () => {
  return (
    <div className="verticalMenu">
      <div className="containerIcon">
        <nav className="navIco">
          <Link to="#yogaStats">
            <img
              src={process.env.PUBLIC_URL + "/img/iconYoga.svg"}
              className="icoBtn"
              alt="Button_Yoga"
              style={{ width: 64 }}
            />
          </Link>

          <Link to="#natationStats">
            <img
              src={process.env.PUBLIC_URL + "/img/iconNatation.svg"}
              className="icoBtn"
              alt="Button_Natation"
              style={{ width: 64 }}
            />
          </Link>

          <Link to="#véloStats">
            <img
              src={process.env.PUBLIC_URL + "/img/iconVélo.svg"}
              className="icoBtn"
              alt="Button_Vélo"
              style={{ width: 64 }}
            />
          </Link>

          <Link to="#altèreStats">
            <img
              src={process.env.PUBLIC_URL + "/img/iconAltère.svg"}
              className="icoBtn"
              alt="Button_Altère"
              style={{ width: 64 }}
            />
          </Link>
        </nav>
      </div>

      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
};

export default SideBar;
