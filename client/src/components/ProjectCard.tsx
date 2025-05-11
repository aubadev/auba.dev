import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Project } from "@/lib/constants";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { title, description, year, image, technologies, categories } = project;

  // Get appropriate icon for each technology
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'html':
        return <FaCode />;
      case 'css':
        return <FaCss3Alt />;
      case 'javascript':
        return <FaJsSquare />;
      case 'lua':
        return <FaCode />;
      case 'php':
        return <FaCode />;
      default:
        return <FaCode />;
    }
  };

  return (
    <motion.div 
      className="perspective"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className="project-card bg-dark-850/90 backdrop-blur-sm rounded-2xl overflow-hidden card-hover border border-dark-800"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative aspect-video overflow-hidden group">
          {/* Project image */}
          <img 
            src={image} 
            alt={`${title} Project`} 
            className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Image overlay with 3D gradient glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/10 via-secondary/5 to-accent/10 transition-opacity duration-700"></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
          
          {/* Year badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 bg-gradient-to-r from-primary to-primary-light text-xs font-medium text-white rounded-md">
              {year}
            </span>
          </div>
          
          {/* Category badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {categories.map((category) => {
              let label = "";
              let bgColor = "";
              
              if (category === "web") {
                label = "Web";
                bgColor = "bg-gradient-to-r from-secondary to-secondary-light";
              }
              if (category === "game") {
                label = "Game";
                bgColor = "bg-gradient-to-r from-accent to-accent-light";
              }
              if (category === "client") {
                label = "Client";
                bgColor = "bg-gradient-to-r from-primary to-secondary";
              }
              
              return (
                <span key={category} className={`px-2 py-1 ${bgColor} text-xs font-medium text-white rounded-md`}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
          
          <p className="text-light-600 mb-6">{description}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech) => {
              // Alternierende Farben für die Technologien
              const techColors = {
                HTML: "text-primary",
                CSS: "text-secondary",
                JavaScript: "text-accent",
                Lua: "text-primary",
                PHP: "text-secondary"
              };
              
              // @ts-ignore
              const colorClass = techColors[tech] || "text-primary";
              
              return (
                <span key={tech} className={`${colorClass} text-xs font-medium flex items-center gap-1`}>
                  {getTechIcon(tech)} {tech}
                </span>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center">
            <motion.button 
              className="text-white font-medium text-sm flex items-center gap-2 hover:text-accent transition-colors duration-300"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Details</span>
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
