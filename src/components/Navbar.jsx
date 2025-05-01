import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#121821]' : 'bg-hover-light'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}>
                João Kishi	
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['', 'About', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item || 'Home'}
                  to={`/${item.toLowerCase()}`}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium ${
                    isDarkMode 
                      ? 'text-primary-dark/70 hover:text-accent-blue' 
                      : 'text-primary-light/70 hover:text-primary-light'
                  }`}
                >
                  {item || 'Home'}
                  <AnimatePresence>
                    {location.pathname === `/${item.toLowerCase()}` && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1, transformOrigin: "left" }}
                        exit={{ scaleX: 0, transformOrigin: "left" }}
                        transition={{
                          enter: { duration: 0.3, ease: "easeInOut" },
                          exit: { duration: 0.15, ease: "easeInOut" }
                        }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-white text-primary-light hover:bg-white/80' : 'text-primary-dark hover:text-accent-blue'}`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              ref={buttonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isDarkMode ? 'text-primary-dark hover:text-accent-blue' : 'text-primary-light hover:text-primary-light/80'}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed top-16 left-0 right-0 ${isDarkMode ? 'bg-hover-dark' : 'bg-hover-light'} shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['', 'About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item || 'Home'}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`relative block px-3 py-2 rounded-md text-base font-medium ${
                isDarkMode 
                  ? 'text-primary-dark/70 hover:text-accent-blue' 
                  : 'text-primary-light/70 hover:text-primary-light'
              }`}
            >
              {item || 'Home'}
              <AnimatePresence>
                {location.pathname === `/${item.toLowerCase()}` && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1, transformOrigin: "left" }}
                    exit={{ scaleX: 0, transformOrigin: "left" }}
                    transition={{
                      enter: { duration: 0.3, ease: "easeInOut" },
                      exit: { duration: 0.15, ease: "easeInOut" }
                    }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isDarkMode ? 'text-primary-dark hover:text-accent-blue' : 'text-primary-light hover:text-primary-light/80'
            }`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;