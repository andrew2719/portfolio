import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Teaching Assistant",
      organization: "Vignan's Foundation for Science, Technology and Research (VFSTR)",
      duration: "2024 - 2025",
      description: "Assisted students in learning Python, Java, and Competitive Coding. Conducted lab sessions and provided guidance to enhance their programming skills.",
      icon: <BookOpen size={20} className="text-primary-950" />,
    },
  ];

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

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Experience
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6"
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      {experience.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-950 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {experience.organization}
                    </p>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {experience.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;