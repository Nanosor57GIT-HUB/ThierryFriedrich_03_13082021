import React, { useState, useEffect, createContext } from "react";
import PersonnelCards from "./PersonnelCards";
import FormationCards from "./FormationCards";

export const PortfolioContext = createContext();

const ParentComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./myportfolioinline.json");
      const jsonData = await response.json();
      const persoData = jsonData.perso;
      const proData = jsonData.pro;
      setData(persoData.map((item) => ({ ...item, displayCover: true })));
       setData(proData.map((item) => ({ ...item, displayCover: true })));
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data }}>
      <div>
        <FormationCards />
        <PersonnelCards />
      </div>
    </PortfolioContext.Provider>
  );
};

export default ParentComponent;
