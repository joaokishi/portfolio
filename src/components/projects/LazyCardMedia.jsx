import React, { useState, useEffect, useRef, forwardRef, memo } from 'react';

/**
 * LazyCardMedia component:
 * A reusable component to lazy-load images. It uses the Intersection Observer API
 * to determine when the image is about to come into view, then loads the image.
 */
const LazyCardMedia = forwardRef(({ src, alt, ...otherProps }, ref) => {
  // State to track whether the image has been loaded
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  // Ref to the image DOM element
  const imageRef = useRef(null);
  // Ref to store the IntersectionObserver instance
  const observerRef = useRef(null);

  // Effect to handle the Intersection Observer setup and cleanup
  useEffect(() => {
    // Reset the image loaded state when the src changes
    setIsImageLoaded(false);

    // Cleanup any existing Intersection Observer
    if (observerRef.current && imageRef.current) {
      observerRef.current.unobserve(imageRef.current);
    }

    // Create a new Intersection Observer instance
    observerRef.current = new IntersectionObserver(
      ([entry]) => { // The callback function when the image is intersecting
        if (entry.isIntersecting) { // Check if the element is intersecting with the viewport
          setIsImageLoaded(true); // Update the state to load the image
          if (observerRef.current && imageRef.current) { // Once loaded, remove the observer
            observerRef.current.unobserve(imageRef.current); 
          }
        }
      },
      { threshold: 0.1 } // Options: trigger the observer when 10% of the image is visible
    );

    // Observe the image element
    if (imageRef.current && !isImageLoaded) {
      observerRef.current.observe(imageRef.current);
    }

    // Cleanup function: Unobserve the image when the component unmounts or the src changes
    return () => {
      if (observerRef.current && imageRef.current) {
        observerRef.current.unobserve(imageRef.current);
      }
    };
  }, [src]);
  // Return the JSX
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}> {/* Container for the image or loading indicator */}
      {isImageLoaded ? ( // If the image is loaded, show the image
        <img 
          ref={imageRef}
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out', opacity: 1 }}
          {...otherProps} // Spread other props to img tag
        />
      ) : ( // If the image is not loaded, show the loading indicator
        <div // Placeholder until image is loaded
          ref={imageRef}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign:'center', fontSize:'1rem', backgroundColor: '#e0e0e0', }}
        >
          Loading...
        </div>
      )}
    </div>
  );
});

export default memo(LazyCardMedia);