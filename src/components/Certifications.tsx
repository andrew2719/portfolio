import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: 'cloud' | 'programming' | 'ai' | 'business' | 'leadership';
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      category: "cloud",
    },
    {
      id: 2,
      title: "Programming Essentials in Python",
      issuer: "Cisco",
      category: "programming",
    },
    {
      id: 3,
      title: "C Programming",
      issuer: "NPTEL",
      category: "programming",
    },
    {
      id: 4,
      title: "Leadership & Team Effectiveness",
      issuer: "NPTEL",
      category: "leadership",
    },
    {
      id: 5,
      title: "AI in Investments",
      issuer: "NPTEL",
      category: "ai",
    },
    {
      id: 6,
      title: "E-Business",
      issuer: "NPTEL",
      category: "business",
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
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cloud':
        return 'bg-blue-100 text-blue-800';
      case 'programming':
        return 'bg-purple-100 text-purple-800';
      case 'ai':
        return 'bg-green-100 text-green-800';
      case 'business':
        return 'bg-orange-100 text-orange-800';
      case 'leadership':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            Professional Development
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Certifications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            My professional certifications and training that complement my academic background.
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex"
              >
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Award size={18} className="text-primary-950" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {cert.issuer}
                  </p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(cert.category)}`}>
                    {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12 bg-white p-6 rounded-lg shadow-sm"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-xl font-semibold text-primary-950 mb-4 flex items-center"
            >
              <CheckCircle size={20} className="text-accent-950 mr-2" />
              Continuous Learning
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600">
              I'm constantly expanding my knowledge through online courses, workshops, and self-study. My commitment to lifelong learning ensures I stay current with emerging technologies and best practices in the rapidly evolving tech landscape.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;