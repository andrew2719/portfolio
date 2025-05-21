import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Users, Trophy, Code, Calendar } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  type: 'music' | 'leadership' | 'tech' | 'competition';
  year: string;
  icon: React.ReactNode;
}

const Leadership: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const activities: Activity[] = [
    {
      id: 1,
      title: "3rd Place – Western Instrumental Solo",
      description: "National level achievement at Amity University",
      type: "music",
      year: "2025",
      icon: <Music size={20} className="text-primary-950" />,
    },
    {
      id: 2,
      title: "1st Place – Western Instrumental Solo",
      description: "SouthZone competition at SRM Chennai",
      type: "music",
      year: "2024",
      icon: <Music size={20} className="text-primary-950" />,
    },
    {
      id: 3,
      title: "2nd Place – Cultural Rally",
      description: "South Zone competition at Andhra University",
      type: "competition",
      year: "2023",
      icon: <Trophy size={20} className="text-primary-950" />,
    },
    {
      id: 4,
      title: "Music Competitions Lead",
      description: "Organizing music competitions for Mahotsav, the National Fest at VFSTR",
      type: "leadership",
      year: "2023-2025",
      icon: <Users size={20} className="text-primary-950" />,
    },
    {
      id: 5,
      title: "Band Lead at VFSTR",
      description: "Leading the university band for performances and competitions",
      type: "leadership",
      year: "2022-2025",
      icon: <Music size={20} className="text-primary-950" />,
    },
    {
      id: 6,
      title: "Organizer – Code Arena & UI Design Contest",
      description: "Organizing technical competitions for VCODE at VFSTR",
      type: "tech",
      year: "2023",
      icon: <Code size={20} className="text-primary-950" />,
    },
    {
      id: 7,
      title: "Cyber Security Workshop Participant",
      description: "Participated in specialized workshops at IIT Hyderabad",
      type: "tech",
      year: "2024",
      icon: <Code size={20} className="text-primary-950" />,
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
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'music':
        return 'bg-purple-100 text-purple-800';
      case 'leadership':
        return 'bg-blue-100 text-blue-800';
      case 'tech':
        return 'bg-green-100 text-green-800';
      case 'competition':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <section id="leadership" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block text-accent-950 font-medium mb-2"
          >
            Beyond Coding
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-8"
          >
            Leadership & Extracurriculars
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-12"
          >
            My involvement in various activities that showcase my leadership skills and diverse interests.
          </motion.p>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      {activity.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-950 mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(activity.type)}`}>
                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {activity.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12 text-center"
          >
            <motion.p variants={itemVariants} className="text-gray-700 italic">
              "My diverse interests in music, technology, and leadership have shaped me into a well-rounded individual, bringing creativity and collaborative skills to every project I undertake."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;