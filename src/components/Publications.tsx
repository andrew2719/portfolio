import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ExternalLink } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  publisher: string;
  year: string;
  status: 'published' | 'submitted';
  link?: string;
}

const Publications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const publications: Publication[] = [
    {
      id: 1,
      title: "Footwear Classification Using Pretrained CNN Models with Deep Neural Network",
      publisher: "IEEE Xplore, ICMSCI 2025, Scopus Indexed",
      year: "2025",
      status: "published",
      link: "https://ieeexplore.ieee.org/document/10893981",
    },
    {
      id: 2,
      title: "Machine Unlearning Using Iterative Pruning and Knowledge Distillation",
      publisher: "Submitted to SN Computer Science, Springer",
      year: "2025",
      status: "submitted",
    },
  ];
  
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
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            Research Work
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Publications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            My research contributions to the academic community in computer science and engineering.
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {publications.map((pub) => (
              <motion.div
                key={pub.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <FileText size={24} className="text-primary-950 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary-950 mb-2 group-hover:text-accent-950 transition-colors duration-300">
                      {pub.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {pub.publisher}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        {pub.year}
                      </span>
                      
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        pub.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {pub.status === 'published' ? 'Published' : 'Submitted'}
                      </span>
                      
                      {pub.link && (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent-950 font-medium hover:text-primary-950 transition-colors flex items-center"
                        >
                          View Paper <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
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

export default Publications;