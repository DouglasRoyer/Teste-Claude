# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server (Turbopack)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- `npx tsc --noEmit` — type-check only

There is no test runner configured yet.

## Architecture

Next.js (App Router) + TypeScript + Tailwind CSS v4, using the shadcn/ui conventions:

- `components.json` defines the shadcn aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`. New shadcn components should be added under `src/components/ui/`; feature/demo compositions live in `src/components/demo/`.
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge), used by every UI primitive for class merging.
- Tailwind v4 is configured entirely in `src/app/globals.css` via `@theme inline` — there is no `tailwind.config.js`. Design tokens (`--background`, `--card`, `--border`, etc.) are defined as CSS variables in `:root`/`.dark` and mapped to Tailwind colors in the `@theme inline` block. Add new design tokens there rather than in a Tailwind config file.
- Path alias `@/*` maps to `src/*` (`tsconfig.json`).
- `src/components/ui/splite.tsx` wraps `@splinetool/react-spline` behind `React.lazy`/`Suspense` for client-side-only 3D scene loading; `src/components/ui/spotlight.tsx` is a framer-motion mouse-tracking spotlight effect that expects its parent element to be `position: relative`.
