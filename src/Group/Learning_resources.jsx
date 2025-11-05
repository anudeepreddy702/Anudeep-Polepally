import React from "react";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";

const resources = [
    {
        name: "Frontend Developer Roadmap – roadmap.sh",
        url: "https://roadmap.sh/frontend?r=frontend",
        description:
        "A comprehensive roadmap covering the skills, tools, and concepts every modern frontend developer should know.",
    },
    {
        name: "Modern JavaScript Tutorial – javascript.info",
        url: "https://javascript.info/",
        description:
        "In-depth, beginner-to-advanced JavaScript concepts explained clearly with practical examples.",
    },
    {
      name: "Eloquent JavaScript",
      url: "https://eloquentjavascript.net/",
      description:
        "A deep, hands-on book that teaches JavaScript through clear explanations and interactive coding exercises — perfect for mastering the language fundamentals.",
    },
    {
      name: "The Odin Project – Foundations Course",
      url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
      description:
        "A free, structured curriculum that covers HTML, CSS, Git, and JavaScript — ideal for building a strong foundation in full-stack web development.",
    },
    {
      name: "The Internet Explained – Vox",
      url: "https://www.vox.com/2014/6/16/18076282/the-internet",
      description:
        "An insightful breakdown of how the internet works behind the scenes — a great starting point for understanding the web.",
    },
    {
      name: "All About Floats – CSS-Tricks",
      url: "https://css-tricks.com/all-about-floats/",
      description:
        "A classic guide from CSS-Tricks explaining how CSS floats really work — foundational for layout understanding.",
    },
  {
    name: "React Official Documentation",
    url: "https://react.dev/",
    description:
      "The official React docs with interactive tutorials and comprehensive guides for building modern web applications.",
  },
  {
  name: "How DNS Works – Illustrated Guide",
  url: "https://howdns.works/",
  description:
    "A beautifully illustrated comic explaining how DNS works — from domain names to IP addresses — making a complex topic easy to visualize and understand.",
},
{
  name: "How to Write Semantic HTML – HackerNoon",
  url: "https://hackernoon.com/how-to-write-semantic-html-dkq3ulo",
  description:
    "A practical guide to writing semantic HTML that improves accessibility, SEO, and overall web structure for modern applications.",
},
{
  name: "What Is Web Hosting – Hostinger",
  url: "https://www.hostinger.com/tutorials/what-is-web-hosting",
  description:
    "An easy-to-understand introduction to web hosting — explaining servers, domains, and deployment basics for developers new to web infrastructure.",
},
];

function LearningResources({ darkMode, toggleMode }) {
  return (
    <>
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />

      <div className="page-container">
        <section className="resources-section">
          <h1 className="resources-title">
            Resources That Shaped My Frontend Journey
          </h1>

          <p className="resources-intro">
            Throughout my career as a Frontend Engineer, these resources have
            been instrumental in building my skills and keeping me updated with
            modern web development practices. I'm sharing them here hoping
            they'll help you on your own journey.
          </p>

          <div className="resources-grid">
            {resources.map((res, index) => (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <div className="resource-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="resource-name">{res.name}</h3>
                <p className="resource-description">{res.description}</p>
                <span className="resource-link-text">Explore Resource →</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer darkMode={darkMode} toggleMode={toggleMode} />
    </>
  );
}

export default LearningResources;
