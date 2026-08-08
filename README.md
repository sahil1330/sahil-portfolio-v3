# Sahil's Portfolio V3

A dark, editorial portfolio for Sahil Mane. The site presents engineering work through outcomes, decisions and ownership rather than skill cards or technology logo walls.

## Current foundation

- React 19 + TypeScript
- Next.js-compatible app routing built with Vite/Vinext
- Tailwind CSS 4 + shadcn
- GSAP + ScrollTrigger
- React Three Fiber + Drei + Three.js
- Accessible reduced-motion and WebGL fallbacks
- Cloudflare-compatible production output

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## Content to replace

The first implementation deliberately uses structured placeholders. Add the final assets at these exact paths:

| Content | Required path | Recommendation |
|---|---|---|
| 3D avatar | `public/models/sahil-avatar.glb` | Compressed GLB, ideally 3–5 MB or smaller |
| Portrait | `public/images/sahil-portrait.webp` | 4:5 vertical, at least 1600 × 2000 px |
| Zaprill cover | `public/images/projects/zaprill-cover.webp` | 16:10 or 3:2 product visual |
| e-Sight cover | `public/images/projects/esight-cover.webp` | Product/device photo or polished render |
| Vishnushakti cover | `public/images/projects/vishnushakti-cover.webp` | Interface montage or project photography |
| Platform cover | `public/images/projects/platform-cover.webp` | Anonymized diagram or abstract system visual |
| Résumé | `public/sahil-mane-resume.pdf` | Current PDF résumé |

The procedural 3D mannequin in `components/portfolio/hero-scene.tsx` is a temporary stand-in. Once the rigged GLB is ready, replace `Mannequin` with a `useGLTF` model component and map its animation clips to the existing GSAP scroll timeline.

Before launch, replace the placeholder email and social URLs near the bottom of `components/portfolio/portfolio-page.tsx`, then review the project/experience copy in `lib/portfolio-data.ts`.

## Design rules

- One signal-orange accent; project visuals may introduce secondary color.
- Structural, precise motion rather than decorative effects.
- Square/low-radius editorial surfaces instead of generic bento cards.
- Technologies appear as evidence inside case studies, never as a skills grid.
- Important content remains semantic HTML; 3D is progressive enhancement.
