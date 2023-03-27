import React from "react";
import "./projets.css";
import FormationCards from "./FormationCards";
import PersonnelCards from "./PersonnelCards";

const BodyProjets = ({pro}, {perso}) => {


  return (
    <div>
     {pro && <FormationCards pro={pro} />}
     {perso && <PersonnelCards perso={perso} />}
    </div>
  );
};

export default BodyProjets;
