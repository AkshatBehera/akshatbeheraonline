import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiBook, FiBriefcase, FiHeadphones, FiMusic, FiGlobe } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'
import { useState, useContext } from 'react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Typewriter effect component
const TypewriterEffect = ({ text }) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="inline-block"
    >
      <motion.span
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
        className="inline-block overflow-hidden whitespace-nowrap"
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-5 ml-1 bg-black dark:bg-white"
      />
    </motion.div>
  )
}

const Home = () => {
  // State to handle image loading error
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.section 
      className="flex items-center justify-center min-h-screen pt-16 pb-16 md:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* We'll hide the image container since we're using the image as background */}
          {/* <motion.div
            className="mb-8 overflow-hidden rounded-full w-48 h-48 md:w-64 md:h-64 border-2 border-white dark:border-white shadow-lg"
            variants={itemVariants}
          >
            <img 
              src={imageError ? "https://placehold.co/500x500/000000/FFFFFF?text=AB" : "/images/profile.jpg"} 
              alt="Akshat Behera" 
              className="object-cover w-full h-full"
              onError={handleImageError}
            />
          </motion.div> */}
          
          <motion.h1 
            className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Akshat Behera
          </motion.h1>
          
          <motion.div 
            className="mb-8 text-xl text-gray-700 dark:text-gray-300 md:text-2xl"
            variants={itemVariants}
          >
            <TypewriterEffect text="Tech Enthusiast | Reader | Engineer" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-3 xs:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 sm:gap-4"
            variants={itemVariants}
          >
            <Link 
              to="/books" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <FiBook className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">Books</span>
            </Link>
            
            <Link 
              to="/work" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <FiBriefcase className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">Work</span>
            </Link>
            
            <Link 
              to="/podcasts" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <FiHeadphones className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">Podcasts</span>
            </Link>
            
            <Link 
              to="/music" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <FiMusic className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">Music</span>
            </Link>
            
            <Link 
              to="/ark" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <FiGlobe className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">Ark</span>
            </Link>
            
            <Link 
              to="/x" 
              className="flex flex-col items-center p-4 transition-all duration-300 border border-gray-300 dark:border-gray-800 rounded-lg group hover:border-black dark:hover:border-white hover:shadow-md bg-white dark:bg-transparent sm:p-6"
            >
              <RiTwitterXFill className="mb-2 text-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white sm:mb-3 sm:text-3xl" />
              <span className="font-medium text-sm text-black dark:text-white sm:text-base">X</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary-dark dark:btn-primary"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Home 