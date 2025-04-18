'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPenNib, FaHtml5, FaCss3, FaJs, FaBootstrap, FaPython, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiDjango, SiNextdotjs } from 'react-icons/si';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { FaGitAlt, FaGithub } from "react-icons/fa";  

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Power BI', icon: <BiBarChartAlt2 /> },
  { name: 'Modern JS', icon: <FaJs /> },
  { name: 'DRF', icon: <FaPython /> },
  { name: 'Postgre Sql', icon: <SiPostgresql /> },
  { name: 'Python', icon: <FaPython /> }, 
  { name: 'Github', icon: <FaGithub /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> }
];


const SkillComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % skills.length);
    }, 1000);
  
    return () => clearInterval(interval);
  // }, [skills.length]);
  }, [ ]);
  

  return (
    <div className="px-6 py-12 my-6  rounded-xl shadow-xl bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold mb-4">My Skill Journey</h2>

      <div className="flex  flex-wrap justify-center gap-2 md:gap-6 px-1 md:px-4 py-5 md:py-10 border border-dashed rounded-xl border-gray-400 dark:border-white">
        {skills.map((skill, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0.3,
                scale: index === activeIndex ? 1.1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`w-auto flex items-center md:gap-3 center justify-center text-center rounded-full border border-black dark:border-white px-2 md:px-5 py-2 transition-all duration-500`}
            >
              <div className="text-sm md:text-2xl mb-1">{skill.icon}</div>
              <div className="text-sm font-medium">{skill.name}</div>

              {index === activeIndex && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-sm md:text-lg"
                >
                  <FaPenNib />
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
