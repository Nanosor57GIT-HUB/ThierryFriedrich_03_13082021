import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

/**
 * @description User score retrieval
 * @param {number} user
 * @const {object} dataScore (userInfos, score, keyData)
 * @const {number} scoreData (user score)
 * @const {array} dataTodayScore (name, uv, pv, fill)
 * @returns returns the user's score converted to %
 */
const TodayScore = (user) => {
  const dataScore = user.data.data; 
  const scoreData = dataScore.todayScore * 100 || dataScore.score * 100;
  const dataTodayScore = [
    {
      name: "A1",
      uv: scoreData,
      pv: 2400,
      fill: "red",
    },
    {
      name: "100",
      uv: 100,
      pv: 4567,
      fill: "#FBFBFB",
    },
  ];

  return (
    <div className="objective-score">
      <p className="titleScore">Score</p>
      <p className="tauxObjectif">
        <span style={{ fontWeight: 700, fontSize: 26, color: "#000000" }}>
          {scoreData}%
        </span>{" "}
        de votre objectif
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius={80}
          outerRadius={100}
          data={dataTodayScore}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar dataKey="uv" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayScore;
