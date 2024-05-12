import { FaCheck } from "react-icons/fa6"

const ServicesCard = ({ title, text }) => {
  return (
    <article>
      <div className="flex gap-x-3">
        <FaCheck className="text-blue-500 text-7xl"/>
        <div className="mt-6">
          <h4 className="font-bold">
            {title}
          </h4>
          <p className="mt-2">
            {text}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ServicesCard