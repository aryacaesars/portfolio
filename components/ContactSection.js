import React, { useState } from 'react';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form Data:', formData);
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section 
      id="contact" 
      className="max-w-md md:max-w-3xl mx-6 md:mx-auto p-8 md:p-8 my-16 sm:my-20 border-2 border-gray-900 rounded-[40px] bg-white scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-black text-center">Let's Work Together</h2>
      <p className="text-base mb-8 text-gray-700 text-center">
        Have a project in mind? Let's discuss how I can help bring your ideas to life.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base outline-none bg-white transition-all duration-200 hover:border-gray-700 focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-base outline-none bg-white transition-all duration-200 hover:border-gray-700 focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base outline-none bg-white transition-all duration-200 hover:border-gray-700 focus:border-black focus:ring-1"
          />
        </div>
        <button type="submit" className="bg-black text-white border-none p-3 text-base rounded-full cursor-pointer transition-opacity duration-200 hover:opacity-90">
          Send Message
        </button>
      </form>
    </section>
  );
}

