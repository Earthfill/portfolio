// export { default as HomeLayout } from './HomeLayout';
// export { default as Error } from './Error';
// export { default as Skills } from './Skills';
// export { default as Contact } from './Contact';
// export { default as Projects } from './Projects';

import { lazyWithDelay } from "../utils";

const HomeLayout = lazyWithDelay(() => import("./HomeLayout"), 1250);
const Error = lazyWithDelay(() => import("./Error"), 1250);
const Skills = lazyWithDelay(() => import("./Skills"), 1250);
const Contact = lazyWithDelay(() => import("./Contact"), 1250);
const Projects = lazyWithDelay(() => import("./Projects"), 1250);
const Landing = lazyWithDelay(() => import("./Landing"), 1250);

export { HomeLayout, Landing, Error, Skills, Contact, Projects };
