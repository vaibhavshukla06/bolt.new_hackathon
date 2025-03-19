import Link from "next/link";
import { FaExclamationTriangle, FaShieldAlt, FaComment } from "react-icons/fa";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Code of Conduct
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Our commitment to creating a safe, inclusive, and respectful environment for all participants of The World's Largest Hackathon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              The World's Largest Hackathon is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion, nationality, or level of experience.
            </p>
            <p className="mb-4">
              We do not tolerate harassment of event participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter, and other online media. Event participants violating these rules may be sanctioned or expelled from the event without a refund at the discretion of the event organizers.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-6">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-700 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-yellow-700 dark:text-yellow-400">
                  <strong>Note:</strong> This code of conduct applies to all spaces associated with The World's Largest Hackathon, including online platforms, social media, collaborative workspaces, and in-person venues. It applies to all participants, including attendees, organizers, sponsors, mentors, judges, and volunteers.
                </p>
              </div>
            </div>
          </section>

          {/* Expected Behavior */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Expected Behavior</h2>
            <p className="mb-4">
              We expect all participants to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Be considerate, respectful, and collaborative.</li>
              <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
              <li>Be mindful of your surroundings and of your fellow participants.</li>
              <li>Alert event organizers if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct.</li>
              <li>Participate in an authentic and active way, contributing to the health and longevity of the community.</li>
              <li>Exercise consideration and respect in your speech and actions.</li>
              <li>Attempt collaboration before conflict.</li>
              <li>Respect the venue and the property of others.</li>
            </ul>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaShieldAlt className="text-[rgb(var(--primary))] mr-2" />
                Community Values
              </h3>
              <p className="mb-4">
                Our hackathon is built on the foundation of these core values:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                  <h4 className="font-semibold mb-2">Inclusivity</h4>
                  <p>Welcoming people of all backgrounds and identities.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                  <h4 className="font-semibold mb-2">Collaboration</h4>
                  <p>Encouraging teamwork and knowledge sharing.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                  <h4 className="font-semibold mb-2">Creativity</h4>
                  <p>Celebrating innovation and creative problem-solving.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                  <h4 className="font-semibold mb-2">Respect</h4>
                  <p>Treating everyone with dignity and consideration.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Unacceptable Behavior */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Unacceptable Behavior</h2>
            <p className="mb-4">
              Unacceptable behaviors include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Intimidating, harassing, abusive, discriminatory, derogatory, or demeaning conduct.</li>
              <li>Offensive or unwanted verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion, or socio-economic status.</li>
              <li>Inappropriate use of nudity and/or sexual images in public spaces (including presentation slides).</li>
              <li>Deliberate intimidation, stalking or following.</li>
              <li>Harassing photography or recording.</li>
              <li>Sustained disruption of talks or other events.</li>
              <li>Inappropriate physical contact or unwelcome sexual attention.</li>
              <li>Advocating for, or encouraging, any of the above behavior.</li>
              <li>Any other conduct which could reasonably be considered inappropriate in a professional setting.</li>
            </ul>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-red-700 dark:text-red-400 font-semibold mb-2">
                Consequences of Unacceptable Behavior
              </p>
              <p className="text-red-700 dark:text-red-400">
                Unacceptable behavior from any participant, including sponsors, organizers, staff, and attendees, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply immediately. If a participant engages in unacceptable behavior, the event organizers may take any action they deem appropriate, up to and including immediate expulsion from the event without warning or refund.
              </p>
            </div>
          </section>

          {/* Reporting Guidelines */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Reporting Guidelines</h2>
            <p className="mb-4">
              If you are subject to or witness unacceptable behavior, or have any other concerns, please notify an event organizer as soon as possible:
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaComment className="text-[rgb(var(--primary))] mr-2" />
                How to Report
              </h3>
              <div className="space-y-4">
                <p>You can report issues through any of these channels:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact any staff member wearing organizer badges in person at the event.</li>
                  <li>Email the organizing team at <a href="mailto:conduct@largesth4ckathon.com" className="text-[rgb(var(--primary))] hover:underline">conduct@largesth4ckathon.com</a></li>
                  <li>Use the emergency contact numbers provided in your welcome packet.</li>
                  <li>Submit a report through our online reporting form (available during the event).</li>
                </ul>
                <p className="font-medium">
                  All reports will be kept confidential. In your report please include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your contact information (so we can get in touch with you if we need to follow up).</li>
                  <li>Names of any individuals involved (if known).</li>
                  <li>Description of the behavior.</li>
                  <li>The approximate time and location of the incident.</li>
                  <li>Any additional context you believe is important.</li>
                </ul>
              </div>
            </div>
            <p>
              Event organizers will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance and well-being.
            </p>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Scope</h2>
            <p className="mb-4">
              We expect all participants (attendees, organizers, sponsors, mentors, judges, and volunteers) to abide by this Code of Conduct in all event venues—online and in-person—as well as in all one-on-one communications related to event business.
            </p>
            <p className="mb-4">
              This code of conduct and its related procedures also apply to unacceptable behavior occurring outside the scope of event activities when such behavior has the potential to adversely affect the safety and well-being of event participants.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Code of Conduct, please contact the organizing team:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:conduct@largesth4ckathon.com" className="text-[rgb(var(--primary))] hover:underline">conduct@largesth4ckathon.com</a></li>
              <li>Emergency Contact: +1 (800) 555-9876</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
          <p className="mb-6">
            If you have any questions about our Code of Conduct or need further assistance, we're here to help.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-[rgb(var(--primary))] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 