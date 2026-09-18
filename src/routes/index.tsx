import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Smartphone,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import engineeringWorkspace from "@/assets/engineering-workspace.jpg";
import resumeAsset from "@/assets/moazzam-resume.pdf.asset.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GITHUB_PROFILE_URL = "https://github.com/moazzambukhari";
const GITHUB_REPOS_URL = "https://github.com/moazzambukhari?tab=repositories";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Moazzam Bukhari | Software Engineer & AI Application Engineer" },
      {
        name: "description",
        content:
          "Moazzam Bukhari is a Software Engineer and AI Application Engineer with 5+ years of experience building scalable web, mobile, and LLM-powered applications.",
      },
      {
        property: "og:title",
        content: "Moazzam Bukhari | Software Engineer & AI Application Engineer",
      },
      {
        property: "og:description",
        content:
          "Software Engineer with 5+ years of experience in React Native, React.js, TypeScript, Python, FastAPI, and LLM application development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

type Project = {
  name: string;
  category: "Mobile" | "Web" | "AI";
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
};

const projects: Project[] = [
  {
    name: "Dynamic BMS",
    category: "Mobile",
    description: "A React Native mobile application for dynamic Building Management Systems.",
    technologies: ["React Native", "MQTT", "iOS", "Android"],
    features: [
      "MQTT communication and secure connections",
      "Real-time data synchronization",
      "Dynamic site configuration and labels",
      "Numeric and boolean controls",
      "Android and iOS support",
    ],
  },
  {
    name: "Synko POS & Kiosk",
    category: "Mobile",
    description: "A connected React Native point-of-sale and Android kiosk ecosystem.",
    technologies: ["React Native", "Android", "REST APIs", "Hardware"],
    features: [
      "POS and Android kiosk applications",
      "Real-time synchronization",
      "Cart and checkout flow",
      "Printer and API integration",
      "Kiosk device support",
    ],
  },
  {
    name: "Pak Suzuki Brampton 311",
    category: "Mobile",
    description: "An end-to-end mobile application developed with React Native.",
    technologies: ["React Native", "REST APIs", "iOS", "Android"],
    features: [
      "End-to-end application development",
      "Responsive UI implementation",
      "API integration",
      "Android deployment",
      "iOS deployment",
    ],
  },
  {
    name: "Catholic Charities Dashboard",
    category: "Web",
    description: "A responsive Next.js dashboard focused on timely, actionable information.",
    technologies: ["Next.js", "TypeScript", "REST APIs", "Real-time"],
    features: [
      "Dashboard development",
      "Real-time notifications",
      "Responsive interface",
      "API integration",
    ],
  },
  {
    name: "Marketiq",
    category: "Web",
    description: "A modern e-commerce application with streamlined product workflows.",
    technologies: ["React.js", "E-commerce", "REST APIs", "Responsive UI"],
    features: [
      "Modern frontend architecture",
      "Product and e-commerce workflows",
      "API integration",
      "Responsive interface",
    ],
  },
  {
    name: "Deguello",
    category: "Mobile",
    description: "A multiplayer chess game concept built for cross-platform player interaction.",
    technologies: ["React Native", "Firebase", "Google Sign-In", "Multiplayer"],
    features: [
      "Multiplayer game concept",
      "Firebase authentication",
      "Google Sign-In",
      "Purpose-built game UI",
      "Player interactions",
    ],
    github: "https://github.com/moazzambukhari/Deguello",
  },
  {
    name: "NeuraChat",
    category: "AI",
    description: "A full-stack AI chat application with a React Native client and secure Python backend.",
    technologies: ["React Native", "TypeScript", "Python", "FastAPI", "Gemini API", "PostgreSQL", "JWT"],
    features: [
      "Google Gemini LLM integration",
      "Secure server-side API key architecture",
      "System prompts and prompt engineering",
      "Conversation context and memory design",
      "JWT authentication and persistent chat history in development",
      "Streaming response architecture in development",
    ],
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & Data",
    icon: Layers3,
    items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "RBAC", "PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: [
      "React Native",
      "Expo",
      "React Native CLI",
      "Android",
      "iOS",
      "Firebase",
      "App Store deployment",
      "Google Play deployment",
    ],
  },
  {
    title: "Tools",
    icon: Zap,
    items: ["Git", "GitHub", "Azure DevOps", "Jira", "Postman", "Firebase", "CI/CD", "Agile/Scrum", "Unit Testing", "Reactotron", "Flipper"],
  },
  {
    title: "AI Engineering",
    icon: Sparkles,
    items: [
      "LLM API Integration",
      "Google Gemini API",
      "Prompt Engineering",
      "System Prompts",
      "Conversation Memory",
      "Tokenization & Context Windows",
      "AI Chatbot Development",
      "AI Application Architecture",
      "Machine Learning Fundamentals",
      "Deep Learning Fundamentals",
      "Learning RAG, LangChain & AI Agents",
    ],
  },
];

