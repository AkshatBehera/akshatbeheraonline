import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { FiSend, FiCheck, FiAlertTriangle, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      // For now, we'll simulate a successful submission
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">Get in Touch</h1>
        
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* About Section */}
            <motion.div 
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 sm:p-6"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="overflow-hidden rounded-full w-24 h-24 border-2 border-white dark:border-white shadow-lg mb-3 sm:w-32 sm:h-32 sm:mb-4">
                  <img 
                    src={imageError ? "https://placehold.co/300x300/000000/FFFFFF?text=AB" : "images/profile.jpg"} 
                    alt="Akshat Behera" 
                    className="object-cover w-full h-full"
                    onError={handleImageError}
                  />
                </div>
                <h2 className="text-xl font-bold sm:text-2xl">Akshat Behera</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">Tech Enthusiast | Reader | Engineer</p>
              </div>
              
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base sm:mb-6">
                I'm passionate about Technology, Cars, Space Exploration, Computers and Formula 1. 
                Feel free to reach out for collaborations, questions, or just to say hello!
              </p>
              
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <a 
                  href="mailto:akshatbeheraonline@outlook.com" 
                  className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Email"
                >
                  <FiMail size={18} className="sm:text-xl" />
                </a>
                <a 
                  href="https://x.com/akshatbehera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="X (formerly Twitter)"
                >
                  <RiTwitterXFill size={18} className="sm:text-xl" />
                </a>
                <a 
                  href="https://linkedin.com/in/akshat-behera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} className="sm:text-xl" />
                </a>
                <a 
                  href="https://github.com/akshatbehera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} className="sm:text-xl" />
                </a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit}
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 sm:p-6"
              variants={itemVariants}
            >
              {status.submitted ? (
                <motion.div 
                  className={`p-3 mb-4 rounded-lg sm:p-4 sm:mb-6 ${
                    status.success 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center">
                    {status.success ? (
                      <FiCheck className="mr-2 text-green-500" size={18} />
                    ) : (
                      <FiAlertTriangle className="mr-2 text-red-500" size={18} />
                    )}
                    <p className="text-sm sm:text-base">{status.message}</p>
                  </div>
                </motion.div>
              ) : null}
              
              <motion.div className="mb-3 sm:mb-4" variants={itemVariants}>
                <label htmlFor="name" className="block mb-1 text-sm font-medium sm:mb-2 sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white sm:text-base sm:px-4"
                />
              </motion.div>
              
              <motion.div className="mb-3 sm:mb-4" variants={itemVariants}>
                <label htmlFor="email" className="block mb-1 text-sm font-medium sm:mb-2 sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white sm:text-base sm:px-4"
                />
              </motion.div>
              
              <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block mb-1 text-sm font-medium sm:mb-2 sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white sm:text-base sm:px-4"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black transition-all duration-300 rounded-md bg-white dark:bg-white dark:text-black hover:opacity-90 disabled:opacity-70 sm:text-base sm:py-3"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 animate-spin sm:w-5 sm:h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiSend className="mr-2" size={16} />
                      Send Message
                    </span>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      {/* <div className="mt-8 text-center text-xs text-gray-600 dark:text-gray-400 sm:text-sm sm:mt-12">
           <p>Everything's Computer.</p> 
      </div> */}
    </motion.div>
  )
}

export default Contact 