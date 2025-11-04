// src/components/auth/SignInForm.tsx
export default function SignInForm() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
      <input
        type="text"
        placeholder="Username or Email"
        className="w-full mt-2 px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500"
      />
      <a href="#" className="text-sm mt-3 self-start text-blue-500 hover:underline dark:text-blue-400">
        Forgot your password?
      </a>
      <button className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-md transition text-black dark:text-white">
        Sign In
      </button>
    </>
  );
}