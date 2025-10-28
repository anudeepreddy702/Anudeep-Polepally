import { useState, useEffect } from 'react';

function Backtotop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = window.pageYOffset;
    setIsVisible(scrolled > 300);
  };

  useEffect(() => {
    // Throttle scroll events
    let throttleTimeout = null;
    
    const handleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          toggleVisibility();
          throttleTimeout = null;
        }, 100); // Check every 100ms instead of every scroll
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Back to top"
    >
      ↑ BACK TO TOP
    </button>
  );
}


export default Backtotop;