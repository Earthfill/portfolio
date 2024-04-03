import { socials } from "../data";
import heroimg from '../images/heroimg.svg';
import AnimateText from "./AnimateText";

const Hero = () => {
  return (
    <div className="align-element bg-blue-100 py-24">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I&#39;m Kingslee
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Fullstack Developer
          </p>
          <div className="mt-2 text-lg text-slate-700 tracking-wide">
            <AnimateText />
          </div>
          <div className="flex gap-x-4 mt-4">
            {socials.map((social) => {
              const { id, icon, href } = social;
              return <a key={id} href={href} target="_blank" className="text-slate-500 text-2xl">
                {icon}
              </a>
            })}
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