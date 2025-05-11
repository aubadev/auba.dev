import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData, ProjectCategory } from "@/lib/constants";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-light-600">
            Welcome to my portfolio! Here, you will discover a selection of both
            personal and client-driven projects that I've developed over the years. 
            Each project showcases the challenges faced, solutions implemented, 
            and the technologies used to bring these ideas to life.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-dark-850 text-light-600 hover:bg-primary hover:text-white'
            } transition-colors duration-300`}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'web' 
                ? 'bg-primary text-white' 
                : 'bg-dark-850 text-light-600 hover:bg-primary hover:text-white'
            } transition-colors duration-300`}
            onClick={() => setActiveCategory('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'game' 
                ? 'bg-primary text-white' 
                : 'bg-dark-850 text-light-600 hover:bg-primary hover:text-white'
            } transition-colors duration-300`}
            onClick={() => setActiveCategory('game')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Game Servers
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'client' 
                ? 'bg-primary text-white' 
                : 'bg-dark-850 text-light-600 hover:bg-primary hover:text-white'
            } transition-colors duration-300`}
            onClick={() => setActiveCategory('client')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Client Projects
          </motion.button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
