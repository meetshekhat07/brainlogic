import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    // Small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      // Try smooth scroll first, fallback to instant scroll
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
