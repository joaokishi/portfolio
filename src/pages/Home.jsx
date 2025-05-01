import { Box, Typography, Grid} from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ProjectSlideshow from '../components/ProjectSlideshow';

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

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Welcome to My Portfolio</h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'm a data scientist looking to expand my skills in the field.</p>
      </motion.section>

      {/* Projects Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg ${isDarkMode ? 'bg-[#141c28] hover:bg-[#1c2736]' : 'bg-white hover:bg-gray-50'} shadow transition-all duration-300 flex flex-col`}
              whileHover={{ y: -5 }}
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
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{project.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 flex-grow`}>{project.description}</p>

                <a
                  href={project.link}
                  className={`inline-block px-4 py-2 rounded-md text-center ${
                    isDarkMode
                      ? 'bg-accent-blue text-white hover:bg-blue-600'
                      : 'bg-accent-blue text-white hover:bg-blue-600'
                  } transition-colors duration-300`}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Home;