import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-blue-600">
            CloudAttendX
          </h1>

          <div className="space-x-4">

           <Link to="/login">
  <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
    Login
  </button>
</Link>

            <Link to="/register">
  <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
    Register
  </button>
</Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Cloud Powered Attendance Platform
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">

              Smart Attendance
              <span className="text-blue-600">
                {" "}Management
              </span>

            </h1>

            <p className="text-lg text-gray-600 mt-6">

              Track attendance, manage leaves,
              generate reports and monitor workforce
              performance using cloud technology.

            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
                Get Started
              </button>

              <button className="border px-8 py-4 rounded-xl">
                Learn More
              </button>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
              alt="cloud"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">

              <h2 className="text-4xl font-bold text-blue-600">
                1000+
              </h2>

              <p>Users</p>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">

              <h2 className="text-4xl font-bold text-green-600">
                99.9%
              </h2>

              <p>Accuracy</p>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">

              <h2 className="text-4xl font-bold text-purple-600">
                24/7
              </h2>

              <p>Cloud Access</p>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">

              <h2 className="text-4xl font-bold text-orange-600">
                50+
              </h2>

              <p>Organizations</p>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                QR Attendance
              </h3>

              <p>
                Secure attendance through QR code scanning.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Leave Management
              </h3>

              <p>
                Apply and manage leaves digitally.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Analytics Dashboard
              </h3>

              <p>
                Real-time reports and attendance insights.
              </p>

            </div>

          </div>

        </div>

      </section>
      <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-16">
      How It Works
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl">
          1
        </div>
        <h3 className="mt-4 font-bold text-xl">Register</h3>
        <p>Create your account.</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-3xl">
          2
        </div>
        <h3 className="mt-4 font-bold text-xl">Login</h3>
        <p>Access dashboard securely.</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-3xl">
          3
        </div>
        <h3 className="mt-4 font-bold text-xl">Mark Attendance</h3>
        <p>QR or cloud verification.</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
          4
        </div>
        <h3 className="mt-4 font-bold text-xl">Generate Reports</h3>
        <p>Instant analytics and exports.</p>
      </div>

    </div>

  </div>

</section>

      {/* Footer */}

      <footer className="bg-slate-900 text-white py-10">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            CloudAttendX
          </h2>

          <p className="text-gray-400 mt-4">
            Smart Attendance Management Platform
          </p>

        </div>

      </footer>

    </div>
  );
}