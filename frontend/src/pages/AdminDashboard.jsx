import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaves = async () => {
    try {
      const res = await API.get("/admin/leaves");

      console.log("Leaves:", res.data);

      setLeaves(res.data);
    } catch (error) {
      console.log("Error fetching leaves:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/admin/leave/${id}`, {
        status,
      });

      fetchLeaves();
    } catch (error) {
      console.log("Error updating leave:", error);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            Loading...
          </div>
        ) : leaves.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No Leave Requests Found
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Employee</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((leave) => (
                <tr
                  key={leave._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {leave.userId?.name || "Unknown"}
                  </td>

                  <td className="p-4">
                    {leave.reason}
                  </td>

                  <td className="p-4">
                    {leave.status}
                  </td>

                  <td className="p-4 space-x-2">
                    <button
                      onClick={() =>
                        updateStatus(
                          leave._id,
                          "Approved"
                        )
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          leave._id,
                          "Rejected"
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}