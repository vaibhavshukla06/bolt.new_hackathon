"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaCheck, FaPuzzlePiece, FaLightbulb, FaUsers, FaTrophy, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionDivider from '../layout/SectionDivider';
import ScrollAnimation from '../layout/ScrollAnimation';

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="pt-24 pb-24 bg-[#0D0D12] relative overflow-hidden">
      {/* Section Divider - Creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '70px', marginTop: '-70px' }}>
        <SectionDivider 
          variant="curve" 
          from="#0F0F13" 
          to="#0D0D12" 
          flipY={false}
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[rgb(var(--primary))] blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[rgb(var(--accent))] blur-[120px] opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <ScrollAnimation>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">OUR</span><br/>
              <span className="text-white text-6xl inline-block relative">
                SPEAKERS
                <motion.span
                  className="absolute -right-6 -top-4 text-[rgb(var(--accent))]"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  ★
                </motion.span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(var(--accent))] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
              A global hackathon bringing together the brightest minds, fostering innovation
              and pushing the boundaries of what's possible in technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Why Participate?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1 w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                    <FaCheck className="text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Global Network</h4>
                    <p className="text-gray-400">
                      Connect with thousands of innovators and industry leaders worldwide, expanding your professional circle and discovering new collaboration opportunities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1 w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                    <FaCheck className="text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Substantial Prizes</h4>
                    <p className="text-gray-400">
                      Compete for over $1 million in cash prizes, special awards, and opportunities to showcase your work to potential investors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1 w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                    <FaCheck className="text-[rgb(var(--accent))]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Learning Opportunities</h4>
                    <p className="text-gray-400">
                      Access exclusive workshops, mentorship sessions, and resources from leading tech companies to level up your skills.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--accent))] to-[rgb(var(--primary))] opacity-20 blur-lg rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <motion.img
                  variants={fadeInAnimation}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-2xl w-full h-auto shadow-2xl ring-1 ring-white/10"
                  src="/images/hackathon-team.svg"
                  alt="Hackathon participants collaborating"
                />
                
                {/* Modern image corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(var(--accent))] rotate-45 -translate-x-16 -translate-y-16"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={`transition-all duration-700 ease-in-out space-y-20 ${showMore ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--secondary))] to-[rgb(var(--primary))] opacity-20 blur-lg rounded-xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <Image 
                    src="/images/hackathon-presentation.jpg" 
                    alt="Hackathon presentation" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                    unoptimized
                  />
                  
                  {/* Modern image corner decoration */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[rgb(var(--secondary))] rotate-45 translate-x-16 translate-y-16"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h3 className="text-3xl font-bold mb-8 text-white">Our Mission</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Our mission is to catalyze innovation by providing a platform where creative minds 
                  collaborate to solve real-world problems. We believe that technology, combined with 
                  diverse perspectives, can address some of the most pressing challenges of our time.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Through this global hackathon, we aim to foster a community of problem-solvers who 
                  are passionate about making a difference. Whether you're a seasoned developer or just 
                  starting your journey, our event provides the resources, mentorship, and opportunities 
                  needed to turn your ideas into reality.
                </p>
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-center mb-16 text-white">
                The Hackathon Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-transparent"></div>
                  <div className="w-16 h-16 rounded-xl bg-[rgba(var(--primary),0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(var(--primary),0.3)] transition-all duration-300">
                    <FaPuzzlePiece className="text-[rgb(var(--primary))] text-2xl" />
                  </div>
                  <span className="absolute top-6 right-8 text-4xl font-bold text-white/10">01</span>
                  <h4 className="text-xl font-bold mb-4 text-white">Form Your Team</h4>
                  <p className="text-gray-400">
                    Bring your own team of 1-5 people or find teammates through our matchmaking platform to complement your skills.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--secondary))] to-transparent"></div>
                  <div className="w-16 h-16 rounded-xl bg-[rgba(var(--secondary),0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(var(--secondary),0.3)] transition-all duration-300">
                    <FaLightbulb className="text-[rgb(var(--secondary))] text-2xl" />
                  </div>
                  <span className="absolute top-6 right-8 text-4xl font-bold text-white/10">02</span>
                  <h4 className="text-xl font-bold mb-4 text-white">Ideation</h4>
                  <p className="text-gray-400">
                    Brainstorm solutions to real-world problems or choose from our sponsored challenges to focus your creative energy.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-transparent"></div>
                  <div className="w-16 h-16 rounded-xl bg-[rgba(var(--accent),0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(var(--accent),0.3)] transition-all duration-300">
                    <FaUsers className="text-[rgb(var(--accent))] text-2xl" />
                  </div>
                  <span className="absolute top-6 right-8 text-4xl font-bold text-white/10">03</span>
                  <h4 className="text-xl font-bold mb-4 text-white">Build Together</h4>
                  <p className="text-gray-400">
                    Collaborate for 48 hours with access to mentors, workshops, and cutting-edge resources to bring your idea to life.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 relative group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-transparent"></div>
                  <div className="w-16 h-16 rounded-xl bg-[rgba(var(--primary),0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(var(--primary),0.3)] transition-all duration-300">
                    <FaTrophy className="text-[rgb(var(--primary))] text-2xl" />
                  </div>
                  <span className="absolute top-6 right-8 text-4xl font-bold text-white/10">04</span>
                  <h4 className="text-xl font-bold mb-4 text-white">Pitch & Win</h4>
                  <p className="text-gray-400">
                    Present your solution to our panel of industry judges for a chance to win substantial prizes and recognition.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative border border-white/10"
            >
              <h3 className="text-3xl font-bold mb-10 text-white text-center">Our Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center">
                  <p className="text-5xl font-bold text-[rgb(var(--accent))] mb-3">50,000<span className="text-[rgb(var(--secondary))]">+</span></p>
                  <div className="w-16 h-1 bg-white/20 mx-auto mb-4"></div>
                  <p className="text-gray-300">Participants from over 100 countries</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-[rgb(var(--accent))] mb-3">10,000<span className="text-[rgb(var(--secondary))]">+</span></p>
                  <div className="w-16 h-1 bg-white/20 mx-auto mb-4"></div>
                  <p className="text-gray-300">Projects launched</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-[rgb(var(--accent))] mb-3">$5M<span className="text-[rgb(var(--secondary))]">+</span></p>
                  <div className="w-16 h-1 bg-white/20 mx-auto mb-4"></div>
                  <p className="text-gray-300">Raised by startups that began at our event</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleShowMore}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all duration-300"
            >
              {showMore ? (
                <>
                  Show Less <FaArrowUp className="ml-2" />
                </>
              ) : (
                <>
                  Show More About Us <FaArrowDown className="ml-2" />
                </>
              )}
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
} 