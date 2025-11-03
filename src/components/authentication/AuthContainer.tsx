import { useState } from "react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/images.jpg')",
      }}
    >
      <div className="w-[850px] h-[500px] bg-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md border border-white/10 overflow-hidden">
        <div className="flex w-full h-full">
          {/* سمت چپ — با انیمیشن */}
          <div
            className="w-1/2 h-full flex flex-col justify-center items-center p-10 transition-all duration-700 ease-in-out"
            style={{
              transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
              opacity: isSignIn ? 1 : 0,
              position: 'relative',
              zIndex: isSignIn ? 10 : 1,
            }}
          >
            <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full mt-2 px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <a href="#" className="text-sm mt-3 self-start hover:underline">
              Forgot your password?
            </a>
            <button className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 rounded-md transition">
              Sign In
            </button>
          </div>

          {/* سمت راست — با انیمیشن */}
          <div
            className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white/5 border-l border-white/10 transition-all duration-700 ease-in-out"
            style={{
              transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
              opacity: isSignIn ? 1 : 0,
              position: 'relative',
              zIndex: isSignIn ? 10 : 1,
            }}
          >
            <h2 className="text-3xl font-semibold mb-4">Hello, Friend</h2>
            <p className="text-center mb-6">
              Enter your personal details and start your journey with us
            </p>
            <button
              onClick={() => setIsSignIn(false)}
              className="px-6 py-2 bg-white/50 hover:bg-white/20 rounded-md transition"
            >
              Sign Up
            </button>
          </div>

          {/* سمت چپ — حالت Sign Up (پنل) */}
          <div
            className="w-1/2 h-full flex flex-col justify-center items-center p-10 transition-all duration-700 ease-in-out absolute top-0 left-0"
            style={{
              transform: isSignIn ? 'translateX(-100%)' : 'translateX(0)',
              opacity: isSignIn ? 0 : 1,
              zIndex: isSignIn ? 1 : 10,
            }}
          >
            <h2 className="text-3xl font-semibold mb-4">Welcome Back!</h2>
            <p className="text-center mb-6">
              To keep connected with us, please login with your personal info
            </p>
            <button
              onClick={() => setIsSignIn(true)}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition"
            >
              Sign In
            </button>
          </div>

          {/* سمت راست — حالت Sign Up (فرم) */}
          <div
            className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white/5 border-l border-white/10 transition-all duration-700 ease-in-out absolute top-0 left-1/2"
            style={{
              transform: isSignIn ? 'translateX(100%)' : 'translateX(0)',
              opacity: isSignIn ? 0 : 1,
              zIndex: isSignIn ? 1 : 10,
            }}
          >
            <h2 className="text-3xl font-semibold mb-6">Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-2 px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="w-full mt-6 py-2 bg-white/50 hover:bg-white/20 rounded-md transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}