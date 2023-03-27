import React from "react";
import Header from "../components/header/Header";
import BodyAccueil from "../components/body/accueil/BodyAccueil";
import useFetch from "../components/fetchData/UseFetch";
//import BodyProjets from "../components/body/projets/BodyProjets";
import Footer from "../components/footer/Footer";
import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
import BodyContact from "../components/body/contact/BodyContact";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import FormationCards from "../components/body/projets/FormationCards";
import PersonnelCards from "../components/body/projets/PersonnelCards";

//https://www.youtube.com/watch?v=517npPWIb8Q&pp=ugMICgJmchABGAE%3D   (deploy)
const Accueil = () => {
  const {
    data: portfolio,
    error,
    isLoading,
  } = useFetch(`./myportfolioinline.json`);

  return (
    <div>
      {isLoading && <div className="loading">Traitement en cours ...</div>}
      {error && (
        <div className="error">
          Désolé, une erreur est survenue pendant le chargement ...
        </div>
      )}
      <ScrollIndicator />
      <Header />
      <BodyAccueil />
      {portfolio && <BodyCurriculum compétences={portfolio.skills} />}
      {portfolio && <FormationCards projets={portfolio} />}
      {portfolio && <PersonnelCards projets={portfolio} />}
      <BodyContact />
      <ScrollAnchor />
      <Footer />
    </div>
  );
};

export default Accueil;
