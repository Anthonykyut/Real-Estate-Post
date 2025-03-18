import Link from "next/link";

export default function EditProfile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit Profile</h2>

        <form className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <Link href="/homepage">
            <button className="px-30 bg-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-400 transition duration-200">
              Cancel
            </button>
            </Link>
            <button className="w-[48%] bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
