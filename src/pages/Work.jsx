import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiBookOpen, FiBriefcase, FiAward, FiCode, FiDatabase, FiTool, FiFileText } from 'react-icons/fi'
import { RiLinkedinBoxFill } from 'react-icons/ri'

// Education data
const education = [
  {
    id: 1,
    institution: 'Illinois Institute of Technology',
    location: 'Chicago, IL, U.S.A',
    degree: 'Master of Computer Science',
    period: 'Graduated: May 2024',
    year: '2024',
  },
  {
    id: 2,
    institution: 'GITAM University',
    location: 'Hyderabad, Telangana, India',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'June 2018 - May 2022',
    year: '2022',
  },
]

// Experience data
const experience = [
  {
    id: 1,
    title: 'Machine Learning Engineer (Internship)',
    company: 'Phoenix Global',
    location: 'Hyderabad, India',
    period: 'July 2021 - August 2021',
    year: '2021',
    achievements: [
      'Developed a logistic regression model for an e-commerce marketing campaign, achieving 92% accuracy.',
      'Conducted exploratory data analysis (EDA) on a 21,000-instance dataset, increasing decision-making speed by 30%.',
      'Improved data preprocessing time by 20% through metric-based analysis.',
    ],
  },
]

// Projects data
const projects = [
  {
    id: 1,
    title: 'Beat Analytics: Spotify Data Analysis and Song Popularity Prediction',
    description: 'Analyzed musical trends using Spotify datasets and machine learning techniques. Developed predictive models to estimate song popularity, achieving 85% accuracy.',
    technologies: ['R', 'Machine Learning', 'GitHub'],
    year: '2023',
    links: {
      github: 'https://github.com/AkshatBehera/CSP571-DPA-Project-BeatAnalytics-Spotify',
    },
  },
  {
    id: 2,
    title: 'Analysis of Labor Market Dynamics using the O*NET Dataset',
    description: 'Developed a network-based model analyzing labor market trends using the O*NET dataset. Identified key occupation clusters with 85% accuracy using community detection algorithms. Predicted future skill trends with 80% accuracy.',
    technologies: ['Python', 'Machine Learning', 'Network Analysis', 'GitHub'],
    year: '2023',
    links: {
      github: 'https://github.com/AkshatBehera/CS579-OSNA-FinalProject',
    },
  },
  {
    id: 3,
    title: 'Exploring Use of Cloud NoSQL Databases',
    description: 'Evaluated AWS DynamoDB, Cassandra, and MongoDB performance, optimizing data storage by 25%. Improved database efficiency by 30% and built a recommendation model using ML.',
    technologies: ['Python', 'Big Data', 'Cloud Computing', 'GitHub'],
    year: '2022',
    links: {
      github: 'https://github.com/AkshatBehera/CSP554-BigDataTech-Project',
    },
  },
  {
    id: 4,
    title: 'Machine Learning for Network Intrusion Detection',
    description: 'Developed an ML-based model for detecting network intrusions (UNSW-NB15 dataset). Reduced false positives by 15% and achieved 99% accuracy using RCNNs.',
    technologies: ['Python', 'Machine Learning', 'Neural Networks', 'GitHub'],
    year: '2022',
    links: {
      github: 'https://github.com/AkshatBehera-A20516439/CS584-ML-PROJECT-Spring23',
    },
  },
]

// Skills data
const skills = [
  {
    id: 1,
    category: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'Java', 'R', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    icon: <FiCode />,
  },
  {
    id: 2,
    category: 'Databases & Operating Systems',
    items: ['Oracle SQL', 'MySQL', 'AWS DynamoDB', 'Cassandra', 'MongoDB', 'Windows', 'Linux', 'Ubuntu'],
    icon: <FiDatabase />,
  },
  {
    id: 3,
    category: 'Software & Tools',
    items: ['RStudio', 'MS Project', 'Google Cloud', 'Docker', 'VSCode', 'MS Office', 'NetBeans', 'Eclipse', 'GIT', 'React', 'XAMPP'],
    icon: <FiTool />,
  },
  {
    id: 4,
    category: 'Libraries & Frameworks',
    items: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Gephi', 'NetworkX', 'Keras', 'Flask'],
    icon: <FiCode />,
  },
]

