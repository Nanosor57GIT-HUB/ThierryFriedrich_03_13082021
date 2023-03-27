import { useState, useEffect } from "react";

//Creating and using a custom hook on a fetch
/**
 * @description Creating an API call service by a URL
 * @param {fetch} url
 * @returns Returns a fetch with error handling by a useState and a useEffect
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
