import Footer from "./Footer";
import Navi from "./Navi";
import ScrollProgressBar from "./ScrollProgressBar";
import SidebarMenu from "./Sides";

function Aboutsite({ darkMode, toggleMode }) {
  return (
    <>
      <ScrollProgressBar darkMode={darkMode} />
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu  darkMode={darkMode} toggleMode={toggleMode} />
      
      <div className={darkMode ? "appdark" : "app"}>
        {/* Hero Section - Matching your other pages */}
        {/* <section className="hero-section-bottom">
          <div className="hero-image-container">
            <img 
              src="/website-showcase.jpg" 
              alt="Website showcase" 
              className="hero-image-intro"
            />
          </div>
        </section> */}

        {/* Main Content - Prose Style like About page */}
        <main>
          <section className="intro-section-about">
            <h2>Behind the Pixels</h2>
            
            <p>
              This website exists as a digital canvas a place where life's moments, goals, and reflections 
              converge into something tangible. Built from scratch over three months, every line of code 
              carries intention, and every design choice tells a story.
            </p>

            <h3>The Craft</h3>
            
            <p>
              Every photograph you see here was captured on a mobile device no professional cameras, 
              no elaborate setups. Just a Samsung S10 and an iPhone 15,
              proving that the best camera is the one you have with you.
            </p>

            <p>
              The typography breathes through Inter, a modern, clean sans-serif font designed 
              for digital screens. Each letter, each space, chosen for readability and elegance.
            </p>

            <h3>The Color Story</h3>
            
            <p>
              One color defines this space: <mark>#F47600</mark>. Inspired by McLaren F1's iconic 
              Papaya Orange, it's bold, energetic, and impossible to ignore. This isn't just a color—it's 
              a philosophy. Like the racing team that inspired it, this site is about speed, precision, 
              and pushing boundaries.
            </p>

            <h3>The Technology</h3>
            
            <p>
              Built with React, styled with pure CSS, and structured with 
              JSX, this is modern web development stripped to its essentials. No unnecessary 
              frameworks, no bloated libraries. Just clean, performant code that does exactly what it needs to do.
            </p>

            <h3>The Purpose</h3>
            
            <p>
              This isn't just a portfolio. It's a commitment device. A public declaration of goals, 
              adventures, and the journey from aspiration to achievement. The bucket list you see isn't 
              decoration it's a living document, a challenge to myself to keep moving, keep exploring, 
              keep growing.
            </p>

            <p>
              Every page here serves a purpose: to inspire action, to document growth, to remind myself 
              (and maybe you) that life is too short for passive observation. This website is proof that 
              you don't need permission to start building the life you want.
            </p>

            <h3>The Journey</h3>
            
            <p>
              Three months of late nights, countless iterations, and learning curves that felt more like 
              learning cliffs. But that's the point, isn't it? Growth happens in the struggle, in the 
              debugging sessions, in the moments when you finally solve that CSS alignment issue at 2 AM.
            </p>

            <blockquote>
              "Every line of code here represents a choice to build rather than consume, to create 
              rather than critique, to document rather than forget."
            </blockquote>

            <p>
              This site will evolve, just like I do. New adventures will be added, goals will be checked 
              off (and new ones created), and the design will mature. But the core principle remains: 
              live intentionally, document honestly, and never stop moving forward.
            </p>

            <h3>Thank You</h3>
            
            <p>
              For taking the time to explore this corner of the internet. Whether you're here for 
              inspiration, curiosity, or just stumbled upon this randomly I hope you found something 
              that resonates. If this site motivates even one person to start their own project, chase 
              their own adventure, or build their own digital space, then every hour spent coding was 
              worth it.
            </p>
            <p>
              A creation of Anudeep Reddy Polepally.
            </p>
            <p>
              Now go create something. Your own story is waiting to be written.
            </p>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}

export default Aboutsite;