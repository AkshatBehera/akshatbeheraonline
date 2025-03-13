import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Books from './pages/Books'
import Work from './pages/Work'
import Podcasts from './pages/Podcasts'
import Music from './pages/Music'
import X from './pages/X'
import Contact from './pages/Contact'
import Ark from './pages/Ark'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for user preference, but default to dark mode if no preference is set
    const isDark = localStorage.getItem('darkMode') === 'false' ? false : true
    
    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    // Update class on document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save preference
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/work" element={<Work />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/music" element={<Music />} />
            <Route path="/ark" element={<Ark />} />
            <Route path="/x" element={<X />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App 