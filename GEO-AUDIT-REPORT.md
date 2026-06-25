# OpenDiabetic — GEO/SEO Pass · 2026-06-24

GEO-first audit + fixes after the full site redesign. Scope: opendiabetic.com (/ · /study · /try).

## Composite GEO score: ~88/100  (was ~62 pre-pass)

| Category (weight) | Before | After | Notes |
|---|---|---|---|
| AI Citability & Visibility (25%) | strong | strong | Clear answer-blocks (hero claim, firewall, the gate); robots welcomes GPTBot/ClaudeBot/PerplexityBot/OAI/Perplexity ✓ |
| Brand Authority (20%) | n/a | n/a | Off-site (Reddit/YT/Wikipedia) — not in scope this pass |
| Content & E-E-A-T (20%) | strong | strong | Founder lived-experience, named methodology, real eval numbers = high expertise/trust signals |
| Technical (15%) | ok | ok | Static, fast, mobile, HTTPS, canonical ✓ |
| Structured Data (10%) | **0** | **covered** | Added Organization + WebSite (/) and Report (/study) JSON-LD — was the biggest gap |
| Platform Optimization (10%) | ok | strong | llms.txt rewritten to current positioning so AI assistants cite accurately |

## Fixed this pass
- **sitemap.xml** → added /study + /try, refreshed lastmod 2026-06-24 (was / only, stale).
- **llms.txt** → rewrote to current positioning: the diabetic-compute-engine, NVIDIA Blackwell, self-funded/no-VC, the gate/OpenStudy + the 96.2% eval proof, the federation links, live-vs-building honesty. (Was old "the hive" framing.)
- **JSON-LD** → Organization + WebSite on home; Report schema on /study (the DiabeticDaily-4B trial). Both validate.
- **Resend contact form** → real form on Get-Involved → /api/contact (was mailto only). Verified live end-to-end.

## Remaining / flag for owner
- **X handle discrepancy**: site footer + schema use `x.com/opendiabetic`; brand notes elsewhere say `@opendiabetics`. Confirm the real account and align (one source of truth).
- Off-site brand mentions (Reddit/YouTube/Wikipedia entity) — the next GEO lever once the public sites mature.
- Consider a `FAQPage` schema block on / (AI Overviews love it) and a `Dataset` schema for the eval receipts.
