import { motion } from 'framer-motion'

// Sample book data (replace with your own)
const booksRead = [
  {
    id: 1,
    title: 'Elon Musk',
    author: 'Walter Isaacson',
    cover: 'images/books/elonmusk.png',
  },
  /* {
    id: 2,
    title: 'Structures or Why Things Don\'t Fall Down',
    author: 'J.E. Gordon',
    cover: 'https://placehold.co/200x300/e2e8f0/1e293b?text=Structures',
  }, */ 
  {
    id: 3,
    title: 'SuperIntelligence',
    author: 'Nick Bostrom',
    cover: 'images/books/superintelligence.png',
  },
  {
    id: 4,
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke',
    cover: 'images/books/2001.png',
  },
  {
    id: 5,
    title: 'Einstien: His Life and Universe',
    author: 'Walter Isaacson',
    cover: 'images/books/einstien.png',
  },
  {
    id: 6,
    title: 'Zero to One',
    author: 'Peter Thiel',
    cover: 'images/books/zerotoone.png',
  },
  {
    id: 7,
    title: 'Foundation',
    author: 'Isaac Asimov',
    cover: 'images/books/foundation.png',
  },
]

const booksReading = [
  {
    id: 1,
    title: 'The Technological Republic',
    author: 'Alexancer C. Karp and Nicholas W. Zamiska',
    cover: 'images/books/techrepublic.png',
    progress: 65,
  },
  {
    id: 2,
    title: 'The Contrarian - Peter Thiel',
    author: 'Max Chafkin',
    cover: 'images/books/contrarian.png',
    progress: 40,
  },
  {
    id: 3,
    title: 'The Moon is a Harsh Mistress',
    author: 'Robert A. Heinlein',
    cover: 'images/books/moon.png',
    progress: 25,
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

// Circular progress component
const CircularProgress = ({ progress }) => {
  const circumference = 2 * Math.PI * 18; // 2πr where r=18
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-12 h-12" viewBox="0 0 44 44">
        {/* Background circle */}
        <circle
          className="text-gray-200 dark:text-gray-700"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="4"
          r="18"
          cx="22"
          cy="22"
        />
        {/* Progress circle */}
        <circle
          className="text-black dark:text-white"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r="18"
          cx="22"
          cy="22"
          transform="rotate(-90 22 22)"
        />
      </svg>
      <span className="absolute text-xs font-medium">{progress}%</span>
    </div>
  );
};

const Books = () => {
  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12">My Books</h1>
        
        {/* Books I've Read Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="mb-6 text-xl font-semibold md:text-3xl md:mb-8">Books I've Read</h2>
          
          <motion.div 
            className="grid grid-cols-2 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {booksRead.map((book) => (
              <motion.div 
                key={book.id}
                className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="object-cover w-full h-36 xs:h-40 sm:h-48 md:h-56"
                />
                <div className="p-2 sm:p-3">
                  <h3 className="text-sm font-medium truncate sm:text-base">{book.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">{book.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Books I'm Reading Section */}
        <section>
          <h2 className="mb-6 text-xl font-semibold md:text-3xl md:mb-8">Books I'm Reading</h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {booksReading.map((book) => (
              <motion.div 
                key={book.id}
                className="flex overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="object-cover w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-44"
                />
                <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
                  <div>
                    <h3 className="mb-1 text-sm font-medium sm:text-base">{book.title}</h3>
                    <p className="mb-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm sm:mb-3">{book.author}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">Progress</span>
                    <div className="scale-90 sm:scale-100">
                      <CircularProgress progress={book.progress} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.div>
  )
}

export default Books 