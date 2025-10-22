import { Link } from 'react-router-dom'
import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Akshat Behera. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com/akshatbeheraonline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
            <a 
              href="https://x.com/akshatbehera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="X (formerly Twitter)"
            >
              <RiTwitterXFill size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/akshat-behera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
