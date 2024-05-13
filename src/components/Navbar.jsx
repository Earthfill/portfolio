import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { links } from "../data"
import dark from '../images/black-logo.png';
import light from '../images/white_logo.png';
import ToggleMode from "./ToggleMode";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ToggleMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    // Cleanup function to reset overflowY when component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className={`${darkMode ? 'bg-black text-gray-100' : 'bg-white'} w-full`}>
      <div className="align-element py-4">
        {/* Desktop */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <img src={darkMode ? dark : light} alt="light logo" className="w-10 rounded-full" />
          <div className="hidden md:flex gap-x-3">
            {links.map((link) => {
              const { id, text } = link;
              const route = text === 'home' ? '/' : `/${text}`;
              return <Link to={route}
                key={id} 
                className="capitalize text-lg tracking-wide hover:text-blue-600 duration-300"
              >
                {text}
              </Link>
            })}
          </div>
          <div className="hidden md:block">
            <ToggleMode />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between">
          <img src={darkMode ? dark : light} alt="light logo" className="w-10 rounded-full" />
          <div className="flex gap-6">
            <div onClick={() => setIsOpen(!isOpen)} className="">
              {isOpen ? <IoClose /> : <VscThreeBars />}
            </div>
            {isOpen && (
              <div className={`fixed z-50 flex flex-col items-center font-semibold rounded-lg ${darkMode ? 'bg-gray-950 text-gray-200' : 'text-slate-100 bg-blue-500'} gap-5 w-full mt-10 left-0 p-10`}>
                {links.map((link) => {
                  const { id, text } = link;
                  const route = text === 'home' ? '/' : `/${text}`;
                  return <Link to={route} 
                    onClick={() => setIsOpen(!isOpen)}
                    key={id} 
                    className="capitalize text-lg tracking-wide"
                  >
                    {text}
                  </Link>
                })}
              </div>
            )}
            <ToggleMode />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar