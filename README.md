# One Door · No Wrong Door — Hope + Geolocator v2.2

This is a single-file, local-first homelessness and stability resource portal.

Upload `index.html` over the existing page. The `docs/` files are optional reference documentation.

No backend, API key or account is required for the geolocation feature. Location is requested only by explicit user action and is kept in tab memory only.

## Verification

From a local clone, run the deterministic contract audit:

```sh
node scripts/audit-links.mjs
```

To follow every literal HTTP(S) route and verify redirects/statuses as well:

```sh
node scripts/audit-links.mjs --online
```

The audit checks landmarks, named choice groups, duplicate IDs, stale route slugs, and inline JavaScript syntax before the optional live URL sweep.

The guided intake now offers optional response style and practical-constraint preferences. It generates a compassionate, deterministic response with a first action, a call script, travel checks, a backup doorway, and a transparent reason for the suggestion. These preferences remain local to the browser and never contact a provider.

See:
- `VALIDATION.md`
- `CHANGELOG.md`
- `docs/RESOURCE_RESEARCH.md`
- `docs/HOPE_MENTOR_HANDOFF.md`
