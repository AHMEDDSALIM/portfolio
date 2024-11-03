import ProjectCard from '../components/ProjectCard';
import dnoteimage from '../assets/projectImages/Dental Notes.png';
import comingSoon from '../assets/projectImages/comingSoon.gif';
import { motion } from 'framer-motion';
const projects = [
  {
    id: 1,
    name: 'Dental Notes',
    desc: "simple patients management system built using react and the back managed by firebase also it's comes with desktop app that can work offline and sync the data when online.",
    releaseDate: '2 Months ago',
    image: dnoteimage,
    link: 'https://dental-notes-738ca.web.app',
  },
  {
    id: 2,
    name: 'Coming soon..',
    desc: 'Cooking something ',
    releaseDate: '',
    image: comingSoon,
    link: '/',
  },
];
function Projects() {
  return (
    <div className="flex flex-col items-center mt-10 overflow-y-auto h-3/5">
      <h1 className="text-[#34495E] text-3xl mb-10">My Projects</h1>
      <div className="w-11/12">
        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(384px,1fr))] gap-3 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                desc={project.desc}
                releaseDate={project.releaseDate}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
