import { useState } from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignUpPanel from "../../components/auth/SignUpPanel";
import SignInPanel from "../../components/auth/SignInPanel";
import SignUpForm from "../../components/auth/SignUpForm";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center text-black dark:text-white p-4"
      style={{
        backgroundImage: "url('/imagedark.jpg')",
      }}
    >
      <div className="w-full max-w-[850px] h-auto md:h-[500px] bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 dark:border-gray-700/30 overflow-hidden relative">

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col h-full">
          {isSignIn ? (
            <div className="w-full p-6">
              <div className="mb-6 pb-6 border-b border-white/10">
                <SignUpPanel onSwitch={() => setIsSignIn(false)} />
              </div>
              <SignInForm />
            </div>
          ) : (
            <div className="w-full p-6">
              <div className="mb-6 pb-6 border-b border-white/10">
                <SignInPanel onSwitch={() => setIsSignIn(true)} />
              </div>
              <SignUpForm />
            </div>
          )}
        </div>

        {/* Desktop Layout - Sliding Animation */}
        <div
          className="hidden md:flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: isSignIn ? "translateX(0)" : "translateX(-50%)",
            width: "200%",
          }}
        >
          {/* Sign In View */}
          <div className="w-1/2 h-full flex shrink-0">
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10">
              <SignInForm />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white/5 dark:bg-white/15 border-l border-white/10 dark:border-gray-700/30">
              <SignUpPanel onSwitch={() => setIsSignIn(false)} />
            </div>
          </div>

          {/* Sign Up View */}
          <div className="w-1/2 h-full flex shrink-0">
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white/5 dark:bg-white/15 border-r border-white/10 dark:border-gray-700/30">
              <SignInPanel onSwitch={() => setIsSignIn(true)} />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10">
              <SignUpForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}