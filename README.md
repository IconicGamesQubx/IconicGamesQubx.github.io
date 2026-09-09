# Iconic Games website

Static HTML, CSS, and a small progressive enhancement for the YouTube trailer.
GitHub Pages serves the files directly. There is no build step.

## Local preview

From this directory:

```sh
python3 -m http.server 4173 --bind 0.0.0.0
```

Open http://localhost:4173. For a phone on the same Wi-Fi, use the computer's
local IP address with port 4173. Stop the server with Ctrl-C.

## Content and assets

- `index.html`: Qubx 2, Classic downloads, studio, community, and press links.
- `styles.css`: homepage layout and responsive styles. Colors follow Qubx 2.
- `site.js`: replaces the trailer link with an inline YouTube player when used.
- `skunkworks*.html` and `skunkworks.css`: prototype pages and build histories.
- `assets/`: local artwork and optimized screenshots. Font licenses are in
  `assets/fonts/`. All homepage resources are local until the trailer is played.
- `downloads/qubx-2-press-kit.zip`: original PNG artwork/screenshots and the
  fact sheet maintained in `docs/press-facts.md`.

When facts or the contact address change, update the homepage and press fact
sheet together, then refresh the fact sheet inside the ZIP. Keep the soundtrack
policy aligned with Qubx2's canonical `CREDITS.md` and the Steam disclosure.
The research record in `docs/site-refresh.md` records asset provenance and
items to verify before publication.

## Verification

Check the page in desktop and mobile viewports, including 320px width. Test
Tab/Enter/Space navigation, FAQ expansion, the trailer, downloads, and all
Skunkworks pages. Verify the site still provides content, store links, and a
working YouTube link with JavaScript disabled. Respect reduced motion.

Run `node --check site.js` and `git diff --check`. An axe accessibility scan
and an HTML validator are useful alongside visual review.

Keep `CNAME` set to `iconicgames.com`. Review locally before pushing, since a
push to the publishing branch can update the public site.
