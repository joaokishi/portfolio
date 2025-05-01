import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Data Analysis', level: 88 },
    { name: 'SQL', level: 80 },
    { name: 'Data Visualization', level: 85 },
    { name: 'R', level: 75 },
  ];

  const experience = [
    {
      title: 'Data Scientist',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Developed and deployed machine learning models for predictive analytics.',
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Firm',
      period: '2018 - 2020',
      description: 'Conducted statistical analysis and created data visualizations for business insights.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>About Me</h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Your introduction and background information here.</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Skills</h2>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="subtitle1" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="body2" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} align="right">
                  {skill.level}%
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Experience</h2>
        <Grid container spacing={4}>
          {experience.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" component="h3" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography variant="body1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Education</h2>
        <div className="space-y-4">
          {/* Add your education items here */}
        </div>
      </motion.section>
    </div>
  );
};

export default About; 