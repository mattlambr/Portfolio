import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Thanks for reaching out! We’ll be in touch soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact" className="w-full py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gray-200/70 shadow-lg rounded-lg p-8">
          <h2 className="section-heading text-center text-dark">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-8">
            Have questions or want to discuss a project? Drop me a line!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
                whileHover={{
                  scale: 1.1, // Slightly enlarges the button
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20, // Makes the motion more springy
                  },
                }}
                whileTap={{ scale: 0.95 }} // Adds a small scale-down effect when clicked
              >
                Send Message
              </motion.button>
            </div>
          </form>
          {status && (
            <p className="mt-4 text-green-600 font-medium text-center">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
