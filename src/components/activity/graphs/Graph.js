import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    performance: 10,
  },
  {
    name: "Feb",
    performance: 5,
  },
  {
    name: "March",
    performance: 11,
  },
  {
    name: "April",
    performance: 20,
  },
  {
    name: "May",
    performance: 13,
  },
  {
    name: "June",
    performance: 28,
  },
  {
    name: "July",
    performance: 18,
  },
  {
    name: "Aug",
    performance: 4,
  },
  {
    name: "Sept",
    performance: 13,
  },
  {
    name: "Oct",
    performance: 12,
  },
  {
    name: "Nov",
    performance: 13,
  },
  {
    name: "Dec",
    performance: 5,
  },
];

const BarGraph = () => {
  return (
    <ResponsiveContainer height={250} width={"95%"}>
      <LineChart
        style={{ paddingTop: "50px" }}
        width={"50vw"}
        height={300}
        data={data}
      >
        <Line type="monotone" dataKey="performance" stroke="#3340fa" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
