# Web Services Portfolio

A simple, fast, responsive portfolio to advertise services: website design/development, hosting/deployment, and ongoing website management.

## Structure

- `index.html`: Content and sections
- `styles.css`: Theme, layout, responsive styles
- `script.js`: Mobile nav, smooth scroll, basic contact form UX
- `assets/`: Put your images and logos here

## Customize

1. Open `index.html` and change:
   - Brand name in the header
   - Copy in Hero, Services, Work, Pricing, About, and Contact sections
   - Pricing numbers and features
   - Replace Work items with your projects (use real links and images)
2. Tweak theme colors in `styles.css` under `:root` variables.
3. Add your own images to `assets/` and reference them in HTML/CSS.
4. Update the mail link in Contact section to your email.

## Run locally

Just open `index.html` in a browser. Or serve locally:

```bash
# Python 3
python3 -m http.server 5173 --directory ./
# Then open http://localhost:5173/portfolio/
```

## Deploy

- GitHub Pages: push and set the Pages source to the repository root.
- Netlify: drag-and-drop the `portfolio/` folder or connect repo and set publish dir.
- Vercel: import project and set root to `portfolio/` (framework: "Other").

No build step is required.

## Notes

- Form is client-side only. For real submissions, add a backend endpoint or use services like Formspree, Basin, or Netlify Forms.
- Accessibility: semantics and focus states are included; please validate final content with your real copy and images.