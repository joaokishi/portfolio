import { motion } from 'framer-motion';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';
import { memo } from 'react';

const skills = [
  { name: 'Python' },
  { name: 'R' },
  { name: 'SQL' },
  { name: 'Data Analysis' },
  { name: 'Data Visualization' },
  { name: 'Machine Learning' },
];

const AboutSection = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
      style={{
        backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
        // backdropFilter: 'blur(8px)',
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
  );
};

export default memo(AboutSection);
