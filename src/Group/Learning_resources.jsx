import React, { useState, useEffect, useRef } from "react";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";
import ScrollProgressBar from "./ScrollProgressBar";

const resources = [
  {
    name: "Frontend Developer Roadmap – roadmap.sh",
    url: "https://roadmap.sh/frontend?r=frontend",
    description:
      "A comprehensive roadmap covering the skills, tools, and concepts every modern frontend developer should know.",
  },
  {
    name: "The Internet Explained – Vox",
    url: "https://www.vox.com/2014/6/16/18076282/the-internet",
    description:
      "An insightful breakdown of how the internet works behind the scenes — a great starting point for understanding the web.",
  },
  {
    name: "Fullstack Open – University of Helsinki",
    url: "https://fullstackopen.com/en/",
    description:
      "A comprehensive, university-backed course that dives deep into modern web development using React, Node.js, Express, and MongoDB — ideal for mastering full-stack JavaScript from the ground up.",
  },
  {
    name: "The Odin Project – Foundations Course",
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
    description:
      "A free, structured curriculum that covers HTML, CSS, Git, and JavaScript — ideal for building a strong foundation in full-stack web development.",
  },
  {
    name: "Writing Semantic HTML – cs.fyi",
    url: "https://cs.fyi/guide/writing-semantic-html",
    description:
      "A concise and practical guide explaining the importance of semantic HTML — helping developers write clean, accessible, and SEO-friendly markup that improves both usability and maintainability.",
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com/",
    description:
      "A long-standing front-end blog packed with tutorials, design patterns, and tips for mastering CSS, layouts, and modern frontend workflows — written by developers for developers.",
  },
  {
    name: "All About Floats – CSS-Tricks",
    url: "https://css-tricks.com/all-about-floats/",
    description:
      "A classic guide from CSS-Tricks explaining how CSS floats really work — foundational for layout understanding.",
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
    name: "How DNS Works – Illustrated Guide",
    url: "https://howdns.works/",
    description:
      "A beautifully illustrated comic explaining how DNS works — from domain names to IP addresses — making a complex topic easy to visualize and understand.",
  },
  {
    name: "How HTTPS Works – Animated Guide",
    url: "https://howhttps.works/episodes/",
    description:
      "A fun, visual explanation of HTTPS and web encryption concepts — simplifying how SSL/TLS, certificates, and secure connections protect user data and ensure safe browsing.",
  },
  {
    name: "What Is Web Hosting – Hostinger",
    url: "https://www.hostinger.com/tutorials/what-is-web-hosting",
    description:
      "An easy-to-understand introduction to web hosting — explaining servers, domains, and deployment basics for developers new to web infrastructure.",
  },
  {
    name: "React Official Documentation",
    url: "https://react.dev/",
    description:
      "The official React docs with interactive tutorials and comprehensive guides for building modern web applications.",
  },
  {
    name: "React Developer Roadmap – roadmap.sh",
    url: "https://roadmap.sh/react",
    description:
      "A detailed roadmap outlining the essential knowledge and skills needed to become a proficient React developer.",
  },
  {
    name: "React Lifecycle Methods and Hooks – BairesDev Blog",
    url: "https://www.bairesdev.com/blog/react-lifecycle-methods-hooks/",
    description:
      "An in-depth look at React lifecycle methods and hooks, explaining their usage and best practices in modern React development.",
  },
  {
    name: "Fine-Grained Control with React Memoization",
    url: "https://medium.com/@vasanthancomrads/fine-grained-control-with-react-memoization-usememo-vs-usecallback-vs-react-memo-e0239311d6ee",
    description: "Understanding useMemo vs useCallback vs React.memo",

  },
  {
    name: "Lazy Loading in React",
    url: "https://medium.com/@swatikpl44/lazy-loading-in-react-4095e01a9dbc",
    description: "Implementing lazy loading patterns in React applications",
  },
  {
    name: "Angular Developer Roadmap – roadmap.sh",
    url: "https://roadmap.sh/angular",
    description:
      "A structured guide to mastering Angular, covering core concepts, tools, and best practices for building robust applications.",
  },
];




function LearningResources({ darkMode, toggleMode }) {
  const titleRef = useRef(null);
  const introRef = useRef(null);

  // Scroll fade effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const resourcesTitle = titleRef.current;
      const resourcesIntro = introRef.current;

      if (resourcesTitle && resourcesIntro) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate opacity based on scroll position
        // Fades out completely by the time you scroll 70% of viewport height
        const opacity = Math.max(0, 1 - (scrollPosition / (windowHeight * 0.7)));

        // Add slight upward movement for polish
        const translateY = scrollPosition * 0.5;

        resourcesTitle.style.opacity = opacity;
        resourcesTitle.style.transform = `translateY(-${translateY}px)`;

        resourcesIntro.style.opacity = opacity;
        resourcesIntro.style.transform = `translateY(-${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <ScrollProgressBar darkMode={darkMode} />
      <Navi darkMode={darkMode} toggleMode={toggleMode} />
      <SidebarMenu />
      <div className="page-container">
        <section className="resources-section">
          <h1 ref={titleRef} className="resources-title">
            Resources That Shaped My Frontend Journey
          </h1>

          <p ref={introRef} className="resources-intro">
            Throughout my career as a Frontend Engineer, these resources have
            been instrumental in building my skills and keeping me updated with
            modern web development practices. I'm sharing them here hoping
            they'll help you on your own journey.
          </p>
        </section>

        <section className="resources-content-section">
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
