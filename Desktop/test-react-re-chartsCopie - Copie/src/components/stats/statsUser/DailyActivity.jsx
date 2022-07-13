import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * @description Creating a daily activity chart with recharts
 * @param {array | number} activity
 * @const {array | number} activityData
 * @const {array | number} activitySessions
 * @returns Returns a daily activity graph with data from an API
 */
const DailyActivity = (activity) => {
  const activityData = activity.data.data;
  const activitySessions = activityData.sessions;

  /**
   * @description Conversion of "Dates" data into days over a week
   */
  const dayActivity = activitySessions.map((data) => {
    switch (new Date(data.day).getDate()) {
      case 1:
        return { ...data, day: "1" };
      case 2:
        return { ...data, day: "2" };
      case 3:
        return { ...data, day: "3" };
      case 4:
        return { ...data, day: "4" };
      case 5:
        return { ...data, day: "5" };
      case 6:
        return { ...data, day: "6" };
      case 7:
        return { ...data, day: "7" };
      default:
        return { ...data };
    }
  });

  /**
   * @description conversion of energy units
   * @param {number} C calories data
   * @returns Returns converted values (calories => KCal) in result bars
   */
  let Kcal = (C) => {
    return C.calories / 1000;
  };

  /**
   * @description Conversion of weight units
   * @param {number} W weights data
   * @returns Returns converted values in result bars adapt size
   */
  let Kg = (W) => {
    return W.kilogram / 500;
  };

  /**
   * @description Creating a custom tooltip
   * @param {number | string} param0
   * @returns Returns converted values and denominations in tooltip
   */
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="labelDailyActivity">{`${payload[1].value} KCal`}</p>
          <p className="desc">{` ${payload[0].value * 500} Kg`}</p>
        </div>
      );
    }
    return null;
  }

  /**
   * @description Creation of a function to adapt the replacement color
   * @param {color} value
   * @returns Returns the desired color on the texts in the legend
   */
  const renderColorfulLegendText = (value) => {
    return <span style={{ color: "#74798C" }}>{value}</span>;
  };

  return (
    <div className="daily-activity">
      <p className="titleDailyActivity">Activité quotidienne</p>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dayActivity}
          margin={{
            top: 15,
            right: 0,
            left: 25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" style={{ fill: "#9B9EAC", fontSize: 14 }} />
          <YAxis
            orientation={"right"}
            dataKey={Kcal}
            //ticks={[0, 0.3, 0.6]}
            style={{ fill: "#9B9EAC", fontSize: 14 }}
            tickCount="3"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={90}
            align="right"
            iconType="circle"
            iconSize={10}
            formatter={renderColorfulLegendText}
          />
          <Bar
            name="Poids (Kg)"
            dataKey={Kg}
            fill="#282D30"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
          <Bar
            name="Calories brûlées (KCal)"
            dataKey={Kcal}
            fill="#E60000"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
