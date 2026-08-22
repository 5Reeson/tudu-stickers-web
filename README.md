# 图渡网站

Responsive Astro website for 图渡, a macOS utility for importing, organizing and exporting Chinese meme stickers.

## Stack

- Astro with strict TypeScript
- Tailwind CSS v4 through the Vite plugin
- Native Astro components and semantic HTML
- Astro Assets for responsive AVIF and WebP output
- Phosphor icons through `astro-icon`
- Cloudflare Workers Static Assets with Wrangler

The homepage intentionally ships without a client framework. The mobile menu and FAQ use native HTML state, so the initial page has no hydration cost.

## Local development

```bash
pnpm install
pnpm dev
```

Astro starts at `http://localhost:4321` by default.

## Checks and build

```bash
pnpm check
pnpm build
pnpm preview
```

## Cloudflare local preview

```bash
pnpm cf:preview
```

This builds `dist/` and serves it through Wrangler's Static Assets runtime. The project is configured as a static Astro build and does not use the Cloudflare adapter.

Validate the Worker bundle without deploying:

```bash
pnpm deploy:dry
```

Do not run `pnpm deploy` until the production Worker name, canonical domain, release download and Cloudflare account are confirmed.

## Assets

See [ASSET_MANIFEST.md](./ASSET_MANIFEST.md) for the development assets, production replacement requirements and image generation record. In particular, the current app screen is a temporary visual placeholder and must be replaced with a real Retina application capture before launch.

## Release configuration checklist

1. Replace `https://memes-abroad.example.com` in `astro.config.mjs` and `public/robots.txt`.
2. Replace the temporary Open Graph image and favicon.
3. Point the download action to a signed and notarized DMG stored outside this Git repository.
4. Confirm final macOS requirements, version number and release date before adding them to the site.
