import { useContext } from "react";
import { ThemeContext } from "../contexts/ToggleMode";
import { services } from "../data"
import SectionTitle from "./SectionTitle"
import ServicesCard from "./ServicesCard"

const Services = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`align-element py-14 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-blue-100 text-slate-500'}`}>
      <SectionTitle text='services' />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          return <ServicesCard key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services