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
