import { useNavigate } from "react-router-dom";
import SidebarMenu from "./Sides";
function Footer({ darkMode, toggleMode }) 
{
  const navigate = useNavigate();
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
              <li><button onClick={()=>navigate("/")}>Home</button></li>
              <li><button onClick={()=>navigate("/about")}>About Me</button></li>
              <li><button onClick={()=>navigate("/bucketlist")}>Bucket List</button></li>
              <li><button onClick={()=>navigate("/aboutsite")}>Site Info & Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <button onClick={() => window.open("mailto:anudeepreddypolepally@gmail.com","_blank","noopener noreferrer")}>
                  Email
                </button>
              </li>
              <li>
                <button onClick={() => window.open("https://github.com/anudeep-polepally", "_blank","noopener,noreferrer")}>
                  GitHub
                </button>
              </li>
              <li>
                <button onClick={() => window.open("https://www.linkedin.com/in/polepally-anudeep", "_blank", "noopener,noreferrer")}>
                  LinkedIn
                </button>
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