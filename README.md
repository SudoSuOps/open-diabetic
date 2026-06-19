# OpenDiabetic

OpenDiabetic Foundation is a privacy-first diabetic compute foundation focused on local ownership, diabetic records, reminders, vetted local resources, research workloads, developer tooling, and future edge/NAS-based personal health vaults. It does not harvest diabetic data.

Contact: `build@opendiabetic.com`  
X: https://x.com/opendiabetics

This repo contains the first public landing page for OpenDiabetic.com. It is intentionally static: no backend, no login, no patient data collection, no diagnosis, and no fake form submission.

## Strategy Docs

- `docs/medical_dataset_nas_audit.md` defines the NAS medical dataset audit, developer access, and fine-tune dataset workflow.
- `datasets/catalog.json` is the curated dataset catalog used by the CLI.
- `datasets/medical_catalog.json` is the deduped OpenDiabetic medical dataset catalog.
- `docs/medical_dataset_devops_flow.md` defines the medical dataset ML training and review workflow.
- `docs/compute_grants.md` defines the developer compute grant process.
- `public/datasets-for-developers.html` is the public dataset access doctrine page.
- `docs/synology_edge_appliance_install_plan.md` defines the LocalDiabetic Synology NAS edge appliance research and install plan.
- `public/synology-nas-install-guide.md` is the public step-by-step Synology NAS setup guide served at `/synology-nas-install-guide.html`, with Markdown source at `/synology-nas-install-guide.md`.
- `docs/core_strategy.md` defines the OpenDiabetic Foundation positioning, product doctrine, compute roles, and data ownership principle.
- `docs/market_research_assignment.md` defines the expanded research assignment for the Diabetic Compute Infrastructure Market.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Static deployment on Cloudflare Pages

## Dataset CLI

The dataset CLI audits local/NAS datasets without copying raw medical data into git.

```bash
npm run datasets -- list
npm run datasets -- show nhanes
npm run datasets -- init-nas /mnt/swarm/opendiabetic-datasets
npm run datasets -- audit /mnt/swarm --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-YYYYMMDD --shard-size 10000
```

Local audit and staging outputs under `data/` are ignored by git.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Cloudflare Pages Deployment

1. Push this repo to GitHub.
2. Open the Cloudflare dashboard.
3. Go to **Workers & Pages**.
4. Select **Create application**.
5. Choose **Pages**.
6. Select **Import Git repository**.
7. Choose the OpenDiabetic repository.
8. Use framework preset: **Vite**.
9. Set build command: `npm run build`.
10. Set build output directory: `dist`.
11. Deploy.
12. Add the custom domain: `opendiabetic.com`.

## SEO and GEO Layer

The site includes an end-to-end static SEO/GEO foundation:

- Canonical metadata for `https://opendiabetic.com`
- Open Graph and Twitter/X card metadata
- Organization, WebSite, and FAQPage JSON-LD structured data
- Public FAQ content for answer engines
- `public/sitemap.xml`
- `public/robots.txt`
- `public/llms.txt` for AI answer engines
- `public/ai.txt` concise AI-readable positioning summary
- `public/humans.txt`
- `public/og-image.svg` social preview asset

OpenDiabetic content should be indexed as a public mission and product site, but the site explicitly states that OpenDiabetic does not provide medical advice, diagnosis, treatment, medication guidance, or emergency care.

## Contact Model

The current public homepage uses direct `mailto:` links to `build@opendiabetic.com`. There is no active contact form backend, no login, no database, and no patient data collection path.

If a form is reintroduced later, it must keep the same medical-safety posture: no emergency requests, no private medical details, no diagnosis/treatment workflow, clear consent, and minimal data collection.

## Security Headers

Static security headers are configured in `public/_headers` for Cloudflare Pages.

## Medical Disclaimer

OpenDiabetic does not provide medical advice. Always consult licensed medical professionals for diagnosis, treatment, medication, and emergency care.

## Repository Notes

The requested remote is:

```text
git@github.com:SudoSuOps/open-diabetic.git
```

If SSH access is configured, push with:

```bash
git remote add origin git@github.com:SudoSuOps/open-diabetic.git
git push -u origin main
```

## Kimi Core Strategy Import

The Kimi-generated OpenDiabetic Core Strategy package is unpacked under `docs/kimi_core_strategy/`. Selected figures are published under `public/research/`, and the public markdown strategy brief is served at `/open-diabetic-core-strategy.md`.

The landing page now includes a research-backed strategy section summarizing the report into implementation priorities: structural trust moat, four-tier compute architecture, developer sustainability, privacy-preserving research, and the near-term product roadmap.

## X Bio

Privacy-first diabetic compute for everyday life 🐝
Local data, trusted AI, NAS vaults, reminders, care packs & real-world support.

## Future Roadmap

- DiabeticOS printable toolkit
- Care pack pilot
- Vendor and volunteer intake forms
- Local resource directory
- Local vault prototype
- Apple Watch reminder workflows
- Developer SDK
- Research compute credits
- LocalDiabetic pilot node

## Brand Assets

OpenDiabetic now includes a bee-led two-tone logo system:

- `public/brand/opendiabetic-mark.svg` - square bee mark for avatars, app icons, and small placements.
- `public/brand/opendiabetic-logo-horizontal.svg` - primary logo with two-tone `OpenDiabetic` wordmark.
- `public/brand/opendiabetic-logo-stacked.svg` - stacked logo for social cards, documents, and slides.
- `public/favicon.svg` - browser favicon using the bee mark.
- `public/og-image.svg` - social preview image.
- `src/components/BrandLogo.tsx` - reusable React wordmark component used in the header and footer.
- `public/brand/brand-guidelines.md` - color and usage notes.

Brand color roles: deep teal for `Open`, honey gold for `Diabetic`, honey accent for warmth, and soft off-white backgrounds for public-good trust. The bee should be used as a warm signature, not as a medical claim or childish visual system.
