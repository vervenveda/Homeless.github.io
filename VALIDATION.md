# VALIDATION.md

## One Door · No Wrong Door — Hope + Geolocator v2

### Original system preservation
- Verve N Veda tools: **12/12 preserved**
- original outside resources: **13/13 preserved**
- expanded public/nonprofit resource registry: **21**
- network cards: **8/8 preserved**
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

### Hope / NAIB
- dedicated Hope adult-resource-mentor section: **PASS**
- explicit NAIB workspace link: **PASS**
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

### Static code
- inline JavaScript blocks checked with Node: **1 — PASS**
- duplicate static IDs: **NONE**
- broken static in-page anchors: **NONE**
- canonical Verve network URLs: **PASS**
- deployed-browser visual test: **NOT CLAIMED**


### Navigation and link-integrity follow-up — October 2026
- Skip-to-immediate-help link present and targets the immediate-help section: **PASS**
- Mobile navigation retains expanded-state, Escape-to-close, outside-click close, and focus return: **PASS by source inspection**
- Active navigation item follows the visible section when IntersectionObserver is supported: **PASS by source inspection**
- Static duplicate IDs: **NONE**
- Static in-page anchors without matching IDs: **NONE**
- PROSE editorial-suite link points to the actual nested repository path: **PASS by repository-tree inspection**
- Career Star and standalone budget-calculator links no longer claim unavailable standalone routes; cards direct to the Academy landing page and explain the limitation: **PASS by repository-tree inspection**
- Browser-side `auditOneDoor()` scope is explicitly described: **PASS** — URL allowlist and duplicate checks only; no HTTP requests or destination-file checks
- Nearby Map Search privacy disclosure explains that clicking opens Google Maps and shares the query: **PASS**
- Quick Exit limitation is disclosed: **PASS** — leaves the current page but cannot erase browser history
- Live HTTP checks of every deployed route and all outside resources: **NOT COMPLETED**
- Cross-device browser/keyboard/screen-reader test: **NOT CLAIMED**

Note: “configured destination” and “listed resource” are not equivalent to a live, working destination. The separate browser-level link checker remains a future improvement.
