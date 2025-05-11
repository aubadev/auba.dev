export type ProjectCategory = "web" | "game" | "client";

export interface Project {
  title: string;
  description: string;
  year: string;
  image: string;
  categories: ProjectCategory[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

// Skills data with icon names
export const skillsData: Skill[] = [
  {
    name: "HTML",
    icon: "FaHtml5",
    color: "text-orange-500"
  },
  {
    name: "CSS",
    icon: "FaCss3Alt",
    color: "text-blue-500"
  },
  {
    name: "JavaScript",
    icon: "FaJsSquare",
    color: "text-yellow-400"
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    color: "text-blue-600"
  },
  {
    name: "React",
    icon: "FaReact",
    color: "text-cyan-400"
  },
  {
    name: "LUA",
    icon: "FaCode",
    color: "text-blue-300"
  },
  {
    name: "C#",
    icon: "FaMicrosoft",
    color: "text-purple-500"
  },
  {
    name: "PHP",
    icon: "FaPhp",
    color: "text-indigo-400"
  },
  {
    name: "NodeJS",
    icon: "FaNodeJs",
    color: "text-green-500"
  },
  {
    name: "C++",
    icon: "FaCodeBranch",
    color: "text-blue-600"
  },
  {
    name: "XCode/Swift",
    icon: "FaApple",
    color: "text-gray-300"
  },
  {
    name: "Photoshop",
    icon: "SiAdobephotoshop",
    color: "text-red-400"
  },
  {
    name: "After Effects",
    icon: "SiAdobeaftereffects",
    color: "text-purple-400"
  },
  {
    name: "Responsive",
    icon: "FaMobileAlt",
    color: "text-teal-400"
  },
  {
    name: "Davinci",
    icon: "FaVideo",
    color: "text-blue-400"
  },
  {
    name: "Python",
    icon: "FaPython",
    color: "text-yellow-300"
  },
];

// Projects data
export const projectsData: Project[] = [
  {
    title: "FavelaV - Your Roleplay Community with 💙",
    description: "FavelaV is a dynamic roleplay community where boundaries and boredom don't exist. It provides a welcoming environment for newcomers, encouraging players to immerse themselves in engaging storylines and a supportive community.",
    year: "2022-2023",
    image: "https://aubasweaty.de/images/favela.png",
    categories: ["web", "game"],
    technologies: ["HTML", "CSS", "JavaScript", "Lua"]
  },
  {
    title: "SHOOTER CRIMELIFE",
    description: "SHOOTER CRIMELIFE is an action-packed game that focuses on intense crime-based scenarios. The development involved creating both a web presence and the game's server-side mechanics with immersive gameplay.",
    year: "2023",
    image: "https://aubasweaty.de/images/shooter.png",
    categories: ["web", "game"],
    technologies: ["HTML", "CSS", "JavaScript", "Lua"]
  },
  {
    title: "Life in Paradise",
    description: "Life in Paradise offers a serene yet adventurous roleplay environment, allowing players to live out unique scenarios in a visually rich world with smooth interactions and an immersive experience.",
    year: "2023",
    image: "https://aubasweaty.de/images/LIVEINPARADISE_LOGO.png",
    categories: ["web", "game"],
    technologies: ["HTML", "CSS", "JavaScript", "Lua"]
  },
  {
    title: "Telekom Tarife Übersicht",
    description: "This project is a comprehensive web solution providing users with an overview of various DSL packages offered by Telekom. The design is user-friendly, helping customers compare different packages efficiently.",
    year: "2024",
    image: "https://aubasweaty.de/images/telekom_tarife.png",
    categories: ["web", "client"],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Krachlatten Forum",
    description: "Krachlatten Forum is a modern community platform that enables users to engage in discussions, share ideas, and connect with like-minded individuals in a user-friendly and visually appealing environment.",
    year: "2024-2025",
    image: "https://aubasweaty.de/images/krachlatten.png",
    categories: ["web", "client"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];
