# One Door — Link and Navigation Audit

**Audit date:** October 2026  
**Scope:** Source and repository-tree inspection for `vervenveda/Homeless.github.io`, branch `audit/navigation-link-integrity`.

## Changes made

1. **Navigation orientation:** Added active-section styling and section tracking for the primary navigation. Preserved the existing responsive menu, Escape-to-close, outside-click close, and focus return.
2. **Destination integrity:** Updated the PROSE Editorial Suite URL to the nested path that exists in the ProReSources repository: `Protools/PROSE/Editorial Suite/editingsuite_index.html`.
3. **Unavailable standalone tools:** The current Academy repository tree contains Career Star source assets, but no standalone `Career_star_index.html`; no standalone `financial_budget_calculator_index.html` was found either. Both cards now link to the Academy landing page and disclose that the specific standalone route was not found. Restore the dedicated destinations when those pages are published.
4. **Honest status labels:** Removed language that implied that every internal route was live-verified. The catalog now distinguishes configured/listed destinations from actual reachability.
5. **Audit scope:** The in-page `auditOneDoor()` function checks duplicate records and URL allowlist policy. It does **not** send HTTP requests, check response status, or confirm that a file exists. The UI now says so explicitly.
6. **Location privacy:** The Near Me section explains that clicking Map Search opens Google Maps with the selected search area; precise browser coordinates can be part of that outbound query. Users who prefer not to share precise coordinates can enter a city or ZIP instead.
7. **Quick Exit clarity:** Added a visible limitation: Quick Exit navigates away but cannot erase browser history or guarantee privacy.

## Source-level checks after changes

- Duplicate static HTML IDs: **none found**
- Static in-page links with missing targets: **none found**
- Skip link to immediate help: **present**
- Active navigation tracking: **present**
- PROSE route uses the current nested repository path: **present**
- Old Career Star and budget-calculator standalone URLs: **removed**
- Browser audit explicitly says live destinations are not tested: **present**

## Still recommended

- Add an automated link checker that tests every curated URL on a schedule and records the check time, status, and redirect target.
- Keep “source policy allowed,” “HTTP reachable,” and “human-reviewed resource” as separate states.
- Manually test keyboard navigation, mobile menu behavior, browser history/Quick Exit expectations, and location disclosures on desktop and mobile.
- Assign a maintainer and review date to each public-service resource; check emergency and crisis contacts more frequently than general directory links.

## Limits

This is a source/repository-tree audit, not a full browser test. I have not claimed that every public destination is currently reachable, that provider capacity is available, or that the page has passed assistive-technology testing.
