import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const Contact: React.FC = () => {
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
  
  const contactInfo = [
    {
      icon: <Phone size={20} className="text-primary-950" />,
      label: "Phone",
      value: "+91 9182018920",
      link: "tel:+919182018920",
    },
    {
      icon: <Mail size={20} className="text-primary-950" />,
      label: "Email",
      value: "andrewblaze2719@gmail.com",
      link: "mailto:andrewblaze2719@gmail.com",
    },
    {
      icon: <MapPin size={20} className="text-primary-950" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null,
    },
  ];
  
  const socialLinks = [
    {
      icon: <Linkedin size={20} className="text-primary-950" />,
      label: "LinkedIn",
      value: "andrew-blaze",
      link: "https://www.linkedin.com/in/andrew-blaze/",
    },
    {
      icon: <Github size={20} className="text-primary-950" />,
      label: "GitHub",
      value: "andrew2719",
      link: "https://github.com/andrew2719",
    },
    {
      icon: <Globe size={20} className="text-primary-950" />,
      label: "Portfolio",
      value: "andrewblaze.simple.ink",
      link: "https://andrewblaze.simple.ink",
    },
  ];
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-primary-950 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500 mb-1">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="text-primary-950 hover:text-accent-950 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-primary-950">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-primary-950 mt-12 mb-6">
                Social Links
              </h3>
              
              <div className="space-y-6">
                {socialLinks.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500 mb-1">{item.label}</span>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-950 hover:text-accent-950 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-950 mb-6">
                Send Me a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-950 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-950 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-950 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  className="w-full btn btn-primary py-3"
                >
                  Send Message
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Form functionality is currently simulated. Please use the contact information to reach out directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;