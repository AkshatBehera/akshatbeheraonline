import { useState } from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player/lazy'
import { FiPlay, FiClock, FiCalendar, FiExternalLink, FiHeadphones } from 'react-icons/fi'

// Sample podcast data (replace with your own)
const podcasts = [
  {
    id: 1,
    title: 'The Joe Rogan Experience',
    host: 'Joe Rogan',
    description: 'Conversations with thought leaders, comedians, and experts on various topics.',
    category: 'Interview',
    logo: 'images/podcasts/jre.png',
    link: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk',
  },
  {
    id: 2,
    title: 'Lex Fridman Podcast',
    host: 'Lex Fridman',
    description: 'Conversations about AI, science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power.',
    category: 'Technology & Science',
    logo: 'images/podcasts/lex.png',
    link: 'https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
  },
  {
    id: 3,
    title: 'Huberman Lab',
    host: 'Andrew Huberman',
    description: 'Discusses neuroscience and practical tools to improve neural performance, health, and well-being.',
    category: 'Science & Health',
    logo: 'images/podcasts/huberman.png',
    link: 'https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P',
  },
  {
    id: 4,
    title: 'All-In Podcast',
    host: 'Chamath Palihapitiya, Jason Calacanis, David Sacks & David Friedberg',
    description: 'Industry veterans, & besties Chamath Palihapitiya, Jason Calacanis, David Sacks & David Friedberg cover all things economic, tech, political, social & poker.',
    category: 'Business & Technology',
    logo: 'images/podcasts/allin.png',
    link: 'https://open.spotify.com/show/2IqXAVFR4e0Bmyjsdc8QzF',
  },
  {
    id: 5,
    title: 'TBPN Live',
    host: 'John Coogan & Jordi Hays',
    description: 'Technology Brothers Podcast. Streaming live on X and YouTube from 12 - 3PM PST Monday - Friday. Available on X, Apple, Spotify, & YouTube.',
    category: 'Business & Technology',
    logo: 'images/podcasts/techbros.png',
    link: 'https://open.spotify.com/show/2L6WMqY3GUPCGBD0dX6p00',
  },
  {
    id: 6,
    title: 'Darknet Diaries',
    host: 'Jack Rhysider',
    description: 'True stories from the dark side of the Internet, featuring hackers, breaches, and cybercrime.',
    category: 'Technology & Security',
    logo: 'images/podcasts/darknet.png',
    link: 'https://open.spotify.com/show/4XPl3uEEL9hvqMkoZrzbx5',
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const Podcasts = () => {
  const [currentPodcast, setCurrentPodcast] = useState(podcasts[0])

  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">Podcasts I Listen To</h1>
        
        <motion.div 
          className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {podcasts.map((podcast) => (
            <motion.div 
              key={podcast.id}
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center p-3 border-b dark:border-gray-800 sm:p-4">
                <img 
                  src={podcast.logo} 
                  alt={podcast.title} 
                  className="object-cover w-12 h-12 rounded-lg sm:w-16 sm:h-16"
                />
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base font-semibold truncate sm:text-lg">{podcast.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">Hosted by {podcast.host}</p>
                </div>
              </div>
              
              <div className="flex-grow p-3 sm:p-4">
                <div className="mb-2 sm:mb-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 sm:px-3">
                    {podcast.category}
                  </span>
                </div>
                <p className="mb-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm sm:mb-4 line-clamp-3">
                  {podcast.description}
                </p>
              </div>
              
              <div className="p-3 border-t dark:border-gray-800 sm:p-4">
                <a 
                  href={podcast.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-3 py-1.5 text-xs font-medium transition-colors rounded-md text-black dark:text-white border border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black sm:px-4 sm:py-2 sm:text-sm"
                >
                  <FiHeadphones className="mr-1 sm:mr-2" />
                  Listen on Spotify
                  <FiExternalLink className="ml-1 sm:ml-2" size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Podcasts 