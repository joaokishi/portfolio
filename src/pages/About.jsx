import { Box, Typography, Grid} from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'Python' },
    { name: 'R' },
    { name: 'SQL' },
    { name: 'Data Analysis' },
    { name: 'Data Visualization' },
    { name: 'React/Node.js' },
  ];

  const education = [
    {
      title: 'Integrated High School with Computer Technician',
      institution: 'Instituto Federal do Paraná - Campus Londrina',
      period: '2017 - 2021'
    },
    {
      title: 'System Analysis and Development',
      institution: 'Instituto Federal do Paraná - Campus Londrina',
      period: '2023 - present'   
    },
  ];

  const courses = [
    {
      title: 'Google Data Analytics Professional Certificate',
      company: 'Google',
      period: '2024',
      description: 'This course provided me with a comprehensive overview of the data analytics process, from data collection to visualization, and emphasized the importance of critical thinking and problem-solving skills.',
    },
    {
      title: 'Google Advanced Data Analytics Professional Certificate',
      company: 'Google',
      period: '2025',
      description: 'Learning more about Python, and will be learning about data science and Machine Learning.',
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
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'm a data scientist looking to expand my skills in the field. Currently, I'm in search of a new career opportunity, to be able to show my skills and learn new ones.</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Skills</h2>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <Typography
                  variant="subtitle1"
                  className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                  align="center"
                >
                  {skill.name}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Typography variant="h6" component="h3" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {edu.title}
              </Typography>
              <Typography variant="subtitle1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {edu.institution} | {edu.period}
              </Typography>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Courses</h2>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" component="h3" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {course.title}
                  </Typography>
                  <Typography variant="subtitle1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {course.company} | {course.period}
                  </Typography>
                  <Typography variant="body1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} sx={{ mt: 1 }}>
                    {course.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>
    </div>
  );
};

export default About; 