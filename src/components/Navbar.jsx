import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, memo } from 'react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300" style={{
      backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.85)' : 'rgba(202, 209, 216, 0.85)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
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
              {['', 'About', 'Contact'].map((item) => (
                <Link
                  key={item || 'Home'}
                  to={`/${item.toLowerCase()}`}
                  className="relative px-3 py-2 rounded-md text-base font-medium"
                  style={{                    
                    color: isDarkMode ? 'var(--text-light)' : 'black',
                    opacity: isDarkMode ? 0.85 : 0.9,
                    ':hover': { color: isDarkMode ? 'var(--text-light)' : 'var(--text-dark)', opacity: 1 }
                  }}
                >
                  {item || 'Home'}
                  <AnimatePresence>
                    {location.pathname === `/${item.toLowerCase()}` && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: 'var(--gradient-purple)' }}
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
                onClick={toggleTheme}
                className="p-2 rounded-full"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                  color: isDarkMode ? 'var(--text-dark)' : 'white',
                  ':hover': {
                    backgroundColor: isDarkMode ? 'white' : 'black',
                    color: isDarkMode ? 'black' : 'white'
                  }
                }}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md"
              style={{
                backgroundColor: isDarkMode ? 'transparent' : 'rgba(192, 197, 204, 0.8)',
                color: isDarkMode ? 'white' : 'black',
                ':hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(192, 197, 204, 0.5)',
                  color: isDarkMode ? 'var(--accent-purple-end)' : 'black'
                }
              }}
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

      {/* Mobile menu - with fix for invisible clicking */}
      {/* Only render the menu when it needs to be visible */}
      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
          animate={{ opacity: 1, scaleY: 1, transformOrigin: 'top' }}
          exit={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed top-16 left-0 right-0 shadow-lg`}
          style={{
            backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.85)' : 'rgba(202, 209, 216, 0.85)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div className="px-4 md:px-8 pt-2 pb-3 space-y-1">
            {['', 'About', 'Contact'].map((item) => (
              <Link
                key={item || 'Home'}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="relative block px-3 py-2 rounded-md text-base font-medium"
                style={{
                  color: isDarkMode ? 'var(--text-light)' : 'var(--text-dark)',
                  opacity: isDarkMode ? 0.85 : 0.9,
                   ':hover': { color: isDarkMode ? 'var(--text-light)' : 'var(--text-dark)', opacity: 1 }
                 }}
              >
                {item || 'Home'}
                <AnimatePresence>
                  {location.pathname === `/${item.toLowerCase()}` && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'var(--gradient-purple)' }}
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
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium"
              style={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
                color: isDarkMode ? 'black' : 'white',
                ':hover': {
                    backgroundColor: isDarkMode ? 'white' : 'black',
                    color: isDarkMode ? 'white' : 'black'                 }
              }}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default memo(Navbar);