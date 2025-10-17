import Footer from "./Footer";
import Navi from "./Navi";
import SidebarMenu from "./Sides";

function Aboutsite({ darkMode, toggleMode }) {
  return (
    <>
    <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
    <section className="about-site-section">
      <h2 className="about-site-title">About This Site</h2>
      
      <div className="site-info-grid">
        <div className="site-info-card">
          <div className="info-icon">📱</div>
          <h3>Photos</h3>
          <p>Mobile Photography</p>
          <p className="detail">All photos captured on mobile devices
            Samsung S10, Apple Iphone 15 </p>
        </div>

        <div className="site-info-card">
          <div className="info-icon">✍️</div>
          <h3>Typography</h3>
          <p>Roboto Slab</p>
          <p className="detail">Clean, modern serif font</p>
        </div>

        <div className="site-info-card highlight-card">
          <div className="info-icon">🎨</div>
          <h3>Color Theme</h3>
          <p className="orange-text">#F47600</p>
          <p className="detail">Inspired by McLaren F1 Papaya Orange</p>
        </div>

        <div className="site-info-card">
          <div className="info-icon">💡</div>
          <h3>Design Inspiration</h3>
          <p>A Shot of the World</p>
          <p className="detail">Clean, minimal aesthetic</p>
        </div>

        <div className="site-info-card">
          <div className="info-icon">⚛️</div>
          <h3>Tech Stack</h3>
          <p>React + JSX + CSS</p>
          <p className="detail">Modern web technologies</p>
        </div>

        <div className="site-info-card">
          <div className="info-icon">⏱️</div>
          <h3>Development Time</h3>
          <p>Custom Built</p>
          <p className="detail">Took 3 Months of my personal time, where I Crafted with passion & dedication</p>
        </div>
      </div>

      <div className="site-footer-note">
        <p>This website is a personal project built to track my life's adventures and goals. Every line of code represents a commitment to living intentionally and documenting the journey.</p>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Aboutsite;