"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowUp, FaQuestionCircle } from 'react-icons/fa';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Primary FAQs (always visible)
  const primaryFaqs = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a collaborative event where participants work in teams to create innovative solutions to challenges in a limited time frame. Our hackathon brings together developers, designers, and problem solvers to build prototypes and projects within 48 hours."
    },
    {
      question: "Do I need to be a programmer to participate?",
      answer: "Not at all! While programming skills are helpful, hackathons need participants with diverse skills including design, project management, domain expertise, and presentation skills. Teams benefit from having members with different backgrounds and abilities."
    },
    {
      question: "How do teams work?",
      answer: "Teams can consist of 1-4 members. You can form your own team before the event, or join our team formation activities to meet potential teammates. We encourage diversity in team composition, bringing together different skills and backgrounds."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the hackathon is completely free. We believe in making innovation accessible to everyone. All you need to bring is your creativity, skills, and enthusiasm to collaborate and build amazing projects."
    },
    {
      question: "What can I build?",
      answer: "You can build anything that aligns with the hackathon themes or sponsor challenges. Projects can include web applications, mobile apps, hardware solutions, games, or tools addressing specific problems. We encourage creative and innovative solutions."
    }
  ];
  
  // Additional FAQs (shown when "Show More" is clicked)
  const additionalFaqs = [
    {
      question: "What should I bring to the hackathon?",
      answer: "For in-person participants: Bring your laptop, charger, any hardware you'll need, and personal items like toiletries and a change of clothes if staying overnight. For virtual participants: Ensure you have a reliable internet connection and the necessary software installed."
    },
    {
      question: "Will there be food provided?",
      answer: "Yes, for in-person participants, we provide meals, snacks, and beverages throughout the event to keep you energized and focused. We accommodate common dietary restrictions - please indicate your needs during registration."
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, we are committed to providing a harassment-free, inclusive experience for everyone. All participants are required to abide by our code of conduct, which promotes respect, collaboration, and a positive environment for all."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects are evaluated based on innovation, technical complexity, design and user experience, practicality and impact, and presentation quality. Specific sponsor challenges may have additional criteria, which will be announced at the beginning of the hackathon."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "All coding and design work should be done during the hackathon. You can research, plan, and sketch ideas beforehand, but the actual implementation must start when the hackathon begins to ensure a fair competition."
    },
    {
      question: "Do I retain intellectual property rights to my project?",
      answer: "Yes, you and your team retain all rights to your intellectual property. However, to be eligible for prizes, you must make your project open source with an appropriate license or as specified in certain sponsor challenges."
    },
    {
      question: "Will there be mentors or technical support available?",
      answer: "Absolutely! We provide mentors with various expertise to help guide you through challenges. Additionally, sponsor representatives will be available to assist with their specific technologies or APIs."
    },
    {
      question: "Can I participate remotely?",
      answer: "Yes, our hackathon supports both in-person and virtual participation. We use collaborative platforms to ensure remote participants can fully engage with the event, including team formation, workshops, mentorship, and project submissions."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-[20%] right-[10%] w-[60%] h-[60%] bg-[rgb(var(--accent))] opacity-5 blur-[120px] rounded-full"></div>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">FAQ</h2>
          <div className="w-24 h-1 bg-[rgb(var(--accent))] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Get answers to the most commonly asked questions about our hackathon.
          </p>
        </motion.div>
        
        {/* Primary FAQs (Always Visible) */}
        <div className="max-w-4xl mx-auto mb-16">
          {primaryFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div 
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center p-6 rounded-xl cursor-pointer backdrop-blur-sm transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] border border-[rgba(var(--primary),0.2)]' 
                    : 'bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-white/5'
                }`}
              >
                <h3 className="text-xl font-bold text-white flex-1 text-left flex items-center">
                  <FaQuestionCircle className={`mr-3 text-lg ${
                    activeIndex === index ? 'text-[rgb(var(--accent))]' : 'text-gray-500'
                  }`} />
                  {faq.question}
                </h3>
                <div className={`p-2 rounded-full ${
                  activeIndex === index ? 'bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))]' : 'bg-white/5 text-gray-400'
                } transition-all duration-300`}>
                  {activeIndex === index ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  }
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[rgba(255,255,255,0.01)] backdrop-blur-sm border-x border-b border-white/5 rounded-b-xl ${
                activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-2">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional FAQs (Expandable) */}
        <div className={`transition-all duration-700 ease-in-out ${
          showMore ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="max-w-4xl mx-auto mb-16">
            {additionalFaqs.map((faq, index) => (
              <motion.div 
                key={index + primaryFaqs.length}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div 
                  onClick={() => toggleFaq(index + primaryFaqs.length)}
                  className={`flex justify-between items-center p-6 rounded-xl cursor-pointer backdrop-blur-sm transition-all duration-300 ${
                    activeIndex === index + primaryFaqs.length
                      ? 'bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] border border-[rgba(var(--primary),0.2)]' 
                      : 'bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-white/5'
                  }`}
                >
                  <h3 className="text-xl font-bold text-white flex-1 text-left flex items-center">
                    <FaQuestionCircle className={`mr-3 text-lg ${
                      activeIndex === index + primaryFaqs.length ? 'text-[rgb(var(--accent))]' : 'text-gray-500'
                    }`} />
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full ${
                    activeIndex === index + primaryFaqs.length ? 'bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))]' : 'bg-white/5 text-gray-400'
                  } transition-all duration-300`}>
                    {activeIndex === index + primaryFaqs.length ? 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    }
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[rgba(255,255,255,0.01)] backdrop-blur-sm border-x border-b border-white/5 rounded-b-xl ${
                  activeIndex === index + primaryFaqs.length ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Still have questions card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.05)] backdrop-blur-sm border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white transition-all duration-300"
            >
              Contact Us
            </motion.a>
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
                Show More FAQs <FaArrowDown className="ml-2" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
} 