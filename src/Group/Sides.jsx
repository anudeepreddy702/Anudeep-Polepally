import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SidebarMenu({ darkMode, toggleMode }) {  // Add these props
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>

        <div className="menu-label">MENU</div>

        <div className="sidebar-image">
          <div className="image-placeholder">
            <img src="/IMG_6325.jpeg" alt="Guitar poster" height="500px" width="100%"/>
          </div>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <div 
              className={`menu-item ${isActive('/') ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              <span className="menu-number">I</span>
              <span className="menu-text">HOME</span>
            </div>

            <div 
              className={`menu-item ${isActive('/about') ? 'active' : ''}`}
              onClick={() => handleNavigation('/about')}
            >
              <span className="menu-number">II</span>
              <span className="menu-text">ABOUT ME</span>
              <span className="menu-subtitle">My story & journey</span>
            </div>

            <div 
              className={`menu-item ${isActive('/bucketlist') ? 'active' : ''}`}
              onClick={() => handleNavigation('/bucketlist')}
            >
              <span className="menu-number">III</span>
              <span className="menu-text">BUCKET LIST</span>
              <span className="menu-subtitle">My adventures & goals</span>
            </div>

            <div 

              className={`menu-item ${isActive('/MoneyTransferComparison') ? 'active' : ''}`}
              onClick={() => handleNavigation('/MoneyTransferComparison')}
            >
              <span className="menu-number">IV</span>
              <span className="menu-text">CMC TOOL</span>
              <span className="menu-subtitle">Custom Money comparision tool</span>
            </div>
            <div 

              className={`menu-item ${isActive('/resources') ? 'active' : ''}`}
              onClick={() => handleNavigation('/resources')}
            >
              <span className="menu-number">V</span>
              <span className="menu-text">RESOURCES</span>
              <span className="menu-subtitle">Inspiration Library</span>
            </div>


          </nav>
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
