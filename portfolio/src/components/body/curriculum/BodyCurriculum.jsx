import React from "react";
import "./curriculum.css";
import CurriculumText from "./CurriculumText";

const BodyCurriculum = (props) => {

  const skills = props.compétences

  return (
    <div id="CurriculumVitae" className="containerCurriculum">
      <h1 className="titleCurriculum">Curriculum</h1>
      <div className="blockCurriculum">
     { skills && <CurriculumText skills={skills} />}
      </div>
    </div>
  );
};

export default BodyCurriculum;
