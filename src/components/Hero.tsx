import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#f3f4f6_0%,#ffffff_100%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent-950 font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-primary-950 mb-4"
            >
              Andrew Blaze Pitta
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 mb-6"
            >
              Backend Specialist, Full-Stack Developer,  Blockchain Enthusiast
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-700 mb-8 max-w-lg"
            >
              I'm a dedicated Computer Science undergraduate specializing in backend development, system architecture, and blockchain technologies, with a strong foundation in building scalable and efficient systems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/1dtSmvN7_49cIKIF2jrQ6YhnuNZZ83m3Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-6 mt-8"
            >
              <a href="https://github.com/andrew2719" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-950 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-blaze/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-950 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:andrewblaze2719@gmail.com" className="text-gray-600 hover:text-primary-950 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-accent-100 opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-primary-50 opacity-40"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary-950">
                AB
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-primary-950 transition-colors">
            <span className="text-sm mb-2">Scroll down</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;