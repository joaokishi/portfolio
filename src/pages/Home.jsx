import { useState, useEffect, useCallback } from 'react';
import { WelcomeSection } from '../features/home';
import { AboutSection } from '../features/about';
import { FeaturedProjects } from '../features/projects';

function Home() {

  // Slideshow logic
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [maxSlides, setMaxSlides] = useState(3);

  // Auto-advance all slideshows every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlides]);

  // Memoize the scroll function to prevent recreation on each render
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top;
      // Get the current scroll position
      const startPosition = window.pageYOffset;
      // Calculate distance to scroll
      const distance = sectionPosition + startPosition - 80; // Subtract navbar height for better positioning

      // Smooth scroll with animation
      window.scrollTo({
        top: distance,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="space-y-8 md:space-y-12 relative pt-24 md:pt-28 pb-8 md:pb-12 w-full">
      <WelcomeSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <FeaturedProjects currentSlideIndex={currentSlideIndex} />
    </div>
  );
}

export default Home;