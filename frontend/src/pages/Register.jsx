export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10">

        <h1 className="text-4xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Department"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl"
          />

          <button
            className="w-full bg-purple-600 text-white p-4 rounded-xl"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}