"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

// FAQ data
const faqData = [
  {
    id: 1,
    category: "General",
    questions: [
      {
        id: "q1",
        question: "What is a hackathon?",
        answer: "A hackathon is an event where participants collaborate intensively on software projects in a limited time frame, typically ranging from 24 to 48 hours. The goal is to create innovative solutions to problems or challenges, often competing for prizes and recognition."
      },
      {
        id: "q2",
        question: "When and where will The World's Largest Hackathon take place?",
        answer: "The World's Largest Hackathon will be a fully virtual event, allowing participants to join from anywhere in the world. The exact date is still to be determined and will be announced soon. Make sure to sign up for updates to be notified when the date is confirmed."
      },
      {
        id: "q3",
        question: "How long will the hackathon last?",
        answer: "The hackathon will run for 48 hours continuously, giving participants a full weekend to develop their projects. There will be kickoff and closing ceremonies, as well as workshops and other activities throughout the event."
      },
      {
        id: "q4",
        question: "Who can participate?",
        answer: "The World's Largest Hackathon is open to participants of all ages, backgrounds, and skill levels from around the world. Whether you're a seasoned developer or just getting started, everyone is welcome to join and contribute their unique perspective."
      },
    ],
  },
  {
    id: 2,
    category: "Participation",
    questions: [
      {
        id: "q5",
        question: "Do I need to be a programmer to participate?",
        answer: "Not at all! While programming skills are valuable, hackathons benefit from diverse talents including design, business development, project management, and domain expertise. Teams with varied skillsets often create the most innovative and well-rounded solutions."
      },
      {
        id: "q6",
        question: "How much does it cost to participate?",
        answer: "The World's Largest Hackathon is completely free to participate in. We believe in removing barriers to innovation and want to make this opportunity accessible to everyone."
      },
      {
        id: "q7",
        question: "Can I participate as an individual or do I need a team?",
        answer: "You can register either as an individual or as a team. If you register individually, we'll provide team-forming opportunities before and during the event to help you find teammates with complementary skills."
      },
      {
        id: "q8",
        question: "How large can teams be?",
        answer: "Teams can have up to 4 members. We find this to be an optimal size for hackathon projects, allowing for a diversity of skills while maintaining effective communication and collaboration."
      },
    ],
  },
  {
    id: 3,
    category: "Projects & Submissions",
    questions: [
      {
        id: "q9",
        question: "Is there a specific theme or problem to solve?",
        answer: "The World's Largest Hackathon features an open theme, allowing participants to work on any problem they're passionate about. However, projects must be categorized into one of our prize categories: AI/ML, Blockchain, Sustainability, Healthcare, Education, or other specialized areas."
      },
      {
        id: "q10",
        question: "Can I start working on my project before the hackathon?",
        answer: "All projects must be created during the hackathon period. While you can brainstorm ideas beforehand, no code should be written and no designs should be created until the official start time. Existing open-source libraries and frameworks are allowed, but your project's core functionality must be developed during the event."
      },
      {
        id: "q11",
        question: "How are projects evaluated?",
        answer: "Projects will be judged by our panel of industry experts based on innovation, impact, feasibility, and presentation. Each prize category has specific criteria relevant to that domain. The judging process includes an initial screening, category-specific evaluation, and a final round for top projects."
      },
      {
        id: "q12",
        question: "What should I submit at the end of the hackathon?",
        answer: "Submissions should include your project's source code (via GitHub or similar platform), a brief video demo (max 3 minutes), a written description of the project and its impact, and any additional materials that help showcase your solution. Detailed submission guidelines will be provided closer to the event."
      },
    ],
  },
  {
    id: 4,
    category: "Prizes & Support",
    questions: [
      {
        id: "q13",
        question: "What prizes are available?",
        answer: "The World's Largest Hackathon features over $1 million in prizes across multiple categories. The grand prize is $500,000, with category prizes ranging from $70,000 to $200,000. Additional special recognition awards include People's Choice, Best UI/UX Design, and Best First-Time Hackers, each with their own prizes."
      },
      {
        id: "q14",
        question: "Will there be mentorship or technical support during the event?",
        answer: "Yes! We'll have a team of experienced mentors available throughout the hackathon to provide guidance, technical support, and feedback. Mentors come from various backgrounds including software development, design, business, and domain-specific expertise."
      },
      {
        id: "q15",
        question: "What resources will be provided to participants?",
        answer: "Participants will have access to workshops, technical documentation, APIs and development tools from our sponsors, cloud credits for deployment, and collaborative platforms for team communication. We'll share a comprehensive resource guide before the event."
      },
      {
        id: "q16",
        question: "What happens after the hackathon?",
        answer: "Winners will be announced at the closing ceremony. Beyond prizes, we offer continued support for promising projects, including connections to potential investors, incubator programs, and opportunities to showcase your work to a broader audience."
      },
    ],
  },
  {
    id: 5,
    category: "Technical Requirements",
    questions: [
      {
        id: "q17",
        question: "What technical requirements do I need to participate?",
        answer: "You'll need a computer with internet connection, video/audio capabilities for team communication, and any development environment suitable for your project. Since the hackathon is virtual, you'll be using your own hardware and software setup."
      },
      {
        id: "q18",
        question: "What platforms will be used for the virtual event?",
        answer: "We'll use a combination of platforms: a central event hub for announcements and schedules, video conferencing for ceremonies and workshops, chat platforms for communication, and project submission platforms. Specific details and access instructions will be provided to registered participants."
      },
      {
        id: "q19",
        question: "Can I use existing libraries, frameworks, or APIs?",
        answer: "Yes, you can use existing open-source libraries, frameworks, and public APIs. The focus is on what you build with these tools, not reinventing everything from scratch. However, your project's core functionality and innovation must be created during the hackathon."
      },
      {
        id: "q20",
        question: "Do I retain intellectual property rights to my project?",
        answer: "Yes, you retain full intellectual property rights to what you create during the hackathon. Our goal is to foster innovation, not to claim ownership of your ideas. However, by participating, you grant us the right to showcase your project in our communications."
      },
    ],
  },
];

export default function FAQ() {
  // State to track which questions are open
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  // Toggle question open/closed
  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Toggle all questions in a category
  const toggleCategory = (categoryId: number, isOpen: boolean) => {
    const category = faqData.find((cat) => cat.id === categoryId);
    if (!category) return;

    const newOpenQuestions = { ...openQuestions };
    category.questions.forEach((q) => {
      newOpenQuestions[q.id] = isOpen;
    });
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Find answers to common questions about The World's Largest Hackathon. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-10 mb-16">
          {faqData.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleCategory(category.id, true)}
                    className="text-sm text-gray-500 hover:text-[rgb(var(--primary))] transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={() => toggleCategory(category.id, false)}
                    className="text-sm text-gray-500 hover:text-[rgb(var(--primary))] transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.questions.map((item) => (
                  <div key={item.id} className="p-6">
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() => toggleQuestion(item.id)}
                    >
                      <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
                      {openQuestions[item.id] ? (
                        <FaChevronUp className="flex-shrink-0 text-[rgb(var(--primary))]" />
                      ) : (
                        <FaChevronDown className="flex-shrink-0 text-gray-400" />
                      )}
                    </button>
                    {openQuestions[item.id] && (
                      <div className="mt-4 text-gray-600 dark:text-gray-300">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help! Reach out to our team for any additional questions or clarifications you might need.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-[rgb(var(--primary))] font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 