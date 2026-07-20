const buildStack = [
  {
    label: "React",
    detail: "Component-driven screens, reusable layout, and route-based page composition.",
  },
  {
    label: "Vite",
    detail: "Fast local development, production builds, and a lean frontend toolchain.",
  },
  {
    label: "CSS",
    detail: "Custom responsive styling, motion, dark mode, and page-specific art direction.",
  },
];

const pageMap = [
  ["Portfolio", "Frontend work, selected projects, stack, experience, and contact."],
  ["About", "Personal context, engineering principles, and the person behind the interface."],
  ["Journal", "A living bucket list with photography, progress, and memory-keeping."],
  ["CMC Tool", "A focused mid-market currency converter built as a practical UI experiment."],
  ["Resources", "Learning references that shaped my frontend growth."],
];

const qualityNotes = [
  {
    label: "Semantic Structure",
    detail: "Shared navigation, main content, footer landmarks, headings, and section-based page flow.",
  },
  {
    label: "Responsive Layout",
    detail: "Grids and content widths adapt across phone, tablet, laptop, and wide displays.",
  },
  {
    label: "Motion Care",
    detail: "Decorative animation includes reduced-motion handling where movement is not essential.",
  },
  {
    label: "Native Controls",
    detail: "Core flows use links, buttons, labels, and image alt text instead of purely visual affordances.",
  },
  {
    label: "Build Checks",
    detail: "Production builds and route checks help catch regressions before changes feel finished.",
  },
];

function Aboutsite() {
  return (
    <div className="site-story-page">
      <section className="site-story-hero">
        <p className="portfolio-kicker">Site Info</p>
        <h1>Behind the Pixels</h1>
        <p>
          This portfolio is a personal frontend lab: part professional showcase, part living archive,
          and part product playground. It brings together engineering work, travel memory, learning
          resources, and small utility experiments into one evolving web experience.
        </p>
      </section>

      <section className="site-story-section site-story-stack" aria-label="Technology stack">
        {buildStack.map((item) => (
          <article className="site-story-card" key={item.label}>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="site-story-section site-story-split">
        <div>
          <p className="portfolio-kicker">The Craft</p>
          <h2>Built with intention, not template thinking.</h2>
        </div>
        <div className="site-story-copy">
          <p>
            The site uses React for structure, React Router for page flow, and hand-written CSS for
            layout, motion, dark mode, and responsive behavior. The goal is to keep the build direct,
            inspectable, and close to the browser.
          </p>
          <p>
            The visual system is anchored by Papaya Orange, <mark>#F47600</mark>, paired with large
            expressive headings, quiet body text, and personal photography. It is meant to feel like a
            portfolio with a pulse, not a generic resume page.
          </p>
        </div>
      </section>

      <section className="site-story-section">
        <div className="site-story-heading">
          <p className="portfolio-kicker">The Pages</p>
          <h2>Every route has a job.</h2>
        </div>
        <div className="site-story-page-map">
          {pageMap.map(([name, description]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-story-section site-story-quality">
        <div>
          <p className="portfolio-kicker">Quality Notes</p>
          <h2>Performance, accessibility, and responsive behavior are part of the work.</h2>
        </div>
        <ol>
          {qualityNotes.map((note, index) => (
            <li key={note.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{note.label}</h3>
                <p>{note.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-story-section site-story-closing">
        <blockquote>
          A portfolio should not just show what was built. It should show how the builder thinks.
        </blockquote>
        <p>
          This site will keep evolving with stronger case studies, better image optimization, sharper
          accessibility passes, and more honest notes about the decisions behind each build.
        </p>
        <p className="site-story-signature">Created and maintained by Anudeep Reddy Polepally.</p>
      </section>
    </div>
  );
}

export default Aboutsite;
