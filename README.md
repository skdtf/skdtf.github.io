# Srijan Kumar Dubey | Portfolio

A responsive, dependency-free static portfolio for GitHub Pages.

## Files

- `index.html`: page content and responsive styles
- `favicon.svg`: monogram favicon
- `resume.pdf`: downloadable resume
- `.nojekyll`: serve these files directly

## Local preview

Run `python3 -m http.server 8000` from this folder and open http://localhost:8000.

## Publish on GitHub Pages

1. Create a public repository named `skdtf.github.io` in the skdtf account.
2. Upload these files to its root on the main branch.
3. Under Settings > Pages, select Deploy from a branch, main, and /(root), then Save.
4. The intended website URL is https://skdtf.github.io/ once GitHub completes deployment.

## Editing

Edit the text and embedded styles in index.html. Replace resume.pdf to update the downloadable resume. The site has no build step, remote fonts, tracking, or JavaScript dependencies.

Content is based on the resume supplied on September 15, 2026 and the stated research interests. Personal projects are intentionally omitted. Dates and metrics should be updated when experience changes.

## September 16 redesign

Light editorial layout, serif headings, blue accents, concise professional copy, and an explicit Summer 2027 internship notice. User-provided portrait is included unchanged, with responsive framing controlled by CSS.

## Logo sources

Organization marks identify educational and employment affiliations. Logos remain the property of their respective owners.

- UMass Amherst: https://www.umass.edu/brand/visual-identity/marks-and-seal
- IIT Roorkee: https://iitr.ac.in/ (asset supplied by cmsredesign.channeli.in)
- ThirdAI Automation: https://www.thirdaiautomation.com/thirdai-logo.svg
- NEWME: https://newme.asia/apple-touch-icon.png
- Myntra: https://constant.myntassets.com/pwa/assets/img/Icon-App-60x60@3x_2021.png

## Interactive update

Includes active sticky navigation, copy-email controls with local-preview fallback, explicit PDF download buttons, reduced-motion support, a warmer background, a user-supplied portrait crop, and a Currently block. Project filters remain omitted.

## Google Analytics activation

Create a Google Analytics 4 property and Web data stream for the live website. Enter its public Measurement ID in config.js. No API secret or password belongs in this repository. Analytics is disabled until a valid G- ID is configured and the page is served over HTTPS. Events include resume_download and email_copy. Future links with data-project attributes can emit project_click. Do not add another handler for the same custom event.

Verify events in GA4 Realtime after publishing. Google documentation: https://developers.google.com/analytics/devguides/collection/ga4/events

The canonical and Open Graph URLs target the intended https://skdtf.github.io/ address. Confirm this address at publication, or update the canonical, og:url, and og:image fields. The 1200x630 social preview is a typographic card in assets/social-preview.png.
