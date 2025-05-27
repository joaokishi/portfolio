import { motion } from 'framer-motion';
import { useMemo, memo } from 'react';

import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';
import { ProjectCard, SmallProjectCard } from '../../components/projects'; // Import SmallProjectCard

// Import project images
import valChamp1 from '../../assets/projects/val-champ2024/newplot.png';
import valChamp2 from '../../assets/projects/val-champ2024/newplot (1).png'; // Ensure valChamp2 is imported
import valChamp3 from'../../assets/projects/val-champ2024/newplot (2).png';

// Function to create the featured projects data
const createFeaturedProjects = () => ({
  largeProject: {
    title: 'Placeholder Project Title',
    description: 'This is a placeholder for a new large featured project. Update this with your project details.',
    link: '#',
    images: [valChamp1], // Use valChamp2 image here
  },
  smallProjects: [
    {
      title: 'Valorant Champions 2024',
      description: 'Exploratory Data Analysis of the Valorant Champions 2024. Using R and Excel to discover insights about the stats of the players.',
      link: 'https://joaokishi.github.io/vct-2024-analysis/',
      images: [valChamp2], // Keep valChamp1 for the first small card
    },
    {
      title: 'Placeholder',
      description: 'Placeholder.',
      link: '',
      images: [valChamp3], // Use valChamp3Path for the second small card
    },
  ],
});

// FeaturedProjects component
const FeaturedProjects = () => {
  // Access the current theme
  const { isDarkMode } = useTheme();

  // Memoize the featured projects data to prevent unnecessary re-renders
  const { largeProject, smallProjects } = useMemo(createFeaturedProjects, []);

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
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
    >
      {/* Section Title */}
      <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2> 
      <GradientLine className="mb-4" width="w-20" />
      {/* Adjusted grid layout for large and small cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Project Card (occupies 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <ProjectCard
            project={largeProject}
          />
        </div>
        {/* Small Project Cards (occupies 1 column on large screens) */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-6">
          {smallProjects.map((project, index) => (
            <SmallProjectCard
              key={index}
              project={project}
              currentIndex={0} // You might need to manage current index if you add image cycling to SmallProjectCard
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Export the component
export default memo(FeaturedProjects);