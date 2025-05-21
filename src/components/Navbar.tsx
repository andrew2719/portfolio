import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
   
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <Code size={24} className="text-accent-950" />
          <span className="text-xl font-bold text-primary-950">Andrew<span className="text-accent-950">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/andrew_resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-primary-950 focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className={`nav-link text-lg ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1dtSmvN7_49cIKIF2jrQ6YhnuNZZ83m3Y/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline text-center mt-4"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;