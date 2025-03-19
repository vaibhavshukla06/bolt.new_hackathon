import Link from "next/link";
import { FaCheck, FaTimes, FaExclamationTriangle } from "react-icons/fa";

export default function Rules() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Rules & Guidelines
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            To ensure a fair and enjoyable experience for all participants, please carefully review the following rules and guidelines for The World's Largest Hackathon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* General Rules */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">General Rules</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                <p className="mb-4">
                  The World's Largest Hackathon is open to participants of all ages, backgrounds, and skill levels from around the world.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Participants must register individually or as a team before the registration deadline.</li>
                  <li>Teams must consist of 1-4 members. No exceptions will be made for larger teams.</li>
                  <li>Participants may only be part of one team.</li>
                  <li>All team members must be registered participants.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Time Constraints</h3>
                <p className="mb-4">
                  The hackathon will run for exactly 48 hours. Projects must be submitted before the deadline.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Late submissions will not be accepted under any circumstances.</li>
                  <li>All work on the project must be done during the official hackathon period.</li>
                  <li>Time zone details will be provided in UTC to avoid confusion.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Code of Conduct</h3>
                <p className="mb-4">
                  All participants are expected to adhere to our Code of Conduct, which promotes a respectful, inclusive, and collaborative environment.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harassment of any kind will not be tolerated.</li>
                  <li>Participants should be respectful of others' ideas, skills, and contributions.</li>
                  <li>Any violations of the Code of Conduct may result in disqualification and removal from the event.</li>
                </ul>
                <p className="mt-4">
                  <Link href="/code-of-conduct" className="text-[rgb(var(--primary))] font-medium hover:underline">
                    Read the full Code of Conduct →
                  </Link>
                </p>
              </div>
            </div>
          </section>
          
          {/* Project Rules */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">Project Rules</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Project Creation</h3>
                <p className="mb-4">
                  All projects must be created during the hackathon period. Preparation and ideation can happen beforehand, but no code should be written before the start time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="flex items-center text-green-700 dark:text-green-400 font-semibold mb-2">
                      <FaCheck className="mr-2" /> Allowed
                    </h4>
                    <ul className="space-y-2">
                      <li>Using open-source libraries, frameworks, and public APIs</li>
                      <li>Using stock assets and freely available design resources</li>
                      <li>Using tools and platforms you have legal access to</li>
                      <li>Brainstorming ideas before the event</li>
                      <li>Creating wireframes and planning documents before the event</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="flex items-center text-red-700 dark:text-red-400 font-semibold mb-2">
                      <FaTimes className="mr-2" /> Not Allowed
                    </h4>
                    <ul className="space-y-2">
                      <li>Using code written before the hackathon</li>
                      <li>Working on projects already in development</li>
                      <li>Continuing existing projects</li>
                      <li>Using private code or APIs that aren't available to all participants</li>
                      <li>Using copyrighted material without permission</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Submission Requirements</h3>
                <p className="mb-4">
                  For your project to be considered for judging, you must include the following:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Source code (via GitHub or similar platform)</li>
                  <li>A brief video demo (maximum 3 minutes)</li>
                  <li>A written description of your project (maximum 500 words)</li>
                  <li>Instructions on how to run/test your project</li>
                  <li>Documentation of which team member contributed to which parts of the project</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
                <p className="mb-4">
                  You retain full ownership of everything you build at the hackathon. However, by participating, you grant us a non-exclusive license to showcase your project on our website and social media channels.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="flex items-center text-yellow-700 dark:text-yellow-400 font-semibold mb-2">
                    <FaExclamationTriangle className="mr-2" /> Important Note
                  </h4>
                  <p>
                    While we encourage open-source contributions, the decision to make your project open-source or not is entirely up to you and your team. We recommend discussing intellectual property concerns with your team before the event.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Judging Criteria */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">Judging Criteria</h2>
            
            <p className="mb-6">
              Projects will be evaluated based on the following criteria, with each category being scored from 1-10 by our panel of judges:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">Innovation (25%)</h3>
                <p>
                  How original and innovative is the idea? Does it solve a real problem in a new or creative way?
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">Technical Complexity (25%)</h3>
                <p>
                  How technically impressive is the implementation? Did the team use complex technologies effectively?
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">User Experience (20%)</h3>
                <p>
                  How well-designed is the user interface? Is it intuitive, accessible, and pleasant to use?
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">Completion (15%)</h3>
                <p>
                  How complete and polished is the project? Does it work as intended?
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">Presentation (10%)</h3>
                <p>
                  How well did the team present their project? Was the demonstration clear and compelling?
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--primary))]">Impact & Potential (5%)</h3>
                <p>
                  What is the potential impact of this project? Could it scale and make a significant difference?
                </p>
              </div>
            </div>
            
            <p className="mt-6">
              Category-specific prizes will have additional criteria relevant to their domain. These will be announced at the beginning of the hackathon.
            </p>
          </section>
          
          {/* Disqualification */}
          <section>
            <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">Disqualification</h2>
            
            <p className="mb-4">
              The following actions may result in disqualification from the hackathon:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Violating any of the rules listed above</li>
              <li>Submitting a project that was not created during the hackathon period</li>
              <li>Submitting a project that violates our Code of Conduct</li>
              <li>Cheating or attempting to gain an unfair advantage</li>
              <li>Harassment or disrespectful behavior towards other participants, mentors, judges, or organizers</li>
              <li>Submitting inappropriate content</li>
            </ul>
            
            <p className="mt-4">
              The hackathon organizers reserve the right to disqualify any team or participant for reasons not explicitly stated above if they believe it's necessary to maintain the integrity and spirit of the event.
            </p>
          </section>
        </div>
        
        {/* Questions */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions About the Rules?</h2>
          <p className="mb-6">
            If anything is unclear or you need further clarification, don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/faq" className="px-6 py-3 bg-white text-[rgb(var(--primary))] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Check FAQ
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 