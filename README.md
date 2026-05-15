# Effervescent Agency Website

Marketing and operations website for Effervescent Agency, built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Overview

The site presents Effervescent's venue services, shot seller model, partner proof, FAQs, contact flows, candidate application flow, onboarding availability form, and a protected candidates dashboard.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
- Supabase client
- Zod validation

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

If `.env.example` is not present, create `.env.local` manually and add the variables listed below.

Run the development server:

```bash
npm run dev
```

Open the local site at:

```text
http://localhost:3000
```

## Environment Variables

The app expects Supabase credentials for features that use the shared Supabase client:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
CANDIDATES_CODE=
```

Legacy Vite-style names are also supported by `src/lib/supabase.ts`:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

`CANDIDATES_CODE` is used by the protected candidates dashboard access flow. The plaintext value stays server-side and is compared against a SHA-256 hash submitted from the client.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server using webpack.

```bash
npm run build
```

Builds the production application.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint across the project.

## Main Routes

- `/` - Homepage with hero, services, case studies, partners, and testimonials.
- `/about` - About Effervescent Agency.
- `/services` - Service overview.
- `/shot-sellers` - Shot seller explanation and positioning.
- `/venues` - Venue-focused landing page.
- `/faq` - Frequently asked questions.
- `/contact` - Contact and venue inquiry flow.
- `/apply` - Shot seller application form.
- `/onboarding` - Availability and onboarding form.
- `/whitelist` - Whitelist flow.
- `/candidates` - Protected candidates dashboard.

## API Routes

- `POST /api/apply` - Accepts application payloads and forwards them to the configured n8n webhook.
- `POST /api/venue-inquiry` - Validates venue inquiry submissions with Zod and forwards valid payloads to the n8n webhook.

Webhook URLs are currently defined in source files:

- `src/lib/apply-utils.ts`
- `src/constants/apply.ts`
- `src/app/onboarding/page.tsx`
- `src/app/candidates/actions.ts`

## Project Structure

```text
src/
  app/                 App Router pages, layouts, and API routes
  components/          Shared UI and page sections
  components/apply/    Application form primitives and success screen
  constants/           Shared constants for forms and options
  lib/                 Supabase client, validation, and helper utilities
  types/               Shared TypeScript types
public/                Images, logos, partner assets, favicon, and local fonts
```

## Styling Notes

- Global styles live in `src/app/globals.css`.
- The site uses a local AcademyC font from `public/fonts/AcademyC-Bold.otf`.
- Shared layout is defined in `src/app/layout.tsx`.
- The fixed global navigation and footer are mounted across all pages.

## Common Development Tasks

Update navigation:

- Edit `src/components/Navbar.tsx`.

Update footer links and partner sections:

- Edit `src/components/Footer.tsx`.

Update application form options:

- Edit `src/constants/apply.ts` and related validation in `src/lib/validations/apply.ts`.

Update venue inquiry validation:

- Edit `src/lib/validations/venue.ts`.

Add or replace visual assets:

- Add files to `public/`.
- Reference them with root-relative paths such as `/hero-section1.png`.

## Deployment

The app is a standard Next.js application and can be deployed to platforms that support Next.js, such as Vercel. Make sure all required environment variables are configured in the deployment environment before building.
