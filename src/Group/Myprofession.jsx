import Footer from "./Footer";
import Navi from "./Navi";
import SidebarMenu from "./Sides";

function Myprofession({ darkMode, toggleMode })
{
    return(
        <>

      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
      
      <div className="page-container">
        <section className="about-section">
          <div className="about-content">
            <h1>About Me</h1>
            
            {/* Personal Intro */}
            <div className="about-intro">
              <h2>Hi, I'm Andeep Reddy Polepally – Call me Andy! 👋</h2>
              <p>
                I'm a passionate traveler, adventure seeker, and life enthusiast who believes
                that the best stories are written through experiences, not possessions.
              </p>
            </div>

            {/* Professional Section - NEW */}
            <div className="about-professional">
              <h3>Professional Journey</h3>
              <div className="career-timeline">
                <div className="career-item">
                  <h4>Current Role</h4>
                  <p className="career-title">Your Job Title</p>
                  <p className="career-company">Company Name • Year - Present</p>
                  <p>
                    Brief description of what you do, key responsibilities, and achievements.
                    Focus on impact and skills you use daily.
                  </p>
                </div>

                <div className="career-item">
                  <h4>Previous Experience</h4>
                  <p className="career-title">Previous Job Title</p>
                  <p className="career-company">Company Name • Year - Year</p>
                  <p>
                    What you accomplished and learned in this role.
                  </p>
                </div>

                <div className="career-item">
                  <h4>Education</h4>
                  <p className="career-title">Degree Name</p>
                  <p className="career-company">University Name • Graduation Year</p>
                  <p>Major, relevant coursework, or achievements</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="skills-section">
                <h4>Skills & Expertise</h4>
                <div className="skills-grid">
                  <span className="skill-tag">React & JavaScript</span>
                  <span className="skill-tag">Web Development</span>
                  <span className="skill-tag">Photography</span>
                  <span className="skill-tag">Project Management</span>
                  <span className="skill-tag">Problem Solving</span>
                  <span className="skill-tag">Communication</span>
                  {/* Add your actual skills */}
                </div>
              </div>
            </div>

            {/* Personal Journey */}
            <div className="about-story">
              <h3>My Journey</h3>
              <p>
                Growing up, I always had an insatiable curiosity about the world. Every place
                I visited, every culture I experienced, and every person I met shaped who I am today.
                This bucket list isn't just a checklist—it's a testament to my commitment to living
                life fully and intentionally.
              </p>
              
              <div className="img-special">
                <img src="src/assets/IMG_2741.jpg" alt="Adventure moment" />
              </div>
              
              <p>
                From the bustling streets of Times Square to the serene temples of India, from
                learning to play guitar to experiencing the thrill of driving an excavator, each
                item represents a piece of my journey toward becoming the person I want to be.
              </p>
            </div>

            {/* Philosophy */}
            <div className="about-philosophy">
              <h3>My Philosophy</h3>
              <blockquote>
                "Life is not measured by the number of breaths we take, but by the moments that
                take our breath away."
              </blockquote>
              <p>
                I believe in pushing boundaries, stepping out of comfort zones, and embracing
                both the big adventures and small joys. Whether it's attending an F1 race,
                visiting all 50 US states, or simply learning to bake bread, every goal matters.
              </p>
            </div>

            {/* Achievements */}
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

            {/* What's Next */}
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
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

export default Myprofession