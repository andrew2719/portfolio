import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  year: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Footwear Classification Using Pretrained CNN Models with Deep Neural Network',
      description: 'A deep learning project for classifying footwear into categories using pretrained CNN models and a custom DNN.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'scikit-learn', 'DNN', 'CNN', 'DL'],
      githubUrl: 'https://www.kaggle.com/code/andrewblaze/shoe-sandal-boot',
      imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2025',
    },
    {
      id: 6,
      title: 'Machine Unlearning Using Iterative Pruning and Knowledge Distillation',
      description: 'A project focused on machine unlearning techniques leveraging iterative pruning and knowledge distillation for secure and efficient model updates.',
      technologies: ['Python', 'PyTorch', 'ML', 'CNN', 'Vision Transformers'],
      githubUrl: 'https://www.kaggle.com/code/andrewblaze/all-archs',
      imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2025',
    },
    {
      id: 2,
      title: 'Organ Donation Registry',
      description: 'Decentralized donation platform with FastAPI backend and Streamlit frontend that ensures transparent, immutable on-chain donation tracking.',
      technologies: ['Blockchain', 'FastAPI', 'Streamlit', 'Python', 'Solidity'],
      githubUrl: 'https://github.com/andrew2719/Organ-donation-registry',
      imageUrl: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2024',
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      description: 'Implemented a blockchain-based voting system using ZK-Rollups and Merkle Trees with bitmap-based voter verification.',
      technologies: ['Blockchain', 'ZK-Rollups', 'Merkle Trees', 'Bitmap', 'Solidity', 'Python'],
      githubUrl: 'https://github.com/andrew2719/blockchain-based-voting-system',
      imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2024',
    },
    {
      id: 5,
      title: 'Online Learning Platform',
      description: 'Full-stack web app for course creation, user authentication, and content management with a clean UI.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      githubUrl: 'https://github.com/andrew2719/Module_banks/tree/main/3-1/WT/testing_3',
      imageUrl: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2023',
    },
    {
      id: 4,
      title: 'IPFS Simulation',
      description: 'Simulated IPFS architecture and automated its behavior via scripting for distributed file storage systems.',
      technologies: ['Python', 'TCP/IP', 'Distributed Systems'],
      githubUrl: 'https://github.com/andrew2719/DFS.git',
      imageUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      year: '2023',
    },
    // {
    //   id: 5,
    //   title: 'BLEND NFT',
    //   description: 'A platform for creating and trading unique digital assets using blockchain technology.',
    //   technologies: ['Blockchain', 'NFT', 'Smart Contracts', 'Web3'],
    //   githubUrl: 'https://github.com/andrew2719/BLEND_NFT.git',
    //   imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   year: '2023',
    // },
  ];
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: "AI/ML/DL", name: "AI/ML/DL" },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'web', name: 'Web Development' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
  ];
  
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'blockchain') return project.technologies.some(tech => 
      ['Blockchain', 'Solidity', 'Smart Contracts', 'Web3', 'NFT'].includes(tech)
    );
    if (activeFilter === 'web') return project.technologies.some(tech => 
      ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'FastAPI'].includes(tech)
    );
    if (activeFilter === 'AI/ML/DL') return project.technologies.some(tech => 
      ['AI', 'ML', 'DL','CNN', 'TensorFlow', 'PyTorch'].includes(tech)
    );
    return project.year === activeFilter;
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            My Work
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Recent Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            Explore a selection of my recent projects showcasing my technical skills and problem-solving abilities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-950 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-950 hover:bg-primary-950 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-950 hover:bg-primary-950 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-950 mb-2 group-hover:text-accent-950 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="https://github.com/andrew2719" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;