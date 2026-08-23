import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { MotionController } from "@/components/portfolio/motion-controller";
import { PhotoNarrative } from "@/components/portfolio/photo-narrative";
import { capabilities, experience, projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}

function ProjectPlaceholder({
  title,
  accent,
}: {
  title: string;
  accent: string;
}) {
  return (
    <div
      className="project-placeholder"
      style={{ "--project-accent": accent } as React.CSSProperties}
      role="img"
      aria-label={`${title} project image placeholder`}
    >
      <span className="project-placeholder__index">SELECTED PROJECT</span>
      <span className="project-placeholder__title">{title}</span>
      <span className="project-placeholder__path">PROJECT PREVIEW COMING SOON</span>
      <span className="project-placeholder__cross project-placeholder__cross--top" />
      <span className="project-placeholder__cross project-placeholder__cross--bottom" />
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sahil Mane, home">
          SM<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="availability__dot" aria-hidden="true" />
          Available for the right work
        </a>
      </header>

      <main id="main-content">
        <section className="hero-chapter" id="top" aria-labelledby="hero-heading">
          <div className="hero">
            <div className="hero__grid" aria-hidden="true" />
            <div className="hero__copy">
            <div className="eyebrow">
              <span>Full-stack engineer · Engineering lead</span>
              <span className="eyebrow__location">
                <MapPin aria-hidden="true" /> Mumbai, India
              </span>
            </div>
            <h1 id="hero-heading">
              <span className="hero__line-mask"><span data-hero-line>I build reliable products</span></span>
              <span className="hero__headline-secondary hero__line-mask">
                <span data-hero-line>across web, cloud <em>&amp;</em> connected devices.</span>
              </span>
            </h1>
            <div className="hero__footer" data-hero-support>
              <p>
                From product interfaces and APIs to infrastructure and
                integrations, I turn complex requirements into software that ships.
              </p>
              <a className="hero__scroll" href="#work">
                Explore selected work
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
            </div>

            <div className="hero-stage" aria-label="Scroll-controlled portrait narrative">
              <div className="hero-stage__frame">
              <span className="hero-stage__label">SAHIL / SYSTEMS IN MOTION</span>
              <PhotoNarrative />
              <span className="hero-stage__note">
                Scroll / 01—03
              </span>
              </div>
            </div>

            <div className="hero-phase" data-hero-phase>
              <span>02 / Product systems</span>
              <h2>Frontend, backend and data—working as one.</h2>
              <p>A clear interface backed by reliable APIs and deliberate data.</p>
            </div>
            <div className="hero-phase" data-hero-phase>
              <span>03 / Production delivery</span>
              <h2>Designed to ship. Built to scale.</h2>
              <p>Cloud delivery, queues, observability and performance planned from the start.</p>
            </div>
          </div>
          <div className="hero-chapter__scroll-space" aria-hidden="true" />
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionMarker index="01" label="Selected work" />
          <div className="section-intro" data-reveal>
            <h2>Selected work.</h2>
            <p>
              Products and platforms I have helped take from requirements to
              working, production-ready systems.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title} data-reveal>
                <div className="project__visual">
                  <ProjectPlaceholder
                    title={project.title}
                    accent={project.accent}
                  />
                </div>
                <div className="project__content">
                  <div className="project__meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project__summary">{project.summary}</p>
                  <p className="project__contribution">
                    <span>My contribution</span>
                    {project.contribution}
                  </p>
                  <span className="project__link" aria-label={`${project.title} case study coming soon`}>
                    Case study in progress
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities-section section-wrap" id="profile">
          <SectionMarker index="02" label="Engineering profile" />
          <div className="section-intro section-intro--wide" data-reveal>
            <h2>What I work on.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title} data-reveal>
                <span className="capability__number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.statement}</p>
                <span>{capability.proof}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap">
          <SectionMarker index="03" label="Experience" />
          <div className="experience-grid">
            <div className="experience-intro" data-reveal>
              <h2>Professional experience.</h2>
              <p>
                Building and modernizing web products across SaaS, nonprofit
                platforms, enterprise systems and assistive technology.
              </p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.role}-${item.period}`} data-reveal>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-item__context">{item.context}</p>
                    <p>{item.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap">
          <SectionMarker index="04" label="About" />
          <div className="about-grid">
            <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Sahil Mane" data-reveal>
              <span>SAHIL MANE / MUMBAI</span>
              <strong>Portrait coming soon</strong>
              <small>FULL-STACK ENGINEER</small>
            </div>
            <div className="about-copy" data-reveal>
              <h2>
                I build across the full product lifecycle.
              </h2>
              <div className="about-copy__body">
                <p>
                  I’m Sahil, a Mumbai-based full-stack engineer working across
                  frontend, backend and cloud infrastructure. At Eshkon, I lead
                  a team of engineers delivering scalable applications and
                  personalized agentic workflows for an enterprise client.
                </p>
                <p>
                  My work spans enterprise platforms, SaaS, assistive technology
                  and applied AI. I enjoy turning complex requirements into
                  maintainable systems, improving how teams deliver, and solving
                  the production details required to operate at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <SectionMarker index="05" label="Contact" />
          <p>Have a product to build or a platform to improve?</p>
          <h2>Let’s work together.</h2>
          <div className="contact-actions">
            <a
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "contact-button")}
              href="mailto:hello@sahilmane.in"
            >
              Start a conversation <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "contact-button")}
              href="/sahil-mane-resume.pdf"
            >
              Download résumé
            </a>
          </div>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Sahil Mane</span>
            <div>
              <a href="https://github.com/sahil1330" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sahil-mane-003a0924b/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
      <MotionController />
    </div>
  );
}
