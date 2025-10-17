import { useState, useEffect } from 'react';

function Backtotop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Back to top"
    >
      ↑ Back to top
    </button>
  );
}

export default Backtotop;