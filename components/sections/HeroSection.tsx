"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaGlobe } from 'react-icons/fa';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set event date to 30 days from now
  const eventDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [eventDate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 15px rgba(var(--accent), 0.5)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="hero" className="pt-32 pb-24 min-h-screen flex items-center justify-center relative bg-[#050508] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgb(var(--primary))] to-transparent opacity-10"></div>
        <div className="absolute -top-[30%] -right-[30%] w-[80%] h-[80%] bg-[rgb(var(--accent))] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-[rgb(var(--primary))] opacity-5 blur-[100px] rounded-full"></div>
      </div>
      
      {/* Animated glowing elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[rgb(var(--accent))] animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-[rgb(var(--primary))] animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-[rgb(var(--secondary))] animate-ping" style={{ animationDuration: '5s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <span className="inline-flex items-center py-1 px-3 rounded-full text-sm bg-gradient-to-r from-[rgba(var(--accent),0.2)] to-[rgba(var(--primary),0.2)] text-white backdrop-blur-sm border border-white/10">
                  <span className="flex h-2 w-2 rounded-full bg-[rgb(var(--accent))] mr-2 animate-pulse"></span>
                  Registration Now Open
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold tracking-tight"
              >
                <span className="text-white">The world's largest hackathon</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-2xl"
              >
                Join Bolt's ultimate online hackathon with a prize pool of over $1M. (Yes, you've read that right.)
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#about"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-4 rounded-full text-lg border border-white/20 text-white flex items-center gap-2 hover:bg-white/5 transition-all duration-300"
                >
                  Enrol Now <FaArrowRight />
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 text-lg text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[rgb(var(--accent))]" />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[rgb(var(--accent))]" />
                  <span>Virtual & San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-[rgb(var(--accent))]" />
                  <span>Global Participation</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-6/12 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)] border border-white/10 backdrop-blur-sm p-10 rounded-2xl"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-[rgb(var(--accent))] opacity-20 blur-xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-16 h-16 bg-[rgb(var(--primary))] opacity-20 blur-xl rounded-full"></div>
              
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Countdown</h2>
              
              <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square flex items-center justify-center">
                      {/* Blurred background */}
                      <div className="absolute inset-0 bg-[rgb(var(--primary))] opacity-10 blur-md rounded-lg"></div>
                      
                      {/* Border */}
                      <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <span className="block text-3xl md:text-5xl font-bold text-white">{value}</span>
                      </div>
                    </div>
                    <span className="text-sm md:text-base text-gray-400 mt-2 capitalize">{key}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"
                    ></motion.div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Registration: 85% Full</span>
                  <span>Limited Spots Remaining</span>
                </div>
              </div>
              
              <motion.div 
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href="#about"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn-primary w-full py-4 rounded-full text-lg font-semibold text-center"
                >
                  Secure Your Spot Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 