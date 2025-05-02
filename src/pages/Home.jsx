import { Typography, Grid} from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ProjectSlideshow from '../components/ProjectSlideshow';
import GradientLine from '../components/GradientLine';

function Home() {
  const { isDarkMode } = useTheme();

  // Sample image URLs for each project
  // In a real project, you would use actual image paths or URLs
  const featuredProjects = [
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics project using Python and scikit-learn',
      link: '/projects#ml',
      images: [
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboard using React and D3.js',
      link: '/projects#viz',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      title: 'Data Analysis',
      description: 'Statistical analysis of large datasets using Python',
      link: '/projects#analysis',
      images: [
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [maxSlides, setMaxSlides] = useState(3); // Default to 3 slides

  // Skills data
  const skills = [
    { name: 'Python' },
    { name: 'R' },
    { name: 'SQL' },
    { name: 'Data Analysis' },
    { name: 'Data Visualization' },
    { name: 'React/Node.js' },
  ];

  // Find the maximum number of slides across all projects
  useEffect(() => {
    const maxImageCount = Math.max(...featuredProjects.map(project => project.images.length));
    setMaxSlides(maxImageCount);
  }, []);

  // Auto-advance all slideshows every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlides]);

  const handlePrevious = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex - 1 + maxSlides) % maxSlides);
  };

  const handleNext = (specificIndex) => {
    if (typeof specificIndex === 'number') {
      setCurrentSlideIndex(specificIndex);
    } else {
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % maxSlides);
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top;
      // Get the current scroll position
      const startPosition = window.pageYOffset;
      // Calculate distance to scroll
      const distance = sectionPosition + startPosition - 80; // Subtract navbar height for better positioning

      // Smooth scroll with animation
      window.scrollTo({
        top: distance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-8 md:space-y-12 relative pt-24 md:pt-28 pb-8 md:pb-12 w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-[70vh] p-4 sm:p-6 md:p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-3xl px-2 sm:px-4 text-center sm:text-left"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm João Kishi
          </h1>
          <GradientLine className="mb-4 md:mb-8" width="w-48 md:w-64" />
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Using Python, R, SQL and Excel to uncover the truths hidden in data.
          </h2>
          <motion.a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                repeatDelay: 1
              }
            }}
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium text-base sm:text-lg mt-4 flex items-center shadow-lg btn-shadow"
            style={{
              background: 'var(--gradient-purple)',
              color: 'var(--button-text)',
              boxShadow: '0 10px 15px -3px var(--button-shadow-color), 0 4px 6px -4px var(--button-shadow-color)'
            }}
          >
            See More!
            <motion.svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{
                y: [0, 3, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  repeatDelay: 1,
                  delay: 0.2
                }
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        <GradientLine className="mb-4" width="w-20" />
        <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          I'm a data scientist looking to expand my skills in the field. Currently, I'm in search of a new career opportunity,
          to be able to show my skills and learn new ones. With a background in computer science and a passion for data,
          I transform complex datasets into actionable insights.
        </p>

        <h3 className={`text-2xl font-bold mb-2 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h3>
        <GradientLine className="mb-4" width="w-16" />
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Typography
                  variant="subtitle1"
                  className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                  align="center"
                >
                  {skill.name}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <div className="mt-8 text-center flex flex-wrap justify-center gap-4">
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-md font-medium text-lg shadow-lg btn-shadow"
              style={{
                background: 'var(--gradient-purple)',
                color: 'var(--button-text)',
                boxShadow: '0 10px 15px -3px var(--button-shadow-color), 0 4px 6px -4px var(--button-shadow-color)',
                border: 'none'
              }}
            >
              Learn More About Me
            </motion.button>
          </Link>
          <motion.a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-md font-medium text-lg shadow-lg btn-shadow"
            style={{
              background: 'var(--gradient-purple)',
              color: 'var(--button-text)',
              boxShadow: '0 10px 15px -3px var(--button-shadow-color), 0 4px 6px -4px var(--button-shadow-color)'
            }}
          >
            View My Projects
          </motion.a>
        </div>
      </motion.section>

      {/* Projects Preview Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
        <GradientLine className="mb-4" width="w-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg transition-all duration-150 flex flex-col relative overflow-hidden group"
              style={{
                backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.9)' : 'rgba(202, 209, 216, 0.9)',
                backgroundImage: 'linear-gradient(to right, transparent, transparent), var(--gradient-purple)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                border: '2px solid transparent',
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.15 }}
            >
              {/* Project Slideshow */}
              <div className="p-4 pb-0">
                <ProjectSlideshow
                  images={project.images}
                  currentIndex={currentSlideIndex % project.images.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <a
                  href={project.link}
                  className={`group`}
                >
                  <h3
                    className="text-2xl font-bold mb-2 transition-colors duration-150 inline-flex items-center"
                    style={{
                      color: isDarkMode ? 'white' : '#111',
                      ':hover': { color: 'var(--accent-purple-end)' }
                    }}

                  >
                    {project.title}
                    <svg
                      className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-150"
                      style={{ color: 'var(--accent-purple-end)' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h3>
                </a>
                <p className={`flex-grow text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Home;