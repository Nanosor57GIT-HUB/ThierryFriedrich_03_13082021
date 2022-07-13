import React from "react";

/**
 * @description Recovery of energy data to transcribe them into the Energy component
 * @param {number} user
 * @const {object} datas (id, userInfos, todayScore, keyData)
 * @const {object} energy (calorieCount, proteinCount, carbohydrateCount, lipidCount)
 * @returns Returns energy values
 */
const Energy = (user) => {
  const datas = user.data.data;
  const energy = datas.keyData;

  return (
    <div className="container-energy">
      <div className="calories">
        <img
          src={process.env.PUBLIC_URL + "/img/calories-icon.svg"}
          className="img-energy"
          alt="calories"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">
            {energy.calorieCount.toLocaleString("en-US")}Cal
          </p>

          <p className="title-energy">Calories</p>
        </div>
      </div>

      <div className="proteines">
        <img
          src={process.env.PUBLIC_URL + "/img/protein-icon.svg"}
          className="img-energy"
          alt="proteines"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.proteinCount}g</p>
          <p className="title-energy">Proteines</p>
        </div>
      </div>

      <div className="glucides">
        <img
          src={process.env.PUBLIC_URL + "/img/carbs-icon.svg"}
          className="img-energy"
          alt="glucides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.carbohydrateCount}g</p>
          <p className="title-energy">Glucides</p>
        </div>
      </div>

      <div className="lipides">
        <img
          src={process.env.PUBLIC_URL + "/img/fat-icon.svg"}
          className="img-energy"
          alt="lipides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.lipidCount}g</p>
          <p className="title-energy">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Energy;
