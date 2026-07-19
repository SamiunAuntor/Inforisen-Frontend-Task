# Inforisen Frontend Task

A responsive SMM Panel landing page recreated from the supplied desktop Figma design for the Inforisen Frontend Intern assessment.

**Live site:** [inforisen-frontend-task.vercel.app](https://inforisen-frontend-task.vercel.app/)

The page includes a responsive navigation menu, authentication form UI, reusable promotional-service carousel, about section, interactive platform tabs, working-process cards, and footer. Mobile and tablet layouts were inferred from the desktop design while preserving its visual language.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/font` with Inter, Outfit, Geist, and Manrope
- Lucide React icons

## Highlights

- Responsive from 320px mobile screens through wide desktop displays
- Reusable, typed components and content data
- Native horizontal carousel without an external slider library
- Optimized raster images through `next/image`
- Accessible navigation, controls, links, and form fields

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation

```bash
npm run lint
npm run build
```

## Structure

- `src/app` — application shell, page composition, and global styles
- `src/components` — section, layout, feature, and shared UI components
- `src/data` — typed navigation and landing-page content
- `src/types` — shared content types
- `public/assets` — section-specific and shared design assets
