import React from "react";
import "./projets.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init({
  duration: 600,
  once: false,
});

//https://michalsnik.github.io/aos/

//https://devtrium.com/posts/async-functions-useeffect


const FormationCards = (props) => {
 const projets = props.projets
 const pro = projets.pro
//  console.log(pro);

  return (
    <div className="containerProjets1" id="pro">
      <h1 className="titleProjets">
        Projets de formation
        <span className="numberProjets"> ({pro.length})</span>
      </h1>
      <div>
        <p
          className="infoProjets1"
          data-aos="zoom-out-right"
        >
          Au cours de ma formation de développeur d'application JavaScript/React
          chez OpenClassrooms, j'ai réalisé 14 projets sur une période de 14
          mois. Cette formation s'est déroulée à distance et a inclus un
          mentorat de 45 minutes par semaine ainsi qu'une plateforme d'entraide.
          Les projets ont utilisés divers technologies et frameworks, ce qui m'a
          permis de développer mes compétences en programmation web. Seules les
          applications sont disponibles sous forme de démonstration ou sur
          GitHub pour le code. Les projets que j'ai créés démontrent mes
          capacités à développer des applications web interactives et
          conviviales pour les utilisateurs. Réalisés avec des cas d'entreprises.
        </p>
      </div>
      <div className="containerCards">
        {pro.map((item) => (
          <div className="cards" key={item.id}>
            <p className="description">{item.description}</p>
            <div className="card" >            
              <div className="containerCover">
                <img
                  src={item.cover}
                  className="coverProjets"
                  alt={item.title}
                />
              </div>
              <div className="contentCards">
                <h2 className="position">{item.position}</h2>
                <img src={item.logo} alt={item.title} className="logoProjets" />
                <p className="detailsProjet">{item.details}</p>
                {item.url.map((item) => (
                  <div className="containerLinks" key={item.demo}>
                    {item.git_hub && (
                      <Link
                        to={item.git_hub}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjets"
                      >
                        Git-Hub
                      </Link>
                    )}
                    {item.demo && (
                      <Link
                        to={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjets"
                      >
                        Demo
                      </Link>
                    )}
                  </div>
                ))}
                <div className="containerTechnologies">
                  {item.technologies.map((logoDev, index) => (
                    <div className="technologies" key={index}>
                      <img
                        src={logoDev}
                        className="logoTechno"
                        alt="logoTechno"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationCards;
