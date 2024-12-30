import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Header3DLogo from './3DLogo.jsx';

function Header() {
  return (
    <header className="sticky top-0 w-full bg-black text-white z-50">
  <div className="relative container mx-auto px-6 py-4 flex items-center justify-between">
    {/* 3D Logo */}
    <div
      style={{
        position: 'absolute', // Remove it from flexbox flow
        top: '50%', // Vertically center relative to header
        left: '-8%', // Keep it at the far left
        transform: 'translateY(-50%)', // Adjust for centering
        width: '150px', // Adjust as needed for the logo size
        height: '150px',
      }}
    >
      <Header3DLogo />
    </div>

    {/* Navigation Links */}
    <nav className="mx-auto flex items-center space-x-8">
      <a
        href="#about"
        className="text-primary hover:text-accent transition-all transform hover:scale-105"
        onMouseDown={(e) => {
          e.preventDefault(); // Prevent default behavior if needed
          window.location.href = '#about'; // Navigate immediately on click down
        }}
      >
        About
      </a>
      <a
        href="#projects"
        className="text-primary hover:text-accent transition-all transform hover:scale-105"
        onMouseDown={(e) => {
          e.preventDefault(); // Prevent default behavior if needed
          window.location.href = '#projects'; // Navigate immediately on click down
        }}
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-primary hover:text-accent transition-all transform hover:scale-105"
        onMouseDown={(e) => {
          e.preventDefault(); // Prevent default behavior if needed
          window.location.href = '#contact'; // Navigate immediately on click down
        }}
      >
        Contact
      </a>
    </nav>

    {/* Social Icons */}
    <div className="flex items-center space-x-4 ml-4">
      <a
        href="https://github.com/mattlambr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-secondary transition-colors"
        onMouseDown={(e) => {
          e.preventDefault(); // Prevent the default click delay
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
