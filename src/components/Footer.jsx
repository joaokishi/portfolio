import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/joaokishi', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/joao-kishi', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:joaopedroakira36@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-[#121821]' : 'bg-[#E9ECEF]'} py-2 font-sans transition-colors duration-300 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10">
        <div className="flex items-center justify-center h-full">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${isDarkMode ? 'text-primary-dark hover:text-accent-blue' : 'text-primary-light'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <p className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 