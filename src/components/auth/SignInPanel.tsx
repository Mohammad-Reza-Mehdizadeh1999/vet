interface SignInPanelProps {
  onSwitch: () => void;
}

export default function SignInPanel({ onSwitch }: SignInPanelProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold ">Welcome Back!</h2>
      <p className="text-center py-4 md:py-7">
        To keep connected with us, please login with your personal info
      </p>
      <button
        onClick={onSwitch}
        className="px-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-white/20 dark:hover:bg-white/5 rounded-md transition text-black dark:text-white"
      >
        Sign In
      </button>
    </div>
  );
}