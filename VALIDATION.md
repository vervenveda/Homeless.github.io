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
- guide results and letter output announced with polite live regions: **PASS**
- `lang`, skip link, main landmark, and navigation landmark: **PASS**
- inline JavaScript syntax: **1 block — PASS**
- deployed-browser visual test: **NOT CLAIMED**

The route sweep and static checks were run against `main` after the compassionate-intake commits `59980238e1dca4cf93f3e6f13ead5acb87208352` through `241672677ec1426dce5707af1c4f2d9ca5bd159e`. A real-device keyboard/screen-reader pass remains recommended before treating this as a complete assistive-technology certification.

### 2026-10-20 compassionate guided intake
- optional response style choices: **PASS** (direct, encouraging, step by step)
- optional practical constraints: **PASS** (travel, safer contact, call-script support)
- deterministic “Start here / What to say / Before traveling / Backup / Why” response: **PASS**
- urgency-aware dignity-first acknowledgement: **PASS**
- original guide rules retained as expandable additional doorways: **PASS**
- local-only `oneDoorGuideV2` state with `oneDoorGuideV1` migration: **PASS**
- no automatic provider contact or location transmission: **PASS**
- no sensitive free-text copied into the guide response: **PASS**
- hosted browser interaction verification: **PASS** (deployed main tested with optional preferences, generated response, and no console warnings)

### 2026-10-20 readable typography
- all 76 declared `font-size` rules increased by 3px: **PASS**
- explicit 600–850 weights softened to medium 500; body and controls default to 400: **PASS**
- no duplicate IDs after the type-scale pass: **PASS**
- inline JavaScript syntax: **PASS**
- deployed desktop typography and layout inspection: **PASS** (body 19px, no horizontal overflow)
- responsive/mobile breakpoint rules retained for the narrow layout: **PASS**
- personalized guide action after the typography pass: **PASS**
- page runtime warnings/errors: **NONE** (browser-extension metadata noise excluded)

The typography verification was committed on `main` at `9d93c3be8006b68124a5154ad61bdf5c1ecdea80`; GitHub Pages deployment and the post-deploy browser check completed successfully. A real-device keyboard/screen-reader pass remains recommended for final assistive-technology certification.

### 2026-10-20 safety, CSP, and navigation hardening
- Quick Exit clears only One Door-owned guide and planner keys before redirect: **PASS**
- broad `localStorage.clear()` / `sessionStorage.clear()` calls: **NONE**
- CSP-blocked external support-script tag removed: **PASS**
- external script tags remaining under the local-first CSP: **NONE**
- malformed duplicate typography marker removed: **PASS**
- inline JavaScript syntax after the hardening pass: **PASS**
- primary navigation exposes immediate, nearby, guide, Hope, resources, funding, My Path, tools, letters, and network: **PASS**
- every primary navigation anchor resolves to an existing section: **PASS**
- duplicate static IDs after navigation expansion: **NONE**
- deployed visual and interaction check: **PASS** (latest main rendered at 19px/400 body text, retained the guide action, exposed the three new navigation links, and had no horizontal overflow)
