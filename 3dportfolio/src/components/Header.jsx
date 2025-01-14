import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Header3DLogo from './3DLogo.jsx';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="sticky top-0 w-full bg-black text-white z-50">
      <div className="relative container mx-auto px-6 py-4 flex items-center">
        {/* 3D Logo */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-8%',
            transform: 'translateY(-50%)',
            width: '150px',
            height: '150px',
          }}
        >
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
                <span className="w-px h-5 bg-gray-500 inline-block"></span>
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
            className="text-white hover:text-secondary"
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
          >
            <FaGithub size={18} className="sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/matthew-lambreth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary"
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
          >
            <FaLinkedin size={18} className="sm:w-6 sm:h-6" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}

export default Header;
