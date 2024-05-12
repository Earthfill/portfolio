import { Link } from "react-router-dom";
import { socials } from "../data";
import heroimg from '../images/heroimg.svg';
import AnimateText from "./AnimateText";
import { GoArrowUpRight } from 'react-icons/go';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ToggleMode";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`align-element ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-blue-100'} py-24`}>
      <div className="grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I&#39;m Kingslee
          </h1>
          <div className={`mt-2 text-lg ${darkMode ? 'text-gray-200' : 'text-slate-700' } tracking-wide`}>
            <p className="capitalize">
              Fullstack Developer
            </p>
            <div>
              <AnimateText />
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            {socials.map((social) => {
              const { id, icon, href } = social;
              return <a key={id} href={href} target="_blank" className={`${darkMode ? 'text-gray-200' : 'text-slate-500'} text-2xl`}>
                {icon}
              </a>
            })}
          </div>
          <div className="mt-5 bg-blue-600 w-fit rounded-full text-white font-bold hover:bg-blue-500 animate-pulse hover:animate-none">
            <Link to='/contact' className="flex items-center gap-3 px-4 py-2">HIRE ME <GoArrowUpRight /></Link>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroimg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}

export default Hero