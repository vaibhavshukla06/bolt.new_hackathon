"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowUp, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaLaptopCode } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import ScrollAnimation from '../layout/ScrollAnimation';

export default function RulesSection() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const generalRules = [
    {
      title: "Team Composition",
      description: "Teams can consist of 1-4 members. All team members must be registered participants."
    },
    {
      title: "Project Originality",
      description: "All code must be written during the hackathon. You may use publicly available libraries and frameworks."
    },
    {
      title: "Intellectual Property",
      description: "You retain all rights to your intellectual property. Sponsors may request rights to submitted projects."
    },
    {
      title: "Submissions",
      description: "Projects must be submitted through the official platform before the deadline. Late submissions will not be accepted."
    },
    {
      title: "Code of Conduct",
      description: "All participants must adhere to the hackathon code of conduct. Violations may result in disqualification."
    }
  ];

  const eligibilityRules = [
    {
      title: "Age Requirement",
      description: "Participants must be at least 18 years old or have parental/guardian consent."
    },
    {
      title: "Skill Level",
      description: "Open to all skill levels, from beginners to experts. We encourage diversity in experience."
    },
    {
      title: "Registration",
      description: "All participants must complete the registration process and be confirmed by the organizing team."
    }
  ];

  const technicalRules = [
    {
      title: "Technology Stack",
      description: "You may use any programming language, framework, or platform of your choice."
    },
    {
      title: "External Services",
      description: "Integration with external APIs and services is allowed. Be prepared to explain your implementation."
    },
    {
      title: "Open Source",
      description: "Use of open-source libraries is permitted. Proper attribution must be included in your submission."
    },
    {
      title: "Deployment",
      description: "Projects should be deployable and accessible for judging. Include clear setup instructions."
    }
  ];

  const dosDonts = {
    dos: [
      "Submit your project before the deadline",
      "Document your code and solution approach",
      "Prepare a clear presentation for judges",
      "Credit all resources and libraries used",
      "Ask organizers for help if needed"
    ],
    donts: [
      "Submit pre-existing projects or code",
      "Share confidential or private data",
      "Use proprietary code without permission",
      "Engage in discriminatory behavior",
      "Share access credentials publicly"
    ]
  };

  return (
    <section id="rules" className="pt-24 pb-24 bg-[#060608] relative overflow-hidden">
      {/* Section Divider - Creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '70px', marginTop: '-70px' }}>
        <SectionDivider 
          variant="angle" 
          from="#0A0A10" 
          to="#060608" 
          flipY={false}
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-[rgb(var(--accent))] opacity-5 blur-[150px] rounded-full"></div>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">RULES</h2>
            <div className="w-24 h-1 bg-[rgb(var(--accent))] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              By participating in the hackathon, you agree to abide by all rules and regulations. The organizers reserve the right to modify these rules at any time. Any changes will be communicated to all participants.
            </p>
          </motion.div>
        </ScrollAnimation>
        
        {/* General Rules */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-white relative inline-flex items-center">
              <div className="absolute -left-8 w-4 h-8 bg-[rgb(var(--accent))]"></div>
              General Rules
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {generalRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group"
              >
                <div className="w-full h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] mb-6 rounded opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="text-xl font-bold mb-3 text-white">{rule.title}</h4>
                <p className="text-gray-300 leading-relaxed">{rule.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Eligibility */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-white relative inline-flex items-center">
              <div className="absolute -left-8 w-4 h-8 bg-[rgb(var(--primary))]"></div>
              Eligibility
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))]">
                    <FaInfoCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{rule.title}</h4>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Expandable Content */}
        <div className={`transition-all duration-700 ease-in-out space-y-16 ${showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {/* Technical Requirements */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-3xl font-bold mb-6 text-white relative inline-flex items-center">
                <div className="absolute -left-8 w-4 h-8 bg-[rgb(var(--secondary))]"></div>
                Technical Requirements
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[rgba(var(--accent),0.15)] text-[rgb(var(--accent))]">
                      <FaLaptopCode className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{rule.title}</h4>
                      <p className="text-gray-300">{rule.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Do's and Don'ts */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-3xl font-bold mb-6 text-white relative inline-flex items-center">
                <div className="absolute -left-8 w-4 h-8 bg-[rgb(var(--accent))]"></div>
                Do's and Don'ts
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[rgba(var(--primary),0.1)] to-transparent backdrop-blur-sm border border-[rgba(var(--primary),0.2)] rounded-xl p-8"
              >
                <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <FaCheckCircle className="text-[rgb(var(--primary))] mr-3" /> Do's
                </h4>
                <ul className="space-y-4">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-200">
                      <span className="text-[rgb(var(--primary))]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[rgba(var(--accent),0.1)] to-transparent backdrop-blur-sm border border-[rgba(var(--accent),0.2)] rounded-xl p-8"
              >
                <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <FaTimesCircle className="text-[rgb(var(--accent))] mr-3" /> Don'ts
                </h4>
                <ul className="space-y-4">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-200">
                      <span className="text-[rgb(var(--accent))]">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Disqualification Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Disqualification Criteria</h3>
            <p className="text-center mb-8 text-gray-300">
              The following actions may result in immediate disqualification from the hackathon:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-[rgba(255,0,0,0.1)] rounded-xl border border-red-500/20">
                <h4 className="text-lg font-bold mb-3 text-white">Code of Conduct Violations</h4>
                <p className="text-gray-300 text-sm">Harassment, discrimination, or any behavior that violates our code of conduct will not be tolerated.</p>
              </div>
              
              <div className="p-5 bg-[rgba(255,0,0,0.1)] rounded-xl border border-red-500/20">
                <h4 className="text-lg font-bold mb-3 text-white">Plagiarism</h4>
                <p className="text-gray-300 text-sm">Submitting pre-existing work, copying other submissions, or claiming others' work as your own.</p>
              </div>
              
              <div className="p-5 bg-[rgba(255,0,0,0.1)] rounded-xl border border-red-500/20">
                <h4 className="text-lg font-bold mb-3 text-white">Deadline Violation</h4>
                <p className="text-gray-300 text-sm">Submitting your project after the official deadline has passed.</p>
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
                View Complete Rules <FaArrowDown className="ml-2" />
              </>
            )}
          </motion.button>
        </div>
        
        {/* Rules Agreement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
            By participating in the hackathon, you agree to abide by all rules and regulations. The organizers reserve the right to modify these rules at any time. Any changes will be communicated to all participants.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="mt-8 inline-flex items-center px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            Questions? Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 