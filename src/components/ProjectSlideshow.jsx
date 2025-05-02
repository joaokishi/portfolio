import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectSlideshow = ({ images, currentIndex, onPrevious, onNext }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
      {/* Frame styling */}
      <div className={`absolute inset-0 border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg z-10 pointer-events-none`}></div>

      {/* Slideshow */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={onPrevious}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
          isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'
        } focus:outline-none z-20`}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
          isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'
        } focus:outline-none z-20`}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onNext(index)}
            className={`w-2.5 h-2.5 rounded-full border ${
              currentIndex === index
                ? (isDarkMode
                    ? 'bg-white border-white scale-125'
                    : 'bg-gray-800 border-gray-800 scale-125')
                : (isDarkMode
                    ? 'bg-transparent border-white opacity-70 hover:opacity-100'
                    : 'bg-transparent border-gray-800 opacity-70 hover:opacity-100')
            } focus:outline-none transition-all duration-300 transform hover:scale-110`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
