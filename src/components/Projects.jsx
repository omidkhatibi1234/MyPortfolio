import assets from "../assets/assets";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: assets.paprika,
    title: "Paprika Website",
    description:
      "This is a real project and developed for a client, with the front-end created by me using React.js and the back-end developed by my colleague using Express.",
    technologies: ["Html", "Tailwind", "React.js", "MangoDB", "Express"],
    url: "https://www.paprika-protein.ir/",
  },
  {
    image: assets.realEstate,
    title: "Real Estate",
    description:
      "This project was a practice project and is fully capable of connecting to the back end.",
    technologies: ["Html", "Tailwind", "React.js", "Framer Motion"],
    url: "https://real-estate-smoky-seven.vercel.app/",
  },
  {
    image: assets.guessMyNumberGame,
    title: "Guess My Number Game",
    description:
      "This project is programmed using Vanilla JavaScript and has a fun aspect, where you need to guess a number between 1 and 20 at each step.",
    technologies: ["Html", "Css", "Javascript"],
    url: "https://guess-number-game-alpha.vercel.app/",
  },
  {
    image: assets.todoList,
    title: "To-Do List App",
    description:
      "This project is built using React.js and serves as a tool for reminding and managing daily tasks.",
    technologies: ["Html", "Tailwind", "React.js"],
    url: "https://todo-list-app-eta-murex.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCart = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-md font-bold text-white shadow-sm shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-indigo-600 text-center"
            >
              View This Project
            </a>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen w-full items-center justify-center gap-16 p-4 md:px-14"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex flex-col w-full max-w-[1000px] gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCart key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
