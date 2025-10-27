import { useNavigate } from "react-router-dom"

function Homie({ darkMode, toggleMode }) {
  const navigate = useNavigate();
  
  return (
    <div className="page-container">
      {/* Intro Section */}
      <section className="intro-section">
        <h2>Life is an Adventure</h2>
        <p>
          I believe in collecting experiences, not things. This website is my digital journal
          where I track my dreams, goals, and the incredible experiences I've had along the way.
        </p>
        <div className="story-image-homepage">
              <img 
                src="src/assets/43316.jpeg" 
                alt="Andy's adventure" 
                className="hero-image-intro"
              />
            </div>
        <div className="feature-grid">
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
        </div>

       
        {/* Featured Image with Story */}
        <div className="home-cta-section">
          <div className="featured-story">
            <div className="story-image">
              <img 
                src="src/assets/Maine-Andy.jpg" 
                alt="Andy's adventure" 
                className="hero-image"
              />
            </div>
            <div className="story-content">
              <h3>About My Journey</h3>
              <p>
                Every adventure starts with a single step. From the mountains of Vermont to the 
                bustling streets of New York, from ancient temples in India to trying new cuisines 
                around the world - each experience shapes who I am.
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