import React from 'react';
import { FaGithub, FaLinkedin, FaAngleUp } from 'react-icons/fa';
import Header3DLogo from './3DLogo.jsx';
import { motion } from 'framer-motion';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 w-full bg-black text-white z-50 relative">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* 3D Logo Container */}
        <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
          <Header3DLogo />
        </div>

        {/* Navigation Links */}
        <nav
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-8 text-sm sm:text-base"
        >
          {['About', 'Projects', 'Contact'].map((link, index) => (
            <React.Fragment key={link}>
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="text-primary hover:text-accent"
                whileHover={{
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  window.location.href = `#${link.toLowerCase()}`;
                }}
              >
                {link}
              </motion.a>

              {/* Lines now always visible */}
              {index < 2 && (
                <span className="w-[2px] h-5 bg-gray-500 inline-block"></span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Social Icons */}
        <div
          className="ml-auto flex items-center space-x-3 sm:space-x-4"
          style={{ marginRight: '-10px' }}
        >
          <motion.a
            href="https://github.com/mattlambr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              window.open('https://github.com/mattlambr', '_blank');
            }}
            style={{ color: 'white' }} // Default color
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4b917d')} // Hover color
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')} // Default color
          >
            <FaGithub size={18} className="sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/matthew-lambreth/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              window.open(
                'https://www.linkedin.com/in/matthew-lambreth/',
                '_blank'
              );
            }}
            style={{ color: 'white' }} // Default color
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4b917d')} // Hover color
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')} // Default color
          >
            <FaLinkedin size={18} className="sm:w-6 sm:h-6" />
          </motion.a>
        </div>

      </div>

      {/* Triangle Icon to Scroll to Top */}
      <div
        className="absolute bottom-[-40px] right-0 w-10 h-10 flex items-center justify-center"
      >
        <motion.div
          onClick={scrollToTop}
          whileHover={{
            scale: 1.1,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            color: '#FFFFFF', // Default color (icon will change back to this when not hovered)
          }}
          className="cursor-pointer"
        >
          <FaAngleUp
            className="text-2xl"
            style={{
              transition: 'color 0.2s ease', // Smooth hover transition
            }}
            onMouseEnter={(e) => (e.target.style.color = '#4b917d')} // Hover color
            onMouseLeave={(e) => (e.target.style.color = 'white')} // Default color
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
