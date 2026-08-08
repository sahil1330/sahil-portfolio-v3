# Sahil Mane — Portfolio V3

A dark, editorial developer portfolio built around professional engineering work, product ownership, and scalable systems. The opening combines GSAP-driven scroll storytelling with a progressively enhanced 3D scene, then transitions into accessible, content-first project and experience sections.

**Live site:** [sahil-portfolio-v3.sahilmane025.chatgpt.site](https://sahil-portfolio-v3.sahilmane025.chatgpt.site)

**Author:** [LinkedIn](https://www.linkedin.com/in/sahil-mane-003a0924b/) · [GitHub](https://github.com/sahil1330)

## Project status

The main experience, responsive layout, motion system, and 3D fallback architecture are implemented. Final photography, project covers, résumé, and Sahil's custom GLB avatar still need to replace the supplied placeholders before the public-domain launch.

## Highlights

- Dark editorial interface with a consistent signal-orange accent
- Three-stage scroll narrative: product engineering, intelligent systems, and cloud infrastructure
- GSAP and ScrollTrigger motion with restrained, reusable animation rules
- Lazy-loaded React Three Fiber scene that cannot block the HTML portfolio
- Outcome-led project and professional-experience presentation
- Responsive layouts for desktop, tablet, and mobile
- Reduced-motion, WebGL-failure, and lost-context fallbacks
- Semantic HTML content available before the 3D experience loads
- Cloudflare-compatible production output

## Technology

| Area | Implementation |
|---|---|
| Application | React 19, TypeScript, Next.js-compatible routing with Vinext and Vite 8 |
| Styling | Tailwind CSS 4, shadcn, custom editorial design tokens |
| Motion | GSAP, ScrollTrigger |
| 3D | Three.js, React Three Fiber, Drei |
| Hosting | Cloudflare-compatible worker output |
| Quality | ESLint, TypeScript checks, production-build and rendered-HTML tests |

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
components/portfolio/  Portfolio sections, motion controller, and 3D scene
components/ui/         Reusable interface components
lib/portfolio-data.ts  Projects, capabilities, and experience content
public/images/          Portrait and project artwork
public/models/          Final 3D avatar
scripts/                Build, installation, and artifact validation
tests/                  Rendered-output tests
```

## Replacing the placeholders

Add the final optimized assets at these paths:

| Asset | Path | Recommended format |
|---|---|---|
| Portrait | `public/images/sahil-portrait.webp` | 4:5 vertical, at least 1600 × 2000 px |
| Zaprill cover | `public/images/projects/zaprill-cover.webp` | 16:10 or 3:2 product visual |
| e-Sight cover | `public/images/projects/esight-cover.webp` | Device photo or polished product render |
| Vishnushakti cover | `public/images/projects/vishnushakti-cover.webp` | Interface montage or project photography |
| Enterprise work cover | `public/images/projects/platform-cover.webp` | Anonymized architecture or system visual |
| 3D avatar | `public/models/sahil-avatar.glb` | Compressed rigged GLB, ideally under 5 MB |
| Résumé | `public/sahil-mane-resume.pdf` | Current PDF résumé |

The procedural mannequin in `components/portfolio/hero-scene.tsx` is the development stand-in. Replace it with a `useGLTF` model component and connect the model's animation clips to the existing scroll progress. The scene choreography, WebGL checks, and fallback behavior are already separated from the character implementation.

Portfolio copy is maintained in `lib/portfolio-data.ts`. Contact and social links are rendered from `components/portfolio/portfolio-page.tsx`.

## Design principles

- Present engineering decisions, ownership, and outcomes instead of skill scores or logo grids.
- Keep motion structural: it should clarify hierarchy, continuity, or interaction.
- Treat 3D as progressive enhancement; essential content always remains in the document.
- Use one interface accent and let project imagery provide secondary colour.
- Respect reduced-motion preferences and provide a complete non-WebGL experience.

## Performance approach

The HTML portfolio renders immediately while the 3D runtime loads in a separate bundle. The scene is isolated behind an error boundary, falls back to a CSS portrait when WebGL is unavailable, and protects the page from context loss. Production assets should use compressed geometry and textures, conservative device pixel ratios, and optimized WebP or AVIF project imagery.
