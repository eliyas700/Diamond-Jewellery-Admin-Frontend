import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineBarChart } from "react-icons/ai";
const data = [
  {
    name: "Monday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 0,
    pv: 0,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 0,
    pv: 0,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 0,
    pv: 0,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 0,
    pv: 0,
    amt: 2100,
  },
];

const SalesAnalytics = () => {
  return (
    <div className="bg-white p-3">
      <div className=" text-black-50 d-flex my-2 align-items-center">
        <AiOutlineBarChart size={32} />
        <h3 className="ms-2">Sales Analytics</h3>
      </div>
      <BarChart width={530} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SalesAnalytics;
