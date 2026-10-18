# Roymond.NET Portfolio

A personal portfolio website built with Next.js and Supabase, designed to showcase projects, courses, resume details, and creative work. The site presents a clean dark-mode interface and is optimized for both desktop and mobile browsing.

## Overview

This project is a modern portfolio experience for Roy Gero, featuring:

- A homepage introducing the profile and interests
- A searchable projects gallery
- A searchable course tracker with in-progress/completed organization
- A resume page with embedded PDF viewing
- Dynamic media support for image and video content
- Social links and navigation for GitHub, LinkedIn, itch.io, and YouTube

The app is built in the nested project folder at `Portfolio/` and uses a React/Next.js frontend with Supabase-backed data.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase JS client
- TanStack React Query
- Embla Carousel
- Lucide React

## Features

- Responsive layout with desktop sidebar and mobile navigation
- Search filtering for project and course lists
- Content-driven detail pages for individual projects and courses
- Embedded PDF resume viewer
- Dark theme with accent colors and polished typography
- Static generation for marketing pages plus dynamic detail pages

## Project Structure

```text
Portfolio/
├── src/
│   ├── app/
│   │   ├── courses/
│   │   ├── projects/
│   │   ├── resume/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── content/
│   ├── lib/
│   └── styles/
├── .env
├── .env.local
├── Dockerfile
├── docker-compose.yml
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── serve.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
cd Portfolio
npm install
```

### Environment variables

Create a `.env.local` file in the `Portfolio/` folder with your Supabase configuration:

```bash
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_KEY="your-supabase-key"
NEXT_PUBLIC_SUPABASE_BUCKET_URL="your-supabase-storage-url"
DOMAIN_NAME="roymond.net"
PORT_NUMBER="9022"
```

The app uses these values to load projects, courses, media, and resume assets from Supabase storage.

### Run the app locally

```bash
cd Portfolio
npm run dev
```

Open `http://localhost:3000` in a browser.

### Production build

```bash
cd Portfolio
npm run build
npm run start
```

## Scripts

```bash
npm run dev      # start the Next.js development server
npm run build    # create a production build
npm run start    # serve the production build
npm run lint     # run ESLint checks
```

## Deployment

This project includes Docker support via `Dockerfile` and `docker-compose.yml`, making it easy to deploy in a containerized environment. The app is intended to be hosted with a custom domain and configured with the environment variables listed above.

## Notes

The portfolio is content-driven and data-backed, so updating project details, course information, and media is done primarily through the Supabase tables and storage bucket rather than hardcoded content in the app. This makes the site easy to extend and maintain as the portfolio grows.

## License

This project is for personal use and portfolio hosting. Please respect the content and branding used in the project.
