"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaTwitter, FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission - in a real app, this would be an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        category: 'general'
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[rgb(var(--primary))] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[rgb(var(--accent))] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-[rgb(var(--accent))] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Have questions about the hackathon? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(var(--primary),0.1)]">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[rgba(var(--primary),0.2)] p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-[rgb(var(--primary))] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:info@metahackathon.org" className="text-gray-300 hover:text-[rgb(var(--accent))] transition-colors">
                      info@metahackathon.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[rgba(var(--primary),0.2)] p-3 rounded-lg mr-4">
                    <FaPhone className="text-[rgb(var(--primary))] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+1-888-123-4567" className="text-gray-300 hover:text-[rgb(var(--accent))] transition-colors">
                      +1 (888) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[rgba(var(--primary),0.2)] p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-[rgb(var(--primary))] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">San Francisco, CA & Virtual Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://twitter.com/metahackathon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all duration-300"
                  >
                    <FaTwitter className="text-xl text-[rgb(var(--accent))]" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://discord.gg/metahackathon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all duration-300"
                  >
                    <FaDiscord className="text-xl text-[rgb(var(--accent))]" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://linkedin.com/company/metahackathon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl text-[rgb(var(--accent))]" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="https://github.com/metahackathon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all duration-300"
                  >
                    <FaGithub className="text-xl text-[rgb(var(--accent))]" />
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] backdrop-blur-sm border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Hackathon Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white font-medium">Registration Opens</span>
                  <span className="text-gray-300">August 1, 2023</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white font-medium">Kickoff Event</span>
                  <span className="text-gray-300">September 15, 2023</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white font-medium">Hackathon Weekend</span>
                  <span className="text-gray-300">September 22-24, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-medium">Winners Announced</span>
                  <span className="text-gray-300">October 1, 2023</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(var(--primary),0.1)]">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[rgba(var(--primary),0.2)] p-6 rounded-xl border border-[rgba(var(--primary),0.3)]"
                >
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-300">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-900/20 border border-red-500/30 text-red-200 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent text-white placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-white mb-2 font-medium">
                      Inquiry Type
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent text-white placeholder-gray-500 appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                    >
                      <option value="general" className="bg-gray-900">General Inquiry</option>
                      <option value="sponsorship" className="bg-gray-900">Sponsorship</option>
                      <option value="participation" className="bg-gray-900">Participation</option>
                      <option value="technical" className="bg-gray-900">Technical Support</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent text-white placeholder-gray-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-medium text-white relative overflow-hidden transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-[rgb(var(--primary))] opacity-70 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] hover:shadow-lg hover:shadow-[rgba(var(--primary),0.4)]'
                    }`}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 