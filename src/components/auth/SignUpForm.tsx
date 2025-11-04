export default function SignUpForm() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Create Account</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full mt-2 px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500"
      />
      <button className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-md transition text-black dark:text-white">
        Sign Up
      </button>
    </>
  );
}