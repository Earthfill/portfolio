import { useContext } from "react";
import { SectionTitle, SkillsCard } from "../components"
import { ThemeContext } from "../contexts/ToggleMode";
import { skills } from "../data"

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`${darkMode ? 'text-gray-200' : 'text-slate-500'} pt-10 pb-5 md:pb-32 align-element`}>
      <SectionTitle text='tech skills' />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}

export default Skills