# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run build:dev  # Dev-mode build
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run format     # Prettier auto-format
```

Prefer `bun` over `npm` — both `package-lock.json` and `bun.lockb` are present, but `bunfig.toml` indicates bun is the primary package manager.

## Architecture

**TanStack Start** (full-stack React + Vite) deployed to **Cloudflare Workers** via `wrangler.jsonc`. The entry point for Cloudflare is configured in `wrangler.jsonc` → `@tanstack/start/cloudflare-workers`.

### Routing

File-based routing via TanStack Router. `src/routeTree.gen.ts` is **auto-generated** — never edit it manually. Add routes by creating files under `src/routes/`. Currently a single-route SPA:

- `src/routes/__root.tsx` — Root layout (head/meta tags, 404 handler)
- `src/routes/index.tsx` — Homepage route with SEO metadata

### Component layers

- `src/components/site/` — Page sections (Navbar, Hero, Services, Products, Contact, etc.). All content is static and hardcoded here.
- `src/components/ui/` — shadcn/ui primitives (Radix UI + Tailwind). Treat these as library code — prefer extending over editing.

### Styling

Tailwind CSS v4 configured through `@lovable.dev/vite-tanstack-config`. No `tailwind.config.js` at the project root — Tailwind is set up via the Vite plugin. Custom animations and keyframes are defined in `src/styles.css`. Variants use **Class Variance Authority** (`cva`). Use `cn()` from `src/lib/utils.ts` for conditional classNames.

shadcn/ui config (`components.json`): New York style, Slate base color, CSS variables, Lucide icons.

### Path alias

`@/*` maps to `./src/*` (defined in `tsconfig.json`). Always use this alias for imports within `src/`.

### TypeScript

Strict mode enabled. Target ES2022. All new code must be fully typed — no `any`.

### Prettier config (`.prettierrc`)

100-char line width, semicolons on, double quotes, trailing commas (`all`). Run `npm run format` before committing.
