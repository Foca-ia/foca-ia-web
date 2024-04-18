import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2018",
    Negativos: 4000,
    Positivos: 2400,
    amt: 2400,
  },
  {
    name: "2019",
    Negativos: 3000,
    Positivos: 1398,
    amt: 2210,
  },
  {
    name: "2020",
    Negativos: 2000,
    Positivos: 9800,
    amt: 2290,
  },
  {
    name: "2021",
    Negativos: 2780,
    Positivos: 3908,
    amt: 2000,
  },
  {
    name: "2022",
    Negativos: 1890,
    Positivos: 4800,
    amt: 2181,
  },
  {
    name: "2023",
    Negativos: 2390,
    Positivos: 3800,
    amt: 2500,
  },
  {
    name: "2024",
    Negativos: 3490,
    Positivos: 4300,
    amt: 2100,
  },
];

export default class LineAreachart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            dataKey="Negativos"
            stroke="#EA8F95"
            activeDot={{ r: 8 }}
            style={{
              filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.7))", // Adicione a sombra aqui
            }}
          />
          <Line
            type="natural"
            dataKey="Positivos"
            stroke="#36D2E0"
            style={{
              filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.7))", // Adicione a sombra aqui
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
