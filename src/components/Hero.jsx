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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corporis commodi atque nisi minus repellendus eveniet accusamus, hic
            provident omnis aspernatur assumenda voluptas impedit temporibus
            cumque rerum quia quis veritatis?
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
