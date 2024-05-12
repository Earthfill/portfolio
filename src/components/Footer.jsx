import { useContext } from "react";
import { ThemeContext } from "../contexts/ToggleMode";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <div className={`w-full ${darkMode ? 'bg-black text-gray-200' : 'bg-white'} text-sm flex flex-col items-center gap-y-1 py-3`}>
      <p>Built with <span className="text-red-600">&hearts;</span></p>
      <p>&copy; Kingsley Omoaka-Iyorah {currentYear}</p>
    </div>
  )
}

export default Footer