import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projectList = [
    {
      title: 'This Portfolio Site',
      description: 'A sleek and modern portfolio website built with React, Vite, Tailwind CSS, Three.js, and EmailJS, featuring interactive 3D elements, responsive design, and a contact form with email functionality.',
      link: 'https://github.com/mattlambr/Portfolio',
    },
    {
      title: 'Speech To Text Global Hotkey',
      description:
        'A simple python script that enables a global hotkey accessible from within any program to convert speech to text and copy it to clipboard for easy use. This script utilizes OpenAI Whisper for speech to text conversion.',
      link: 'https://github.com/mattlambr/SpeechToTextGlobalHotkey',
    },
  ];

  return (
    <section id="projects" className="w-full py-16 fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/70 shadow-lg rounded-lg p-6">
          <h2 className="section-heading text-center text-dark">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 justify-center">
            {projectList.map((project, index) => (
              // Motion wrapper for the project card
              <motion.div
                key={index}
                className="bg-light/70 p-6 rounded-lg shadow-md flex flex-col justify-between items-center text-center mx-auto"
                style={{
                  minWidth: '260px',
                  width: '100%',
                  maxWidth: '300px',
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4 mt-auto">
                  {project.link && (
                    // Motion wrapper for the GitHub button
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-background px-4 py-2 rounded font-semibold hover:bg-secondary transition-colors text-sm"
                      whileHover={{
                        scale: 1.1,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;