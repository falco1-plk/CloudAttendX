import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [leaves, setLeaves] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaves = async () => {
    try {
      const res = await API.get("/api/admin/leaves");
      setLeaves(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await API.get(
        "/api/admin/attendance"
      );

      setAttendance(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLeaveStatus = async (
    id,
    status
  ) => {
    try {
      await API.put(
        `/api/admin/leave/${id}`,
        { status }
      );

      fetchLeaves();
    } catch (error) {
      console.log(error);
    }
  };

  const updateAttendanceStatus =
    async (id, status) => {
      try {
        await API.put(
          `/api/admin/attendance/${id}`,
          { status }
        );

        fetchAttendance();
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    const loadData = async () => {
      await fetchLeaves();
      await fetchAttendance();
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Leaves</h3>
          <h1 className="text-4xl font-bold text-blue-600">
            {leaves.length}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Pending Leaves</h3>
          <h1 className="text-4xl font-bold text-orange-600">
            {
              leaves.filter(
                (l) =>
                  l.status === "Pending"
              ).length
            }
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Attendance Requests</h3>
          <h1 className="text-4xl font-bold text-green-600">
            {attendance.length}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Pending Attendance</h3>
          <h1 className="text-4xl font-bold text-red-600">
            {
              attendance.filter(
                (a) =>
                  a.status === "Pending"
              ).length
            }
          </h1>
        </div>

      </div>

      {/* Leave Requests */}

      <div className="bg-white rounded-2xl shadow overflow-hidden mb-8">

        <h2 className="text-2xl font-bold p-6">
          Leave Requests
        </h2>

        {loading ? (
          <div className="p-6">
            Loading...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">
                  Employee
                </th>
                <th className="p-4">
                  Reason
                </th>
                <th className="p-4">
                  Status
                </th>
                <th className="p-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((leave) => (
                <tr
                  key={leave._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {leave.userId?.name}
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
                        updateLeaveStatus(
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
                        updateLeaveStatus(
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

      {/* Attendance Requests */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <h2 className="text-2xl font-bold p-6">
          Attendance Requests
        </h2>

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4">
                Employee
              </th>
              <th className="p-4">
                Date
              </th>
              <th className="p-4">
                Status
              </th>
              <th className="p-4">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {attendance.map(
              (record) => (
                <tr
                  key={record._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {
                      record.userId
                        ?.name
                    }
                  </td>

                  <td className="p-4">
                    {new Date(
                      record.date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {record.status}
                  </td>

                  <td className="p-4 space-x-2">

                    <button
                      onClick={() =>
                        updateAttendanceStatus(
                          record._id,
                          "Approved"
                        )
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateAttendanceStatus(
                          record._id,
                          "Rejected"
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>

                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}