<p id="readme-top" />

<div align="center">
    <img src="https://1000logos.net/wp-content/uploads/2023/05/Wordle-Emblem.png" alt="Logo" height="150">
  <h1 align="center">Lazy Wordler</h1>

  <p align="center">
    A Next.js app that scrapes the Wordle website and displays the current puzzle answers!
    </br>
  </p>
</div>

## Usage

Click on the link below to open the app in your browser.

[Click to open Lazy Wordler](https://lazy-wordler.vercel.app/)

## How it works

I started with reverse engineering the Wordle website to find out how the game works. If you look in the networking tab you can see that it reaches out to an endpoint that matches the current date. After finding this all I needed was to create a Next.js project that utilizes the server-side rendering to fetch the data from the endpoint and display it on the page. The server-side rendering is important because it bypasses the CORS policy that would not allow client-side requests to an endpoint on a different domain.


## Development and validation

Use Bun 1.4.3 and the committed `bun.lock`:

```sh
bun install --frozen-lockfile
bun run dev
bun run check
bun audit
```

`check` runs ESLint, generates Next.js route types, checks TypeScript, and builds
the production application. Production builds fetch the three daily Wordle
records from the fixed New York Times endpoint and the Inter font; network
availability is required.

The old npm lock still resolved Next.js 14.0.4 and did not match `package.json`.
The newer Bun lock matched Next.js 16.0.7, so it was migrated from `bun.lockb`
to the text `bun.lock`, and the stale npm lock was removed. Use one package
manager to keep security resolutions reproducible.

Next.js, React and other direct packages use current patched stable releases.
TypeScript remains on the supported 6.0.3 API because typescript-eslint 8.72.1
requires TypeScript below 6.1. ESLint remains on 9.39.5 because the current
React/import/accessibility plugins do not declare ESLint 10 support.

Tailwind 4 uses `@tailwindcss/postcss` and the CSS import; the unused legacy
Tailwind configuration was removed. The TypeScript target is ES2017, which
fits Next.js's supported browsers and avoids the obsolete ES5 target.
