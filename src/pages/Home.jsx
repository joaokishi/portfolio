import { useCallback } from 'react'; // Import useCallback for memoizing functions
import { WelcomeSection } from '../features/home';
import { AboutSection } from '../features/about';
import { FeaturedProjects } from '../features/projects';

/**
 * Home component: The main page component that renders different sections.
 */
function Home() {

  /**
   * scrollToSection: A memoized function to scroll to a specific section.
   * @param {Event} event - The event object from the click.
   * @param {string} sectionId - The ID of the section to scroll to.
   */
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault(); // Prevent the default link behavior
    const section = document.getElementById(sectionId); // Find the section element by its ID
    if (section) { // Check if the section exists
      const sectionPosition = section.getBoundingClientRect().top; // Get the section's position relative to the viewport
      const startPosition = window.pageYOffset; // Get the current scroll position
      const distance = sectionPosition + startPosition - 80; // Calculate the total distance to scroll, subtracting the navbar height (80px) for better positioning

      // Scroll smoothly to the target section
      window.scrollTo({
        top: distance,
        behavior: 'smooth'
      });
    }
  }, []); // Empty dependency array means this function is only created once

  /**
   * Render the main sections of the home page.
   */
  return (
    <div className="space-y-8 md:space-y-12 relative pt-24 md:pt-28 pb-8 md:pb-12 w-full">
      <WelcomeSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <FeaturedProjects />
    </div>
  );
}

export default Home;