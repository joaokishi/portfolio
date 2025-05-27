import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';import { memo} from 'react';
import { useMemo} from 'react';

const WelcomeSection = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme(); // Getting the theme

  // Memoize animation values to prevent recalculations
  const buttonAnimation = useMemo(() => ({
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      repeatDelay: 1
    }
  }), []);

  const arrowAnimation = useMemo(() => ({
    y: [0, 3, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      repeatDelay: 1,
      delay: 0.2
    }
  }), []);

  return (
    <motion.section
      id="welcome"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[85vh] p-4 sm:p-6 md:p-8 rounded-lg w-full"
      style={{
        backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
        // backdropFilter: 'blur(8px)', // Removed for performance testing
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-3xl px-2 sm:px-4 text-center sm:text-left"
      >
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm João Kishi
        </h1>
        <GradientLine className="mb-4 md:mb-8" width="w-48 md:w-64" />
        <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Using Python, R, SQL and Excel to uncover the truths hidden in data.
        </h2>
        <motion.a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={buttonAnimation}
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium text-base sm:text-lg mt-4 flex items-center shadow-lg btn-shadow"
          style={{
            background: 'var(--gradient-purple)',
            color: 'var(--button-text)',
            boxShadow: '0 10px 15px -3px var(--button-shadow-color), 0 4px 6px -4px var(--button-shadow-color)'
          }}
        >
          See More!
          <motion.svg
            className="ml-1 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={arrowAnimation}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default memo(WelcomeSection); // Wrapped with memo
