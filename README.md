# nextjs-cv

A personal CV / portfolio website built with Next.js. The content is driven by markdown files and JavaScript objects, and the app includes both a normal website view and a PDF CV view.

## Features

- Responsive CV landing page
- Dedicated PDF CV route
- Content-driven sections for:
  - profile / introduction
  - contact details
  - work experience
  - education
  - skills
  - language skills
  - hobbies
  - projects
- Project listing / project overview pages
- Theme support with `next-themes`
- Sitemap generation
- robots.txt generation
- Health check `/api/health` endpoint
- Automated content and asset preparation scripts
- Conventional commits + semantic release workflow

## Tech stack

- Next.js
- React 19
- TypeScript
- Tailwind CSS 4
- MDX (`@next/mdx`, `@mdx-js/*`, `next-mdx-remote`)
- `@react-pdf/renderer` for PDF output
- Iconify for icons
- `next-themes` for theme handling
- Biome for linting / formatting
- Jest + Testing Library for tests
- Husky, Commitizen, and semantic-release for Git workflow and releases

## Getting started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Available scripts

- `npm run dev` — prepare content/icons/assets and start the app in development mode
- `npm run dev:webpack` — development mode using the Webpack-based Next.js dev server
- `npm run build` — build the production app
- `npm run start` — start the production server
- `npm run lint` — run Biome checks
- `npm run format` — format the codebase with Biome
- `npm run test` — run the test suite
- `npm run test:watch` — run tests in watch mode
- `npm run commit` — open Commitizen commit flow

## Content workflow

The project prepares content and assets with small helper scripts before development and build steps:

- `prepare:content`
- `prepare:assets`
- `prepare:otherIcons`
- `prepare:devIcons`
- `watch:content`

This keeps the site content, icons, and project data in sync with the source files.

## Project structure

```text
src/
  app/
    (default)/
    (fullscreen)/
    api/
    components/
    hooks/
    globals.css
    layout.tsx
    sitemap.ts
  utils/
  mdx-components.tsx
  types.ts
scripts/
mockData/
```

## Notes

- The root layout uses the Finnish locale (`lang="fi"`).
- The homepage metadata title is set to `Etusivu`.
- The project is released from the `main` branch with semantic-release.

## License

MIT license file is included in the repository.
