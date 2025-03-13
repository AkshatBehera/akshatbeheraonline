import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiFilter } from 'react-icons/fi'

// Company data
const companies = [
  {
    id: 1,
    name: 'Tesla',
    logo: 'images/companies/tesla.png',
    url: 'https://www.tesla.com',
    category: 'Technology'
  },
  {
    id: 2,
    name: 'SpaceX',
    logo: 'images/companies/spacex.png',
    url: 'https://www.spacex.com',
    category: 'Aerospace'
  },
  {
    id: 3,
    name: 'Microsoft',
    logo: 'images/companies/microsoft.png',
    url: 'https://www.microsoft.com',
    category: 'Technology'
  },
  {
    id: 4,
    name: 'Apple',
    logo: 'images/companies/apple.png',
    url: 'https://www.apple.com',
    category: 'Technology'
  },
  {
    id: 5,
    name: 'Palantir',
    logo: 'images/companies/palantir.png',
    url: 'https://www.palantir.com',
    category: 'Technology'
  },
  {
    id: 6,
    name: 'Anduril',
    logo: 'images/companies/anduril.png',
    url: 'https://www.anduril.com',
    category: 'Defense'
  },
  {
    id: 7,
    name: 'Facebook',
    logo: 'images/companies/facebook.png',
    url: 'https://www.facebook.com',
    category: 'Technology'
  },
  {
    id: 8,
    name: 'Meta',
    logo: 'images/companies/meta.png',
    url: 'https://www.meta.com',
    category: 'Technology'
  },
  {
    id: 9,
    name: 'Airbnb',
    logo: 'images/companies/airbnb.png',
    url: 'https://www.airbnb.com',
    category: 'Travel'
  },
  {
    id: 10,
    name: 'Stripe',
    logo: 'images/companies/stripe.png',
    url: 'https://www.stripe.com',
    category: 'Finance'
  },
  {
    id: 11,
    name: 'Oracle',
    logo: 'images/companies/oracle.png',
    url: 'https://www.oracle.com',
    category: 'Technology'
  },
  {
    id: 12,
    name: 'Neuralink',
    logo: 'images/companies/neuralink.png',
    url: 'https://www.neuralink.com',
    category: 'Biotechnology'
  },
  {
    id: 13,
    name: 'X',
    logo: 'images/companies/x.png',
    url: 'https://www.x.com',
    category: 'Technology'
  },
  {
    id: 14,
    name: 'xAI',
    logo: 'images/companies/xai.png',
    url: 'https://www.x.ai',
    category: 'AI'
  },
  {
    id: 15,
    name: 'Ramp',
    logo: 'images/companies/ramp.png',
    url: 'https://www.ramp.com',
    category: 'Finance'
  },
  {
    id: 16,
    name: 'Spotify',
    logo: 'images/companies/spotify.png',
    url: 'https://www.spotify.com',
    category: 'Entertainment'
  },
  {
    id: 17,
    name: 'OpenAI',
    logo: 'images/companies/openai.png',
    url: 'https://www.openai.com',
    category: 'AI'
  },
  {
    id: 18,
    name: 'Google',
    logo: 'images/companies/google.png',
    url: 'https://www.google.com',
    category: 'Technology'
  },
  {
    id: 19,
    name: 'DeepMind',
    logo: 'images/companies/deepmind.png',
    url: 'https://www.deepmind.com',
    category: 'AI'
  },
  {
    id: 20,
    name: 'Eight Sleep',
    logo: 'images/companies/eightsleep.png',
    url: 'https://www.eightsleep.com',
    category: 'Health'
  },
  {
    id: 21,
    name: 'Uber',
    logo: 'images/companies/uber.png',
    url: 'https://www.uber.com',
    category: 'Transportation'
  },
  {
    id: 22,
    name: 'Amazon',
    logo: 'images/companies/amazon.png',
    url: 'https://www.amazon.com',
    category: 'Technology'
  },
  {
    id: 23,
    name: 'Nvidia',
    logo: 'images/companies/nvidia.png',
    url: 'https://www.nvidia.com',
    category: 'Technology'
  },
  {
    id: 24,
    name: 'Netflix',
    logo: 'images/companies/netflix.png',
    url: 'https://www.netflix.com',
    category: 'Entertainment'
  },
  {
    id: 25,
    name: 'AMD',
    logo: 'images/companies/amd.png',
    url: 'https://www.amd.com',
    category: 'Technology'
  },
  {
    id: 26,
    name: 'Nike',
    logo: 'images/companies/nike.png',
    url: 'https://www.nike.com',
    category: 'Retail'
  },
  {
    id: 27,
    name: 'Visa',
    logo: 'images/companies/visa.png',
    url: 'https://www.visa.com',
    category: 'Finance'
  },
  {
    id: 28,
    name: 'Mastercard',
    logo: 'images/companies/mastercard.png',
    url: 'https://www.mastercard.com',
    category: 'Finance'
  },
  {
    id: 29,
    name: 'Intel',
    logo: 'images/companies/intel.png',
    url: 'https://www.intel.com',
    category: 'Technology'
  },
  {
    id: 30,
    name: 'JP Morgan Chase',
    logo: 'images/companies/jpmorgan.png',
    url: 'https://www.jpmorganchase.com',
    category: 'Finance'
  },
  {
    id: 31,
    name: 'Bitcoin',
    logo: 'images/companies/bitcoin.png',
    url: 'https://bitcoin.org',
    category: 'Cryptocurrency'
  },
  {
    id: 32,
    name: 'Coca Cola',
    logo: 'images/companies/cocacola.png',
    url: 'https://www.coca-cola.com',
    category: 'Consumer Goods'
  },
  {
    id: 33,
    name: 'Lockheed Martin',
    logo: 'images/companies/lockheedmartin.png',
    url: 'https://www.lockheedmartin.com',
    category: 'Defense'
  },
  {
    id: 34,
    name: 'Northrop Grumman',
    logo: 'images/companies/northropgrumman.png',
    url: 'https://www.northropgrumman.com',
    category: 'Defense'
  },
  {
    id: 35,
    name: 'BAE Systems',
    logo: 'images/companies/baesystems.png',
    url: 'https://www.baesystems.com',
    category: 'Defense'
  },
  {
    id: 36,
    name: 'WWE',
    logo: 'images/companies/wwe.png',
    url: 'https://www.wwe.com',
    category: 'Entertainment'
  },
  {
    id: 37,
    name: 'TKO',
    logo: 'images/companies/tko.png',
    url: 'https://www.tkogrp.com',
    category: 'Entertainment'
  },
  {
    id: 38,
    name: 'Endeavor Group Holdings',
    logo: 'images/companies/endeavor.png',
    url: 'https://www.endeavorco.com',
    category: 'Entertainment'
  },
  {
    id: 39,
    name: 'BlackRock',
    logo: 'images/companies/blackrock.png',
    url: 'https://www.blackrock.com',
    category: 'Finance'
  },
  {
    id: 40,
    name: 'Red Bull Racing',
    logo: 'images/companies/redbullracing.png',
    url: 'https://www.redbullracing.com',
    category: 'Formula 1'
  }
];

