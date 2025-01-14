import React from 'react';
import RotatingOrb from './RotatingOrb';
import pfp from '../assets/pfp.png'; // Import your headshot
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'; // Import Framer Motion
import 'react-vertical-timeline-component/style.min.css';

function Hero() {
  const timelineData = [
    { year: '2016', description: 'Entered Web3 as an investor' },
    { year: '2021', description: 'Started working for Web3 Projects, began university' },
    { year: '2023', description: 'Launched first personal Web3 Project' },
    { year: '2025', description: '(Future) Graduated UNC-CH with BS in Statistics and Analytics' },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-transparent">
      {/* Rotating Orb Background */}
      <RotatingOrb />

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center lg:items-start">
        {/* Left Content with Framer Effects */}
        <motion.div
          className="max-w-sm sm:max-w-md w-full bg-white/70 shadow-lg rounded-lg p-6 flex flex-col items-center"
          whileHover={{
            scale: 1.05, // Scale up the card slightly
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
          whileTap={{
            scale: 0.95, // Slightly shrink on tap
          }}
        >
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img src={pfp} alt="Matt Lambreth" className="w-full h-full object-cover" />
          </div>
          <h1 className="section-heading text-center text-dark font-extrabold">Matt Lambreth</h1>
          <p className="mt-3 text-base text-gray-700 leading-relaxed text-center">
            I'm a passionate developer, statistician, and data scientist with a focus on <strong className="text-black">Web3</strong> and <strong className="text-black">AI</strong>.
          </p>
          {/* Learn More Button with Framer Effects */}
          <motion.a
            href="#about"
            className="mt-6 bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
            whileHover={{
              scale: 1.1, // Slightly enlarge button on hover
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{
              scale: 0.95, // Shrink slightly on click
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              window.location.href = '#about';
            }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Content (Timeline) */}
        <div className="w-full">
          {/* Card for Timeline Heading */}
          <div className="max-w-sm mx-auto bg-white/70 shadow-lg rounded-lg p-4 mb-8">
            <h2 className="text-2xl font-bold text-center text-dark">
              Timeline
            </h2>
          </div>

          {/* Timeline Content */}
          <VerticalTimeline layout="1-column" className="timeline-container">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={{
                  marginBottom: '24px', // Match the spacing of VerticalTimelineElement
                }}
              >
                <VerticalTimelineElement
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    color: '#111111',
                    borderRadius: '8px', // Add rounded corners
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)', // Add shadow
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #4b917d' }}
                  date={item.year}
                  iconStyle={{ background: '#4b917d', color: '#fff' }}
                >
                    <p
                      style={{
                        fontSize: '1rem', // Equivalent to text-lg or larger
                        fontWeight: '700',   // Equivalent to font-bold
                      }}
                    >
                      {item.description}
                    </p>
                </VerticalTimelineElement>
              </motion.div>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Hero;
