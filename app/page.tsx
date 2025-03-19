"use client";

import { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PrizesSection from '../components/sections/PrizesSection';
import SponsorsSection from '../components/sections/SponsorsSection';
import JudgesSection from '../components/sections/JudgesSection';
import RulesSection from '../components/sections/RulesSection';
import FaqSection from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import Logo from '../components/layout/Logo';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Define sections with their IDs for navigation
  const sections = useMemo(() => [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'judges', label: 'Judges' },
    { id: 'rules', label: 'Rules' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ], []);

  // Function to handle smooth scrolling to section
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    // Define the scroll handler
    const handleScroll = () => {
      // Set scrolled state for navbar styling
      setScrolled(window.scrollY > 20);
      setIsInitialLoad(false);
      
      // Update active section
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    // Call once on initial load to set initial state
    handleScroll();

    // After a short delay, set isInitialLoad to false to prevent flicker
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [sections]);

  return (
    <main className="bg-[rgb(var(--background-start-rgb))]">
      {/* Fixed Navigation - Improved transition and rendering */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-gray-950/90 backdrop-blur-lg shadow-lg' : 'py-5'
        } ${isInitialLoad ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Logo 
                size="medium" 
                className="fill-white" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`nav-item ${
                    activeSection === section.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="nav-active-indicator"></span>
                  )}
                </button>
              ))}
              <button 
                onClick={() => navigateToSection('hero')}
                className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white text-sm font-medium hover:shadow-lg hover:shadow-[rgba(var(--accent),0.3)] transition-all duration-300"
              >
                Register Now
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-[rgb(var(--accent))] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="container-custom py-4 bg-gray-950/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`px-4 py-3 text-left rounded-lg transition-all ${
                    activeSection === section.id 
                      ? 'bg-[rgba(var(--accent),0.15)] text-[rgb(var(--accent))] border-l-2 border-[rgb(var(--accent))]' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => navigateToSection('hero')}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white font-medium rounded-lg text-left"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Content Sections */}
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <SponsorsSection />
      <JudgesSection />
      <RulesSection />
      <FaqSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Logo size="medium" className="fill-white" />
              </div>
              <p className="text-gray-400 max-w-md">
                Unleash innovation. Code your dreams!
              </p>
            </div>
            
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Metahackathon. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
