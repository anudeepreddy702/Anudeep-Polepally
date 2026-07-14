function AboutMe() {
  const focusAreas = [
    "React",
    "Angular",
    "TypeScript",
    "Responsive UI",
    "Accessibility",
    "Performance",
  ]

  return (
    <div className="about-page about-page-v2">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="portfolio-kicker">About Me</p>
          <h1>Meet Anudeep R.</h1>
          <p>
            Hi, I am Anudeep Reddy Polepally, also known as Andy. I am a frontend engineer based in Boston, MA with 4+ years of experience building responsive, accessible, and maintainable web experiences.
          </p>
        </div>

        <aside className="about-profile-panel" aria-label="Anudeep profile summary">
          <div className="about-hero-image">
            <img
              src="/DSC_0311 Edited.jpg"
              alt="Anudeep listening to music outdoors"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="about-profile-meta">
            <span>Frontend Engineer</span>
            <span>Boston, MA</span>
            <span>Originally from Telangana, India</span>
          </div>
        </aside>
      </section>

      <section className="about-stats" aria-label="About Anudeep highlights">
        <div>
          <span>4+</span>
          <p>Years building user-focused frontend applications</p>
        </div>
        <div>
          <span>MS</span>
          <p>Computer Information Systems, New England College</p>
        </div>
        <div>
          <span>UI</span>
          <p>Focused on clarity, performance, and thoughtful interaction</p>
        </div>
      </section>

      <section className="about-section-modern about-two-column">
        <div>
          <p className="portfolio-kicker">Professional Background</p>
          <h2>Building interfaces that feel clear, fast, and human.</h2>
        </div>
        <div className="about-prose">
          <p>
            My work is centered on translating complex product requirements into clean digital experiences. I care about component structure, responsive behavior, maintainable styling, and small interaction details that make a product easier to use.
          </p>
          <p>
            I enjoy working close to design and product thinking, shaping frontend systems that can grow without becoming difficult to understand.
          </p>
        </div>
      </section>

      <section className="about-section-modern about-focus-section">
        <div className="about-section-heading">
          <p className="portfolio-kicker">Core Stack</p>
          <h2>Tools and habits I keep close</h2>
        </div>
        <div className="about-focus-list">
          {focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="about-section-modern about-split-story">
        <div className="about-story-image">
          <img
            src="/IMG_6263.jpeg"
            alt="Anudeep outdoors during a road trip"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-prose">
          <p className="portfolio-kicker">The Person Behind The Interface</p>
          <h2>Curiosity is the thread through everything.</h2>
          <p>
            Growing up in Telangana shaped my love for culture, travel, language, and perspective. Moving through different places and experiences continues to influence how I think about people and the products they use.
          </p>
          <p>
            Outside of code, I am drawn to photography, music, road trips, and trying things that stretch my comfort zone. That same curiosity shows up in how I learn and build.
          </p>
        </div>
      </section>

      <section className="about-section-modern about-principles">
        <div>
          <p className="portfolio-kicker">Principles</p>
          <h2>What guides my work</h2>
        </div>
        <div className="about-principle-grid">
          <article>
            <h3>Clarity</h3>
            <p>Every screen should make the next action easier to understand.</p>
          </article>
          <article>
            <h3>Craft</h3>
            <p>Good frontend work is equal parts structure, detail, and restraint.</p>
          </article>
          <article>
            <h3>Growth</h3>
            <p>I keep learning because the web keeps moving, and that is part of the fun.</p>
          </article>
        </div>
      </section>

      <section className="about-next-modern">
        <div>
          <p className="portfolio-kicker">Next</p>
          <h2>More useful products, sharper craft, better stories.</h2>
          <p>
            I am continuing to grow as a frontend engineer while building projects that combine practical utility with personal voice. This portfolio is part showcase, part lab, and part living record of that growth.
          </p>
        </div>
        <div className="about-next-visual">
          <div className="about-story-image-beach">
            <img
              src="/20260704_155513.jpg"
              alt="Anudeep outdoors during a personal project moment"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-next-actions">
            <a href="/bucketlist" className="cta-button">
              View Journal
            </a>
            <a href="/resources" className="cta-button cta-button-secondary">
              Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe

