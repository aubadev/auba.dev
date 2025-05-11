import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 gradient-text-flow rounded-full text-sm font-medium mb-4 border border-primary/20">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-6 neon-pulse" style={{"--primary-color": "#4F46E5"} as React.CSSProperties}>
            Skills & Technologies
          </h2>
          <p className="text-light-600">
            These are the technologies and tools I've mastered throughout my journey as a developer.
            I'm constantly learning and expanding my skillset to stay on top of industry trends.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
