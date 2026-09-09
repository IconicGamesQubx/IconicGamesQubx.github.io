# September 2026 site refresh

## Scope

Owner-approved refresh of the static GitHub Pages site. Qubx 2 leads the
homepage; Qubx Classic, Skunkworks, studio information, community links, and
press assets follow. Prototype download URLs and build histories are retained.

Advances https://github.com/ianbarber/qubx2/issues/1497. The downloadable kit
contains still assets and a fact sheet, not B-roll. Publication and live link
verification are still required before that issue can be closed.

Related: https://github.com/ianbarber/qubx2/issues/523. The public Steam
creator page was reviewed as a reference. This change does not publish Steam
branding or edit its biography, associations, or account settings. That issue
remains separate.

The website repository had no open issues on September 9, 2026.

## Direction and references

Use the actual game and studio marks, Qubx 2's dark palette and cyan accent,
VCR OSD Mono for small labels, and Bungee for the lead display heading.
Body copy uses system fonts for legibility. The hero's shape colors are taken
from the existing game artwork. Motion is initiated by the visitor.

- [Super Hexagon](https://superhexagon.com/): a short premise, recognizable
  game identity, trailer, and direct platform links. Used as a structural
  reference, not as a source of claims, testimonials, or artwork.
- [Sayonara Wild Hearts](https://annapurnainteractive.com/games/sayonara-wild-hearts):
  game artwork and store actions lead, with a concise description below.
- [Google's embed guidance](https://web.dev/articles/embed-best-practices):
  use a local poster and load the video player only when requested. Reserve
  its dimensions to avoid layout shifts.
- [YouTube player documentation](https://developers.google.com/youtube/player_parameters):
  inline mobile playback, native controls, and autoplay only after a click.
  The iframe has a title and an origin referrer. A direct YouTube link remains
  available both with and without JavaScript.
- [WCAG target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html):
  spacious buttons and navigation, clear keyboard focus, native FAQ controls.

## Content sources

Verified September 9, 2026:

- [Steam product page](https://store.steampowered.com/app/3856500/Qubx_2/):
  release and Early Access state, US$2.99 price, free demo, platforms, seven
  interface languages, Run mode, Quick Play, and AI soundtrack disclosure.
- [Steam studio page](https://store.steampowered.com/developer/IconicGames):
  current studio identity and public follow destination.
- [Official trailer](https://www.youtube.com/watch?v=He80x8rVXrY):
  title and official channel confirmed through YouTube's oEmbed endpoint.
- Qubx2 `CREDITS.md`: team attribution and permission to stream, record,
  and monetize content featuring the game's soundtrack.
- Qubx2 presentation guide and settings owners: current vocabulary,
  control remapping, reduced motion/flashes, and high contrast shapes.
- Existing GitHub release records: Classic and prototype downloads.

Keep volatile facts in `index.html` and `press-facts.md` in sync with the
store. Do not promise Steam achievements or online leaderboards for itch.io.

## Review edits

The editorial pass removes repeated slogans and explanatory UI copy. The
studio statement is "Independent games since 2002," with the owner-confirmed
credits "Creators of Blob, Qubx, Tic Tank Toe, and now Qubx 2." The page and
sharing titles are "Iconic Games." Steam Deck is listed in the homepage
platform summary, FAQ, and press fact sheet.

The existing studio artwork sits on a circular white background throughout the
site. The shapes divider is retained without its surrounding text. The press
kit artwork remains unchanged.

## Asset provenance

No new logo artwork or synthetic gameplay images were created.

| Site asset                               | Source                                                                     |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| `assets/qubx-2-logo.png`                 | `Documents/qubxassets/qubx2logo.png`, unaltered                            |
| `assets/iconic-games-logo.png`           | Qubx2 `assets/smalllogo.png`, unaltered                                    |
| `assets/favicon.png`                     | `Documents/qubxassets/shortcut_icon_256.png`                               |
| `assets/life-background.webp`            | `Documents/qubxassets/library_hero.png`, resized and compressed            |
| `assets/qubx-2-social.jpg`               | `Documents/qubxassets/store_capsule_main.png`, converted to JPEG           |
| `assets/trailer-poster.webp`             | Official trailer's `maxresdefault.jpg`, converted to WebP                  |
| `assets/screenshots/shape-matching.webp` | September 5 capture `15-13-29_005`, resized and compressed                 |
| `assets/screenshots/qubit-shop.webp`     | `Documents/qubxassets/screenshots/s.png`, resized and compressed           |
| `assets/screenshots/first-contact.webp`  | `Documents/qubxassets/screenshots/holdtheline.png`, resized and compressed |
| `assets/fonts/*`                         | Existing Qubx2 fonts with their license notices                            |
| `qubx.png`                               | Existing website's Classic logo                                            |

The press ZIP includes the original PNGs, plus the higher resolution studio
logo from `Qubx2-agentic-20260405-173437/assets/textures/iconic.png`, which
matches the current smaller mark. Web screenshots retain the complete frame.

## Publication follow-up

- The supplied itch.io address, https://iconicgame.itch.io/qubx-2, returned a
  public 404 at the final pre-push check. The owner approved publishing this
  version with the supplied links included; the itch.io page or address still
  needs to be made publicly reachable.
- No new public email address was supplied. Community/support links point to
  Steam discussions. Add a direct press contact if desired.
- GitHub Pages publishes from `main`. Check the deployed pages after each
  publication. The Steam creator-page branding update remains separate.

## Local validation

- All five HTML pages pass the HTML standard validator.
- Chrome checks of all five pages at 1440, 820, 390, and 320 CSS pixels:
  no horizontal overflow, browser script errors, or axe WCAG A/AA findings.
- Homepage WebKit checks at desktop, iPhone 13, and 320px sizes:
  no horizontal overflow or axe findings; FAQ and trailer controls work.
- Keyboard checks: skip link, native FAQ toggling with Space, trailer
  activation with Space, focus moved to the player, and prototype navigation.
- Actual embedded YouTube playback reached 2 seconds with no media error.
- JavaScript disabled: content, store links, poster link, and FAQs work.
- Reduced motion disables smooth scrolling and transitions.
- The press-kit download works; ZIP integrity and the included fact sheet match.
- All 62 local HTML references and anchors, plus CSS assets, resolve.
- External links returned HTTP 200 except the supplied itch.io URL (404).
- JavaScript syntax and `git diff --check` pass.

These are local browser and automated accessibility checks, not a claim of
formal accessibility certification or tests on physical mobile devices.
