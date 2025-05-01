import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 'ml',
      title: 'Machine Learning Model',
      description: 'A predictive analytics project that uses machine learning to forecast customer behavior.',
      technologies: ['Python', 'scikit-learn', 'pandas', 'numpy'],
      results: [
        { name: 'Accuracy', value: 92 },
        { name: 'Precision', value: 89 },
        { name: 'Recall', value: 94 },
      ],
    },
    {
      id: 'viz',
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for real-time data analysis and visualization.',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      results: [
        { name: 'Users', value: 1500 },
        { name: 'Data Points', value: 100000 },
        { name: 'Visualizations', value: 15 },
      ],
    },
    {
      id: 'analysis',
      title: 'Statistical Analysis',
      description: 'Comprehensive statistical analysis of large-scale datasets with actionable insights.',
      technologies: ['Python', 'R', 'SQL', 'Tableau'],
      results: [
        { name: 'Datasets', value: 10 },
        { name: 'Features', value: 50 },
        { name: 'Insights', value: 25 },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Projects Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>My Projects</h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>A collection of my work and contributions.</p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: isDarkMode ? '#1a222e' : '#f8f9fa',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography paragraph className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{ mr: 1, mb: 1 }}
                          className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                    <Box sx={{ height: 300 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={project.results}>
                          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                          <XAxis dataKey="name" stroke={isDarkMode ? '#9ca3af' : '#4b5563'} />
                          <YAxis stroke={isDarkMode ? '#9ca3af' : '#4b5563'} />
                          <Tooltip />
                          <Bar dataKey="value" fill={isDarkMode ? '#3b82f6' : '#2563eb'} />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </div>
      </motion.section>

      {/* Open Source Contributions */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Open Source Contributions</h2>
        <div className="space-y-4">
          {/* Add your open source contributions here */}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects; 