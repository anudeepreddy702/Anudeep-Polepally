function Aboutsite({ darkMode }) {
  return (
    <div className={darkMode ? "appdark" : "app"}>
      <main>
        <section className="intro-section-about site-info-page">
          <p className="portfolio-kicker">Site Info</p>
          <h2>Behind the Pixels</h2>

          <p>
            This website is a personal portfolio, technical playground, and living archive in one place. It brings together my frontend work, learning resources, travel journal, and small product experiments into a single experience that feels personal without losing professional clarity.
          </p>

          <div className="site-info-grid site-build-grid">
            <div className="site-info-card">
              <span className="orange-text">React</span>
              <p>Component-driven UI with reusable page structure.</p>
            </div>
            <div className="site-info-card">
              <span className="orange-text">Vite</span>
              <p>Fast local development and optimized production builds.</p>
            </div>
            <div className="site-info-card">
              <span className="orange-text">CSS</span>
              <p>Custom responsive styling without a heavy design framework.</p>
            </div>
          </div>

          <h3>The Craft</h3>
          <p>
            The site is intentionally built with a direct, hands-on frontend approach: React for structure, React Router for page flow, and pure CSS for layout, motion, dark mode, and responsive behavior. Every page is designed to work across phone, tablet, laptop, and wide desktop screens.
          </p>
          <p>
            Most of the imagery comes from my own photos, which keeps the experience grounded in my actual story instead of making it feel like a generic template. The portfolio is meant to show both the engineer and the person behind the interface.
          </p>

          <h3>The Design System</h3>
          <p>
            One color anchors the visual identity: <mark>#F47600</mark>. It gives the site energy and continuity across buttons, links, highlights, progress states, and section details. The typography pairs expressive headings with readable body text so the pages can feel bold while staying easy to scan.
          </p>

          <h3>The Pages</h3>
          <p>
            The portfolio homepage focuses on frontend engineering, selected work, skills, and contact links. The About page gives more personal and professional context. The Journal keeps the adventure/bucket-list side of the site alive. The CMC tool is now a clean mid-market currency converter, and Resources collects learning material that shaped my frontend journey.
          </p>

          <h3>Performance and Accessibility</h3>
          <p>
            The site is structured with semantic sections, keyboard-friendly links and buttons, responsive grids, readable contrast, and reduced layout overflow across common device sizes. I also use automated tests and production builds to catch regressions before changes feel finished.
          </p>

          <h3>What I Learned</h3>
          <p>
            This project helped sharpen the parts of frontend work that matter in real products: aligning content, taming responsive edge cases, keeping navigation consistent, making interaction states clear, and balancing personality with usability.
          </p>

          <blockquote>
            "A portfolio should not just show what you built. It should show how you think."
          </blockquote>

          <h3>What Comes Next</h3>
          <p>
            This site will keep evolving as my work evolves. Future improvements may include stronger project case studies, richer screenshots, better performance reporting, and more refined writing around the decisions behind each build.
          </p>

          <p>
            Created and maintained by Anudeep Reddy Polepally.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Aboutsite;
