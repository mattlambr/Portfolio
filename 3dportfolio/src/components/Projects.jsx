import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'This Portfolio Site',
      description: 'A sleek portfolio website created with react, vite, threeJS and tailwind.',
      link: 'https://github.com/YourGitHub/chain-explorer',
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
          <h2 className="section-heading text-center text-dark">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 justify-center">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-light/70 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl 
                         flex flex-col justify-between items-center text-center w-80 h-80 mx-auto"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-background px-4 py-2 rounded font-semibold hover:bg-secondary transition-colors text-sm"
                      onMouseDown={() => {
                        window.open(project.link, '_blank');
                      }}                    
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
