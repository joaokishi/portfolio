import { Box, Typography, Grid} from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { isDarkMode } = useTheme();

  const featuredProjects = [
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics project using Python and scikit-learn',
      link: '/projects#ml',
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboard using React and D3.js',
      link: '/projects#viz',
    },
    {
      title: 'Data Analysis',
      description: 'Statistical analysis of large datasets using Python',
      link: '/projects#analysis',
    },
  ];

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
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'm a passionate developer creating amazing web experiences.</p>
      </motion.section>

      {/* Projects Preview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="p-4">
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{project.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Home; 