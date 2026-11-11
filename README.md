# UX portfolio site

A static portfolio website. Plain HTML, CSS, and a small amount of vanilla JavaScript. No frameworks and no build step.

## Preview

Pages use root-relative paths (for example `/css/tokens.css`), so open the site through a local server, not by double-clicking the files.

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

- Homepage: http://localhost:8000/
- Design system review page: http://localhost:8000/design-system/

Stop the server with Control + C.

## Structure

```
index.html              Homepage
404.html                Not found page
robots.txt, sitemap.xml
favicon.ico, favicon.svg, apple-touch-icon.png
site.webmanifest, icon-192.png, icon-512.png
og-image.jpg            Share image (1200 x 630) for Open Graph and Twitter cards
design-system/
  index.html            Every token and component, for review against Figma
work/
  straighterline/       Company pages: one folder per company, each with an index.html
  fetch/
  snagajob/
  bixal/
  mpower/
css/
  tokens.css            Design tokens as CSS custom properties (the only file with raw values)
  base.css              Reset, typography, layout helpers, motion
  components.css        Component styles, built from tokens only
  design-system.css     Layout for the design system review page only
  home.css              Homepage sections only
  not-found.css         404 page only
js/
  main.js               Shared behavior (scroll reveal)
assets/
  icons/                SVG logo and icons
  images/               Photos and screenshots (WebP) and SVG placeholders
```

Each additional page lives in its own folder with an `index.html` inside, so URLs stay clean (for example `/work/straighterline/`).

## Conventions

- File and folder names are lowercase with hyphens.
- Colors, font sizes, and spacing come from `css/tokens.css` only. Other CSS files use `var(--token-name)`.
- Breakpoints: tablet from 640px, desktop from 1024px. They match the 390, 880, and 1280px frames in Figma.
- The header, navigation, and footer markup is identical on every page. When you change it on one page, change it on all of them.
- Fonts are Montserrat and PT Serif, loaded from Google Fonts.
- Motion is subtle and turns off for visitors who ask for reduced motion.

## Source designs

- Design system: Figma file "Design system", section "Website"
- Site designs: Figma file "Portfolio website 2.0", page "Design v2.5"
