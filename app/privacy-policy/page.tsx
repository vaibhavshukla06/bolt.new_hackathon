import Link from "next/link";
import { FaLock, FaUserShield, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-6">
              <FaLock className="text-3xl text-[rgb(var(--primary))] mr-4" />
              <h2 className="text-3xl font-bold">Introduction</h2>
            </div>
            <p className="mb-4">
              This Privacy Policy explains how The World's Largest Hackathon ("we", "us", or "our") collects, uses, and protects your personal information when you use our website, register for our events, or interact with us in any way.
            </p>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              Last updated: June 1, 2023
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-6">
              <FaUserShield className="text-3xl text-[rgb(var(--primary))] mr-4" />
              <h2 className="text-3xl font-bold">Information We Collect</h2>
            </div>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you register for our events, subscribe to our newsletter, respond to surveys, or engage with our website in any way.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <p className="mb-4">
                The personal information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and address.</li>
                <li><strong>Profile Information:</strong> Username, password, profile picture, bio, education, and professional background.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
                <li><strong>Usage Information:</strong> How you use our website, which pages you visit, and your interactions with the content.</li>
                <li><strong>Communications:</strong> Feedback, survey responses, and correspondence with us.</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Event Management</h3>
                <ul className="space-y-2">
                  <li>Processing your event registration</li>
                  <li>Providing information about the event</li>
                  <li>Facilitating team formation</li>
                  <li>Managing judging and prizes</li>
                  <li>Creating participant profiles</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Communications</h3>
                <ul className="space-y-2">
                  <li>Sending event updates and reminders</li>
                  <li>Sharing newsletters and announcements</li>
                  <li>Providing customer support</li>
                  <li>Responding to your inquiries</li>
                  <li>Collecting feedback through surveys</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Website Improvement</h3>
                <ul className="space-y-2">
                  <li>Analyzing usage patterns</li>
                  <li>Optimizing user experience</li>
                  <li>Debugging and fixing issues</li>
                  <li>Developing new features</li>
                  <li>Ensuring secure access</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Marketing</h3>
                <ul className="space-y-2">
                  <li>Promoting future events</li>
                  <li>Sharing relevant content</li>
                  <li>Advertising sponsor opportunities</li>
                  <li>Showcasing hackathon projects</li>
                  <li>Building our community</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">How We Share Your Information</h2>
            <p className="mb-4">
              We may share your personal information with the following parties:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Event Partners and Sponsors:</strong> With your consent, we may share your information with our event partners and sponsors.</li>
              <li><strong>Service Providers:</strong> We work with third-party service providers who help us operate our website, conduct our events, and provide other services.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, in response to legal proceedings, or to protect our rights and the rights of others.</li>
              <li><strong>Business Transfers:</strong> If we're involved in a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction.</li>
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-blue-700 dark:text-blue-400">
                <strong>Note:</strong> We will never sell your personal data to third parties without your explicit consent.
              </p>
            </div>
          </section>

          {/* Security of Your Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Security of Your Information</h2>
            <p className="mb-4">
              We take the security of your personal information seriously and use appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
            </p>
            <p className="mb-4">
              Some of the security measures we implement include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Encrypting sensitive data using SSL/TLS encryption</li>
              <li>Regularly updating our security systems and protocols</li>
              <li>Limiting access to personal information to authorized personnel only</li>
              <li>Conducting regular security assessments</li>
              <li>Training our staff on privacy and security best practices</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Access</h3>
                <p>You can request a copy of the personal information we hold about you.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Rectification</h3>
                <p>You can request that we correct any inaccurate or incomplete information.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Erasure</h3>
                <p>You can request that we delete your personal information in certain circumstances.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Restrict Processing</h3>
                <p>You can request that we restrict the processing of your information.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Data Portability</h3>
                <p>You can request that we transfer your information to another organization.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Right to Object</h3>
                <p>You can object to the processing of your personal information.</p>
              </div>
            </div>
            <p className="mb-4">
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities on our website. Cookies help us provide you with a better experience by enabling features, remembering your preferences, and analyzing how our website is used.
            </p>
            <p className="mb-4">
              You can control cookies through your browser settings. However, if you disable cookies, some features of our website may not function properly.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                For more information about our use of cookies, please see our <Link href="/cookie-policy" className="text-[rgb(var(--primary))] hover:underline">Cookie Policy</Link>.
              </p>
            </div>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-3xl text-[rgb(var(--primary))] mr-4" />
              <h2 className="text-3xl font-bold">Contact Us</h2>
            </div>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li><strong>Email:</strong> <a href="mailto:privacy@largesth4ckathon.com" className="text-[rgb(var(--primary))] hover:underline">privacy@largesth4ckathon.com</a></li>
                <li><strong>Address:</strong> 123 Tech Plaza, Innovation District, San Francisco, CA 94103, USA</li>
                <li><strong>Phone:</strong> +1 (800) 555-5432</li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="mb-6">
            If you have any questions about our privacy practices or need assistance, our team is ready to help.
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