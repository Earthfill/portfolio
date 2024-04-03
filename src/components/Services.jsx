import { services } from "../data"
import SectionTitle from "./SectionTitle"
import ServicesCard from "./ServicesCard"

const Services = () => {
  return (
    <section className="align-element py-14 bg-blue-100">
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