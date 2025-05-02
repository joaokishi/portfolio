import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';

const ContactSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
      style={{
        backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
      <GradientLine className="mb-4" width="w-20" />
      <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex justify-center">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-md font-medium text-lg shadow-lg btn-shadow"
          style={{
            background: 'var(--gradient-purple)',
            color: 'var(--button-text)',
            boxShadow: '0 10px 15px -3px var(--button-shadow-color), 0 4px 6px -4px var(--button-shadow-color)'
          }}
        >
          Contact Me
        </motion.a>
      </div>
    </motion.section>
  );
};

export default ContactSection;
