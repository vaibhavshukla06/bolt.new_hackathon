"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    teamName: "",
    projectIdea: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        country: "",
        teamName: "",
        projectIdea: "",
        agreeToTerms: false,
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
              Registration
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sign up to participate in The World's Largest Hackathon and receive updates when the event date is announced
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-[rgba(var(--success),0.1)] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-[rgb(var(--success))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your registration has been received. We'll notify you when the hackathon date is announced and registration opens.
              </p>
              <button
                className="btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Register Another Participant
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center mb-2">
                      <FaUser className="mr-2 text-[rgb(var(--primary))]" />
                      <span className="font-medium">Full Name <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                          : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center mb-2">
                      <FaEnvelope className="mr-2 text-[rgb(var(--primary))]" />
                      <span className="font-medium">Email Address <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                          : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="flex items-center mb-2">
                      <FaGlobe className="mr-2 text-[rgb(var(--primary))]" />
                      <span className="font-medium">Country <span className="text-red-500">*</span></span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.country
                          ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                          : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]`}
                    >
                      <option value="">Select your country</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-red-500 text-sm">{errors.country}</p>
                    )}
                  </div>

                  {/* Team Name (Optional) */}
                  <div>
                    <label className="flex items-center mb-2">
                      <FaUsers className="mr-2 text-[rgb(var(--primary))]" />
                      <span className="font-medium">Team Name <span className="text-gray-400">(Optional)</span></span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
                      placeholder="If you have a team in mind"
                    />
                  </div>

                  {/* Project Idea (Optional) */}
                  <div>
                    <label className="flex items-center mb-2">
                      <FaLightbulb className="mr-2 text-[rgb(var(--primary))]" />
                      <span className="font-medium">Project Idea <span className="text-gray-400">(Optional)</span></span>
                    </label>
                    <textarea
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
                      placeholder="Briefly describe your project idea if you have one in mind"
                    ></textarea>
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <span className="font-medium">I agree to the <a href="#" className="text-[rgb(var(--primary))] hover:underline">Terms and Conditions</a> <span className="text-red-500">*</span></span>
                        {errors.agreeToTerms && (
                          <p className="mt-1 text-red-500 text-sm">{errors.agreeToTerms}</p>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Sign Up for Updates"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>
              The World's Largest Hackathon is committed to protecting your privacy.
              See our <a href="#" className="text-[rgb(var(--primary))] hover:underline">Privacy Policy</a> for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 