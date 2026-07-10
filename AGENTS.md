# Repository Guidelines

## Project Structure & Module Organization

NeonPump is a statically generated Astro site. Routes live in `src/pages/`, shared layouts and UI in `src/layouts/` and `src/components/`, and global styling in `src/styles/`. Typed workout and supplement content belongs in `src/data/`; shared interfaces belong in `src/types/`. Keep browser-only progressive enhancement in `src/scripts/`. Astro writes deployable assets to ignored `dist/`, which `wrangler.jsonc` publishes to Cloudflare Workers Static Assets.

## Build, Test, and Development Commands

- `bun install` installs the pinned dependencies from `bun.lock`.
- `bun run dev` starts Astro's local development server.
- `bun run check` runs Astro and TypeScript diagnostics.
- `bun run build` validates the project and generates `dist/`.
- `bun run preview` serves the production build locally.
- `bun run release` builds and deploys `dist/` with Wrangler; confirm the target Cloudflare account first.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use four-space indentation in Astro, CSS, and TypeScript; JSON files use two spaces. Prefer semantic HTML and render meaningful content at build time. Use kebab-case for CSS selectors, PascalCase for Astro components and interfaces, and camelCase for functions and variables. Keep TypeScript strict, prefer `const`, and avoid `any`. New workout records must satisfy the interfaces in `src/types/workout.ts`.

## Testing Guidelines

Run `bun run check` and `bun run build` before every pull request. Manually verify mobile and desktop layouts, keyboard operation of exercise disclosures, weekday auto-scroll, reduced-motion behavior, and the no-JavaScript reading experience. Test around the `35rem` and `40rem` breakpoints and check the browser console. There is no coverage threshold yet; add focused tests when behavior becomes complex enough to regress silently.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, sentence-case subjects such as `Add touchable tooltips`. Keep each commit focused on one user-visible or configuration change. Pull requests should summarize the change, explain how it was tested, and link any relevant issue. Include before/after screenshots for visual changes and call out changes to Cloudflare configuration or deployment behavior.

## Security & Configuration

Do not commit Cloudflare credentials, affiliate secrets, or environment files. Only `dist/` is public; keep source and configuration outside the configured asset directory. External affiliate links must use `rel="sponsored"`, and new interactions must remain usable by touch, keyboard, and screen readers.
