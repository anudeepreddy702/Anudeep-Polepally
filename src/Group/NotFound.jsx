import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navi from './Navi';
import SidebarMenu from './Sides';
import Footer from './Footer';

export default function NotFound({ darkMode, toggleMode }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={darkMode ? 'appdark' : 'app'}>
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu darkMode={darkMode} toggleMode={toggleMode} />
      
      <div className="page-container">
        <section className="notfound-hero">
          <div className="notfound-content">
            <div className="notfound-graphic">
              <div className="notfound-number">404</div>
            </div>
            
            <h1 className="notfound-title">Lost in the Woods?</h1>
            
            <p className="notfound-subtitle">
              The page you're looking for doesn't exist or has moved to a different adventure.
            </p>
            
            <p className="notfound-description">
              Don't worry! Every great journey has a few detours. Let me help you get back on track.
            </p>
            
            <div className="notfound-buttons">
              <Link to="/" className="notfound-btn notfound-btn-primary">
                Back to Home
              </Link>
              
              <button onClick={handleGoBack} className="notfound-btn notfound-btn-secondary">
                Go Back
              </button>
            </div>

            <div className="notfound-links">
              <p className="notfound-links-label">Or explore other pages:</p>
              <div className="notfound-quick-links">
                <Link to="/about" className="quick-link">About Me</Link>
                <Link to="/bucketlist" className="quick-link">Bucket List</Link>
                <Link to="/resources" className="quick-link">Resources</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}