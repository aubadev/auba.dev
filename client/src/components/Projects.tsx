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
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-transparent bg-clip-text text-gradient rounded-full text-sm font-medium mb-4 border border-accent/20">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mb-6">
            <span className="text-wave">
              {Array.from("Featured Projects").map((letter, i) => (
                <span key={i} style={{"--i": i} as React.CSSProperties}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
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
                ? 'bg-gradient-to-r from-primary to-primary-light text-white font-medium' 
                : 'bg-dark-850 text-light-600 hover:bg-primary/10 hover:text-primary'
            } transition-all duration-300`}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'web' 
                ? 'bg-gradient-to-r from-secondary to-secondary-light text-white font-medium' 
                : 'bg-dark-850 text-light-600 hover:bg-secondary/10 hover:text-secondary'
            } transition-all duration-300`}
            onClick={() => setActiveCategory('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'game' 
                ? 'bg-gradient-to-r from-accent to-accent-light text-white font-medium' 
                : 'bg-dark-850 text-light-600 hover:bg-accent/10 hover:text-accent'
            } transition-all duration-300`}
            onClick={() => setActiveCategory('game')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Game Servers
          </motion.button>
          
          <motion.button 
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'client' 
                ? 'bg-gradient-to-r from-primary to-secondary text-white font-medium' 
                : 'bg-dark-850 text-light-600 hover:bg-primary/10 hover:text-primary'
            } transition-all duration-300`}
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
