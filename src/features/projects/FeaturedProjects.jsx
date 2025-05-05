import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';
import { ProjectCard } from '../../components/projects';

// Import project images
import valChamp1 from '../../assets/projects/val-champ2024/newplot.png';
// Using string interpolation for image paths with spaces
const valChamp2Path = new URL('../../assets/projects/val-champ2024/newplot (1).png', import.meta.url).href;
const valChamp3Path = new URL('../../assets/projects/val-champ2024/newplot (2).png', import.meta.url).href;

// Function to create the featured projects data
const createFeaturedProjects = () => [
  {
    title: 'Valorant Champions 2024',
    description: 'Exploratory Data Analysis of the Valorant Champions 2024. Using R and Excel to discover insights about the stats of the players.',
    link: 'https://joaokishi.github.io/vct-2024-analysis/',
    images: [valChamp1, valChamp2Path, valChamp3Path], // Array of image paths
  },
];

// FeaturedProjects component
const FeaturedProjects = () => {
  // Access the current theme
  const { isDarkMode } = useTheme();

  // Memoize the featured projects data to prevent unnecessary re-renders
  const featuredProjects = useMemo(createFeaturedProjects, []);

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Transition for the animation
  const sectionTransition = { duration: 0.5, delay: 0.4 };

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={sectionTransition}
      className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
      style={{ // Styling for the section
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
    >
      {/* Section Title */}
      <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2> 
      <GradientLine className="mb-4" width="w-20" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectCard
            project={featuredProjects[0]}
          />
        </div>
      </div>
    </motion.section>
  );
};

// Export the component
export default FeaturedProjects;