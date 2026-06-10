import { useNavigate } from "react-router-dom"

function Homie() {
  const navigate = useNavigate()

  const skills = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "REST APIs",
    "GraphQL",
    "Testing",
    "Performance",
  ]

  const projects = [
    {
      title: "CMC Money Transfer Tool",
      description:
        "A focused comparison tool for currency conversion and transfer-service costs, designed for quick decisions and transparent breakdowns.",
      tags: ["React", "UX", "Data UI"],
      action: () => navigate("/money-transfer"),
      actionLabel: "View Tool",
    },
    {
      title: "Learning Resources Hub",
      description:
        "A curated resource page for frontend growth, pairing practical learning paths with clean, scannable navigation.",
      tags: ["Content UX", "Frontend", "Curation"],
      action: () => navigate("/resources"),
      actionLabel: "Explore Resources",
    },
    {
      title: "Adventure Journal",
      description:
        "A personal bucket-list experience that blends photography, storytelling, and interactive goal tracking.",
      tags: ["React Router", "Personal Brand", "Responsive UI"],
      action: () => navigate("/bucketlist"),
      actionLabel: "See Journal",
    },
  ]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-copy">
          <p className="portfolio-kicker">Frontend Engineer | Boston, MA</p>
          <h1>Anudeep Polepally builds fast, thoughtful web experiences.</h1>
          <p className="portfolio-lede">
            I am a frontend engineer with 4+ years of experience turning complex product ideas into responsive, accessible, and maintainable user interfaces with React, Angular, TypeScript, and modern web tooling.
          </p>
          <div className="portfolio-actions">
            <a
              href="#contact"
              className="cta-button"
            >
              Contact Me
            </a>
            <button onClick={() => navigate("/about")} className="cta-button cta-button-secondary">
              About Anudeep
            </button>
          </div>
        </div>
        <div className="portfolio-portrait">
          <img src="/Andy_colors.jpg" alt="Anudeep Polepally" />
        </div>
      </section>

      <section className="portfolio-section portfolio-overview" aria-label="Professional overview">
        <div className="portfolio-stat">
          <span>4+</span>
          <p>Years building production web applications</p>
        </div>
        <div className="portfolio-stat">
          <span>React</span>
          <p>Component-driven interfaces, routing, state, and testing</p>
        </div>
        <div className="portfolio-stat">
          <span>UX</span>
          <p>Accessible, performant experiences that stay easy to use</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-section-heading">
          <p className="portfolio-kicker">Core Stack</p>
          <h2>Tools I use to ship polished interfaces</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-section-heading">
          <p className="portfolio-kicker">Selected Work</p>
          <h2>Projects and product thinking</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button onClick={project.action} className="project-link">
                {project.actionLabel}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-signature-section" aria-label="ARP's Create Edit Build Deliver">
        <div className="portfolio-signature-lines" aria-hidden="true">
          <span className="signature-static">ARP's</span>
          <span className="signature-rotator">
            <span>Create,</span>
            <span>Edit,</span>
            <span>Build,</span>
            <span>Deliver.</span>
          </span>
        </div>
      </section>

      <section className="portfolio-section experience-section">
        <div className="portfolio-section-heading">
          <p className="portfolio-kicker">Experience</p>
          <h2>Frontend engineering with product empathy</h2>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Frontend Engineer</h3>
            <p>
              Build scalable web interfaces, translate business requirements into clean user flows, and collaborate across design, product, and engineering to improve real-world product experiences.
            </p>
          </div>
          <div className="experience-item">
            <h3>Computer Information Systems, M.S.</h3>
            <p>
              Graduate foundation in software development, frontend architecture, data systems, and user-centered application design from New England College.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Homie
