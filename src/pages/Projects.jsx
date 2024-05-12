import { useContext } from "react";
import { ProjectsCard, SectionTitle } from "../components"
import { ThemeContext } from "../contexts/ToggleMode";
import { projects } from "../data"

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`${darkMode ? 'text-gray-200' : ''} pt-10 pb-5 md:pb-32 align-element`}>
      <SectionTitle text='Projects' />
      <div className="py-16 grid gap-8">
        {projects.map((project, index) => {
          return <ProjectsCard key={project.id} {...project} index={index} />
        })}
      </div>
    </section>
  )
}

export default Projects