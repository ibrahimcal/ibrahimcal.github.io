# Personal site — Ibrahim Abdul Majeed, PhD

**Live page → <https://ibrahimcal.github.io/>**
Repo → <https://github.com/ibrahimcal/ibrahimcal.github.io>

Single-page portfolio hosted on GitHub Pages. Built with **Next.js 16 (static export) + React 19 + Tailwind CSS 4**, motion by [`motion`](https://motion.dev), dark/light themes via `next-themes`. The original hand-written `index.html` is kept at the repo root for reference — the app now lives in `app/`, `components/` and `data/`.

## Stack

| Piece | Choice |
|---|---|
| Framework | Next.js 16, App Router, `output: 'export'` → `out/` |
| UI | React 19, Tailwind CSS 4 (`@theme inline` in `app/globals.css`, no config file) |
| Motion | `motion/react` — `BlurFade` scroll reveals + magnifying `Dock` (Magic UI pattern) |
| Theme | `next-themes`, dark default (void/brass), derived light theme |
| Content | All copy lives in `data/resume.tsx` as a typed `DATA` object |

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export to out/
npm run lint
```

Use `npm run dev` while editing—the browser updates as you save. To preview the
production export locally after `npm run build`, serve the `out/` folder with
any static server, for example `python3 -m http.server 3000 --directory out`.

## Files

| Path | What it is |
|---|---|
| `data/resume.tsx` | **Edit this to change any content** — hero, metrics, work, builds, experience, toolkit, research, contact |
| `app/layout.tsx` | Metadata, OG/Twitter, JSON-LD, typography loading (Fraunces + IBM Plex) |
| `app/globals.css` | Design tokens — dark palette in `:root`, light overrides in `.light` |
| `components/sections/` | One file per page section |
| `components/magicui/` | `blur-fade.tsx` (scroll reveals), `dock.tsx` (magnifying dock) |
| `public/` | `profile.webp` / `profile.png`, `og-image.jpg`, `Ibrahim_Abdul_Majeed_CV.pdf`, `robots.txt`, `sitemap.xml`, `.nojekyll` |
| `index.html` | The original single-file site, kept for reference |

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds the static export and publishes `out/` to GitHub Pages. In the repo: **Settings → Pages → Source: GitHub Actions**.

The repository **must** be named `ibrahimcal.github.io` (all lowercase, matching the username) for the site to appear at `https://ibrahimcal.github.io`.

## Notes

- Colour tokens are the CSS variables in `app/globals.css`. Changing `--brass` re-themes the whole page (both themes).
- Respects `prefers-reduced-motion`, keyboard-focusable throughout, and works down to a 320 px viewport.
