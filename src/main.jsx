import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    number: "01",
    title: "Bone Conduction Audio Playback Device",
    type: "Electronics · Prototyping",
    description:
      "A low-cost audio playback prototype that transmits sound through vibration using a Bluetooth receiver, amplifier and bone-conduction exciter.",
    status: "Academic project",
    tags: ["Bluetooth audio", "Amplifier", "Prototyping"]
  },
  {
    number: "02",
    title: "Scam Shield",
    type: "Browser extension · Hackathon",
    description:
      "A browser extension concept that checks websites for possible phishing and security risks using reference data.",
    status: "Hackathon · 3rd place",
    tags: ["JavaScript", "Browser extension", "Web safety"]
  },
  {
    number: "03",
    title: "Fastener Database Application",
    type: "Backend · Database concept",
    description:
      "A planned searchable database for screws, nuts and washers, covering dimensions, grades, materials, strength and alternative parts.",
    status: "Concept",
    tags: ["Python", "SQL", "Database design"]
  }
];

const skillGroups = [
  { heading: "Programming", items: ["Python", "SQL", "Java", "C", "JavaScript"] },
  { heading: "Engineering & CAD", items: ["SolidWorks", "Fusion 360", "Creo", "AutoCAD", "CATIA"] },
  { heading: "Interests", items: ["Backend development", "Database systems", "Electronics prototyping", "Product design"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>PRASANNA</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <p className="eyebrow">MECHANICAL ENGINEERING · DEVELOPMENT</p>
          <h1>PRASANNA <br /></h1>
          <h2>About me.</h2>
          <p className="hero-copy">
                I’m Prasanna, a B.Tech Mechanical Engineering student at
                Sri Manakula Vinayagar Engineering College.
              
                I enjoy exploring new fields, learning how different systems
                work and connecting ideas across engineering and technology.
                My interests include software development, databases,
                electronics and product design.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">View projects</a>
            <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta">
            <span>Based in India</span>
            <span>Open to learning and collaboration</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>A little about me</h2>
          </div>
          <div className="about-copy">
            <p>
              I’m pursuing a degree in Mechanical Engineering. My interests sit
              between engineering and software: I enjoy understanding systems,
              working with data and building things that solve practical problems.
            </p>
            <p>
              I’m particularly interested in backend development and database
              systems, while continuing to explore electronics, CAD and physical
              prototyping.
            </p>
            <div className="education">
              <span className="small-label">EDUCATION</span>
              <div>
                <strong>B.E. Mechanical Engineering</strong>
                <span>Sri Manakula Vinayagar Engineering College</span>
                <span>CGPA: 8.67</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>Tools & interests</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.heading}>
                <h3>{group.heading}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="skill-note">Skill levels vary by tool; this list reflects areas I have studied or used.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>Projects</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="project-status">{project.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">04 / CONTACT</p>
            <h2>Let’s connect.</h2>
          </div>
          <div className="contact-copy">
            <p>For project discussions, collaboration or opportunities, you can reach me here.</p>
            <div className="contact-links">
              <a href="mailto:prasannapikachu@gmail.com">prasannapikachu@gmail.com <span>↗</span></a>
              <a href="https://github.com/PrasannaNagamuthu" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a href="https://www.linkedin.com/in/prasanna-nagamuthu-b96535358?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
            <p className="edit-note">Replace the sample email and profile links with your own details.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} · Portfolio</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
