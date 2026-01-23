import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "@/context/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
    </button>
  );
}