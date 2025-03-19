"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaLaptopCode, FaRocket, FaLightbulb, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import ScrollAnimation from '../layout/ScrollAnimation';

export default function PrizesSection() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const mainPrizes = [
    {
      id: 1,
      title: "Grand Prize",
      amount: "$50,000",
      description: "The METAVERSE VISIONARY award for the most innovative and impactful project that pushes boundaries.",
      icon: <FaTrophy className="text-white text-2xl" />,
      color: "bg-[rgb(var(--accent))]",
      gradient: "from-[rgb(var(--accent))] to-[rgb(var(--primary))]"
    },
    {
      id: 2,
      title: "Second Place",
      amount: "$30,000",
      description: "For exceptional creativity and technical execution that demonstrates extraordinary potential.",
      icon: <FaMedal className="text-white text-2xl" />,
      color: "bg-[rgb(var(--primary))]",
      gradient: "from-[rgb(var(--primary))] to-[rgb(var(--secondary))]"
    },
    {
      id: 3,
      title: "Third Place",
      amount: "$10,000",
      description: "For outstanding innovation and problem-solving that showcases remarkable talent.",
      icon: <FaMedal className="text-white text-2xl" />,
      color: "bg-[rgb(var(--secondary))]",
      gradient: "from-[rgb(var(--secondary))] to-[rgb(var(--primary))]"
    },
  ];

  const categoryPrizes = [
    {
      id: 1,
      title: "Best AI Integration",
      amount: "$5,000",
      description: "For projects demonstrating innovative use of artificial intelligence or machine learning.",
      icon: <FaLaptopCode />,
      color: "bg-[rgb(var(--accent))]",
    },
    {
      id: 2,
      title: "Web3 Excellence",
      amount: "$5,000",
      description: "For the most impressive blockchain, cryptocurrency, or decentralized application.",
      icon: <FaLightbulb />,
      color: "bg-[rgb(var(--primary))]",
    },
    {
      id: 3,
      title: "Social Impact",
      amount: "$5,000",
      description: "For projects addressing critical social or environmental challenges with technology.",
      icon: <FaAward />,
      color: "bg-[rgb(var(--secondary))]",
    },
    {
      id: 4,
      title: "Health Innovation",
      amount: "$5,000",
      description: "For innovative solutions addressing healthcare challenges and improving patient outcomes.",
      icon: <FaLaptopCode />,
      color: "bg-[rgb(var(--accent))]",
    },
    {
      id: 5,
      title: "FinTech Disruptor",
      amount: "$5,000",
      description: "For groundbreaking technologies in finance, banking, and financial inclusion.",
      icon: <FaRocket />,
      color: "bg-[rgb(var(--primary))]",
    },
    {
      id: 6,
      title: "Developer Tools",
      amount: "$5,000",
      description: "For tools that enhance developer productivity, efficiency, or collaboration.",
      icon: <FaLaptopCode />,
      color: "bg-[rgb(var(--secondary))]",
    },
  ];

  const sponsorPrizes = [
    {
      id: 1,
      sponsor: "TechCorp",
      title: "Cloud Innovation",
      amount: "$10,000",
      description: "For projects that make exceptional use of cloud technologies and services.",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      sponsor: "AI Solutions",
      title: "AI Integration",
      amount: "$10,000",
      description: "For creative and effective integration of AI technologies into practical applications.",
      color: "from-purple-600 to-purple-400",
    },
    {
      id: 3,
      sponsor: "BlockChain Ventures",
      title: "Blockchain Excellence",
      amount: "$10,000",
      description: "For innovative use of blockchain technology to solve real-world problems.",
      color: "from-green-600 to-green-400",
    },
    {
      id: 4,
      sponsor: "Global Health",
      title: "Health Innovator",
      amount: "$10,000",
      description: "For solutions addressing critical healthcare challenges in underserved regions.",
      color: "from-red-600 to-red-400",
    },
  ];

  return (
    <section id="prizes" className="pt-24 pb-24 bg-[#0A0A10] relative overflow-hidden">
      {/* Section Divider - Creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '70px', marginTop: '-70px' }}>
        <SectionDivider 
          variant="wave" 
          from="#0D0D12" 
          to="#0A0A10" 
          flipY={false}
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-full h-full bg-[rgb(var(--primary))] opacity-5 blur-[130px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <ScrollAnimation>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">PRIZES</h2>
            <div className="w-24 h-1 bg-[rgb(var(--accent))] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Get ready to launch your project! The top performers will receive awards, prizes, and recognition.
            </p>
          </motion.div>
        </ScrollAnimation>
        
        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.gradient}`}></div>
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">0{prize.id}</div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="mb-2 text-sm text-gray-400 uppercase tracking-wider">{
                      prize.id === 1 ? "FIRST PLACE" : prize.id === 2 ? "SECOND PLACE" : "THIRD PLACE"
                    }</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {prize.title}
                    </h3>
                  </div>
                  <div className={`p-4 rounded-xl ${prize.color} shadow-lg`}>
                    {prize.icon}
                  </div>
                </div>
                
                <p className="text-4xl font-bold text-[rgb(var(--accent))] mb-6">
                  {prize.amount}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {prize.description}
                </p>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    Includes mentorship opportunities and investor introductions
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Category Prizes - First 3 always visible */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Category Prizes</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categoryPrizes.slice(0, 3).map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold text-white">{prize.title}</h4>
                  <div className={`p-3 rounded-full ${prize.color} group-hover:scale-110 transition-transform duration-300`}>
                    {prize.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold text-[rgb(var(--accent))] mb-4">{prize.amount}</p>
                <p className="text-gray-300 leading-relaxed">
                  {prize.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Expandable Content */}
        <div className={`transition-all duration-700 ease-in-out space-y-16 ${showMore ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {/* Additional Category Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryPrizes.slice(3).map((prize, index) => (
              <motion.div
                key={prize.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold text-white">{prize.title}</h4>
                    <div className={`p-3 rounded-full ${prize.color} group-hover:scale-110 transition-transform duration-300`}>
                      {prize.icon}
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[rgb(var(--accent))] mb-4">{prize.amount}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {prize.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Sponsor Prizes */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-12 text-white">Sponsor Prizes</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {sponsorPrizes.map((prize, index) => (
                <motion.div
                  key={prize.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${prize.color} opacity-20 blur-lg rounded-xl`}></div>
                  <div className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-8">
                      <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold rounded-full bg-[rgba(255,255,255,0.1)] text-white">
                        Sponsored by {prize.sponsor}
                      </span>
                      <h4 className="text-2xl font-bold mb-3 text-white">{prize.title}</h4>
                      <p className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                        {prize.amount}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {prize.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Prize Distribution Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative border border-white/10"
          >
            <h3 className="text-3xl font-bold mb-10 text-white text-center">Prize Distribution Policy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                      <span className="text-[rgb(var(--accent))]">01</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Eligibility</h4>
                    <p className="text-gray-300">All registered participants who submit a completed project before the deadline are eligible for prizes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                      <span className="text-[rgb(var(--accent))]">02</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Team Distribution</h4>
                    <p className="text-gray-300">Prizes will be distributed equally among team members unless otherwise specified by the team.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                      <span className="text-[rgb(var(--accent))]">03</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Tax Considerations</h4>
                    <p className="text-gray-300">Prize winners are responsible for any applicable taxes on their winnings.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                      <span className="text-[rgb(var(--accent))]">04</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Multiple Awards</h4>
                    <p className="text-gray-300">Teams can win in multiple categories (e.g., both a category prize and the grand prize).</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent),0.2)] flex items-center justify-center">
                      <span className="text-[rgb(var(--accent))]">05</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Payment Method</h4>
                    <p className="text-gray-300">Prizes will be distributed via bank transfer or cryptocurrency within 30 days of the winners' announcement.</p>
                  </div>
                </div>
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
                Show More Prizes <FaArrowDown className="ml-2" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
} 