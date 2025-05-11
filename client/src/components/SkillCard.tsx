import { motion } from "framer-motion";
import { Skill } from "@/lib/constants";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const { name, icon } = skill;

  return (
    <motion.div 
      className="perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <motion.div 
        className="bg-dark-850 rounded-xl p-5 glass card-hover"
        whileHover={{ 
          scale: 1.05,
          rotateY: 10,
          boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
        }}
      >
        <div className="flex items-center justify-center h-12 mb-3">
          {icon}
        </div>
        <h3 className="text-center text-white font-medium">{name}</h3>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
