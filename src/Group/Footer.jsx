
import SidebarMenu from "./Sides";
function Footer({ darkMode, toggleMode }) 
{
  return (
   <>
    <SidebarMenu />
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Andy's World</h3>
          <p className="footer-tagline">
            <mark>It's an Andy Thing</mark>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Navigate</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/bucketlist">Bucket List</a></li>
              <li><a href="/about">About Me</a></li>
              <li><a href="/aboutsite">Site Info & Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:anudeepreddypolepally@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/anudeep-polepally" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/polepally-anudeep" target="_blank" rel="noopener noreferrer">
                  LinkedIn
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