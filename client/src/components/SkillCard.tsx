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
          {renderIcon()}
        </div>
        <h3 className="text-center text-white font-medium">{name}</h3>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
