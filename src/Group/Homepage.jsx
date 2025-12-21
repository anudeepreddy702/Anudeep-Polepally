import { useNavigate } from "react-router-dom"
import Footer from "./Footer";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import ScrollProgressBar from "./ScrollProgressBar";

function Homepage({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  return (
    <>
      <ScrollProgressBar darkMode={darkMode} />
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
      <div className="page-container">
        <section className="about-section">
          <div className="about-content">
            <h2>Meet Anudeep</h2>
            <div className="about-intro">
              <h3>Hi, I'm <strong>Anudeep Reddy  Polepally(Andy)!</strong></h3>

              <p>
                I’m a Frontend Engineer with 4+ years of experience building responsive, user-focused web applications.
                My journey began with a passion for bridging design and functionality, and today I specialize in turning complex ideas into clean, scalable, and intuitive digital experiences.
              </p>
              <p> I’m driven by a passion for creating meaningful digital experiences that not only look great but also perform exceptionally well.
                I care deeply about usability, performance, and continuous learning and I enjoy building products that feel thoughtful, fast, and human.
              </p>
              <div className="img-special">
                <img src="/IMG_2741.jpg" alt="Posing looking towards the waterfalls" height="250px" width="100%" />
              </div>
              <p>
                Let’s connect and bring great ideas to life!
              </p>
            </div>

            <div className="about-story">
              <h3>Professional Background</h3>

              <p>I hold a Master’s degree in Computer Information Systems from New England College, New Hampshire, where I developed a strong foundation in frontend architecture, software development, and user experience design.</p>
              <p>
                Professionally, I focus on building scalable, responsive, and visually refined web applications. My core expertise includes React.js, JavaScript (ES6+), TypeScript, and modern UI frameworks, with an emphasis on performance, accessibility, and maintainable design systems.</p>

              <p>I’m passionate about translating complex business requirements into elegant, intuitive user experiences, ensuring every design decision is purposeful.
                My approach blends engineering precision, creative design thinking, and data-driven insights to deliver impactful digital products that align with both user needs and organizational goals.</p>

              <p>I enjoy translating complex business requirements into intuitive user experiences. My approach blends engineering discipline, creative problem-solving, and data-driven thinking to deliver products that align with both user needs and business goals.
              </p>
              <p>
                Beyond day-to-day development, I actively explore modern web trends, accessibility standards, and performance optimization techniques to continuously improve front-end craftsmanship.
              </p>

              <p>
                If you'd like a deeper look at my professional experience and technical background, feel free to check out my linkedin below.
              </p>
              {/* Resume Download Button */}
              <div className="resume-section">
                <a
                  href="https://www.linkedin.com/in/polepally-anudeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                >
                  <span className="resume-icon">📄</span>
                  <span>View My Linkedin</span>
                </a>
              </div>

              <h3>My Origin story</h3>
              <p>
                I’m originally from Telangana, a state in southern India known for its rich culture and diversity. Growing up there sparked my curiosity for travel, new perspectives, and understanding different ways of life. </p>

              <p>That curiosity has taken me across the world from exploring different regions of India to experiencing the fast-paced energy of New York City. Now based in Boston, Massachusetts, I continue to find inspiration through travel, photography, and new experiences.</p>
              <p>
From learning to play the guitar to operating an excavator, each experience represents a step in shaping who I strive to be curious, grounded, and always evolving.</p>
            </div>

            <div className="about-philosophy">
              <h3>My Philosophy</h3>
              <p>
                Beyond coding, I’m a traveler, adventurer, and life enthusiast. I live by the belief:</p>
              <blockquote>
                "Life is not measured by the number of breaths we take, but by the moments that
                take our breath away."
              </blockquote>
              <p>
                I believe in pushing boundaries, stepping outside my comfort zone, and embracing both big adventures and small, meaningful moments.
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
                As I continue growing both personally and professionally, I aim to blend creativity with technology building experiences that inspire, empower, and bring people together.
                Every new step is a story in progress, and I’m excited to keep discovering, creating, and sharing what comes next.
              </p>
              <p>
                Join me on this journey, and let’s inspire each other to live with curiosity and intention.
              </p>
            </div>

            {/* Call to Action Banner */}
            <div className="home-banner">
              <h2>Start Your Own Adventure</h2>
              <p>Life is too short to not pursue your dreams. What's on your bucket list?</p>
              <div className="page-container">
                <button onClick={() => navigate("/bucketlist")} className="cta-button">
                  View My List of Adventures of a Lifetime
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