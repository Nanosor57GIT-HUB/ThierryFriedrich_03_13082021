import React from "react";

/**
 * @description Retrieval of user data to transcribe them into the Name component
 * @param {string} user
 * @const {object} data (id, userInfos, todayScore, keyData)
 * @const {object} userInfos (firstName, lastName, age)
 * @const {string} name (user Name)
 * @returns Returns user name 
 */
const Name = (user) => {
  const data = user.data.data;
  const userInfos = data.userInfos;
  const name = userInfos.firstName;

  return (
    <div className="name-congratulations">
      <h1 className="hello">
        Bonjour <span className="firstName">{name}</span>
      </h1>

      <p className="congratulation">
        "Félicitation! Vous avez explosé vos objectifs"
        <img
          src={process.env.PUBLIC_URL + "/img/frappeMains.png"}
          className="bravo"
          alt="Bravo-icon"
        ></img>
      </p>
    </div>
  );
};

export default Name;
