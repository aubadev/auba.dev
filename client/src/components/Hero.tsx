import { motion } from "framer-motion";
import { FaDiscord, FaArrowRight, FaGithub, FaChevronDown } from "react-icons/fa";
import ParticleCanvas from "./ParticleCanvas";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-800 to-dark-800"></div>
        
        {/* 3D particles */}
        <ParticleCanvas />
        
        {/* Radial gradients for highlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary bg-opacity-10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 bg-opacity-10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-3 flex items-center justify-center p-2 bg-dark-800 rounded-full glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-xs md:text-sm px-3 py-1">Full Stack Web Developer</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hey, I'm <span className="text-gradient">AuBa</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-600 mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I'm skilled in HTML, CSS, JS and more. Love coding cool stuff for the web with modern technologies and creative solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a 
              href="https://discord.gg/ps9WT636e2" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-glow"
            >
              <FaDiscord className="text-lg" />
              <span>Join my Discord</span>
            </a>
            
            <a 
              href="#projects" 
              className="w-full sm:w-auto border border-light-600 text-light hover:border-primary hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View my work</span>
              <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <a 
              href="https://github.com/AuBaSweaty" 
              className="text-light-600 hover:text-light transition-colors duration-300 text-xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://discord.gg/WttrRqs7vv" 
              className="text-light-600 hover:text-light transition-colors duration-300 text-xl"
              aria-label="Discord Server"
            >
              <FaDiscord />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.a 
          href="#about" 
          className="text-light-600 hover:text-light transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-2xl" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
