import React from "react";
import Header from "../components/stats/header/Header";
import SideBar from "../components/stats/sideBar/SideBar";
import StatsUser from "../components/stats/statsUser/StatsUser";

/**
 * @description Creation of the container with the useful components on the statistics dashboard page
 * @returns Returns the statistics page of each requested user
 */
const Stats = () => {
  return (
    <div className="containerPage">
      <Header />
      <SideBar />
      <StatsUser />
    </div>
  );
};

export default Stats;
