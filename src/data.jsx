import { nanoid } from "nanoid";
import { FaGithub, FaHtml5, FaJs, FaLinkedin, FaMedium, FaReact } from "react-icons/fa6";
import { SiNestjs, SiGit, SiTypescript } from 'react-icons/si';

import shortener from '../src/images/shortener.jpg';
import carReg from '../src/images/car_reg.jpg';
import luxuryMart from '../src/images/luxurymart.jpg';
import shopWise from '../src/images/shopwise.jpg';
import dashboard from '../src/images/dashboard.jpg';
import programmingTutor from '../src/images/programming-tutor.jpg';
import scorer from '../src/images/scorer.jpg';

export const links = [
  { id: nanoid(), text: 'home' },
  { id: nanoid(), text: 'skills' },
  { id: nanoid(), text: 'projects' },
  { id: nanoid(), text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NestJS',
    icon: <SiNestjs className='h-16 w-16 text-blue-500' />,
    text: 'Proficient in NestJS, building scalable and efficient server-side applications with TypeScript and a modular architecture.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <SiGit className='h-16 w-16 text-blue-500' />,
    text: 'Skilled in Git for version control, managing codebase efficiently, and collaborating with teams using version control best practices.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-blue-500' />,
    text: 'Expertise in TypeScript, enhancing codebase maintainability, scalability, and catching errors during development.',
  },
];

export const images = [
  {
    id: nanoid(),
    img: shortener
  },
  {
    id: nanoid(),
    img: carReg
  },
  {
    id: nanoid(),
    img: luxuryMart
  },
  {
    id: nanoid(),
    img: shopWise
  },
  {
    id: nanoid(),
    img: dashboard
  },
  {
    id: nanoid(),
    img: programmingTutor
  },
  {
    id: nanoid(),
    img: scorer
  },
]

export const services = [
  {
    id: nanoid(),
    title: 'Web Design',
    text: 'Effective web design is essential for modern businesses. I specialize in creating visually appealing and user-friendly websites that not only look great but also help drive conversions and achieve business goals.',
  },
  {
    id: nanoid(),
    title: 'Front-end Developement',
    text: 'Crafting seamless user experiences is my passion. I use industry-leading tools like Figma to design pixel-perfect interfaces and then bring them to life with clean, efficient code using HTML, CSS, JavaScript, and modern frameworks like React and TypeScript.',
  },
  {
    id: nanoid(),
    title: 'Backend Development',
    text: 'Building the backbone of your application requires robust and scalable solutions. With expertise in backend technologies such as Node.js, Express.js, and databases like MongoDB, I develop secure, high-performance APIs and server-side logic tailored to your project requirements.',
  },
  {
    id: nanoid(),
    title: 'Consultancy',
    text: 'Navigating complex product challenges can be daunting. I offer consultancy services to assist you with strategic decision-making, project architecture, and design system implementation, ensuring your products are built on a solid foundation for success.'
  },
]

export const projects = [
  {
    id: nanoid(),
    img: shortener,
    url: 'https://shortener-five-sigma.vercel.app/',
    github: 'https://github.com/Earthfill/Shortener',
    title: 'URL Shortener',
    text: 'A simple landing page for URL shortening built with React.js and integrated with the rel.ink API.',
  },
  {
    id: nanoid(),
    img: carReg,
    url: 'https://carreg.netlify.app/',
    github: 'https://github.com/Earthfill/Algon',
    title: 'Car Registration Checker',
    text: 'A solution for checking the registration status of vehicles and paying for various certificates - as well aw viewing the validity periods of each relevant certificate',
  },
  {
    id: nanoid(),
    img: luxuryMart,
    url: 'https://luxuriousmart.netlify.app/',
    github: 'https://github.com/Earthfill/Cozy-Mart.git',
    title: 'Luxurious Mart',
    text: 'An ecommerce website for shopping of luxurious items at affordable prices',
  },
  {
    id: nanoid(),
    img: shopWise,
    url: 'https://shopwisee.netlify.app/',
    github: 'https://github.com/Earthfill/shopwise',
    title: 'Shop Wise',
    text: 'A platform that links buyers to luxury brands for wholesale purchases at affordable prices - also offers coupons among other promotional offerings',
  },
  {
    id: nanoid(),
    img: programmingTutor,
    url: 'https://programming-tutor-two.vercel.app/',
    github: 'https://github.com/Earthfill/Programming-Tutor',
    title: 'Programming Tutor',
    text: 'A central place for all learners to learn various programming skills and methodologies - and also a medium for hirers to get access to top-level vetted talent.',
  },
];

export const socials = [
  {
    id: nanoid(),
    icon: <FaGithub />,
    href: 'https://www.github.com/Earthfill'
  },
  {
    id: nanoid(),
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/kingsley-omiy/'
  },
  {
    id: nanoid(),
    icon: <FaMedium />,
    href: 'https://medium.com/@kingsley.omiy'
  },
]