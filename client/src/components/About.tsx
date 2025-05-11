import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDiscord, FaCode, FaGamepad, FaPencilAlt, FaGithub } from "react-icons/fa";

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });
  
  // Animate skill progress bars when in view
  useEffect(() => {
    if (isInView && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-progress-bar');
      skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          (bar as HTMLElement).style.width = width;
        }
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 text-transparent bg-clip-text text-gradient rounded-full text-sm font-medium mb-4 border border-secondary/20">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary mb-6">
            Get to know me
          </h2>
          <p className="text-light-600">
            Here, you'll learn more about who I am, the work I do, and the skills 
            I've honed in the fields of programming and technology. Whether it's web development 
            or game server creation, I'm always pushing boundaries and exploring new ways to innovate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <motion.div 
            className="perspective"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-850 p-8 rounded-2xl glass card-hover spotlight" id="about-spotlight">
              <h3 className="text-2xl font-display font-bold text-white mb-6">My Journey</h3>
              <p className="text-light-600 mb-6">
                I'm AuBa, a dedicated <span className="text-indigo-400 font-medium">Full Stack Web Developer</span> with a strong focus
                on building and optimizing the front-end of websites and web applications. My passion 
                lies in delivering solutions that not only look great but also provide an exceptional 
                user experience, contributing to the overall success of each project.
              </p>
              <p className="text-light-600 mb-8">
                I constantly push myself to learn new technologies and stay updated with the latest trends in the
                tech world. Be sure to check out some of my featured work in the <span className="text-indigo-400 font-medium">Projects</span> section!
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/AuBaSweaty" 
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* 3D workspace illustration */}
          <motion.div 
            className="relative h-[400px] perspective hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={skillsRef}
          >
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <div className="relative w-full max-w-lg">
                {/* Decorative elements */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full opacity-10 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-4 w-72 h-72 bg-blue-500 rounded-full opacity-10 filter blur-3xl"></div>
                
                {/* Workspace cards */}
                <div className="relative card-hover glass bg-dark-850 rounded-xl p-6 shadow-lg transform rotate-y-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Web Development</h4>
                      <p className="text-sm text-light-600">Creating modern web experiences</p>
                    </div>
                    <div className="bg-primary bg-opacity-20 p-2 rounded-lg">
                      <FaCode className="text-primary text-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-light-600">Frontend</span>
                        <span className="text-xs text-primary">95%</span>
                      </div>
                      <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                        <div className="skill-progress-bar w-0" data-width="95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-light-600">Backend</span>
                        <span className="text-xs text-primary">85%</span>
                      </div>
                      <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                        <div className="skill-progress-bar w-0" data-width="85%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-light-600">UI/UX Design</span>
                        <span className="text-xs text-primary">80%</span>
                      </div>
                      <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                        <div className="skill-progress-bar w-0" data-width="80%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -right-16 card-hover glass bg-dark-850 rounded-xl p-5 shadow-lg transform rotate-y-10 w-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 bg-opacity-20 flex items-center justify-center">
                      <FaGamepad className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Game Development</h4>
                      <p className="text-xs text-light-600">Server & mechanics</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-light-600">Server Development</span>
                    <span className="text-xs text-indigo-400">90%</span>
                  </div>
                  <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                    <div className="skill-progress-bar w-0" data-width="90%" style={{ background: "linear-gradient(to right, #4f46e5, #818cf8)" }}></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-16 card-hover glass bg-dark-850 rounded-xl p-4 shadow-lg transform rotate-y-10 w-56">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 bg-opacity-20 flex items-center justify-center">
                      <FaPencilAlt className="text-teal-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Creative Work</h4>
                  </div>
                  
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-light-600">Design</span>
                    <span className="text-xs text-teal-400">85%</span>
                  </div>
                  <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                    <div className="skill-progress-bar w-0" data-width="85%" style={{ background: "linear-gradient(to right, #14b8a6, #2dd4bf)" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
