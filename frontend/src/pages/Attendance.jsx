import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";
  export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAttendance = async () => {
    try {
      const res = await API.get("/api/attendance");

      setRecords(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const markAttendance = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await API.post("/api/attendance", {
        userId: user.id,
        status: "Present",
        checkIn: "09:00 AM",
        checkOut: "05:00 PM",
      });

      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Attendance Management
        </h1>

       <button
  onClick={markAttendance}
  className="bg-green-600 text-white px-6 py-3 rounded-xl"
>
  Mark Attendance
</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Present Days</h3>
          <h1 className="text-4xl font-bold text-green-600">
            24
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Absent Days</h3>
          <h1 className="text-4xl font-bold text-red-600">
            2
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Attendance Rate</h3>
          <h1 className="text-4xl font-bold text-blue-600">
            92%
          </h1>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Check In</th>
              <th className="p-4 text-left">Check Out</th>
            </tr>

          </thead>

          <tbody>
  {loading ? (
    <tr>
      <td
        colSpan="4"
        className="text-center p-8"
      >
        Loading...
      </td>
    </tr>
  ) : (
    records.map((record, index) => (
      <tr
        key={index}
        className="border-b"
      >
        <td className="p-4">
          {new Date(
            record.date
          ).toLocaleDateString()}
        </td>

        <td className="p-4">
          {record.status}
        </td>

        <td className="p-4">
          {record.checkIn}
        </td>

        <td className="p-4">
          {record.checkOut}
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>

      </div>
    </DashboardLayout>
  );
}