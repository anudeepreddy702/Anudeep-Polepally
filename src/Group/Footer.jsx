import { useNavigate } from "react-router-dom";
import SidebarMenu from "./Sides";
function Footer({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  return (
    <>
      <SidebarMenu />
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            {/* Logo Image */}
            <div className="footer-logo">
              <img 
                src="/A.png" 
                alt="Andy's World Logo" 
                className="brand-logo"
              />
            </div>
            <h3>Andy's World</h3>
            <p className="footer-tagline">
              <mark>It's an Andy Polepally Thing</mark>
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigate</h4>
              <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                <li><button onClick={() => navigate("/about")}>About Me</button></li>
                <li><button onClick={() => navigate("/bucketlist")}>Bucket List</button></li>
                <li><button onClick={() => navigate("/MoneyTransferComparison")}>CMC Tool</button></li>
                <li><button onClick={()=>navigate("/resources")}>Resources</button></li>
                <li><button onClick={() => navigate("/aboutsite")}>Site Info & Contact</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:anudeepreddypolepally@gmail.com">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anudeepreddy702" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/polepally-anudeep" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anudeepreddy2525" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://roadmap.sh/u/polepallyanudeep" target="_blank" rel="noopener noreferrer">
                  Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Philosophy</h4>
              <p className="footer-quote">
                "Collect experiences, not things. Live intentionally, travel fearlessly."
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Andy's World. All rights reserved.</p>

          <p className="footer-credit">Built with passion, powered by React</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;