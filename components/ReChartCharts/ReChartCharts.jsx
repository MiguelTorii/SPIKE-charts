import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const ReChartCharts = ({ data }) => {
  console.log(data);

  const parseData = () => {
    return data?.map((item, idx) => {
      return item.x.map((xInfo, xIdx) => {
        return { name: xInfo, [`${idx === 0 ? "pv" : "uv"}`]: item.y[xIdx] };
      });
    });
  };

  const test = parseData();

  const test2 = test[0].map((item, idx) => ({ ...item, ...test[1][idx] }));

  console.log(test2);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>ReCharts </h2>
        <div style={{ marginLeft: "1em" }} />
        <a href="https://recharts.org/en-US/api"> docs</a>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={test2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, "dataMax+50"]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <ReferenceLine
            y={120}
            label="Max"
            stroke="red"
            strokeDasharray="2 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChartCharts;
