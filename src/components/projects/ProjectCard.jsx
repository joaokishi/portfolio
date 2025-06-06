import { memo, lazy, Suspense, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { useTheme } from '../../context/ThemeContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Lazy load the image
const LazyCardMedia = lazy(() => import('./LazyCardMedia')); // Lazy load the LazyCardMedia component

// ProjectCard component, wrapped in forwardRef for ref access
const ProjectCard = forwardRef(({ project }, ref) => {
  const { isDarkMode } = useTheme(); // Get the current theme mode
  const [hovered, setHovered] = useState(false); // Add state for hover

  //Card style
  const cardStyle = {
    backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    height: '100%',
     border: '1px solid',
    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
     boxShadow: hovered // Apply shadow based on hover state
        ? '0 15px 25px -5px rgba(95, 0, 107, 0.5), 0 10px 10px -5px rgba(95, 0, 107, 0.3)'
        : '0 10px 15px -3px rgba(95, 0, 107, 0.3), 0 4px 6px -4px rgba(95, 0, 107, 0.2)'
  };

  return (
    <motion.div
      className="h-full"
      ref={ref}
      whileHover={{ y: -5 }} // Added lift animation on hover
      transition={{ duration: 0.2 }} // Added transition for the hover animation
      onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
    >
      <Card
        className="h-full flex flex-col shadow-lg"
        sx={cardStyle}
      >
      <Suspense fallback={<div className="h-[400px] w-full bg-gray-200 animate-pulse"></div>}>
        <LazyCardMedia
            component="img"
            src={project.images[0]}
            alt={project.title}
            sx={{
              height: 400,
              objectFit: 'cover',
              // Removed border styles from here
            }}
        />
      </Suspense>
      {/* Added dedicated div for the gradient line */}
      <div style={{
          height: '4px', // Height of the gradient line
          background: 'var(--gradient-purple)',
          width: '100%',
        }} />
        <CardContent sx={{ flexGrow: 0, p: 1.5, pb: 0 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: isDarkMode ? '#fff' : '#111', mb: 0.5, fontSize: '1.5rem' }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)', mb: 0.5, fontSize: '1rem',
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 1.5, pt: 0, pb: 1.5, justifyContent: 'flex-end', mt: 'auto' }}>
          <Button
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForwardIcon />} // Arrow icon for the button
            sx={{
              background: 'var(--gradient-purple)',
              color: 'var(--button-text)', // Button text color
              fontWeight: 'medium',
              '&:hover': {
                background: 'var(--gradient-purple)',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 15px -3px rgba(95, 0, 107, 0.5), 0 4px 6px -4px rgba(95, 0, 107, 0.3)',
                color: 'var(--button-text)'
              },
              transition: 'all 0.3s ease',
              textTransform: 'none',
              borderRadius: '8px',
              px: 1.5,
              py: 0.75,
              fontSize: '0.9rem'
            }}
          >
            View Project
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default memo(ProjectCard, () => true);