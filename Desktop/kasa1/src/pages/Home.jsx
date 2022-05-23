import React from "react";
import useFetch from "../components/useFetch";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import Pied from "../components/Pied";
import BannerHome from "../components/BannerHome";




const Home = () => {

   const {
     data: blogs,
     error,
     isLoading,
   } = useFetch("http://localhost:3000/logements.json");

  return (
    <div>
      <Navigation />
      <BannerHome />

      {isLoading && <div className="loading">Chargement en cours ...</div>}
      {error && (
        <div className="error">Désolé, une erreur est survenue pendant le chargement ...</div>
      )}

      {blogs && <Cards blogs={blogs} />}
      <Pied />
    </div>
  );
};

export default Home;

//https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json
