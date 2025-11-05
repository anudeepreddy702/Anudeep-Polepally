import { useNavigate, useLocation } from "react-router-dom";

function Navi({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={() => navigate('/')} className="logo">
          Andy's World
        </button>
        <div className="nav-links">
          <button
            onClick={() => navigate('/')}
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </button>
          <button
            onClick={() => navigate('/about')}
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/bucketlist')}
            className={location.pathname === '/bucketlist' ? 'nav-link active' : 'nav-link'}
          >
            Bucket List
          </button>
          <button
            onClick={() => navigate('/aboutsite')}
            className={location.pathname === '/aboutsite' ? 'nav-link active' : 'nav-link'}
          >
            Site Info & Contact
          </button>
          <button
          onClick={()=>navigate('/resources')}
          className={location.pathname==='/resources'?'nav-link active':'nav-link'}
          >
            Learning Resources
          </button>

        </div>
      </div>
      <div className="nav-right">
        <button onClick={toggleMode} className="mode-toggle">
          Andy Mode: {darkMode ? "On" : "Off"}
        </button>
      </div>
    </nav>
  );
}

export default Navi;