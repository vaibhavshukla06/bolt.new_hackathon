import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import Link from "next/link";

// Placeholder data for judges
const judges = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief AI Officer",
    company: "TechVision Inc.",
    bio: "Dr. Chen is a renowned expert in artificial intelligence with over 15 years of experience in developing cutting-edge AI solutions. She leads AI innovation at TechVision Inc. and has published numerous research papers on machine learning algorithms.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    title: "Founder & CEO",
    company: "Blockchain Innovations",
    bio: "Alex is a serial entrepreneur who has founded three successful tech startups. His current venture, Blockchain Innovations, is revolutionizing supply chain management through blockchain technology. He's passionate about mentoring young entrepreneurs.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Maya Patel",
    title: "VP of Engineering",
    company: "Global Cloud Solutions",
    bio: "Maya has led engineering teams at several Fortune 500 companies and startups alike. With expertise in scalable cloud architecture, she's helped companies transform their infrastructure and development practices for the digital age.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Director of Research",
    company: "HealthTech Labs",
    bio: "Dr. Wilson combines his background in medicine and computer science to drive innovation in healthcare technology. His work has led to breakthroughs in medical imaging and diagnostic tools powered by artificial intelligence.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Sophia Kim",
    title: "UX Design Lead",
    company: "User First Design",
    bio: "Sophia is a leading voice in human-centered design, advocating for accessible and intuitive user experiences. Her design methodology has been adopted by numerous tech companies, resulting in products that prioritize user needs and inclusivity.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "Carlos Mendez",
    title: "CTO",
    company: "EduTech Innovations",
    bio: "Carlos has dedicated his career to leveraging technology for educational advancement. Through his leadership at EduTech Innovations, he's developed platforms that have made quality education more accessible to millions of students worldwide.",
    image: "/images/placeholder-person.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

export default function Judges() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Meet Our Judges
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Our panel of expert judges brings diverse perspectives and deep industry expertise to evaluate your innovative projects.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {judges.map((judge) => (
            <div
              key={judge.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-60 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-3xl font-bold text-gray-500 dark:text-gray-400">
                  {judge.name.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
                <p className="text-[rgb(var(--primary))] font-medium mb-4">
                  {judge.title}, {judge.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                  {judge.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={judge.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(var(--primary))] transition-colors"
                    aria-label={`${judge.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={judge.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(var(--primary))] transition-colors"
                    aria-label={`${judge.name}'s Twitter`}
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={judge.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(var(--primary))] transition-colors"
                    aria-label={`${judge.name}'s Website`}
                  >
                    <FaGlobe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Judging Process */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="h-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"></div>
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Judging Process</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our judging process is designed to be fair, transparent, and comprehensive. Each project will go through the following evaluation stages:
              </p>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-12 h-12 rounded-full bg-[rgba(var(--primary),0.1)] flex items-center justify-center text-[rgb(var(--primary))] font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Initial Screening</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      All projects will be initially reviewed to ensure they meet the basic requirements and submission guidelines.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-12 h-12 rounded-full bg-[rgba(var(--primary),0.1)] flex items-center justify-center text-[rgb(var(--primary))] font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Category Evaluation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Projects will be assessed by judges specialized in the relevant categories, focusing on innovation, technical implementation, and potential impact.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-12 h-12 rounded-full bg-[rgba(var(--primary),0.1)] flex items-center justify-center text-[rgb(var(--primary))] font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Final Round</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Top projects from each category will advance to the final round, where they'll be reviewed by the entire panel of judges.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-12 h-12 rounded-full bg-[rgba(var(--primary),0.1)] flex items-center justify-center text-[rgb(var(--primary))] font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Winner Selection</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Winners will be selected based on combined scores across all evaluation criteria, with the grand prize winner chosen from among the category winners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Sign up now to receive updates about The World's Largest Hackathon and be the first to know when registration opens.
          </p>
          <Link href="/registration" className="btn-primary">
            Sign Up for Updates
          </Link>
        </div>
      </div>
    </div>
  );
} 