// WIP: NOT IMPLEMENTED YET!

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CompareChart(props) {
    console.log(props)
    return (
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" aspect={1} height="450">
          <AreaChart
            data={props.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="a" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="b" stroke="#837462" fill="#2344d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }