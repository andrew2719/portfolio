import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  const skills = {
    languages: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
    frameworks: [
      { name: 'FastAPI', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Node.js', level: 70 },
    ],
    blockchain: [
      { name: 'IPFS', level: 80 },
      { name: 'Solidity', level: 75 },
      { name: 'Smart Contracts', level: 70 },
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Linux CLI', level: 85 },
    ],
  };
  
  const SkillBar = ({ name }: { name: string }) => (
    <motion.div 
      variants={itemVariants}
      className="mb-4"
    >
      <div className="text-gray-700 font-medium">{name}</div>
    </motion.div>
  );
  
  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            My Skills
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Technical Expertise
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            With a diverse skill set spanning multiple programming languages, frameworks, and technologies, I build robust and efficient solutions for complex problems.
          </motion.p>
          
          <motion.div 
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
>
  <motion.div variants={itemVariants}>
    <h3 className="text-xl font-semibold text-primary-950 mb-6 pb-2 border-b border-gray-200">
      Languages
    </h3>
    {skills.languages.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} />
    ))}
  </motion.div>
  
  <motion.div variants={itemVariants}>
    <h3 className="text-xl font-semibold text-primary-950 mb-6 pb-2 border-b border-gray-200">
      Frameworks & Tools
    </h3>
    {skills.frameworks.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} />
    ))}
  </motion.div>
  
  <motion.div variants={itemVariants}>
    <h3 className="text-xl font-semibold text-primary-950 mb-6 pb-2 border-b border-gray-200">
      Blockchain & Decentralized
    </h3>
    {skills.blockchain.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} />
    ))}
  </motion.div>
  
  <motion.div variants={itemVariants}>
    <h3 className="text-xl font-semibold text-primary-950 mb-6 pb-2 border-b border-gray-200">
      Databases & Systems
    </h3>
    {skills.databases.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} />
    ))}
    {skills.tools.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} />
    ))}
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;