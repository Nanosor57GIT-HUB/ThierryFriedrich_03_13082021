import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";


/**
 *@description create the activity chart
 * @param {array} performance
 * @const {object} radarData (data, kind, userId )
 * @param {number} kind //kind of value(cardio, energy, endurance, strength, speed, intensity)
 * @returns Returns number values as string denominations
 */
const RadarCharts = (performance) => {
  const radarData = performance.data.data;

  /**
   * @description Conversion of number data kind of array into number kind of object(object value string)
   */
  const DataRadarTitle = radarData.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };
      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });

  return (
    <div className="spider-analytics">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="55%" data={DataRadarTitle}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

/** 
 *@description display position of denominations (cardio, energy, endurance, strength, speed, intensity) in the radar chart
 * @param {number} payload
 * @param {number} x (axe horizontal)
 * @param {number} y (axe vertical)
 * @param {number} cx (displacement on the horizontal axis)
 * @param {number} cy (displacement on the vertical axis)
 * @returns Returns a positioning and a style
 * */
function renderPolarAngleAxis({ payload, x, y, cx, cy }) {
  return (
    <Text
      horizontalAnchor="middle"
      y={y + (y - (cy + -20)) / 5}
      x={x + (x - (cx + 50)) / 2.5}
      style={{ fill: "rgba(255, 255, 255)", fontSize: 12 }}
    >
      {payload.value}
    </Text>
  );
}

export default RadarCharts;
