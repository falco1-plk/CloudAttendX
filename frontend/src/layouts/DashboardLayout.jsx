import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaCalendarCheck,
  FaClipboardList,
  FaUser,
  FaCog,
  FaBars,
  FaSignOutAlt,
  FaUserShield,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const isAdmin =
    user?.role === "admin";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-72 bg-slate-900 text-white transition-all duration-300">

          <div className="p-6 border-b border-slate-700">
            <h1 className="text-3xl font-bold">
              CloudAttendX
            </h1>

            <p className="text-sm text-slate-400 mt-2">
              {isAdmin
                ? "Administrator"
                : "Employee Portal"}
            </p>
          </div>

          <nav className="p-5 space-y-4">

            {/* Dashboard */}

            <Link
              to={
                isAdmin
                  ? "/admin"
                  : "/dashboard"
              }
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
            >
              <FaHome />
              {isAdmin
                ? "Admin Dashboard"
                : "Dashboard"}
            </Link>

            {/* Employee Menu */}

            {!isAdmin && (
              <>
                <Link
                  to="/attendance"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
                >
                  <FaCalendarCheck />
                  Attendance
                </Link>

                <Link
                  to="/leave"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
                >
                  <FaClipboardList />
                  Leave
                </Link>
              </>
            )}

            {/* Admin Menu */}

            {isAdmin && (
              <>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
                >
                  <FaUserShield />
                  Leave Approvals
                </Link>

                <Link
                  to="/admin"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
                >
                  <FaUsers />
                  Attendance Requests
                </Link>

                <Link
                  to="/admin"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
                >
                  <FaChartBar />
                  Analytics
                </Link>
              </>
            )}

            {/* Common */}

            <Link
              to="/profile"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
            >
              <FaUser />
              Profile
            </Link>

            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 cursor-pointer">
              <FaCog />
              Settings
            </div>

            <div
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-700 cursor-pointer text-red-400"
            >
              <FaSignOutAlt />
              Logout
            </div>

          </nav>

        </aside>
      )}

      {/* Main Content */}

      <main className="flex-1">

        <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setSidebarOpen(
                  !sidebarOpen
                )
              }
              className="text-2xl text-slate-700 hover:text-blue-600"
            >
              <FaBars />
            </button>

            <h2 className="text-2xl font-bold">
              {isAdmin
                ? "Admin Portal"
                : "Employee Portal"}
            </h2>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-500"></div>

            <div>
              <p className="font-semibold">
                {user?.name}
              </p>

              <p className="text-xs text-gray-500 capitalize">
                {user?.role}
              </p>
            </div>

          </div>

        </header>

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  );
}