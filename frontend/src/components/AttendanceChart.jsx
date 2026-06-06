import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", attendance: 20 },
  { month: "Feb", attendance: 22 },
  { month: "Mar", attendance: 18 },
  { month: "Apr", attendance: 25 },
  { month: "May", attendance: 24 },
  { month: "Jun", attendance: 26 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Attendance Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attendance"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}