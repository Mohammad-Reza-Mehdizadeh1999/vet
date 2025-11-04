// src/components/auth/SignUpPanel.tsx
interface SignUpPanelProps {
  onSwitch: () => void;
}

export default function SignUpPanel({ onSwitch }: SignUpPanelProps) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Hello, Friend</h2>
      <p className="text-center mb-6">
        Enter your personal details and start your journey with us
      </p>
      <button
        onClick={onSwitch}
        className="px-6 py-2 bg-white/50 hover:bg-white/20 dark:bg-white/20 dark:hover:bg-white/5 rounded-md transition text-black dark:text-white"
      >
        Sign Up
      </button>
    </>
  );
}