# VALIDATION.md

## One Door · No Wrong Door — Hope + Geolocator v2

### Original system preservation
- Verve N Veda tools: **12/12 preserved**
- original outside resources: **13/13 preserved**
- expanded public/nonprofit resource registry: **21**
- network cards: **8/8 preserved**
- funding resources: **4**
- stability checklist steps: **8/8 preserved**
- guide needs/rules: **preserved and expanded**
- `oneDoorGuideV1`: **preserved**
- `oneDoorStabilityPlanV1`: **preserved**
- `oneDoorStabilityNotesV1`: **preserved**
- Quick Exit / 911 / 988 / 211: **preserved**

### Geolocation
- Permissions Policy changed from blocked to `geolocation=(self)`: **PASS**
- no geolocation request on load: **PASS**
- explicit `Use My Location` action: **PASS**
- manual city/state/ZIP fallback: **PASS**
- coordinates stored in JavaScript memory only: **PASS**
- coordinate localStorage persistence: **NONE**
- Clear Location control: **PASS**
- 9 nearby resource lanes: **PASS**
- no external geocoding API: **PASS**
- CSP `connect-src 'none'` retained: **PASS**

### Hope handoff
- dedicated Hope adult-resource-mentor section: **PASS**
- public Verve directory fallback: **PASS**
- Copy Brief handoff: **PASS**
- silent cross-origin transfer: **NONE**
- private planner notes automatically included in brief: **NO**
- optional area sharing: **explicit checkbox only**

### Expanded resource areas
- Feeding America: **PASS**
- Community Action Agency locator: **PASS**
- Volunteers of America: **PASS**
- Goodwill Career Center: **PASS**
- Goodwill thrift/service locator: **PASS**
- Salvation Army location/service finder: **PASS**
- Legal Services Corporation: **PASS**
- Dress for Success: **PASS**
- separate provider-funding section: **PASS**

### 2026-10-20 route and accessibility hardening
- corrected Career Star route to the live Higher Learning portal path: **PASS**
- corrected PROSE route to the live Editorial Suite path: **PASS**
- corrected Budget route to the live Finance portal path: **PASS**
- replaced unavailable/private Hope destination with the public Verve directory: **PASS**
- live HTTP sweep of **45 unique URLs** (following redirects): **0 failures**
- stale-route scan (`higher_learming`, old Career/PROSE/Budget slugs, old NAIB host): **PASS**
- unique static IDs: **NONE duplicated**
- Urgency and Needs choice groups: **PASS** (`role="group"` + labelled group names)
- choice state exposed with `aria-pressed`: **PASS**
- `lang`, skip link, main landmark, and navigation landmark: **PASS**
- inline JavaScript syntax: **1 block — PASS**
- deployed-browser visual test: **NOT CLAIMED**

The route sweep and static checks were run against `main` after commit `7663ea1e570f64dc853b7aac3d2c9266676a39ab`. A real-device keyboard/screen-reader pass remains recommended before treating this as a complete assistive-technology certification.
