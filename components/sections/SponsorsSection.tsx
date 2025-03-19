"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '../layout/SectionDivider';
import ScrollAnimation from '../layout/ScrollAnimation';

export default function SponsorsSection() {
  // All sponsors in a single flat array for the horizontal scroll - using real tech company SVG logos
  const sponsorLogos = [
    { name: "Algorand", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Cloudflare", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Loops", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Netlify", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Sentry", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Supabase", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "TechCorp", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
    { name: "Global Innovations", logo: "/images/sponsor-placeholder.svg", website: "https://example.com" },
  ];

  // Double the sponsors for seamless loop
  const allSponsors = [...sponsorLogos, ...sponsorLogos];

  // Auto-scrolling functionality with smoother and slower movement
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          // Reset to start when halfway through (where the duplicated logos begin)
          setScrollPosition(0);
        } else {
          setScrollPosition(prev => prev + 0.5); // Slower, smoother scrolling
        }
      }
    }, 16); // Higher refresh rate for smoother animation

    scrollContainer.scrollLeft = scrollPosition;

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <section id="sponsors" className="pt-24 pb-24 bg-[#070709] relative overflow-hidden">
      {/* Section Divider - Creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '70px', marginTop: '-70px' }}>
        <SectionDivider 
          variant="zigzag" 
          from="#0A0A10" 
          to="#070709" 
          flipY={false}
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[rgb(var(--secondary))] opacity-5 blur-[130px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
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
            <div className="w-24 h-1 bg-[rgb(var(--secondary))] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Sponsored by
            </p>
          </motion.div>
        </ScrollAnimation>
        
        {/* Simplified Sponsors - Horizontally Moving Logos - like the "Sponsored by" section in the image */}
        <div className="mt-8 mb-12">
          
          {/* Horizontally scrolling logos - simplified version without boxes or names */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-16" style={{ width: `${allSponsors.length * 180}px` }}>
              {allSponsors.map((sponsor, index) => (
                <Link 
                  key={`${sponsor.name}-${index}`}
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <div className="flex justify-center items-center h-16 w-28">
                    <Image 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      width={120} 
                      height={50} 
                      className="transition-opacity duration-300 hover:opacity-100 opacity-80 max-h-14 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 