# Roymond.NET — Next.js Portfolio

A Next.js rewrite of the Expo/React Native portfolio, with the same Supabase-backed content and routes.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Supabase** — projects & courses
- **react-markdown** — home & course intro copy
- **Embla Carousel** — project/course media

## Getting started

```bash
cd portfolio-web
npm install
cp .env.example .env.local   # or copy from the legacy Expo .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Legacy (Expo) | Next.js |
|---------------|---------|
| `SUPABASE_URL` | `NEXT_PUBLIC_SUPABASE_URL` |
| `SUPABASE_KEY` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `SUPABASE_BUCKET_URL` | `NEXT_PUBLIC_SUPABASE_BUCKET_URL` |

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/projects` | Project list (search) |
| `/projects/[id]` | Project detail |
| `/courses` | Courses (in progress / completed) |
| `/courses/[id]` | Course detail |
| `/resume` | Embedded resume PDF |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build

## Legacy app

The original Expo app remains in the parent `Portfolio/` folder (`App.js`, `src/`, etc.) for reference. You can remove it once you are fully on Next.js.
