import { useNavigate } from "react-router-dom";


function Footer({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  
  return (
      <footer className="site-footer">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/A.png" 
                alt="Andy's World Logo" 
                className="brand-logo"
              />
            </div>
            <h3 className="footer-brand-name">Andy's World</h3>
            <p className="footer-tagline">
              <span className="tagline-highlight">It's an Andy Polepally Thing</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            {/* Navigation */}
            <div className="footer-section">
              <h4 className="footer-section-title">Navigate</h4>
              <nav className="footer-nav">
                <ul>
                  <li><button onClick={() => navigate("/")} className="footer-link">Home</button></li>
                  <li><button onClick={() => navigate("/about")} className="footer-link">About Me</button></li>
                  <li><button onClick={() => navigate("/bucketlist")} className="footer-link">Bucket List</button></li>
                  <li><button onClick={() => navigate("/Money-transfer")} className="footer-link">CMC Tool</button></li>
                  <li><button onClick={() => navigate("/resources")} className="footer-link">Resources</button></li>
                  <li><button onClick={() => navigate("/aboutsite")} className="footer-link">Site Info</button></li>
                </ul>
              </nav>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <ul className="footer-socials">
                <li>
                  <a href="mailto:anudeepreddypolepally@gmail.com" className="footer-link social-link">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anudeepreddy702" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/polepally-anudeep" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anudeepreddy2525" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://roadmap.sh/u/polepallyanudeep" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Philosophy Section */}
            <div className="footer-section footer-philosophy">
              <h4 className="footer-section-title">Philosophy</h4>
              <p className="footer-quote">
                "Collect experiences, not things. Live intentionally, travel fearlessly."
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Andy's World. All rights reserved.</p>
          <p className="footer-credit">Built with passion, powered by React</p>
        </div>
      </footer>
   
  );
}

export default Footer;