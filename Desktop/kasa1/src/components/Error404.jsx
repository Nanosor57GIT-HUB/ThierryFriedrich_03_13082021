import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="noPage">
        <p className="erreur404">404</p>
        <p className="paragraphe404">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink className="nav404" to={"/"}>
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
