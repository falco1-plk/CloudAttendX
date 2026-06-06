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
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
          </div>

          <nav className="p-5 space-y-4">

            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
            >
              <FaHome />
              Dashboard
            </Link>

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
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-2xl text-slate-700 hover:text-blue-600"
            >
              <FaBars />
            </button>

            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-500"></div>

            <span>{JSON.parse(localStorage.getItem("user"))?.name}
</span>
          </div>

        </header>

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  );
}