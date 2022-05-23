import { useState, useEffect } from "react";

//Utilisation d'un hook customisé
const useFetch = (url) => {
  //Utilisations de hooks avec useState(réaffichage) et useEffect
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect s'execute au premier affichage de la page
  useEffect(() => {
    //on rajoute un setTimeout juste pour la visibilité de l'exemple
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Désolé, une erreur est survenue pendant le chargement ..."
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
          //console.log(datablog);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
    // console.log("useEffect vient d'être appelé");
    // console.log(blogs);
    // [] n'utilise qu'une fois cette fonction
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
