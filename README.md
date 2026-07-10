# NeonPump

A free, read-only, synthwave workout plan for people who consider leg day an optional dependency.

NeonPump is built with Astro and TypeScript, managed with Bun, and deployed as static assets to Cloudflare Workers.

## Local development

```bash
bun install
bun run dev
```

Run `bun run check` for Astro and TypeScript diagnostics, `bun run build` to generate `dist/`, and `bun run preview` to inspect the production build locally.

## Deployment

```bash
bun run release
```

This validates the project, builds the static site, and deploys `dist/` through Wrangler. No server-side runtime, database, or environment variables are required.
