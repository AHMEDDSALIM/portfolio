import { motion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center mt-12 md:mt-44 gap-16 sm:gap-4 md:gap-20">
      <div className="flex md:flex-row w-11/12 flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col w-9/12 md:w-6/12 justify-center order-2 md:-order-none items-center md:items-start gap-1"
        >
          <h2 className="text-[#F05454] text-xl lg:text-2xl">
            Hello, my name is Ahmed
          </h2>
          <h1 className="text-4xl lg:text-5xl text-[#34495E] font-bold text-nowrap">
            I make Websites
          </h1>
          <div className="text-center md:text-start">
            <p className="text-2xl lg:text-3xl">
              I’m a front-end developer with a passion for creating intuitive
              and visually appealing user experiences.
            </p>
          </div>
          <a
            target="_blank"
            href="/"
            className="bg-[#F05454] pt-1 pb-1 pl-4 pr-4 rounded-lg mt-3 text-lg hover:bg-[#D94343]"
          >
            Download my resume
          </a>
        </motion.div>
        <div className="w-9/12 md:w-6/12 flex justify-center md:justify-end">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#F05454] imageBackground w-64 h-64 sm:w-96 sm:h-96"
          ></motion.div>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
}
