import { motion } from "framer-motion";
import { Skill } from "@/lib/constants";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaMicrosoft,
  FaPhp,
  FaNodeJs,
  FaCodeBranch,
  FaApple,
  FaMobileAlt,
  FaVideo,
  FaPython,
} from "react-icons/fa";
import { SiAdobeaftereffects, SiAdobephotoshop } from "react-icons/si";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const { name, icon, color } = skill;

  // Function to render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case "FaHtml5":
        return <FaHtml5 className={`text-3xl ${color}`} />;
      case "FaCss3Alt":
        return <FaCss3Alt className={`text-3xl ${color}`} />;
      case "FaJsSquare":
        return <FaJsSquare className={`text-3xl ${color}`} />;
      case "FaCode":
        return <FaCode className={`text-3xl ${color}`} />;
      case "FaMicrosoft":
        return <FaMicrosoft className={`text-3xl ${color}`} />;
      case "FaPhp":
        return <FaPhp className={`text-3xl ${color}`} />;
      case "FaNodeJs":
        return <FaNodeJs className={`text-3xl ${color}`} />;
      case "FaCodeBranch":
        return <FaCodeBranch className={`text-3xl ${color}`} />;
      case "FaApple":
        return <FaApple className={`text-3xl ${color}`} />;
      case "SiAdobephotoshop":
        return <SiAdobephotoshop className={`text-3xl ${color}`} />;
      case "SiAdobeaftereffects":
        return <SiAdobeaftereffects className={`text-3xl ${color}`} />;
      case "FaMobileAlt":
        return <FaMobileAlt className={`text-3xl ${color}`} />;
      case "FaVideo":
        return <FaVideo className={`text-3xl ${color}`} />;
      case "FaPython":
        return <FaPython className={`text-3xl ${color}`} />;
      default:
        return <FaCode className={`text-3xl ${color}`} />;
    }
  };

  return (
    <motion.div 
      className="perspective"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: index * 0.07 
      }}
    >
      <motion.div 
        className="bg-dark-850/80 backdrop-blur-sm rounded-xl p-5 glass card-hover border border-dark-800 relative overflow-hidden"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="flex items-center justify-center h-12 mb-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {renderIcon()}
        </motion.div>
        
        <div className="relative overflow-hidden">
          <h3 className="text-center text-white font-medium">{name}</h3>
          <motion.div 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, delay: index * 0.07 + 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
