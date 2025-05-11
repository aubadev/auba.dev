import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { FaDiscord, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import logoImage from "@/assets/images/logo.png";
import headerBg from "@/assets/images/header-bg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white/5 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm p-1 border border-white/10 shadow-glow">
            <img 
              src={logoImage} 
              alt="AuBaSweaty Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">AuBaSweaty</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#home" className="text-light hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-light hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-light hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-light hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Discord Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://discord.gg/ps9WT636e2" 
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow border border-white/10"
          >
            <FaDiscord className="text-lg" />
            <span>Discord</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl" 
          id="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 bg-dark bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button 
              className="absolute top-6 right-6 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            
            <a 
              href="#home" 
              className="text-2xl font-display font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-2xl font-display font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-2xl font-display font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-2xl font-display font-medium hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            
            <a 
              href="https://discord.gg/ps9WT636e2" 
              className="mt-4 flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <FaDiscord />
              <span>Join Discord</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
