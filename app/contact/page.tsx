"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaDiscord, FaGlobe } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to an API endpoint
    console.log("Form submitted:", formData);
    
    // Simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thanks for reaching out! We'll get back to you soon.",
    });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Get In Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Have questions about The World's Largest Hackathon? We're here to help! Reach out to our team for support, sponsorship inquiries, or general information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            {formStatus && (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] dark:bg-gray-700"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] dark:bg-gray-700"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] dark:bg-gray-700"
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Participation">Participation Question</option>
                  <option value="Sponsorship">Sponsorship Opportunity</option>
                  <option value="Media">Media Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] dark:bg-gray-700 min-h-[150px]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-[rgb(var(--primary))]" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@largesth4ckathon.com" className="text-[rgb(var(--primary))] hover:underline">
                      info@largesth4ckathon.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-4 text-[rgb(var(--primary))]" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+18005551234" className="text-[rgb(var(--primary))] hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-4 text-[rgb(var(--primary))]" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p>
                      Virtual Event Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://twitter.com/largesth4ck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  <FaTwitter className="mr-3" />
                  Twitter
                </a>
                
                <a
                  href="https://linkedin.com/company/largesth4ck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  <FaLinkedin className="mr-3" />
                  LinkedIn
                </a>
                
                <a
                  href="https://discord.gg/largesth4ck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  <FaDiscord className="mr-3" />
                  Discord
                </a>
                
                <a
                  href="https://www.largesth4ckathon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  <FaGlobe className="mr-3" />
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Banner */}
        <div className="mt-20 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-2">Have more questions?</h2>
            <p className="text-gray-600 dark:text-gray-300">Check our frequently asked questions for quick answers.</p>
          </div>
          <Link
            href="/faq"
            className="px-8 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </div>
  );
} 