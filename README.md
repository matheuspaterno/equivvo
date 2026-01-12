Equivvo is a bare-bones horse marketplace MVP built with Next.js + TypeScript.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000

Key routes:

- `/` Home
- `/listings` Listings (mock data)
- `/listings/[id]` Listing details
- `/dashboard` Placeholder
- `/about` About

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Build

```bash
npm run build
npm run start
```

## Notes

- No backend, database, or auth yet.
- Mock listings live in `src/data/mockListings.ts`.
