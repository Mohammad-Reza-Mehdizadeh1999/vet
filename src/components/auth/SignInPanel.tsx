interface SignInPanelProps {
  onSwitch: () => void;
}

export default function SignInPanel({ onSwitch }: SignInPanelProps) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Welcome Back!</h2>
      <p className="text-center mb-6">
        To keep connected with us, please login with your personal info
      </p>
      <button
        onClick={onSwitch}
        className="px-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-white/20 dark:hover:bg-white/5 rounded-md transition text-black dark:text-white"
      >
        Sign In
      </button>
    </>
  );
}