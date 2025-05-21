import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const educationData: EducationItem[] = [
    {
      id: 1,
      institution: "Vignan's Foundation for Science, Technology & Research",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2021 - 2025",
      location: "Vadlamudi, Andhra Pradesh",
      details: "GPA: 8.51 / 10",
    },
    {
      id: 2,
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "Intermediate",
      duration: "2019 - 2021",
      location: "Gudavalli, Andhra Pradesh",
      details: "97%",
    },
    {
      id: 3,
      institution: "Dr. KKR's Gowtham School",
      degree: "10th Grade",
      duration: "2019",
      location: "Tenali, Andhra Pradesh",
      details: "GPA: 10 / 10",
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="education" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            My Background
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Education
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            My academic journey has provided me with a strong foundation in computer science and engineering.
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative border-l-2 border-primary-200 pl-8 ml-4 space-y-12"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-12 top-0 w-8 h-8 bg-primary-50 border-2 border-primary-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={16} className="text-primary-950" />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar size={14} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary-950 mb-1">
                    {item.degree}
                  </h3>
                  
                  <h4 className="text-md font-medium text-primary-800 mb-3">
                    {item.institution}
                  </h4>
                  
                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {item.location}
                  </p>
                  
                  <p className="text-gray-600">
                    <strong>Result:</strong> {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;