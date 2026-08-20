# Shifa Dental Care — Website (Foundation)

A reusable dental clinic website template, built with plain HTML, CSS, and
JavaScript (no build tools, no frameworks besides Bootstrap 5). This document
explains the project for a developer who is still learning.

## Project purpose

This is the **foundation phase** of the Shifa Dental Care website. It sets up
the file/folder structure, design system (colors, fonts, spacing), and data
files — but it does **not** yet contain the actual homepage content, treatment
pages, or working components. Those come in later phases, built on top of this
foundation.

## Technology stack

- **HTML5** — page structure
- **CSS3** — all custom styling, organized into `style.css`, `components.css`,
  `responsive.css`
- **Vanilla JavaScript** — no npm, no build step
- **Bootstrap 5** (via CDN) — grid system, navbar, modal, form utilities
- **Bootstrap Icons** (via CDN) — interface icons
- **Google Fonts** — Poppins (headings) and Inter (body text)
- **GLightbox** and **AOS** — planned for the Gallery and subtle animations in
  a later phase (not yet included)
- **GitHub Pages** — hosting, once the site is ready to publish

No Node.js, npm, React, or any build tooling is used. You can run this project
by simply opening `index.html` in a browser, or using a local dev server.

## Folder structure

```
shifa-dental-care/
│
├── index.html          Homepage shell
├── about.html           About page shell (will include doctor info)
├── treatments.html      Treatments listing page shell
├── gallery.html         Gallery page shell
├── contact.html         Contact page shell (will include FAQ, reviews, appointment)
│
├── treatments/          Empty for now — will hold 18 individual treatment pages
│
├── css/
│   ├── style.css         Design tokens (colors, fonts, spacing) + base styles
│   ├── components.css     Styles for reusable components (navbar, cards, footer, etc.)
│   └── responsive.css     Mobile/tablet/desktop responsive rules only
│
├── js/
│   ├── main.js           Runs on page load, wires everything together
│   ├── components.js      Functions that render the header, footer, modal, etc.
│   └── appointment.js     Appointment modal open/close + form validation logic
│
├── data/
│   ├── clinic.js          Clinic name, doctor info, contact, address, hours
│   ├── services.js        List of all 18 treatments (id + name + slug for now)
│   ├── reviews.js         Empty — real patient reviews go here later
│   └── faq.js             Empty — real FAQs go here later
│
├── images/
│   ├── logo/              Clinic logo files
│   ├── hero/               Homepage hero images
│   ├── doctor/             Doctor portrait(s)
│   ├── clinic/             Real clinic interior/exterior photos
│   └── services/           Treatment-related images
│
├── assets/
│   └── favicon/            Favicon files
│
└── README.md            This file
```

## How each piece connects

1. **HTML files** (`index.html`, `about.html`, etc.) are the pages themselves.
   Each one is currently just a shell: a `<header>`, an empty `<main>`, and a
   `<footer>`, plus `<script>` tags loading the CSS and JS files in the right
   order.
2. **CSS files** style those pages. `style.css` defines the color/font/spacing
   variables (using CSS custom properties, e.g. `var(--color-teal)`) so every
   other file can reuse them instead of hardcoding colors. `components.css`
   will style specific reusable pieces (navbar, cards, footer). `responsive.css`
   only handles how things rearrange on different screen sizes.
3. **JavaScript files** run in this order on every page: `data/*.js` files
   load first (so the `clinic`, `services`, `reviews`, and `faq` objects/arrays
   exist), then `components.js` (which will use that data to build the header
   and footer), then `appointment.js`, then `main.js` (which calls everything
   else once the page has loaded).
4. **Data files** are plain JavaScript objects/arrays — no database, no API.
   Editing `data/clinic.js` to change the phone number, for example, will
   (once components.js is built out) update the phone number everywhere it
   appears on the site, without needing to edit every page.

## How to run this project

### Option 1: VS Code Live Server (recommended for development)

1. Open the `shifa-dental-care` folder in VS Code.
2. Install the **Live Server** extension if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens in your browser and auto-refreshes when you save changes.

### Option 2: Just open the file

You can also just double-click `index.html` to open it directly in a browser.
This works for now since there's no build step, though Live Server is more
reliable once the project grows.

## How to deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose the branch (usually `main`) and the root folder (`/`), then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

The `.nojekyll` file in this project tells GitHub Pages not to run its default
Jekyll processing, which isn't needed here and can sometimes interfere with
plain HTML/CSS/JS sites.

## Where things are stored

- **Clinic info** (name, doctor, contact, address, hours) → `data/clinic.js`
- **Services/treatments list** → `data/services.js`
- **Reviews** → `data/reviews.js` (empty until real reviews are supplied)
- **FAQs** → `data/faq.js` (empty until real FAQs are written)
- **Images** → the relevant subfolder under `images/`, matching the filename
  referenced once components are built (e.g. the logo goes in `images/logo/`)

## What's intentionally NOT done yet

- No homepage sections (hero, services grid, etc.)
- No individual treatment pages inside `treatments/`
- No real reviews or FAQs
- No fully designed components (navbar, cards, modal) — only the CSS/JS
  structure they'll plug into
- No fabricated clinic information — anything not yet confirmed by the client
  is marked "To be confirmed" in `data/clinic.js`

These are built in later phases, once this foundation is reviewed and approved.
