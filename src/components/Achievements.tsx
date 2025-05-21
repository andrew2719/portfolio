import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, ExternalLink, Star, Code } from 'lucide-react';

const Achievements: React.FC = () => {
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
    <section id="achievements" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            My Accomplishments
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Technical Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            My coding competitions and technical accomplishments that showcase my problem-solving abilities.
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Code size={24} className="text-primary-950 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-950 mb-2">
                    CodeChef: 4-Star Coder
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Achieved outstanding Global Ranks: 10th (104), 40th (123) in CodeChef Starters competitions
                  </p>
                  <a 
                    href="https://www.codechef.com/users/andrew_2719" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-950 font-medium hover:text-primary-950 transition-colors flex items-center"
                  >
                    View Profile <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Star size={24} className="text-primary-950 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-950 mb-2">
                    HackerRank: 6 Stars in Algorithms
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Achieved 6-star rating in Algorithms section on HackerRank platform
                  </p>
                  <a 
                    href="https://www.hackerrank.com/profile/andrewblaze2719" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-950 font-medium hover:text-primary-950 transition-colors flex items-center"
                  >
                    View Profile <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Trophy size={24} className="text-primary-950 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-950 mb-2">
                    Coding Competition Awards
                  </h3>
                  <ul className="text-gray-600 mb-4 space-y-2 list-disc list-inside">
                    <li>1st Place – Vignan Coding Contests</li>
                    <li>3rd Place – RVRJC Hackathon 2025</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;