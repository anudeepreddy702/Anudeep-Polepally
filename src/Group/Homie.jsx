import { useNavigate } from "react-router-dom"

function Homie({ darkMode, toggleMode }) {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Intro Section */}
      <section className="intro-section">
        <h2>Life is an Adventure</h2>
        <p>
          I believe life is best measured by the experiences we collect, not the things we own. Every journey, challenge, and idea we explore shapes who we become both personally and professionally.
         </p>
          <p>
            This website is my digital journal and creative space. Here, I document my adventures, track personal goals, and reflect on the experiences that fuel my curiosity from traveling and discovering new cultures to building intuitive, meaningful digital experiences as a frontend engineer. It’s a living record of growth, exploration, and continuous learning.
          </p>
        
        <div className="story-image-homepage">
          <img
            src="/43316.jpeg"
            alt="Andy's adventure"
            className="hero-image-intro"
          />
        </div>
        <p>
          I’m driven by curiosity, creativity, and the belief that the best journeys are still ahead. I’m always looking for new ways to learn, grow, and make a positive impact in the world. Whether you’re a fellow traveler, a curious mind, or someone looking for inspiration, I hope you’ll find something here that resonates with you.
        </p>
        {/* <div className="feature-grid">
          <div className="feature-item">
            <h3>🌍 Travel</h3>
            <p>From Times Square to Indian temples, exploring cultures and places that inspire</p>
          </div>
          <div className="feature-item">
            <h3>📸 Photography</h3>
            <p>Capturing moments that tell stories through mobile photography</p>
          </div>
          <div className="feature-item">
            <h3>🎯 Goals</h3>
            <p>Turning dreams into actionable items and tracking progress</p>
          </div>
        </div> */}


        {/* Featured Image with Story */}
        <div className="home-cta-section">
          <div className="featured-story">
            <div className="story-image">
              <img
                src="/Maine-Andy.jpg"
                alt="Andy's adventure"
                className="hero-image"
              />
            </div>
            <div className="story-content">
              <h3>About My Journey</h3>
              <p>
My journey is shaped by curiosity exploring new places, cultures, and ideas while building intuitive digital experiences as a frontend engineer. I believe growth comes from learning continuously, stepping outside my comfort zone, and embracing every new challenge.
              </p>
              <p>
                This isn't just a bucket list. It's a commitment to living fully, exploring boldly,
                and creating memories that last a lifetime. Join me as I check off dreams and
                discover new ones along the way.
              </p>
              <div className="cta-buttons">
                <button onClick={() => navigate("/about")} className="cta-button">
                  Read My Story
                </button>
                <button onClick={() => navigate("/bucketlist")} className="cta-button">
                  View My Bucket List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homie