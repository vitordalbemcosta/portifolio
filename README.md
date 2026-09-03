# Vitor Dalbem Costa — Developer Portfolio

[![Live portfolio](https://img.shields.io/badge/Live_Portfolio-f36b21?style=for-the-badge&logo=github&logoColor=white)](https://vitordalbemcosta.github.io/portifolio/)
[![Gatsby](https://img.shields.io/badge/Gatsby_5-663399?style=for-the-badge&logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React_18-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)

Personal portfolio of **Vitor Dalbem Costa**, a Software Developer based in Lisbon, Portugal. It presents selected professional work, technical experience and projects with a focus on accessible interfaces, scalable frontend architecture and maintainable software.

[View the live portfolio](https://vitordalbemcosta.github.io/portifolio/) · [LinkedIn](https://www.linkedin.com/in/vitordalbemcosta/) · [GitHub](https://github.com/vitordalbemcosta)

![Portfolio social preview](./static/og.png)

## Highlights

- Responsive experience designed for small phones, larger mobile devices, tablets and wide desktop screens
- Professional experience with a clear distinction between employment and client projects
- Accessible semantic structure, keyboard navigation, visible focus states and reduced-motion support
- Optimized WebP project imagery with explicit dimensions and lazy loading
- Reusable design tokens for colour, spacing, typography, surfaces and interaction states
- SEO metadata, canonical URLs, Open Graph and X cards, sitemap, robots.txt and structured data
- Accessible contact form powered by EmailJS with loading, success and error feedback
- Static generation through Gatsby for fast delivery on GitHub Pages

## Technology

| Area | Tools |
| --- | --- |
| Framework | Gatsby 5, React 18 |
| Styling | styled-components, modern CSS |
| Contact | EmailJS |
| SEO | Gatsby Head API, sitemap, structured data |
| Hosting | GitHub Pages |

## Project structure

```text
src/
├── components/          # Shared layout, navigation, footer and SEO
├── pageComponents/      # Main page experiences
├── pages/               # Gatsby routes and page metadata
├── images/              # Brand and optimized project assets
├── styles/              # Global design tokens and accessibility rules
├── theme/               # styled-components theme values
└── utils/               # Professional and personal project content
static/                  # Social preview and robots.txt
```

## Running locally

### Requirements

- Node.js 18 or 20
- npm

### Setup

```bash
git clone https://github.com/vitordalbemcosta/portifolio.git
cd portifolio
npm install
npm run develop
```

The development site is available at [http://localhost:8000](http://localhost:8000).

## Environment variables

The contact form uses EmailJS. Create `.env.development` and `.env.production` locally with the following keys:

```dotenv
GATSBY_SERVICE_API=
GATSBY_TEMPLATE_API=
GATSBY_EMAILJS_API=
```

Never commit real credentials. Only variables prefixed with `GATSBY_` are available to browser code, so the EmailJS account should also use appropriate domain and usage restrictions.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run develop` | Start the local development server |
| `npm run build` | Generate the production build |
| `npm run serve` | Preview the production build locally |
| `npm run clean` | Clear Gatsby-generated caches and output |
| `npm run deploy` | Build with the repository path prefix and publish to GitHub Pages |

## Deployment

The production site is hosted on GitHub Pages. Merging an approved change into the `main` branch triggers the configured deployment workflow automatically.

Before merging, verify that the production build completes successfully:

```bash
npm run build
```

## Accessibility and performance

The portfolio targets WCAG 2.1 AA where reasonably possible. It uses semantic landmarks, a skip link, native form labels, clear focus styles, restrained motion and responsive layouts. Decorative transitions are disabled when `prefers-reduced-motion` is enabled.

Project screenshots are delivered as compressed WebP assets. Images outside the initial viewport use native lazy loading, helping reduce transferred data and layout movement.

## Author

**Vitor Dalbem Costa**

Software Developer · Lisbon, Portugal

- [Portfolio](https://vitordalbemcosta.github.io/portifolio/)
- [LinkedIn](https://www.linkedin.com/in/vitordalbemcosta/)
- [GitHub](https://github.com/vitordalbemcosta)

## License

The source code is available for reference. Portfolio content, professional information and visual assets remain the property of Vitor Dalbem Costa unless stated otherwise.
