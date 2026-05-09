# AptureTech — Web & App Design Agency

Premium web & app design and development agency website built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Language:** TypeScript
- **Icons:** Lucide React
- **Fonts:** Barlow Condensed + Inter (Google Fonts)
- **Deploy:** Vercel

## Pages

| Route          | Description                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `/`            | Home — Hero, Services, About, Stats, Newsletter, Portfolio, Why Us, Testimonials, Team, Blog, CTA |
| `/about`       | About Us — Team, Values, Stats                                                                    |
| `/services`    | Services — Full grid + 6-step process                                                             |
| `/portfolio`   | Projects — Full portfolio grid                                                                    |
| `/blog`        | Blog — Featured post + grid                                                                       |
| `/blog/[slug]` | Blog post detail                                                                                  |
| `/contact`     | Contact — Form + contact info                                                                     |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub → Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

No extra configuration needed — `vercel.json` is not required for standard Next.js 15 projects.

## Project Structure

```
apturetech/
├── app/
│   ├── globals.css          # CSS variables + Tailwind v4
│   ├── layout.tsx           # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # 404 page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/            # All homepage sections
│   └── ui/                  # Button, SectionHeader, ThemeToggle
├── lib/
│   ├── data.ts              # Site content / mock data
│   └── theme.tsx            # Dark/light theme context
├── package.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Customisation

All site content lives in `lib/data.ts` — update `siteConfig`, `services`, `portfolio`, `team`, `testimonials`, and `blogPosts` to make it yours.

Colors and fonts are defined as CSS custom properties in `app/globals.css`.
