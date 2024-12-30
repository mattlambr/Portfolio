import React from 'react';
import RotatingOrb from './RotatingOrb';
import pfp from '../assets/pfp.png'; // Import your headshot
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Hero() {
  const timelineData = [
    { year: '2018', description: 'Started learning Web3 development' },
    { year: '2020', description: 'Built my first dApp on Ethereum' },
    { year: '2022', description: 'Launched a successful memecoin project' },
    { year: '2023', description: 'Focused on AI/ML research' },
    { year: '2024', description: 'Looking for full-time opportunities' },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-transparent">
      {/* Rotating Orb Background */}
      <RotatingOrb />

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center lg:items-start">
        {/* Left Content (Hero Box) */}
        <div className="max-w-sm sm:max-w-md w-full bg-white/70 shadow-lg rounded-lg p-6 flex flex-col items-center">
          {/* Circular Frame with Transparent Border */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              src={pfp}
              alt="Matt Lambreth"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="section-heading text-center text-dark">
            Matt Lambreth
          </h1>
          <p className="mt-3 text-base text-gray-700 leading-relaxed text-center">
            I'm a passionate developer, statistician, and data scientist with a focus on <strong>Web3</strong> and <strong>AI</strong>.
          </p>
          {/* Learn More Button */}
          <a
            href="#about"
            className="mt-6 bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
            onMouseDown={(e) => {
              e.preventDefault();
              window.location.href = '#about';
            }}
          >
            Learn More
          </a>
        </div>

        {/* Right Content (Timeline) */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-dark text-center mb-4">
            Timeline
          </h2>
          <VerticalTimeline layout="1-column" className="timeline-container">
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  color: '#111111',
                }}
                contentArrowStyle={{ borderRight: '7px solid #80a0a3' }}
                date={item.year}
                iconStyle={{ background: '#80a0a3', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold">
                  {item.year}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Hero;
