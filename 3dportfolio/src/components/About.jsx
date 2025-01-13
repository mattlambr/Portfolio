import React from 'react';

function About() {
  return (
    <section id="about" className="w-full py-16 fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/70 shadow-lg rounded-lg p-6">
          <h2 className="section-heading text-center text-dark">
            About Me
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed"> {/* Change text-dark to text-secondary */}
            I'm <strong>XXXX</strong>, currently a senior at XXXX. I am pursuing a BS in Statistics and Analytics. My focuses are Web3 and AI/ML. I have been onchain since 2016 and working in crypto since 2021. I am currently looking for full-time employment offers (primarily Web3) starting Fall 2025. Below you will find my public software projects and a contact form. If you would like to learn more about any of the projects please <strong>contact me</strong> through the form below.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
