import DashboardLayout from "../layouts/DashboardLayout";
import AttendanceChart from "../components/AttendanceChart";

export default function Dashboard() {
  return (
    <DashboardLayout>

      {/* Analytics Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Attendance</h3>
          <h1 className="text-4xl font-bold text-green-600">
            24
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Present Days</h3>
          <h1 className="text-4xl font-bold text-blue-600">
            22
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Leave Requests</h3>
          <h1 className="text-4xl font-bold text-orange-600">
            3
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Pending Leaves</h3>
          <h1 className="text-4xl font-bold text-red-600">
            1
          </h1>
        </div>

      </div>

      {/* Approval Workflow Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Approved Attendance</h3>
          <h1 className="text-4xl font-bold text-green-600">
            18
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Pending Attendance</h3>
          <h1 className="text-4xl font-bold text-orange-600">
            4
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Approved Leaves</h3>
          <h1 className="text-4xl font-bold text-blue-600">
            7
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Rejected Requests</h3>
          <h1 className="text-4xl font-bold text-red-600">
            2
          </h1>
        </div>

      </div>

      {/* Existing Dashboard Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Present Days
          </h3>

          <h1 className="text-4xl font-bold text-green-600 mt-3">
            24
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Absent Days
          </h3>

          <h1 className="text-4xl font-bold text-red-600 mt-3">
            2
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Attendance %
          </h3>

          <h1 className="text-4xl font-bold text-blue-600 mt-3">
            92%
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Leaves Left
          </h3>

          <h1 className="text-4xl font-bold text-purple-600 mt-3">
            5
          </h1>
        </div>

      </div>

      {/* Attendance Chart */}
      <div className="mt-8">
        <AttendanceChart />
      </div>

      {/* Attendance Approval Workflow */}

      <div className="mt-8 bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Attendance Approval Workflow
        </h2>

        <ul className="space-y-4">

          <li className="bg-orange-50 p-4 rounded-xl">
            ⏳ Employee Attendance Request Submitted
          </li>

          <li className="bg-blue-50 p-4 rounded-xl">
            👨‍💼 Admin Reviews Attendance Request
          </li>

          <li className="bg-green-50 p-4 rounded-xl">
            ✅ Approved Attendance Updates Dashboard & Reports
          </li>

          <li className="bg-red-50 p-4 rounded-xl">
            ❌ Rejected Attendance Will Not Affect Statistics
          </li>

        </ul>

      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        <ul className="space-y-4">

          <li className="bg-green-50 p-4 rounded-xl">
            ✅ Attendance Marked Today
          </li>

          <li className="bg-blue-50 p-4 rounded-xl">
            📋 Leave Request Approved
          </li>

          <li className="bg-purple-50 p-4 rounded-xl">
            📈 Monthly Report Generated
          </li>

        </ul>

      </div>

    </DashboardLayout>
  );
}