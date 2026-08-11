# RESOURCE_RESEARCH.md

Research snapshot: August 2026

## Personal and local assistance
- HUD Find Shelter — shelter, food pantries, health clinics, clothing, and Continuum of Care pathways.
- 211 — local human-services coordination.
- Feeding America — local food-bank locator.
- National Community Action Partnership — Community Action Agency locator.
- Volunteers of America — service navigator by ZIP/city.
- Goodwill — thrift/service locator and separate career-center locator.
- The Salvation Army — location search by city/ZIP and service filters including shelters, food, thrift and financial help.
- CareerOneStop / American Job Centers — free local job-search and training support.
- Legal Services Corporation — local civil legal-aid finder.
- Dress for Success — local network member, interview attire and employment-support programs for women where available.
- HRSA, SAMHSA, USDA SNAP, USA.gov, VA, 988, National Domestic Violence Hotline and National Runaway Safeline — preserved from the original page.

## Funding distinction
The portal intentionally separates direct personal help from provider funding.

HUD Continuum of Care and Emergency Solutions Grants are primarily program/provider/public-entity funding mechanisms. A person seeking help typically accesses services through funded local agencies rather than applying to HUD for personal cash.

Funding links included:
- HUD Continuum of Care Competition
- HUD Funding Opportunities
- Simpler.Grants / Grants.gov
- Community Services Block Grant service pathway via local Community Action Agencies

## Location architecture
No paid map API or reverse-geocoding service is used.
The page:
1. asks for browser geolocation only after a button press;
2. keeps coordinates in JavaScript memory only;
3. can alternatively use a manually entered city/state/ZIP;
4. builds outbound Google Maps search URLs;
5. never stores coordinates in localStorage;
6. never silently transmits location to Hope / NAIB.

Provider availability must be verified directly before travel.
