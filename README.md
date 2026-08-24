# Sahil Mane — Portfolio V3

A dark, editorial developer portfolio built around professional engineering
work, product ownership, and scalable systems. The opening combines
GSAP-controlled photographic storytelling with accessible, content-first
project and experience sections.

**Live site:** [sahil-portfolio-v3.sahilmane025.chatgpt.site](https://sahil-portfolio-v3.sahilmane025.chatgpt.site)

**Author:** [LinkedIn](https://www.linkedin.com/in/sahil-mane-003a0924b/) · [GitHub](https://github.com/sahil1330)

## Project status

The main experience, responsive layout, three-pose avatar narrative, motion
system, and fallbacks are implemented. Final project covers, a real About
portrait, the current résumé, and complete case-study pages still need to
replace the remaining placeholders before the public-domain launch.

## Highlights

- Dark editorial interface with a consistent signal-orange accent
- Three-stage scroll narrative: introduction, product systems, and infrastructure
- Dimension-matched transparent avatar poses controlled by GSAP and ScrollTrigger
- Abstract product and architecture diagrams that assemble around the character
- Outcome-led project and professional-experience presentation
- Responsive layouts for desktop, tablet, and mobile
- Static mobile and reduced-motion fallbacks
- Semantic HTML content available independently of the animated layer
- Cloudflare-compatible production output

## Technology

| Area | Implementation |
|---|---|
| Application | React 19, TypeScript, Next.js-compatible routing with Vinext and Vite 8 |
| Styling | Tailwind CSS 4, shadcn, custom editorial design tokens |
| Motion | GSAP and ScrollTrigger |
| Imagery | Optimized transparent WebP pose assets |
| Hosting | Cloudflare-compatible worker output |
| Quality | ESLint, production build, artifact validation, and rendered-HTML tests |

Node.js `22.13.0` or newer is required.

## Getting started

```bash
git clone https://github.com/sahil1330/sahil-portfolio-v3.git
cd sahil-portfolio-v3
npm ci
npm run dev
```

Useful commands:

```bash
npm run lint             # Run lint checks
npm run build            # Create and validate the production build
npm test                 # Build and test rendered HTML
npm run validate:artifact
```

## Project structure

```text
app/                    Page entry points, metadata, and global styles
components/portfolio/  Portfolio sections, photo narrative, and motion controller
components/ui/         Reusable interface components
lib/portfolio-data.ts  Projects, capabilities, and experience content
public/images/avatar/   Production avatar pose assets
public/images/          Portrait, project artwork, and social preview
scripts/                Build, installation, and artifact validation
tests/                  Rendered-output tests
```

## Avatar narrative

The hero uses three transparent, dimension-matched assets:

| Stage | Asset |
|---|---|
| Introduction | `public/images/avatar/sahil-neutral.webp` |
| Product engineering | `public/images/avatar/sahil-product.webp` |
| Infrastructure | `public/images/avatar/sahil-infrastructure.webp` |

The sequence is rendered by
`components/portfolio/photo-narrative.tsx`. GSAP crossfades and repositions the
poses while product and architecture diagrams assemble around them. Preserve
the canvas dimensions and character scale when updating these assets so the
transitions remain aligned.

## Remaining content

| Asset | Path | Recommended format |
|---|---|---|
| About portrait | `public/images/sahil-portrait.webp` | 4:5 vertical, at least 1600 × 2000 px |
| Zaprill preview | `public/images/projects/zaprill-preview.webp` | Current dashboard interface |
| Maceazy preview | `public/images/projects/maceazy-preview.webp` | Temporary website capture; replace with app imagery |
| Enterprise work cover | `public/images/projects/platform-cover.webp` | Anonymized architecture or system visual |
| Résumé | `public/sahil-mane-resume.pdf` | Current PDF résumé |

Portfolio copy is maintained in `lib/portfolio-data.ts`. Contact and social
links are rendered from `components/portfolio/portfolio-page.tsx`.

## Design principles

- Present engineering decisions, ownership, and outcomes instead of skill scores or logo grids.
- Keep motion structural: it should clarify hierarchy, continuity, or interaction.
- Treat the photo narrative as progressive enhancement; essential content remains in the document.
- Use one interface accent and let project imagery provide secondary colour.
- Respect reduced-motion preferences and provide a deliberate mobile composition.

## Performance approach

The HTML portfolio renders immediately. The three hero poses total under 100 KB
and do not require WebGL, a 3D runtime, or an initialization step. Mobile and
reduced-motion users receive the neutral composition without scroll-driven pose
changes.
