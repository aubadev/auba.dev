import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Project } from "@/lib/constants";

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
        className="project-card bg-dark-850 rounded-2xl overflow-hidden card-hover"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative aspect-video overflow-hidden">
          {/* Project image */}
          <img 
            src={image} 
            alt={`${title} Project`} 
            className="w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
          
          {/* Year badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 bg-primary text-xs font-medium text-white rounded-md">
              {year}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => {
              let label = "";
              if (category === "web") label = "Web Development";
              if (category === "game") label = "Game Server";
              if (category === "client") label = "Client Project";
              
              return (
                <span key={category} className="px-2 py-1 bg-dark text-xs text-light-600 rounded-md">
                  {label}
                </span>
              );
            })}
          </div>
          
          <p className="text-light-600 mb-6">{description}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="text-primary text-xs font-medium flex items-center gap-1">
                {getTechIcon(tech)} {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <motion.button 
              className="text-white font-medium text-sm flex items-center gap-2 hover:text-primary transition-colors duration-300"
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
