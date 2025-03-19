"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGlobe, FaArrowDown, FaArrowUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import ScrollAnimation from '../layout/ScrollAnimation';

export default function JudgesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Combine primary and additional judges into a single array
  const allJudges = [
    {
      name: "Alexandria Ray",
      title: "Chief Technology Officer",
      company: "Future Technologies",
      image: "/images/hackathon-team.svg",
      bio: "Alexandria has over 15 years of experience in AI and machine learning. Previously the Director of Engineering at Google, she now leads technology strategy at Future Technologies.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "Marcus Chen",
      title: "Founder & CEO",
      company: "BlockChain Ventures",
      image: "/images/hackathon-team.svg",
      bio: "Pioneer in blockchain technology and advocate for decentralized systems. Marcus founded BlockChain Ventures after successful exits from two tech startups.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "Sophia Williams",
      title: "Partner",
      company: "Innovate Capital",
      image: "/images/hackathon-team.svg",
      bio: "Sophia leads investments in emerging technologies at Innovate Capital. She has backed over 40 successful startups and serves on the boards of multiple tech companies.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "Dr. James Wilson",
      title: "AI Research Director",
      company: "Tech Institute",
      image: "/images/hackathon-team.svg",
      bio: "Leading AI researcher with focus on ethical AI development. Published author with over 50 peer-reviewed papers on machine learning applications.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "Elena Rodriguez",
      title: "VP of Product",
      company: "Global Tech Solutions",
      image: "/images/hackathon-team.svg",
      bio: "Product strategist specializing in UX/UI design and consumer technology. Previously led product teams at Apple and Microsoft.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter",
        website: "https://example.com",
      }
    },
    {
      name: "Raj Patel",
      title: "Founder",
      company: "DevOps Platform",
      image: "/images/hackathon-team.svg",
      bio: "Serial entrepreneur with expertise in cloud infrastructure and developer tools. Built and sold three successful tech startups.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "Dr. Aisha Johnson",
      title: "Professor of Computer Science",
      company: "Tech University",
      image: "/images/hackathon-team.svg",
      bio: "Expert in cybersecurity and distributed systems. Advisor to multiple government agencies on technology policy.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    },
    {
      name: "David Kim",
      title: "CTO",
      company: "Health Tech Innovations",
      image: "/images/hackathon-team.svg",
      bio: "Expert in applying AI and data science to healthcare challenges. Previously led R&D at major pharmaceutical companies.",
      links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
      }
    }
  ];

  // Function to scroll the container left or right
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Amount to scroll each time
      const newScrollLeft = direction === 'right' 
        ? scrollContainerRef.current.scrollLeft + scrollAmount
        : scrollContainerRef.current.scrollLeft - scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="judges" className="pt-24 pb-32 bg-[#070709] relative overflow-hidden">
      {/* Section Divider - Creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '70px', marginTop: '-70px' }}>
        <SectionDivider 
          variant="curve"
          from="#070709" 
          to="#0A0A10" 
          flipY={false}
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-full h-full bg-[rgb(var(--primary))] opacity-5 blur-[130px] rounded-full"></div>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">JUDGES</h2>
            <div className="w-24 h-1 bg-[rgb(var(--primary))] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Meet our distinguished panel of industry experts who will evaluate submissions and select the winners.
            </p>
          </motion.div>
        </ScrollAnimation>
        
        {/* Horizontal Scroll Navigation Buttons */}
        <div className="flex justify-end mb-6 gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white"
            onClick={() => scroll('left')}
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white"
            onClick={() => scroll('right')}
          >
            <FaChevronRight />
          </motion.button>
        </div>
        
        {/* Horizontally Scrollable Judges Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6">
            {allJudges.map((judge, index) => (
              <motion.div
                key={judge.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative flex-shrink-0 w-80 snap-start"
              >
                {/* Gradient highlight at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"></div>
                
                <div className="p-6">
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]"></div>
                    <Image 
                      src={judge.image} 
                      alt={judge.name} 
                      width={300} 
                      height={300} 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-4">
                      {Object.entries(judge.links).map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white opacity-80 hover:opacity-100 hover:text-[rgb(var(--accent))] transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {platform === 'linkedin' && <FaLinkedin />}
                          {platform === 'twitter' && <FaTwitter />}
                          {platform === 'website' && <FaGlobe />}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{judge.name}</h3>
                  <p className="text-[rgb(var(--accent))] mb-3">
                    {judge.title}, <span className="text-gray-300">{judge.company}</span>
                  </p>
                  <p className="text-gray-300 leading-relaxed line-clamp-4">{judge.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
} 