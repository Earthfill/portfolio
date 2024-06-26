import { useContext } from "react"
import { ThemeContext } from "../contexts/ToggleMode"
import { FaMoon, FaSun } from "react-icons/fa6";

const ToggleMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ?  <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" /> }
    </div>
  )
}

export default ToggleMode