import { FaCalendarAlt, FaGlobe, FaUserAlt, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            About The World's Largest Hackathon
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Welcome to The World's Largest Hackathon, a virtual event empowering participants to create world-changing solutions from anywhere.
          </p>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <FaGlobe className="text-[rgb(var(--primary))] mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg">Format</h3>
                    <p className="text-gray-600 dark:text-gray-300">Fully virtual event, accessible from anywhere in the world</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCalendarAlt className="text-[rgb(var(--primary))] mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg">Date</h3>
                    <p className="text-gray-600 dark:text-gray-300">To be announced soon</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUserAlt className="text-[rgb(var(--primary))] mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg">Eligibility</h3>
                    <p className="text-gray-600 dark:text-gray-300">Open to all ages and backgrounds, no specific requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-[rgb(var(--primary))] mt-1 mr-4 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg">Theme</h3>
                    <p className="text-gray-600 dark:text-gray-300">Unleash Your Creativity: Solve Any Problem You're Passionate About</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--secondary))]"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Event Activities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Opening Ceremony</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kickoff with inspirational keynote speakers from the tech industry</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Workshops</h3>
                  <p className="text-gray-600 dark:text-gray-300">Expert-led sessions on cutting-edge technologies and development practices</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Project Submission</h3>
                  <p className="text-gray-600 dark:text-gray-300">Submit your project for evaluation by our panel of expert judges</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Judging</h3>
                  <p className="text-gray-600 dark:text-gray-300">Projects evaluated on innovation, impact, feasibility, and presentation</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Closing Ceremony</h3>
                  <p className="text-gray-600 dark:text-gray-300">Announcement of winners and prize distribution worth over $1M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-center">
            The World's Largest Hackathon aims to bring together over 10,000 participants from across the globe for a weekend of innovation and problem-solving. Our mission is to democratize technology innovation, enabling anyone with passion and creativity to build solutions that can change the world, regardless of their location or background.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">What is a hackathon?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A hackathon is an event where participants collaborate intensively on software projects in a limited time frame, typically ranging from 24 to 48 hours.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Do I need to be a programmer?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No, hackathons welcome participants with diverse skills including design, business, marketing, and more. Teams benefit from a mix of different talents.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">How much does it cost to participate?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The World's Largest Hackathon is completely free to participate in. We believe in removing barriers to innovation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">How are projects evaluated?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Projects are judged on innovation, technical complexity, practicality, design, and potential impact by our panel of industry experts.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[rgb(var(--primary))] font-medium hover:underline">
              See all FAQs
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
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