// Additional information
const additionalInfo = {
  hobbies: ['Reading', 'Coding', 'Space Exploration', 'Technology', 'Formula 1', 'Robotics', 'Video Games'],
  achievements: [
    '3-Time Merit-Based Scholarship Recipient – GITAM University (2020 - 2021)',
    'Participated in CERN - Open Days 2019 in Switzerland',
  ],
  courses: ['Data Mining', 'Machine Learning', 'AI', 'Data Structures', 'Big Data', 'Advanced Database Organization'],
  certifications: [
    'Machine Learning Algorithms: Supervised Learning (AMII)',
    'University of Michigan – Python Data Structures',
    'University of Colorado-Boulder – Database Management Essentials',
    'IBM – Cybersecurity Tools & Cyber Attacks',
  ],
  linkedinCertifications: 'https://www.linkedin.com/in/akshat-behera/details/certifications/',
}

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

// Section component for reusability
const Section = ({ title, icon, children }) => (
  <motion.section 
    className="mb-16 last:mb-0"
    variants={itemVariants}
  >
    <div className="flex items-center mb-6">
      <span className="mr-3 text-black dark:text-white">{icon}</span>
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
    </div>
    {children}
  </motion.section>
)

const Work = () => {
  return (
    <motion.div
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center md:text-5xl">Work</h1>
        
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Education Section */}
          <Section title="Education" icon={<FiBookOpen size={24} />}>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10 ml-0.5" />
                  )}
                  
                  <div className="flex">
                    {/* Year badge */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-16 h-16 text-white rounded-full bg-black dark:bg-white dark:text-black">
                        <span className="font-medium">{edu.year}</span>
                      </div>
                    </div>
                    
                    {/* Education card */}
                    <div className="flex-1 p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
                      <p className="mt-2 font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p> 
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Experience Section */}
          <Section title="Experience" icon={<FiBriefcase size={24} />}>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline connector */}
                  {index < experience.length - 1 && (
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10 ml-0.5" />
                  )}
                  
                  <div className="flex">
                    {/* Year badge */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-16 h-16 text-white rounded-full bg-black dark:bg-white dark:text-black">
                        <span className="font-medium">{exp.year}</span>
                      </div>
                    </div>
                    
                    {/* Experience card */}
                    <div className="flex-1 p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} • {exp.location}</p>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                      
                      <ul className="pl-5 space-y-2 list-disc text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Projects Section */}
          <Section title="Projects" icon={<FiCode size={24} />}>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline connector */}
                  {index < projects.length - 1 && (
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10 ml-0.5" />
                  )}
                  
                  <div className="flex">
                    {/* Year badge */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-16 h-16 text-white rounded-full bg-black dark:bg-white dark:text-black">
                        <span className="font-medium">{project.year}</span>
                      </div>
                    </div>
                    
                    {/* Project card */}
                    <div className="flex-1 p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                      <div className="flex flex-wrap items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        
                        <div className="flex space-x-2">
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-label="View GitHub repository"
                          >
                            <FiGithub size={18} />
                          </a>
                        </div>
                      </div>
                      
                      <p className="mb-4 text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:underline"
                        >
                          <FiGithub className="mr-1" size={14} />
                          GitHub Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Skills Section */}
          <Section title="Skills" icon={<FiTool size={24} />}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillGroup) => (
                <motion.div 
                  key={skillGroup.id}
                  className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4">
                    <span className="mr-2 text-black dark:text-white">{skillGroup.icon}</span>
                    <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Certifications Section */}
          <Section title="Certifications" icon={<FiAward size={24} />}>
            <motion.div 
              className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
              variants={itemVariants}
            >
              <ul className="pl-5 space-y-2 list-disc text-gray-600 dark:text-gray-400">
                {additionalInfo.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
              
              <div className="mt-4">
                <a 
                  href={additionalInfo.linkedinCertifications}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md text-white bg-black dark:bg-white dark:text-black hover:opacity-90"
                >
                  <RiLinkedinBoxFill className="mr-2" size={18} />
                  View LinkedIn Certifications
                </a>
              </div>
            </motion.div>
          </Section>
          
          {/* Additional Information Section */}
          <Section title="Additional Information" icon={<FiFileText size={24} />}>
            <motion.div 
              className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.hobbies.map((hobby) => (
                    <span 
                      key={hobby} 
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold">Achievements</h3>
                <ul className="pl-5 space-y-2 list-disc text-gray-600 dark:text-gray-400">
                  {additionalInfo.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Relevant Courses</h3>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.courses.map((course) => (
                    <span 
                      key={course} 
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Section>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Work 