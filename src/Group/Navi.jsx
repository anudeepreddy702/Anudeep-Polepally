import { useNavigate, useLocation } from "react-router-dom";

function Navi({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={() => navigate('/')} className="logo">
          Anudeep Polepally
        </button>
        <div className="nav-links">
          <button
            onClick={() => navigate('/')}
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
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
            Journal
          </button>
          
          <button
          onClick={()=>navigate('/money-transfer')}
          className={location.pathname==='/money-transfer'?'nav-link active':'nav-link'}
          >
            CMC Tool
          </button>
          <button
          onClick={()=>navigate('/resources')}
          className={location.pathname==='/resources'?'nav-link active':'nav-link'}
          >
            Resources
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
