# TourKU

A story-driven, single-page walking tour of the University of Kansas and its home town of Lawrence — from the top of Mount Oread, down Jayhawk Boulevard, and into downtown Mass Street.

## The idea

Most campus tours are a list of buildings. TourKU takes an angle instead: Lawrence is not just where KU sits, it is the town that shaped the experience, and the tour is one continuous downhill walk that ties the two together. The site is built as a cinematic scrolling experience — layered parallax hero, an editorial origin story, an interactive stop-by-stop tour path, featured landmark cards, an illustrated route map, and a traditions section — all anchored to a consistent KU-blue / crimson design system.

## Tech Stack
- **Frontend:** React 18, plain CSS with a design-token system (per-component stylesheets, no CSS framework, no UI library)
- **Motion:** hand-rolled hooks — `useReveal` (IntersectionObserver scroll reveals) and `useParallax` (rAF-throttled scroll parallax), both fully disabled under `prefers-reduced-motion`
- **Assets:** existing campus photos in `public/images`; all decorative visuals (hill silhouette, contour lines, route map) are inline SVG/CSS — no external image or map APIs, no secrets required
- **Build:** Create React App (`react-scripts`)

## Architecture
- `App.js` renders a fixed `Navbar` over a single scrolling `Home` page (no client-side router — navigation is in-page anchor links).
- `Home` composes the sections in tour order: `HeroSection` → `StorySection` → `TourPath` → `Landmarks` → `RouteMap` → `TraditionsSection` → `FinalCTA` → `Footer`.
- `src/data/stops.js` is the single source of truth for the eight tour stops; both `TourPath` (interactive detail panel) and `RouteMap` (numbered SVG markers) read from it.
- Reusable primitives: `ParallaxLayer` (wraps `useParallax`), `LandmarkCard` (featured + supporting variants), and the shared `.cta`, `.reveal`, and layout tokens in `App.css`.

## Key Features
- Cinematic parallax hero with layered campus cards, a Mount Oread hill silhouette, and topographic contour lines
- Interactive tour path — click any of the eight stops to read its story, category, walk time, and why it's on the route
- Illustrated SVG route map with numbered markers and a draw-on-scroll progress line
- Premium landmark cards with a large featured card and supporting grid, hover/zoom micro-interactions
- Traditions section over a parallax photo backdrop
- Fully responsive (desktop / tablet / mobile), accessible focus states, semantic HTML, and reduced-motion support

## Accessibility & performance notes
- All animation respects `prefers-reduced-motion` (reveals show immediately, parallax is disabled).
- Interactive elements are real buttons/links with visible focus rings; the route map markers are keyboard-focusable.
- No third-party map API, no tracking, no environment variables — deployable as a static build anywhere.

## Running Locally
```bash
git clone https://github.com/vinay23is/tourKU.git
cd tourKU
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it. Run `npm run build` for a production bundle and `npm test` for the test suite.

## Content note
Copy is general descriptive writing about well-known KU/Lawrence landmarks; stop times are rough walking estimates, not official figures. TourKU is an independent, student-built concept and is not affiliated with the University of Kansas.
