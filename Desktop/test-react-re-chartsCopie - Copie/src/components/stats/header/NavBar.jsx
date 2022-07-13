import React from "react";
import { Link } from "react-router-dom";

/**
 * @description Creation of horizontal navigation(links)
 * @returns Flip horizontal navbar
 * (JSX.Element)
 */
const NavBar = () => {
  return (
    <div className="horizontalMenu">
      <nav className="nav">
        <Link className="accueilBtn btnNavBar" to="/p12-sportsee">
          Accueil
        </Link>
        <Link className="profilBtn btnNavBar" to="#Profil">
          Profil
        </Link>
        <Link className="réglageBtn btnNavBar" to="#Réglage">
          Réglage
        </Link>
        <Link className="communautéBtn btnNavBar" to="#Communauté">
          Communauté
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
