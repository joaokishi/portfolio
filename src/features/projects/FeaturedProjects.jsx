import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { GradientLine } from '../../components/ui';
import { ProjectCard, SmallProjectCard } from '../../components/projects';

// Import local images
import { useMemo } from 'react';
import valChamp1 from '../../assets/projects/val-champ2024/newplot.png';
// For files with spaces, we'll use a different approach
// We'll use string interpolation in the image paths
const valChamp2Path = new URL('../../assets/projects/val-champ2024/newplot (1).png', import.meta.url).href;
const valChamp3Path = new URL('../../assets/projects/val-champ2024/newplot (2).png', import.meta.url).href;

// Memoize the projects data to prevent recreating it on each render
const createFeaturedProjects = () => [
  {
    title: 'Valorant Champions 2024',
    description: 'Exploratory Data Analysis of the Valorant Champions 2024. Using R and Excel to discover insights about the stats of the players.',
    link: 'https://joaokishi.github.io/vct-2024-analysis/',
    images: [
      valChamp1,
      valChamp2Path,
      valChamp3Path
    ]
  },
  {
    title: 'Data Visualization',
    description: 'Interactive dashboard using React and D3.js',
    link: 'https://github.com/example/data-viz-project',
    images: [
      valChamp2Path,
      valChamp3Path,
      valChamp1
    ]
  },
  {
    title: 'Data Analysis',
    description: 'Statistical analysis of large datasets using Python',
    link: 'https://github.com/example/data-analysis-project',
    images: [
      valChamp3Path,
      valChamp1,
      valChamp2Path
    ]
  }
];

const FeaturedProjects = ({ currentSlideIndex }) => {
  const { isDarkMode } = useTheme();

  // Memoize the projects data
  const featuredProjects = useMemo(createFeaturedProjects, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="p-4 sm:p-6 md:p-8 rounded-lg w-full"
      style={{
        backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.75)' : 'rgba(202, 209, 216, 0.75)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
      <GradientLine className="mb-4" width="w-20" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectCard
            project={featuredProjects[0]}
            currentIndex={currentSlideIndex}
          />
        </div>
        <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <SmallProjectCard
            project={featuredProjects[1]}
            currentIndex={currentSlideIndex}
          />
          <SmallProjectCard
            project={featuredProjects[2]}
            currentIndex={currentSlideIndex}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
