import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();
  
  return (
      <footer className="site-footer">
        <div className="footer-cta" id="contact">
          <div className="footer-cta-copy">
            <p className="portfolio-kicker">Let's Build</p>
            <h2>Have a frontend role, product idea, or collaboration in mind?</h2>
          </div>
          <div className="footer-cta-links">
            <a
              href="mailto:anudeepreddypolepally@gmail.com"
              className="cta-button email-reveal-link"
              data-email="anudeepreddypolepally@gmail.com"
              title="anudeepreddypolepally@gmail.com"
            >
              Email Anudeep
            </a>
            <a
              href="https://www.linkedin.com/in/polepally-anudeep"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/anudeepreddy702"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/A.png" 
                alt="Anudeep Polepally Logo" 
                className="brand-logo"
              />
            </div>
            <h3 className="footer-brand-name">Anudeep Polepally</h3>
            <p className="footer-tagline">
              <span className="tagline-highlight">Frontend Engineer building thoughtful web experiences</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            {/* Navigation */}
            <div className="footer-section">
              <h4 className="footer-section-title">Navigate</h4>
              <nav className="footer-nav">
                <ul>
                  <li><button onClick={() => navigate("/")} className="footer-link">Portfolio</button></li>
                  <li><button onClick={() => navigate("/about")} className="footer-link">About Me</button></li>
                  <li><button onClick={() => navigate("/bucketlist")} className="footer-link">Journal</button></li>
                  <li><button onClick={() => navigate("/money-transfer")} className="footer-link">CMC Tool</button></li>
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
          </div>
        </div>
      </footer>
   
  );
}

export default Footer;
