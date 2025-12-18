import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navi from './Navi';
import SidebarMenu from './Sides';
import Footer from './Footer';

export default function NotFound({ darkMode, toggleMode }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      // If no history, go to home
      navigate('/');
    }
  };

  return (
    <div className={darkMode ? 'appdark' : 'app'}>
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
      
      <div className="notfound-page">
        <div className="notfound-container">
          <div className="notfound-icon">⚠️</div>
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Page Not Found</h2>
          <p className="notfound-description">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="notfound-buttons">
            <Link to="/" className="notfound-btn-primary">
              Go Home
            </Link>
            
            <button onClick={handleGoBack} className="notfound-btn-secondary">
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}