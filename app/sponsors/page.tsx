import Link from "next/link";

// Placeholder data for sponsors
const platinumSponsors = [
  { id: 1, name: "Tech Giant Corp", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 2, name: "Global Innovations", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 3, name: "Future Technologies", logo: "/images/placeholder-logo.svg", website: "#" },
];

const goldSponsors = [
  { id: 1, name: "Cloud Solutions", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 2, name: "Digital Ventures", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 3, name: "Smart Systems", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 4, name: "Data Dynamics", logo: "/images/placeholder-logo.svg", website: "#" },
];

const silverSponsors = [
  { id: 1, name: "StartUp Hub", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 2, name: "Innovation Labs", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 3, name: "Tech Accelerator", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 4, name: "Code Warriors", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 5, name: "Dev Partners", logo: "/images/placeholder-logo.svg", website: "#" },
  { id: 6, name: "Digital Factory", logo: "/images/placeholder-logo.svg", website: "#" },
];

export default function Sponsors() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Our Sponsors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Thank you to our generous sponsors for making The World's Largest Hackathon possible.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
            <h2 className="text-3xl font-bold mx-6 text-center">Platinum Sponsors</h2>
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-32 w-full mb-6 flex items-center justify-center">
                  <div className="w-48 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{sponsor.name}</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Platinum Sponsor
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
            <h2 className="text-3xl font-bold mx-6 text-center">Gold Sponsors</h2>
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-24 w-full mb-4 flex items-center justify-center">
                  <div className="w-36 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">{sponsor.name}</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                  Gold Sponsor
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
            <h2 className="text-3xl font-bold mx-6 text-center">Silver Sponsors</h2>
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-16 w-full mb-2 flex items-center justify-center">
                  <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium text-xs">{sponsor.name}</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300 text-xs">
                  Silver Sponsor
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]"></div>
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join our prestigious list of sponsors and get your brand in front of thousands of innovative developers, designers, and entrepreneurs from across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-center">Platinum Tier</h3>
                <div className="text-center text-lg font-semibold mb-4 text-[rgb(var(--primary))]">$50,000</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Prime logo placement on all materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Dedicated mentorship session</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Sponsored challenge category</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>5-minute presentation at opening ceremony</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-center">Gold Tier</h3>
                <div className="text-center text-lg font-semibold mb-4 text-[rgb(var(--primary))]">$25,000</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Prominent logo placement</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Workshop opportunity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Recruiting access to participants</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>3-minute presentation at opening ceremony</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-center">Silver Tier</h3>
                <div className="text-center text-lg font-semibold mb-4 text-[rgb(var(--primary))]">$10,000</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Logo on website and materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Social media recognition</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Virtual booth opportunity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Logo on event livestream</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact"
                className="btn-primary"
              >
                Contact Us for Sponsorship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 