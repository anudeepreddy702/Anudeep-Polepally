import { useNavigate } from "react-router-dom"
import Footer from "./Footer";
import Navi from "./Navi";
import SidebarMenu from "./Sides";

function Homepage({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  return (
    <>
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
      <div className="page-container">
        <section className="about-section">
          <div className="about-content">
            <h1>About Me</h1>
            <div className="about-intro">
              <h2>Hi, I'm Andeep Reddy  Polepally but you can call me Andy!👋</h2>
              <p>
                I'm a passionate traveler, adventure seeker, and life enthusiast who believes
                that the best stories are written through experiences, not possessions.
              </p>
            </div>


            <div className="about-story">
              <h3>My Journey</h3>
              <p>
                Growing up, I always had an insatiable curiosity about the world. Every place
                I visited, every culture I experienced, and every person I met shaped who I am today.
                This bucket list isn't just a checklist—it's a testament to my commitment to living
                life fully and intentionally.
              </p>


              <div className="img-special">
                <img src="src/assets/IMG_2741.jpg" alt="Guitar poster" height="250px" width="100%" />
              </div>
              <p>
                From the bustling streets of Times Square to the serene temples of India, from
                learning to play guitar to experiencing the thrill of driving an excavator, each
                item represents a piece of my journey toward becoming the person I want to be.
              </p>
            </div>

            <div className="about-philosophy">
              <h3>My Philosophy</h3>
              <blockquote>
                "Life is not measured by the number of breaths we take, but by the moments that
                take our breath away."
              </blockquote>
              <p>
                I believe in pushing boundaries, stepping out of comfort zones, and embracing
                both the big adventures and small joys. Whether it's attending a F1 race,
                visiting all 50 US states, or simply learning to bake bread, every goal matters.
              </p>
            </div>

            <div className="about-achievements">
              <h3>Milestones So Far</h3>
              <div className="achievement-grid">
                <div className="achievement-card">
                  <span className="achievement-number">7</span>
                  <span className="achievement-label">US States Visited</span>
                </div>
                <div className="achievement-card">
                  <span className="achievement-number">15+</span>
                  <span className="achievement-label">Goals Completed</span>
                </div>
                <div className="achievement-card">
                  <span className="achievement-number">∞</span>
                  <span className="achievement-label">Memories Created</span>
                </div>
              </div>
            </div>

            <div className="about-next">
              <h3>What's Next?</h3>
              <p>
                The adventure never stops! I'm currently working towards attending a Martin Garrix
                concert, running a marathon, and exploring more of India's incredible heritage sites.
                I'm also passionate about photography, entrepreneurship, and building meaningful
                connections with people around the world.
              </p>
              <p>
                Join me on this journey, and let's inspire each other to live life without regrets!
              </p>
            </div>

            {/* Call to Action Banner */}
            <div className="home-banner">
              <h2>Start Your Own Adventure</h2>
              <p>Life is too short to not pursue your dreams. What's on your bucket list?</p>
              <div className="page-container">
                <button onClick={() => navigate("/bucketlist")} className="cta-button">
                  View My Bucket List
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Homepage