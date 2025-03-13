import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMusic, FiPlay } from 'react-icons/fi'

// Sample playlist data (replace with your own)
const playlists = [
  {
    id: 1,
    title: 'EDM - Techno Mix',
    description: 'Can you here the music?',
    cover: 'images/music/technomix.png',
    spotifyId: '37i9dQZF1EIgCxM2LxByFs', //  actual playlist ID
  },
  {
    id: 2,
    title: 'EDM - House Mix',
    description: 'Electronic House Music is Here.',
    cover: 'images/music/housemix.png',
    spotifyId: '37i9dQZF1EIdDyy28MYSyS', //  actual playlist ID
  },
  {
    id: 3,
    title: 'Top 50 - Global',
    description: 'Most played top 50 songs on Spotify globally.',
    cover: 'images/music/global.png',
    spotifyId: '37i9dQZEVXbMDoHDwVN2tF', //  actual playlist ID
  },
  {
    id: 4,
    title: 'Beast Mode',
    description: 'High-energy tracks.',
    cover: 'images/music/beast.png',
    spotifyId: '37i9dQZF1DX76Wlfdnj7AP', //  actual playlist ID
  },
  {
    id: 5,
    title: 'The Weeknd',
    description: 'The Weeknd Essentials Playlist',
    cover: 'images/music/theweeknd.png',
    spotifyId: '37i9dQZF1DX6bnzK9KPvrz', //  actual playlist ID
  },
  {
    id: 6,
    title: 'Coding Mode',
    description: 'Dedicated to all the programmers out there.',
    cover: 'images/music/coding.png',
    spotifyId: '37i9dQZF1DX5trt9i14X7j', //  actual playlist ID
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

const Music = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])

  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">My Music</h1>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Playlist Selection */}
          <div className="bg-white dark:bg-transparent p-3 rounded-lg shadow-sm sm:p-4">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl sm:mb-4">My Playlists</h2>
            
            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {playlists.map((playlist) => (
                <motion.div
                  key={playlist.id}
                  className={`flex overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg cursor-pointer ${
                    selectedPlaylist.id === playlist.id ? 'border-2 border-black dark:border-white' : ''
                  }`}
                  onClick={() => setSelectedPlaylist(playlist)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative w-16 h-16 flex-shrink-0 sm:w-20 sm:h-20">
                    <img 
                      src={playlist.cover} 
                      alt={playlist.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20">
                      <FiPlay className="text-white" size={16} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center flex-1 p-2 min-w-0 sm:p-3">
                    <h3 className="text-sm font-medium truncate sm:text-base">{playlist.title}</h3>
                    <p className="text-xs text-gray-600 truncate dark:text-gray-400">
                      {playlist.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Spotify Embed */}
          <div className="lg:col-span-2">
            <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div className="flex items-center mb-4">
                <FiMusic className="mr-2 text-black dark:text-white" size={20} />
                <h2 className="text-lg font-semibold sm:text-xl">{selectedPlaylist.title}</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedPlaylist.description}
                </p>
              </div>
              
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800">
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${selectedPlaylist.spotifyId}?utm_source=generator&theme=${document.documentElement.classList.contains('dark') ? 'dark' : 'light'}`}
                  width="100%"
                  height="510"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify playlist: ${selectedPlaylist.title}`}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Music 