import assets from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={assets.myImg}
            alt=""
            className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hove:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-[600px] items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text transition-all text-transparent text-5xl  font-light md:text-7xl">
            Omid Khatibi
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text transition-all text-transparent text-2xl md:text-3xl">
            Front-End Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Hello there! My name is Omid, a passionate frontend web developer
            and optimization enthusiast fluent in Persian and English. While my
            primary goal is to consistently improve my skills and expand my
            knowledge, I currently work as a freelancer, creating seamless user
            experiences and fine-tuning website performance. However, I'm also
            open to remove or in-person positions. In addition, I take pleasure
            in sharing my experience with fellow developers and have been
            willingly contributing to various developer communities on social
            media platforms for a couple years now.
          </p>
          <a href="../public/OmidKhatibi-Resume.pdf" download>
            <button className="text-nowrap rounded-lg border border-indigo-600 bg-black px-10 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600 text-center mt-7">
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
