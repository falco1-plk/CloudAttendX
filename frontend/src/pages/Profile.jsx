import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow max-w-2xl">

        <div className="flex items-center gap-6 mb-8">

          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {user?.name}
            </h2>

            <p className="text-gray-500">
              {user?.email}
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="text-gray-500">
              Role
            </h3>
            <p className="text-xl font-semibold">
              {user?.role}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="text-gray-500">
              Department
            </h3>
            <p className="text-xl font-semibold">
              General
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="text-gray-500">
              Employee ID
            </h3>
            <p className="text-xl font-semibold">
              {user?.id?.slice(-6)}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl">
            <h3 className="text-gray-500">
              Status
            </h3>
            <p className="text-xl font-semibold text-green-600">
              Active
            </p>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}