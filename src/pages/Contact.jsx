import { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import GradientLine from '../components/GradientLine';

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
    <div className="space-y-8 w-full">
      {/* Contact Frame */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-lg w-full"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1 className={`text-5xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Get in Touch</h1>
        <GradientLine className="mb-6" width="w-24" />
        <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>I'd love to hear from you!</p>

        <div className="mb-10">
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Send a Message</h2>
          <GradientLine className="mb-6" width="w-24" />
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
              style={{ fontSize: '1.1rem' }}
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Connect With Me</h2>
          <GradientLine className="mb-6" width="w-24" />
          <div className="flex space-x-4 mb-6">
            <IconButton
              color="primary"
              href="https://github.com/joaokishi"
              target="_blank"
              className={isDarkMode ? 'text-gray-200 hover:text-[#f080ff]' : 'text-gray-700 hover:text-[#f080ff]'}
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 h-6"
                style={{ width: '24px', height: '24px' }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </motion.svg>
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com/in/joao-kishi"
              target="_blank"
              className={isDarkMode ? 'text-gray-200 hover:text-[#f080ff]' : 'text-gray-700 hover:text-[#f080ff]'}
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 h-6"
                style={{ width: '24px', height: '24px' }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </motion.svg>
            </IconButton>
            <IconButton
              color="primary"
              href="mailto:joaopedroakira36@gmail.com"
              className={isDarkMode ? 'text-gray-200 hover:text-[#f080ff]' : 'text-gray-700 hover:text-[#f080ff]'}
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8"
                style={{ width: '32px', height: '32px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
            </IconButton>
          </div>
          <Typography variant="body1" className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Feel free to reach out to me through any of these channels or by filling out the contact form.
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </Typography>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;