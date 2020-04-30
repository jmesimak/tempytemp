import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function App() {
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    const getTemps = async () => {
      const response = await fetch("http://nullhammer.fi:3000/temps");
      const data = await response.json();
      setTemps(data);
      console.log(data);
    };

    getTemps();
  }, []);

  return (
    <div className="App">
      <LineChart
        width={500}
        height={300}
        data={temps}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default App;
