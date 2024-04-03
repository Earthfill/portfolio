import { SectionTitle, SkillsCard } from "../components"
import { skills } from "../data"

const Skills = () => {
  return (
    <section className="pt-10 pb-5 md:pb-32 align-element">
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