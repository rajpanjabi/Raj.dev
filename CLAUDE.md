# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint
npm start        # Production server
```

## Architecture

Personal portfolio site built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

### Structure

- `src/app/` — Pages: home (`page.tsx`), `/projects`, `/work`, `/travel`, `/contact`
- `src/app/layout.tsx` — Root layout wrapping all pages with `<Navbar>` and `<Footer>`
- `src/components/` — Shared components: `Navbar`, `Footer`, `ProjectCard`, `ExperienceTimeline`, `Themetoggle`
- `public/projects/` — Project screenshot images
- `public/travel/` — Travel photo gallery images

### Key Patterns

- All interactive components are client components (`'use client'`)
- Theme (dark/light) is persisted via `localStorage`, detected via `prefers-color-scheme`
- Animations use Framer Motion with scroll-triggered variants
- Project and experience data is co-located inline within each page component (no separate data files)
- Contact form submits to Formspree (`https://formspree.io/f/xkgrgyld`)
- Path alias: `@/*` resolves to `./src/*`
