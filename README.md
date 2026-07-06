# TourKU

A React marketing/landing site for a university campus tour program, modeled on the University of Kansas.

## What problem does this solve?

Prospective students deciding on a school lean heavily on how a campus "feels" before they ever visit — a landing page that shows off campus life and makes it easy to book a tour or find tour times does real work for admissions. This project is a front-end build of that idea: a hero video, a gallery of campus highlights (athletics, academics, landmarks) that link out to a booking flow, and a nav structure for tour scheduling. It was built primarily as a React fundamentals project — routing, component composition, and responsive layout — rather than a production product, so several of the linked pages are intentionally left as placeholders (see below).

## Tech Stack
- **Frontend:** React 18, React Router v6, plain CSS (per-component stylesheets, no CSS framework)
- **Infra/Deployment:** none configured — this is a local/`npm start` project; no Vercel/Netlify config or `homepage` field is present in `package.json`

## Architecture
- `App.js` defines four routes — `/` (Home), `/services`, `/tourtimes`, `/sign-up` — rendered under a persistent `Navbar`.
- `Home` composes three presentational components: `HeroSection` (autoplaying background video + CTA buttons), `Cards` (a grid of campus highlight cards, each linking to `/services` or `/sign-up`), and `Footer`.
- `Navbar` is a responsive component with its own mobile-menu toggle state (`useState`) and a window-resize listener to switch between the desktop button and the mobile hamburger menu.
- `CardItem` is a small reusable card component (image + label + link) that `Cards` maps its data into — the campus photos and destination copy are hardcoded in `Cards.js` rather than pulled from any API or CMS.

## Key Features
- Hero section with autoplaying video background and call-to-action buttons
- Responsive navbar with a mobile hamburger menu
- Card-based gallery of campus highlights, each linking into the tour-booking flow
- Client-side routing between Home, Services, Tour Times, and Sign Up

## Current State / Honest Notes
This is a front-end-focused learning project, not a finished product. `Services`, `TourTimes`, and `SignUp` are currently placeholder components that just render a heading — the booking/scheduling logic itself was never built out. There's no backend, no deployment config, and no live demo link. Good talking points if this comes up in an interview: the routing and component structure are real and reusable, the actual "sign up for a tour" functionality is the obvious next step that was never finished.

## Running Locally
```bash
git clone https://github.com/vinay23is/tourKU.git
cd tourKU
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
