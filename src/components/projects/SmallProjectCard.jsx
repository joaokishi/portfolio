import { useState, memo, useMemo } from 'react';
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

// Memoize the component to prevent unnecessary re-renders
const SmallProjectCard = memo(({ project, currentIndex }) => {
  const { isDarkMode } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full"
    >
      <Card
        className="h-full flex flex-col shadow-lg"
        sx={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          // backdropFilter: 'blur(8px)', // Removed for performance testing
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          height: '100%',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          boxShadow: hovered
            ? '0 15px 25px -5px rgba(95, 0, 107, 0.5), 0 10px 10px -5px rgba(95, 0, 107, 0.3)'
            : '0 10px 15px -3px rgba(95, 0, 107, 0.3), 0 4px 6px -4px rgba(95, 0, 107, 0.2)'
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={project.images[currentIndex % project.images.length]}
          alt={project.title}
          sx={{
            height: 140,
            objectFit: 'cover',
            borderBottom: '2px solid',
            borderImage: 'var(--gradient-purple) 1'
          }}
        />
        <CardContent sx={{ flexGrow: 0, p: 2, pb: 0 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: isDarkMode ? '#fff' : '#111',
              mb: 0.5,
              fontSize: '1.2rem'
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              mb: 1,
              fontSize: '0.9rem',
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
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'var(--gradient-purple)',
              color: 'var(--button-text)',
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
              fontSize: '0.8rem'
            }}
          >
            View Project
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
});

export default SmallProjectCard;
