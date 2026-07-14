# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

NeonPump is a static, read-only synthwave workout-plan site built with Astro + TypeScript, managed with Bun, and deployed to Cloudflare Workers Static Assets. There is no server runtime, database, or environment variables.

See `AGENTS.md` for coding style, naming conventions, manual QA checklist, and commit/PR guidelines — this file does not repeat them.

## Commands

- `bun install` — install pinned deps from `bun.lock`
- `bun run dev` — Astro dev server
- `bun run check` — Astro + TypeScript diagnostics (run before every PR)
- `bun run build` — runs `astro check` then `astro build`; writes to ignored `dist/`
- `bun run preview` — serve the production build locally
- `bun run release` — build + `wrangler deploy` (confirm the target Cloudflare account first)

There is no test runner or linter beyond `astro check`; verification is `bun run check` + `bun run build` plus manual QA (see `AGENTS.md`).

## Architecture

**Content is data, rendering is a fixed component tree.** All workout content lives in `src/data/workouts.ts` (typed against `src/types/workout.ts`) and supplements in `src/data/supplements.ts`. To change what the site shows, edit the data — do not hand-write markup in components. New workout records must satisfy the `WorkoutWeek`/`WorkoutDay`/`Exercise` interfaces. The Gainz Calculator's dropdown options (activity multipliers, calorie goals) follow the same rule: they live in `src/data/gainz.ts`, typed against `src/types/gainz.ts`.

The single route `src/pages/index.astro` maps over `workoutWeeks` and renders them through a nesting chain:
`WorkoutWeek` → `WorkoutDay` → `RoutineSection` → `ExerciseItem`. Each `Exercise` renders as a native `<details>`/`<summary>` disclosure (the "bro-translation" tooltip) — accessibility comes from using real HTML elements, so preserve semantic markup rather than adding JS-driven widgets.

**Week rotation is progressive enhancement, not build-time selection.** Every week is rendered into the static HTML. `src/scripts/workout.ts` (imported only from `index.astro`'s inline `<script>`) runs client-side to:
1. Compute the ISO-ish week-of-year, take it modulo the number of weeks, and set `hidden` on all `[data-workout-week]` sections except the current one.
2. Auto-scroll to today's `[data-weekday]` (Mon–Fri only), respecting `prefers-reduced-motion` and skipping if a URL hash is present.

Consequence: **with JavaScript disabled, all weeks are visible** — this no-JS reading experience is intentional and must keep working. The `data-workout-week` and `data-weekday` hooks are the contract between the components and this script; don't rename them without updating both sides.

**The Gainz Calculator is JS-only by design — the one deliberate exception to "no-JS still works."** `src/components/GainzCalculator.astro` renders a semantic `<form>` at build time; `src/scripts/gainz.ts` (initialized from `index.astro`'s inline `<script>` alongside `initializeWorkout`) reads the inputs, computes TDEE and the 40/30/30 macro split (Mifflin-St Jeor, hardcoded male constant), and reveals the results/error regions by toggling `hidden`. Because there is no server, the math can only run client-side: with JavaScript disabled the form still renders but shows a `<noscript>` note instead of results — intentional, and distinct from the workout reading experience, which must stay fully usable without JS. The `data-gainz-*` hooks are the contract between the component and the script.

**Layout & styling.** `src/layouts/BaseLayout.astro` is the only layout; it imports the three global stylesheets in order — `tokens.css` (CSS custom properties / design tokens) → `global.css` → `components.css`. Component styles rely on these tokens and on kebab-case class names shared across the CSS files (styles are not scoped per-component). Key responsive breakpoints are around `35rem` and `40rem`.

**Deployment.** `astro.config.ts` uses `output: "static"`. `wrangler.jsonc` serves `./dist` as Cloudflare Workers Static Assets and re-runs `bun run build` as its build command. Only `dist/` is public; keep source and secrets out of the asset directory. External affiliate links must use `rel="sponsored"`.
