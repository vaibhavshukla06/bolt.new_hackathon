import { FaTrophy, FaMedal, FaAward, FaStar } from "react-icons/fa";
import Link from "next/link";

const prizeCategories = [
  {
    name: "Grand Prize (Best Overall)",
    amount: "$500,000",
    icon: <FaTrophy className="text-yellow-500 text-4xl md:text-5xl" />,
    description: "The top project across all categories that demonstrates exceptional innovation, execution, and potential for real-world impact.",
  },
  {
    name: "Best in AI/ML",
    amount: "$200,000",
    icon: <FaAward className="text-[rgb(var(--primary))] text-4xl md:text-5xl" />,
    description: "Projects leveraging artificial intelligence or machine learning to solve complex problems in innovative ways.",
  },
  {
    name: "Best in Blockchain",
    amount: "$150,000",
    icon: <FaAward className="text-[rgb(var(--primary))] text-4xl md:text-5xl" />,
    description: "Projects utilizing blockchain technology to create decentralized solutions that enhance trust, security, or transparency.",
  },
  {
    name: "Best in Sustainability",
    amount: "$100,000",
    icon: <FaAward className="text-[rgb(var(--primary))] text-4xl md:text-5xl" />,
    description: "Projects addressing environmental challenges and promoting sustainable practices through innovative technology.",
  },
  {
    name: "Best in Healthcare",
    amount: "$80,000",
    icon: <FaAward className="text-[rgb(var(--primary))] text-4xl md:text-5xl" />,
    description: "Projects improving healthcare delivery, patient outcomes, or medical research through technological innovation.",
  },
  {
    name: "Best in Education",
    amount: "$70,000",
    icon: <FaAward className="text-[rgb(var(--primary))] text-4xl md:text-5xl" />,
    description: "Projects enhancing learning experiences, educational access, or skill development through technology.",
  },
];

const additionalPrizes = [
  {
    name: "People's Choice Award",
    amount: "$50,000",
    icon: <FaMedal className="text-[rgb(var(--secondary))] text-3xl" />,
    description: "Voted by the hackathon community as the most exciting or impactful project.",
  },
  {
    name: "Best First-Time Hackers",
    amount: "$25,000",
    icon: <FaMedal className="text-[rgb(var(--secondary))] text-3xl" />,
    description: "Outstanding project created by a team where all members are participating in their first hackathon.",
  },
  {
    name: "Best UI/UX Design",
    amount: "$25,000",
    icon: <FaMedal className="text-[rgb(var(--secondary))] text-3xl" />,
    description: "Project with the most impressive user interface and experience design.",
  },
  {
    name: "Best Use of API",
    amount: "$25,000",
    icon: <FaMedal className="text-[rgb(var(--secondary))] text-3xl" />,
    description: "Creative and effective integration of third-party APIs in a project.",
  },
];

export default function Prizes() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Prizes
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Win big with your innovative solutions. The World's Largest Hackathon features over $1 million in prizes across multiple categories.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Main Prize Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizeCategories.map((prize, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"></div>
                <div className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    {prize.icon}
                    <h3 className="text-xl font-bold mt-4 text-center">{prize.name}</h3>
                  </div>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
                      {prize.amount}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Prizes */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalPrizes.map((prize, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-start"
              >
                <div className="mr-4">{prize.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{prize.name}</h3>
                  <div className="font-semibold text-[rgb(var(--secondary))] mb-2">{prize.amount}</div>
                  <p className="text-gray-600 dark:text-gray-300">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selection Criteria */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Selection Criteria</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Projects will be evaluated by our panel of expert judges based on the following criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FaStar className="text-[rgb(var(--primary))] mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Originality and creativity of the solution</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-[rgb(var(--primary))] mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300">Potential to create meaningful change in the target domain</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-[rgb(var(--primary))] mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Feasibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">Technical viability and practicality of implementation</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-[rgb(var(--primary))] mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Presentation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Clarity and effectiveness of the project's communication</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-6">
              The grand prize will be selected from among the winners of each category, representing the best overall project in the hackathon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
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