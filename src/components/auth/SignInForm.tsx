import { useForm } from "react-hook-form";

interface SignInFormData {
  emailOrUsername: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log("Form Data:", data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
      
      {/* Username or Email */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username or Email"
          {...register("emailOrUsername", {
            required: "Username or Email is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
          })}
          className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 ${
            errors.emailOrUsername
              ? "ring-2 ring-red-500 dark:ring-red-400"
              : "focus:ring-white/30 dark:focus:ring-gray-500"
          }`}
        />
        {errors.emailOrUsername && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.emailOrUsername.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 ${
            errors.password
              ? "ring-2 ring-red-500 dark:ring-red-400"
              : "focus:ring-white/30 dark:focus:ring-gray-500"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <a
        href="#"
        className="text-sm self-start text-blue-500 hover:underline dark:text-blue-400 inline-block"
      >
        Forgot your password?
      </a>

      <button
        type="submit"
        className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-md transition text-black dark:text-white font-medium"
      >
        Sign In
      </button>
    </form>
  );
}