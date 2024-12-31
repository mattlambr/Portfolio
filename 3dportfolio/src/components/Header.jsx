import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Header3DLogo from './3DLogo.jsx';

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
          className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8"
        >
          <a
            href="#about"
            className="text-primary hover:text-accent transition-all transform hover:scale-105"
            onMouseDown={(e) => {
              e.preventDefault();
              window.location.href = '#about';
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-primary hover:text-accent transition-all transform hover:scale-105"
            onMouseDown={(e) => {
              e.preventDefault();
              window.location.href = '#projects';
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-primary hover:text-accent transition-all transform hover:scale-105"
            onMouseDown={(e) => {
              e.preventDefault();
              window.location.href = '#contact';
            }}
          >
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="ml-auto flex items-center space-x-4" style={{ marginRight: '-10px' }}>
          <a
            href="https://github.com/mattlambr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-colors"
            onMouseDown={(e) => {
              e.preventDefault();
              window.open('https://github.com/mattlambr', '_blank');
            }}
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-lambreth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-colors"
            onMouseDown={(e) => {
              e.preventDefault();
              window.open('https://www.linkedin.com/in/matthew-lambreth/', '_blank');
            }}
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