// Get all unique categories
const allCategories = ['All', ...new Set(companies.map(company => company.category))];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const Ark = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter companies based on selected category
  const filteredCompanies = selectedCategory === 'All' 
    ? companies 
    : companies.filter(company => company.category === selectedCategory);

  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">Ark</h1>
        
        {/* Mobile Filter Toggle */}
        <div className="flex justify-center mb-4 md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiFilter className="mr-2" size={16} />
            {showFilters ? 'Hide Filters' : 'Show Categories'}
          </button>
        </div>
        
        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center mb-8 gap-2 transition-all duration-300 ${
          showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:max-h-96 md:opacity-100'
        } md:mb-12`}>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (window.innerWidth < 768) {
                  setShowFilters(false);
                }
              }}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Selected Category Display (Mobile) */}
        <div className="flex justify-center mb-6 md:hidden">
          <span className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-full dark:bg-gray-800">
            Showing: {selectedCategory}
          </span>
        </div>
        
        {/* Companies Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCompanies.map(company => (
            <motion.div
              key={company.id}
              className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md sm:p-6"
              variants={itemVariants}
              onMouseEnter={() => setHoveredCompany(company.id)}
              onMouseLeave={() => setHoveredCompany(null)}
              onClick={() => {
                // For mobile: toggle hover state on tap
                if (window.innerWidth < 768) {
                  setHoveredCompany(hoveredCompany === company.id ? null : company.id);
                }
              }}
            >
              {/* Company Logo - Using a placeholder for now */}
              <div className="flex items-center justify-center w-full h-16 mb-3 overflow-hidden sm:h-20 md:h-24 sm:mb-4">
                {/* Try to load the logo image, fall back to initial if it fails */}
                <img 
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  onError={(e) => {
                    // If image fails to load, replace with the initial
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden items-center justify-center w-12 h-12 text-xl font-bold text-white bg-black rounded-full dark:bg-white dark:text-black sm:w-16 sm:h-16 sm:text-2xl"
                >
                  {company.name.charAt(0)}
                </div>
              </div>
              
              {/* Company Name */}
              <h3 className="mb-2 text-sm font-medium text-center text-black dark:text-white sm:text-base">
                {company.name}
              </h3>
              
              {/* Category Badge */}
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 sm:px-3 sm:py-1">
                {company.category}
              </span>
              
              {/* Hover/Tap Overlay with Link */}
              {hoveredCompany === company.id && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/80 dark:bg-white/80 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1.5 text-xs font-medium text-black bg-white rounded-md dark:bg-black dark:text-white hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm"
                    onClick={(e) => {
                      // Prevent the parent onClick from firing when clicking the link
                      e.stopPropagation();
                    }}
                  >
                    <FiExternalLink className="mr-1 sm:mr-2" size={14} />
                    Visit Website
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Note about placeholder logos */}
        <div className="mt-8 text-center text-xs text-gray-600 dark:text-gray-400 sm:text-sm sm:mt-12">
           <p>Everything's Computer.</p> 
        </div>
      </div>
    </motion.div>
  );
};

export default Ark; 