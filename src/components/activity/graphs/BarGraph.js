import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 10,
  },
  {
    name: "Feb",
    uv: 12,
  },
  {
    name: "March",
    uv: 11,
  },
  {
    name: "April",
    uv: 14,
  },
  {
    name: "May",
    uv: 14,
  },
  {
    name: "June",
    uv: 15,
  },
  {
    name: "July",
    uv: 10,
  },
  {
    name: "Aug",
    uv: 12,
  },
  {
    name: "Sept",
    uv: 13,
  },
  {
    name: "Oct",
    uv: 11,
  },
  {
    name: "Nov",
    uv: 11,
  },
  {
    name: "Dec",
    uv: 10,
  },
];

const BarGraph = () => {
  return (
    <ResponsiveContainer width={"100%"} height={125}>
      <BarChart width={150} height={10} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
