import { useForm } from "react-hook-form";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const password = watch("password");

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form Data:", data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-3xl font-semibold mb-6">Create Account</h2>
      
      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Name can only contain letters",
            },
          })}
          className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 ${
            errors.name
              ? "ring-2 ring-red-500 dark:ring-red-400"
              : "focus:ring-white/30 dark:focus:ring-gray-500"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 ${
            errors.email
              ? "ring-2 ring-red-500 dark:ring-red-400"
              : "focus:ring-white/30 dark:focus:ring-gray-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: "Password must contain uppercase, lowercase, and number",
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

      {/* Confirm Password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-gray-800/20 dark:border dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white focus:outline-none focus:ring-2 ${
            errors.confirmPassword
              ? "ring-2 ring-red-500 dark:ring-red-400"
              : "focus:ring-white/30 dark:focus:ring-gray-500"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-md transition text-black dark:text-white font-medium"
      >
        Sign Up
      </button>
    </form>
  );
}