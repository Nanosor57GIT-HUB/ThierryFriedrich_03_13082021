import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
 
  const [proData, setProData] = useState([]);
  const [persoData, setPersoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./myportfolioinline.json");
      const jsonData = await response.json();
      const fetchedPersoData = jsonData.perso;
      console.log(fetchedPersoData);
      const fetchedProData = jsonData.pro;
      console.log(fetchedProData);
      setPersoData(fetchedPersoData);
      setProData(fetchedProData);
      
        fetchedPersoData.map((item) => ({ ...item, displayCover: true}))
      
    
        fetchedProData.map((item) => ({ ...item, displayCover: true }))
      
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ proData, setProData, persoData, setPersoData  }}>
      {props.children}
    </DataContext.Provider>
  );
};


export default DataContextProvider;