import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setStatus('Thanks for reaching out! We’ll be in touch soon.');
    setFormData({ name: '', email: '', message: '' });
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
            <button
              type="submit"
              className="bg-accent text-background px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
              onMouseDown={(e) => {
                e.preventDefault(); // Adjust if necessary for your form logic
                console.log('Form submitted on mouse down');
              }}    
            >
              Send Message
            </button>
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
