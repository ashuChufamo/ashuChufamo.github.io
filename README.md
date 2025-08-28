# Ashenafi Chufamo — Portfolio

A modern, responsive personal portfolio hosted on GitHub Pages.

Live URL: https://ashuchufamo.github.io/

## Features

- **Responsive design** optimized for web and mobile
- **Sections**: About, Resume/Experience, Skills, Portfolio, Blog, Contact
- **Performance**: lazy-loaded images, reduced particle density
- **SEO**: meta description, Open Graph & Twitter cards
- **Assets**: Downloadable CV, social links (GitHub, LinkedIn, ResearchGate)
- **Animations**: Optional particles and subtle GSAP transitions

## Project Structure

```
├─ assets/
│  ├─ css/
│  │  └─ style.css            # Main styles
│  ├─ images/                 # Images, logos, thumbnails
│  └─ js/
│     ├─ script.js            # Interactions (nav, filters, etc.)
│     └─ animation.js         # Particles + GSAP
├─ .github/
│  └─ FUNDING.yml
├─ index.html                 # Main page
├─ README.md                  # This file
└─ Ashenafi-Chufamo-FlowCV-Resume-20250828.pdf
```

## Getting Started (Local)

- Simply open `index.html` in a browser.
- For a quick static server (optional):
  - Python 3: `python3 -m http.server 8080`
  - Node: `npx serve`

## Deploy (GitHub Pages)

1. Push changes to the default branch (e.g., `main`).
2. In GitHub repo settings → Pages → set source to `main` branch/root.
3. Your site will be available at: `https://<username>.github.io/`.

Already configured for this repo: `https://ashuchufamo.github.io/`.

## Customization

- **Title/Meta**: Update in `index.html` `<head>`.
- **Theme**: Colors/spacing/typography in `assets/css/style.css`.
- **Particles/Animations**: Adjust or disable in `assets/js/animation.js`.
- **Social Links**: Update links in the sidebar of `index.html`.
- **Email**: `mailto: chufamoashenafi@gmail.com` in `index.html`.
- **ResearchGate**: `https://www.researchgate.net/profile/Ashenafi-Abamo` in `index.html`.
- **CV**: Replace the PDF file and ensure the download link points to the new filename.

## Content Guidelines

- **Projects**: Add real items with title, short description, tech tags, and links.
- **Experience**: Keep 2–4 bullets per role focusing on outcomes/impact.
- **Images**: Compress and use `loading="lazy"` for performance.

## Accessibility & Performance

- Sufficient color contrast and focus styles
- Keyboard navigable components
- `prefers-reduced-motion` friendly animations (tunable)

## Roadmap

- Light/Dark theme toggle
- Publications section linking to ResearchGate
- Optional contact form (Formspree)

## License

This project is licensed under the terms of the repository's `LICENSE` file.
