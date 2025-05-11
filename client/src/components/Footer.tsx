import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-light-600 mb-8 max-w-lg">
              Interested in working together or have a question about my work? Feel free to reach out through Discord or social media.
            </p>
            
            <a 
              href="https://discord.gg/ps9WT636e2" 
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-glow"
            >
              <FaDiscord className="text-lg" />
              <span>Join my Discord Server</span>
            </a>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Social links */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/AuBaSweaty" 
                  className="w-10 h-10 rounded-full bg-dark-850 flex items-center justify-center text-light-600 hover:text-white hover:bg-primary transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://discord.gg/WttrRqs7vv" 
                  className="w-10 h-10 rounded-full bg-dark-850 flex items-center justify-center text-light-600 hover:text-white hover:bg-primary transition-colors duration-300"
                  aria-label="Discord Server"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-light-600 hover:text-primary transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-light-600 hover:text-primary transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-light-600 hover:text-primary transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-light-600 hover:text-primary transition-colors duration-300">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-dark-850 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-primary flex items-center justify-center shadow-glow">
              <img 
                src="https://aubasweaty.de/images/auba_dc.png" 
                alt="AuBaSweaty Logo" 
                className="w-6 h-6"
              />
            </div>
            <span className="text-light-600 font-display">AuBaSweaty</span>
          </div>
          
          <p className="text-light-600 text-sm text-center md:text-right">
            &copy; 2025 AuBaSweaty. All rights reserved. Coding with passion ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
