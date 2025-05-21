import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Andrew<span className="text-accent-950">.</span></h3>
            <p className="text-gray-300 mb-4 max-w-xs">
              Full-stack developer & blockchain enthusiast. Building innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/andrew2719" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-950 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-blaze/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-950 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:andrewblaze2719@gmail.com" className="text-gray-300 hover:text-accent-950 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent-950 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Andhra Pradesh, India</li>
              
              <li>andrewblaze2719@gmail.com</li>
                <li>
                <a href="https://www.linkedin.com/in/andrew-blaze/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-950 transition-colors">
                  LinkedIn
                </a>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            &copy; {currentYear} Andrew Blaze Pitta. All rights reserved. Made with 
            <Heart size={14} className="mx-1 text-accent-950" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;