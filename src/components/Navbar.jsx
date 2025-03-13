import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Books', path: '/books' },
  { name: 'Work', path: '/work' },
  { name: 'Podcasts', path: '/podcasts' },
  { name: 'Music', path: '/music' },
  { name: 'Ark', path: '/ark' },
  { name: 'X', path: '/x' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md py-3' 
          : darkMode ? 'bg-transparent py-5' : 'bg-white py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-black dark:text-white relative z-10">
          Akshat Behera | AB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`relative font-medium transition-colors text-black dark:text-gray-300 hover:text-black dark:hover:text-white ${
                    location.pathname === link.path 
                      ? 'text-black dark:text-white font-bold' 
                      : ''
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span 
                      layoutId="navIndicator"
                      className="absolute -inset-x-2 -inset-y-1 rounded-full border border-black dark:border-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            
            {/* Dark Mode Toggle */}
            <li>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40 flex flex-col w-full h-screen pt-20 bg-white dark:bg-black"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="container">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className={`text-xl font-medium transition-colors text-black dark:text-gray-300 hover:text-black dark:hover:text-white ${
                        location.pathname === link.path 
                          ? 'text-black dark:text-white font-bold' 
                          : ''
                      }`}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.span 
                          className="ml-2 inline-block w-2 h-2 rounded-full bg-black dark:bg-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar 