import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-8">
      {/* Contact Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Get in Touch</h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'd love to hear from you!</p>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: isDarkMode ? '#d1d5db' : '#4b5563' // light gray in dark mode, dark gray in light
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDarkMode ? '#374151' : '#d1d5db'
              },
              '&:hover fieldset': {
                borderColor: isDarkMode ? '#4b5563' : '#9ca3af'
              }
            },
            '& .MuiInputBase-input': {
              color: isDarkMode ? '#e5e7eb' : '#111827' // light text in dark mode, dark in light
            }
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: isDarkMode ? '#d1d5db' : '#4b5563' // light gray in dark mode, dark gray in light
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDarkMode ? '#374151' : '#d1d5db'
              },
              '&:hover fieldset': {
                borderColor: isDarkMode ? '#4b5563' : '#9ca3af'
              }
            },
            '& .MuiInputBase-input': {
              color: isDarkMode ? '#e5e7eb' : '#111827' // light text in dark mode, dark in light
            }
          }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: isDarkMode ? '#d1d5db' : '#4b5563' // light gray in dark mode, dark gray in light
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDarkMode ? '#374151' : '#d1d5db'
              },
              '&:hover fieldset': {
                borderColor: isDarkMode ? '#4b5563' : '#9ca3af'
              }
            },
            '& .MuiInputBase-input': {
              color: isDarkMode ? '#e5e7eb' : '#111827' // light text in dark mode, dark in light
            }
          }}
        />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </motion.section>

      {/* Social Links */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`rounded-lg ${isDarkMode ? 'bg-[#1a222e]' : 'bg-hover-light'} p-8 shadow-lg`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Connect With Me</h2>
        <div className="flex space-x-4">
          <IconButton
            color="primary"
            href="https://github.com/joaokishi"
            target="_blank"
            className={isDarkMode ? 'text-gray-200 hover:text-gray-300' : 'text-gray-700 hover:text-gray-800'}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://linkedin.com/in/joao-kishi"
            target="_blank"
            className={isDarkMode ? 'text-gray-200 hover:text-gray-300' : 'text-gray-700 hover:text-gray-800'}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="mailto:joaopedroakira36@gmail.com"
            className={isDarkMode ? 'text-gray-200 hover:text-gray-300' : 'text-gray-700 hover:text-gray-800'}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="body1" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} sx={{ mt: 4 }}>
          Feel free to reach out to me through any of these channels or by filling out the contact form.
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Typography>
      </motion.section>
    </div>
  );
};

export default Contact; 