import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ToggleMode";

const ProjectsCard = ({ img, url, github, title, text, index }) => {
  const { darkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-lg lg:px-20 md:py-10 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="grid md:grid-cols-2 gap-10 md:align-element text-center p-5">
        <img 
          src={img} 
          alt={title} 
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease' }}
        />
        <div className={`md:text-left md:self-center md:grid gap-5 flex flex-col items-center ${isEven ? 'md:order-last' : 'md:order-first'}`}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-500'}`}>{text}</p>
          <div className="flex gap-4">
            <a href={url} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Visit Website
            </a>
            <a href={github} className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
