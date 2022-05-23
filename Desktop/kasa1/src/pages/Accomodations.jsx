import React from "react";
import useFetch from "../components/useFetch";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import TitleAccomodation from "../components/TitleAccomodation";
import DropDownAccomodations from "../components/DropDownAccomodations";
import Pieds from "../components/Pied";


const Accomodations = (props) => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useFetch(`http://localhost:3000/logements.json`);

  return (
    <div>
      <Navigation />

      {isLoading && <div className="loading">Traitement en cours ...</div>}
      {error && (
        <div className="error">
          Désolé, une erreur est survenue pendant le chargement ...
        </div>
      )}

      {blogs && <Carousel blogs={blogs} />}

      {blogs && <TitleAccomodation blogs={blogs} />}

      {blogs && <DropDownAccomodations blogs={blogs} />}

      <Pieds />
    </div>
  );
};

export default Accomodations;
