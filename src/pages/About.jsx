import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import GradientLine from '../components/GradientLine';

const About = () => {
  const { isDarkMode } = useTheme();

  // Skills moved to Home page

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
    <div className="space-y-8 md:space-y-12 relative pt-24 md:pt-28 pb-8 md:pb-12 w-full">
      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1 className={`text-5xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>About Me</h1>
        <GradientLine className="mb-6" width="w-24" />
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          I'm a data scientist looking to expand my skills in the field. Currently, I'm in search of a new career opportunity,
          to be able to show my skills and learn new ones. With a background in computer science and a passion for data,
          I transform complex datasets into actionable insights.
        </p>
      </motion.section>

      {/* Education & Courses Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="mb-10">
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Education</h2>
          <GradientLine className="mb-6" width="w-20" />
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.5)' : 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" component="h3" className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  {edu.title}
                </Typography>
                <Typography variant="subtitle1" className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  {edu.institution} | {edu.period}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Courses</h2>
          <GradientLine className="mb-6" width="w-16" />
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-4 rounded-lg w-full"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.5)' : 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" component="h3" className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  {course.title}
                </Typography>
                <Typography variant="subtitle1" className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  {course.company} | {course.period}
                </Typography>
                <Typography variant="body1" className={`text-base mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  {course.description}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;