import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Leave() {
  const [leaves, setLeaves] = useState([]);
  const [reason, setReason] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchLeaves = async () => {
    try {
      const res = await API.get("/leave");
      setLeaves(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyLeave = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await API.post("/leave", {
        userId: user.id,
        reason,
        fromDate,
        toDate,
      });

      setReason("");
      setFromDate("");
      setToDate("");

      fetchLeaves();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Leave Management
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Apply Leave
        </h2>

        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="date"
          value={fromDate}
          onChange={(e) =>
            setFromDate(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) =>
            setToDate(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={applyLeave}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Apply Leave
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4">Reason</th>
              <th className="p-4">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            {leaves.map((leave) => (
              <tr key={leave._id}>
                <td className="p-4">
                  {leave.reason}
                </td>

                <td className="p-4">
                  {new Date(
                    leave.fromDate
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  {new Date(
                    leave.toDate
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  {leave.status}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}