import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaArrowUp } from "react-icons/fa";
import logoImage from "@/assets/images/logo.png";

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
              Interested in working together or have a question about my work? Feel free to reach out through Discord or GitHub.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://discord.gg/ps9WT636e2" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <FaDiscord className="text-lg" />
                <span>Discord</span>
              </a>
              
              <a 
                href="https://github.com/AuBaSweaty" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            </div>
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
                  className="w-10 h-10 rounded-full bg-dark-850 flex items-center justify-center text-light-600 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://discord.gg/WttrRqs7vv" 
                  className="w-10 h-10 rounded-full bg-dark-850 flex items-center justify-center text-light-600 hover:text-white hover:bg-indigo-600 transition-colors duration-300"
                  aria-label="Discord Server"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-dark-850 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="AuBaSweaty Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent font-display font-medium">AuBaSweaty</span>
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
