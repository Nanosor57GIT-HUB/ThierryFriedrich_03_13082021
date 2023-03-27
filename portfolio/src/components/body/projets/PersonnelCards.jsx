import React from "react";
import "./projets.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import useFetch from "../../service/UseFetch";
import { Link } from "react-router-dom";
//import { DataContext } from "./DataContext";


AOS.init({
  duration: 600,
  once: false,
});

const PersonnelCards = (props) => {
   const projets = props.projets;
   const perso = projets.perso;
 //  console.log(perso);
  
 // const { persoData, setPersoData } = useContext(DataContext);

//  const { data, isLoading, error } = useFetch("myportfolioinline.json");

//  if (isLoading) {
//    return <div>Chargement en cours...</div>;
//  }

//  if (error) {
//    return <div>{error}</div>;
//  }


  return (
    <div className="containerProjets2" id="perso">
      <h1 className="titleProjets">
        Projets personnels
        <span className="numberProjets"> ({perso.length})</span>
      </h1>
      <div>
        <p
           className="infoProjets2"
          data-aos="zoom-out-right"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam
          consequatur deleniti dolorum perferendis et unde, quis asperiores,
          repellendus quasi optio ullam deserunt dignissimos alias explicabo.
          Optio eaque quos officia animi? Dicta illum ad nisi reprehenderit
          libero mollitia iusto quas, obcaecati labore! Temporibus tempora quis
          cumque blanditiis, quos sint commodi qui perferendis, vero aut quae?
          Hic doloremque eaque, eligendi enim officia totam asperiores, quo
          illum, mollitia doloribus facilis accusantium optio unde praesentium
          quasi quisquam vel dolorem tempore molestiae explicabo repellendus.
          Omnis suscipit earum quidem natus nam debitis numquam neque, nemo,
          sint eius voluptatum quibusdam error ipsa facilis explicabo distinctio
          laborum consequuntur sit accusamus rerum. Dolore pariatur, cupiditate,
          quisquam ducimus distinctio, rem perspiciatis eveniet odit nam
          repellendus ipsam incidunt voluptatem ea doloribus a porro optio?
          Nulla recusandae consequuntur debitis minima quisquam? Placeat nisi
          corporis quam quia excepturi deleniti et provident? Fugit consectetur
          harum sunt unde earum debitis omnis labore repellat optio.
        </p>
      </div>
      <div className="containerCards">
        {perso.map((item) => (
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
            <div
              className="contentCards"
       
            >
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

export default PersonnelCards;
