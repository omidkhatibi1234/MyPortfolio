import myImg from "../assets/assets";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
  },
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
  },
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
  },
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
  },
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
  },
  {
    image: myImg,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi architecto officia suscipit voluptatem libero excepturi sapiente ab possimus sed! Nesciunt dolorum voluptate, eos vero aut praesentium voluptas pariatur quia quo.",
    technologies: ["Html", "Css", "Javascript", "MySQL"],
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
