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
            <h2>About me & My orgin story</h2>
            <div className="about-intro">
              <h3>Hi, I'm Andeep Reddy  Polepally (Andy)!👋</h3>

              <p>I'm a Frontend Engineer with over 4 years of experience in crafting dynamic, responsive,
                and user-centric web interfaces.
              
                My journey in software development began with a curiosity to bridge the gap between design and functionality.
                Today, I transform complex ideas into engaging, scalable, and pixel-perfect solutions.
                I'm passionate about usability, performance optimization, and the power of lifelong learning to deliver impactful results.
              </p>
              <p>
                Let’s connect and bring great ideas to life!
              </p>
            </div>

            <div className="img-special">
              <img src="/IMG_2741.jpg" alt="Posing looking towards the waterfalls" height="250px" width="100%" />
            </div>
            <div className="about-story">
              <h3>Professional Background</h3>

              <p>I hold a Master’s degree in Computer Information Systems from New England College, NH, where I honed my skills in software development, frontend architecture, and user experience (UX) design.
                My professional focus is on creating seamless digital experiences that are both beautiful and functional.</p>

              <h3>My Origin story</h3>
              <p>
                I am originally from Telangana, a state in the southern part of India.
                It's a region rich with history, and I grew up near a UNESCO World Heritage Site temple.
                This sparked my lifelong passion for exploring new places, understanding different cultures, and appreciating history. </p>

              <p>This curiosity has carried me across the world.
                I've had the wonderful opportunity to explore parts of the USA and am currently based in <>Boston, Massachusetts.</>
              </p>
              <p>
                From the bustling streets of Times Square to the serene temples of India, from
                learning to play guitar to experiencing the thrill of driving an excavator, each
                item represents a piece of my journey toward becoming the person I want to be.
              </p>
            </div>

            <div className="about-philosophy">
              <h3>My Philosophy</h3>
              <p>
                Beyond coding, I am a passionate traveler, adventure seeker, and life enthusiast. I live by the philosophy:
              </p>
              <blockquote>
                "Life is not measured by the number of breaths we take, but by the moments that
                take our breath away."
              </blockquote>
              <p>
                I believe in pushing boundaries, stepping out of comfort zones, and embracing both big adventures and small joys.
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

          <div className="story-image-homepage">
              <img 
                src="/IMG_6263.jpeg" 
                alt="Andy's camping in car" 
                className="hero-image-intro"
              />
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