# Personal site — Ibrahim Abdul Majeed, PhD

Single-page portfolio hosted on GitHub Pages. No build step, no dependencies — plain HTML with inline CSS and about 60 lines of vanilla JS.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site. Edit this to change any content. |
| `profile.webp` | Portrait, served to modern browsers (~140 KB) |
| `profile.png` | Same portrait, fallback for older browsers |
| `og-image.jpg` | Social preview card shown on LinkedIn / WhatsApp / X |
| `Ibrahim_Abdul_Majeed_CV.pdf` | **You need to add this** — the résumé buttons link to it |

## Before you publish — two things

1. **Add `Ibrahim_Abdul_Majeed_CV.pdf`** to the repo root. If you'd rather name it something else, update the four `href="Ibrahim_Abdul_Majeed_CV.pdf"` links.
2. **Check the phone and email** — `ibrahim.am@gmail.com` and `+966538381418` appear in the hero, the contact section, the mobile dock, and the structured-data block at the top.

## Deploying

```bash
# in the folder containing these files
git init
git add .
git commit -m "Personal site"
git branch -M main
git remote add origin https://github.com/ibrahimcal/ibrahimcal.github.io.git
git push -u origin main
```

The repository **must** be named `ibrahimcal.github.io` (all lowercase, matching the username) for the site to appear at `https://ibrahimcal.github.io`. Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

First build takes 1–3 minutes. After that, every `git push` redeploys in under a minute.

## Updating later

Everything lives in `index.html`. The sections are marked with comment banners (`<!-- ══ WORK ══ -->`) so they're easy to find. To add a project, copy an existing `<article class="card">` block and edit it. To add a job, copy an `<article class="job">` block — the `now` class is what makes the marker gold, so keep it only on the top entry.

## Notes

- Colour tokens are the `:root` variables at the top of the `<style>` block. Changing `--brass` re-themes the whole page.
- Fonts load from Google Fonts (Fraunces for display, IBM Plex Sans for body). The page degrades gracefully to system fonts if they fail.
- Respects `prefers-reduced-motion`, keyboard-focusable throughout, and works down to a 320 px viewport.
