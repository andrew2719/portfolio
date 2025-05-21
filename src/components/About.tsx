import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GitBranch, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={itemVariants} className="block text-accent-950 font-medium mb-2">
            About Me
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="section-title mb-8">
            Who I Am
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed">
            I'm a passionate Computer Science undergraduate with a strong foundation in full-stack development, blockchain systems, and competitive programming. I enjoy building scalable, secure applications and diving deep into emerging technologies like decentralized systems and machine learning.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-700 mb-8 leading-relaxed">
            Whether it's organizing tech events, contributing to open source, or jamming on stage as a band lead, I bring creativity and drive to everything I do.
          </motion.p>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Code size={20} className="text-primary-950" />
              </div>
              <h3 className="text-lg font-semibold text-primary-950 mb-2">Development</h3>
              <p className="text-gray-600">Building full-stack applications with modern technologies</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <GitBranch size={20} className="text-primary-950" />
              </div>
              <h3 className="text-lg font-semibold text-primary-950 mb-2">Blockchain</h3>
              <p className="text-gray-600">Designing decentralized solutions for real-world problems</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Globe size={20} className="text-primary-950" />
              </div>
              <h3 className="text-lg font-semibold text-primary-950 mb-2">Web3</h3>
              <p className="text-gray-600">Exploring the next generation of internet technologies</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Award size={20} className="text-primary-950" />
              </div>
              <h3 className="text-lg font-semibold text-primary-950 mb-2">Competitive</h3>
              <p className="text-gray-600">Solving complex algorithmic problems efficiently</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;