const services = [
  ["Web Application Development", "Scalable, responsive React and Next.js products."],
  ["React Native Mobile Development", "Cross-platform iOS and Android applications."],
  ["Full-Stack Development", "Cohesive frontend, API, and data workflows."],
  ["SaaS Development", "Production-ready products and subscription platforms."],
  ["API Integration", "Reliable REST, GraphQL, and third-party connections."],
  ["AI & LLM Integration", "Secure conversational AI products with Python, FastAPI, and Gemini."],
  ["Dashboard Development", "Clear, responsive operational interfaces."],
  ["Performance Optimization", "Faster applications and smoother interactions."],
];

const reasons = [
  "5+ years of professional experience",
  "20+ completed projects",
  "Production-focused development",
  "Web + mobile expertise",
  "Strong React ecosystem knowledge",
  "AI application engineering",
  "Scalable architecture",
  "Clean and maintainable code",
  "API and backend integration",
  "Cross-platform development",
];

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Work"],
  ["contact", "Contact"],
];

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = [
    { label: "GitHub", icon: Github, href: GITHUB_PROFILE_URL },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/moazzambukhari" },
    { label: "Email", icon: Mail, href: "mailto:moazzambukhari52@gmail.com" },
  ];
  return (
    <div className="social-links" aria-label="Professional links">
      {links.map(({ label, icon: Icon, href }) =>
        href ? (
          <Button key={label} variant="glass" size={compact ? "icon" : "default"} asChild>
            <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} profile`} title="Opens GitHub in a new tab">
              <Icon />
              {compact ? null : label}
            </a>
          </Button>
        ) : (
          <Button
            key={label}
            type="button"
            variant="glass"
            size={compact ? "icon" : "default"}
            aria-label={`${label} link unavailable`}
            title={`${label} URL not provided`}
            disabled
          >
            <Icon />
            {compact ? null : label}
          </Button>
        ),
      )}
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
  }, [lightMode]);

  useEffect(() => {
    const phrase = "React.js · React Native · Full-Stack · AI";
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(phrase.slice(0, index));
      if (index >= phrase.length) window.clearInterval(timer);
    }, 55);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60%" },
    );
    sections.forEach((section) => observer.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;
    const counters = Array.from(container.querySelectorAll<HTMLElement>("[data-count]"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        counters.forEach((counter) => {
          const target = Number(counter.dataset["count"] ?? "0");
          let value = 0;
          const tick = () => {
            value = Math.min(target, value + 1);
            counter.textContent = `${value}+`;
            if (value < target) window.requestAnimationFrame(tick);
          };
          tick();
        });
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);


  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell glass" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Moazzam Bukhari home">
            Moazzam<span>.</span>
          </a>
          <div className="desktop-nav">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <Button
              variant="glass"
              size="icon"
              aria-label={lightMode ? "Use dark theme" : "Use light theme"}
              onClick={() => setLightMode((current) => !current)}
            >
              {lightMode ? <Moon /> : <Sun />}
            </Button>
            <Button variant="premium" asChild className="contact-shortcut">
              <a href="#contact">Contact</a>
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          {menuOpen ? (
            <div className="mobile-nav">
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {label}<ChevronRight />
                </a>
              ))}
            </div>
          ) : null}
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy reveal is-visible">
            <div className="availability"><span /> Software Engineer · AI Application Engineer</div>
            <p className="hero-kicker">MOAZZAM BUKHARI</p>
            <h1>Building intelligent products for the real world.</h1>
            <p className="typing-line" aria-label="Software Engineer, React Native and AI Application Engineer">
              <span>Software Engineer · AI Application Engineer</span> · {typedText}<i aria-hidden="true" />
            </p>
            <p className="hero-description">
              I’m a Software Engineer with 5+ years of experience building web and mobile products with React,
              React Native, and TypeScript. I now apply that production foundation to AI applications using
              Python, FastAPI, LLM APIs, prompt engineering, and secure backend architecture.
            </p>
            <div className="hero-actions">
              <Button variant="premium" size="hero" asChild>
                <a href="#projects">View My Work <ArrowRight /></a>
              </Button>
              <Button variant="glass" size="hero" asChild>
                <a href={resumeAsset.url} download="Syed-Moazzam-Ali-Bukhari-AI-Engineer-Resume.pdf">
                  <Download /> Download Resume
                </a>
              </Button>
              <Button variant="quiet" size="hero" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <SocialLinks compact />
          </div>

          <div className="hero-visual reveal is-visible">
            <div className="profile-frame glass-strong">
              <div className="image-wrap">
                <img
                  src={engineeringWorkspace}
                  alt="Dark software engineering workspace with a laptop and mobile device"
                  width={912}
                  height={1136}
                />
                <div className="image-label"><Code2 /> Production systems · Web + Mobile + AI</div>
              </div>
              <div className="profile-metrics">
                <div><strong>5+</strong><span>Years Experience</span></div>
                <div><strong>20+</strong><span>Projects Completed</span></div>
              </div>
            </div>
          </div>

          <div className="stats-bar glass reveal" ref={statsRef}>
            <div><strong data-count="5">0+</strong><span>Years Experience</span></div>
            <div><strong data-count="20">0+</strong><span>Projects Completed</span></div>
            <div><strong>Web & Mobile</strong><span>Cross-platform applications</span></div>
            <div><strong>AI Engineer</strong><span>LLM application development</span></div>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionIntro eyebrow="01 / About" title="Built with intent. Shipped with care." />
          <div className="about-grid">
            <div className="about-lead reveal">
              <p>
                Moazzam is a Software Engineer and AI Application Engineer with 5+ years of experience across
                production web, mobile, and intelligent software products.
              </p>
            </div>
            <div className="about-detail reveal">
              <p>
                His work combines React and React Native delivery with Python and FastAPI backends, secure LLM
                integration, prompt engineering, conversation memory, REST APIs, authentication, and scalable
                architecture for international clients.
              </p>
              <div className="tag-cloud">
                {["React.js", "React Native", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Node.js", "REST APIs", "Gemini API", "Prompt Engineering", "LLM Integration", "Git/GitHub", "CI/CD"].map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-band">
          <div className="container">
            <SectionIntro
              eyebrow="02 / Technical toolkit"
              title="A stack shaped by production work."
              copy="Production web and mobile engineering, now extended into secure AI and LLM applications."
            />
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <article className="skill-card glass reveal" key={title}>
                  <div className="skill-heading"><Icon /><h3>{title}</h3></div>
                  <div className="skill-list">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionIntro eyebrow="03 / Experience" title="Production-minded engineering." />
          <div className="experience-layout">
            <div className="experience-marker reveal">
              <span>5+</span>
              <p>Years of professional experience</p>
            </div>
            <article className="timeline-card glass reveal">
              <div className="timeline-dot" aria-hidden="true" />
              <p className="eyebrow">SOFTWARE ENGINEER</p>
              <h3>Web, mobile, SaaS, and AI applications</h3>
              <p>
                Building production-ready experiences while collaborating across product, design, and engineering.
              </p>
              <ul>
                {[
                  "Developing production-ready React and React Native applications",
                  "Designing reusable and scalable frontend architecture",
                  "Integrating REST and GraphQL APIs",
                  "Building responsive dashboards and SaaS applications",
                  "Implementing authentication and role-based access",
                  "Working with real-time data and notifications",
                  "Debugging complex production issues and optimizing performance",
                  "Supporting CI/CD, deployment, and cross-functional delivery",
                  "Using AI tools to improve development productivity",
                ].map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section section-band">
          <div className="container">
            <SectionIntro
              eyebrow="04 / Featured projects"
              title="Selected work across screens and systems."
              copy="Production products built around real workflows, reliable integrations, and responsive experiences."
            />
            <div className="filter-row" aria-label="Filter projects">
              {["All", "Web", "Mobile", "AI"].map((item) => (
                <Button
                  key={item}
                  variant={filter === item ? "premium" : "glass"}
                  size="sm"
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project, index) => (
                <article className="project-card glass reveal is-visible" key={project.name}>
                  <div className="project-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <div className="project-icon" aria-hidden="true">
                    {project.category === "Mobile" ? <Smartphone /> : project.category === "AI" ? <Sparkles /> : <Code2 />}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-actions">
                    <Button variant="premium" size="sm" onClick={() => setSelectedProject(project)}>
                      View details <ArrowRight />
                    </Button>
                    <Button variant="glass" size="icon" asChild>
                      <a
                        href={project.github ?? GITHUB_REPOS_URL}
                        target="_blank"
                        rel="noreferrer"
                        title={project.github ? "View on GitHub" : "Browse all repositories on GitHub"}
                        aria-label={`${project.name} on GitHub`}
                      >
                        <Github />
                      </a>
                    </Button>
                    <Button variant="glass" size="icon" disabled title="Live demo URL not provided" aria-label="Live demo URL not provided"><ExternalLink /></Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <SectionIntro eyebrow="05 / What I do" title="From product idea to production." />
          <div className="services-grid">
            {services.map(([title, copy], index) => (
              <article className="service-item reveal" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <ArrowRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="section section-band">
          <div className="container why-layout">
            <SectionIntro
              eyebrow="06 / Why work with me"
              title="Experience that translates into dependable delivery."
            />
            <div className="reason-grid reveal">
              {reasons.map((reason) => <div key={reason}><Check />{reason}</div>)}
            </div>
          </div>
        </section>

        <section id="resume" className="section container">
          <div className="resume-panel glass-strong reveal">
            <div>
              <p className="eyebrow">07 / Resume</p>
              <h2>Want to know more about my experience?</h2>
              <p>A concise overview of technical skills, experience, and project work.</p>
            </div>
            <Button variant="premium" size="hero" asChild>
              <a href="/assets/Moazzam-Bukhari-Resume.pdf" download><Download /> Download Resume</a>
            </Button>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="contact-copy reveal">
            <p className="eyebrow">08 / Contact</p>
            <h2>Let’s Build Something Great</h2>
            <p>
              Have a project, opportunity, or idea? Reach out directly — I reply quickly.
            </p>
            <SocialLinks />
          </div>
          <div className="contact-cards reveal">
            <div className="contact-card glass">
              <div className="contact-card-icon"><Mail /></div>
              <div className="contact-card-body">
                <h3>Email</h3>
                <p className="contact-value is-pending" title="Email address not provided yet">
                  Available on request
                </p>
              </div>
            </div>
            <div className="contact-card glass">
              <div className="contact-card-icon"><Phone /></div>
              <div className="contact-card-body">
                <h3>Phone</h3>
                <p className="contact-value is-pending" title="Phone number not provided yet">
                  Available on request
                </p>
              </div>
            </div>
            <a className="contact-card glass" href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
              <div className="contact-card-icon"><Github /></div>
              <div className="contact-card-body">
                <h3>GitHub</h3>
                <p className="contact-value">github.com/moazzambukhari</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#home">Moazzam<span>.</span></a>
          <p>© 2026 Moazzam Bukhari · Software Engineer</p>
          <p>React · React Native · Full-Stack · AI</p>
        </div>
      </footer>

      <Button
        variant="premium"
        size="icon"
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </Button>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="project-dialog glass-strong">
          {selectedProject ? (
            <>
              <DialogHeader>
                <p className="eyebrow">{selectedProject.category} PROJECT</p>
                <DialogTitle>{selectedProject.name}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="dialog-tech">
                {selectedProject.technologies.map((tech) => <Badge key={tech} variant="outline">{tech}</Badge>)}
              </div>
              <div className="dialog-features">
                <h4>Key features</h4>
                <ul>{selectedProject.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul>
              </div>
              <div className="dialog-actions">
                <Button variant="glass" asChild>
                  <a
                    href={selectedProject.github ?? GITHUB_REPOS_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github /> {selectedProject.github ? "View on GitHub" : "Browse GitHub repositories"}
                  </a>
                </Button>
                <Button variant="glass" disabled><ExternalLink /> Live demo unavailable</Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}