import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
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
  imagePath,
  accent,
}: {
  title: string;
  imagePath: string;
  accent: string;
}) {
  return (
    <div
      className="project-placeholder"
      style={{ "--project-accent": accent } as React.CSSProperties}
      role="img"
      aria-label={`${title} project image placeholder`}
    >
      <span className="project-placeholder__index">SM / CASE STUDY</span>
      <span className="project-placeholder__title">{title}</span>
      <span className="project-placeholder__path">ADD {imagePath}</span>
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
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy">
            <div className="eyebrow">
              <span>Product-focused full-stack engineer</span>
              <span className="eyebrow__location">
                <MapPin aria-hidden="true" /> Mumbai, India
              </span>
            </div>
            <h1 id="hero-heading">
              <span>I build digital products</span>
              <span className="hero__headline-secondary">
                from interface <em>to</em> infrastructure.
              </span>
            </h1>
            <div className="hero__footer">
              <p>
                I work across product, frontend, backend and delivery—bringing
                complex ideas into production as clear, dependable systems.
              </p>
              <a className="hero__scroll" href="#work">
                Explore selected work
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-stage" aria-label="3D avatar placeholder">
            <div className="hero-stage__frame">
              <span className="hero-stage__label">3D AVATAR / SCENE 01</span>
              <div className="avatar-placeholder" aria-hidden="true">
                <span className="avatar-placeholder__head" />
                <span className="avatar-placeholder__body" />
                <span className="avatar-placeholder__base" />
              </div>
              <span className="hero-stage__note">
                Temporary model — final GLB will replace this stage
              </span>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionMarker index="01" label="Selected work" />
          <div className="section-intro">
            <h2>Evidence over a list of tools.</h2>
            <p>
              Selected systems where I owned meaningful engineering decisions,
              not just isolated screens.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project__visual">
                  <ProjectPlaceholder
                    title={project.title}
                    imagePath={project.imagePath}
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
          <div className="section-intro section-intro--wide">
            <h2>I connect the layers that make a product work.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
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
            <div className="experience-intro">
              <h2>Built through ownership.</h2>
              <p>
                The thread across my work is simple: understand the actual
                problem, own the interfaces between disciplines and ship.
              </p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.role}-${item.period}`}>
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
            <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Sahil Mane">
              <span>PORTRAIT / 4:5</span>
              <strong>Add your professional portrait</strong>
              <small>/public/images/sahil-portrait.webp</small>
            </div>
            <div className="about-copy">
              <h2>
                An engineer who cares about the product after the code ships.
              </h2>
              <div className="about-copy__body">
                <p>
                  I’m Sahil, a Mumbai-based full-stack engineer. I like work
                  that sits between disciplines: shaping an interface,
                  reasoning through an API, untangling a production issue and
                  helping the team make a better technical decision.
                </p>
                <p>
                  My experience spans SaaS, nonprofit platforms, assistive
                  technology, cloud infrastructure and applied AI. I’m most
                  useful when the problem needs both depth and ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <SectionMarker index="05" label="Contact" />
          <p>Have a product, platform or difficult engineering problem?</p>
          <h2>Let’s build what matters.</h2>
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
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
