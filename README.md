# OpenDiabetic

OpenDiabetic Foundation is a privacy-first diabetic compute foundation focused on local ownership, diabetic records, reminders, vetted local resources, research workloads, developer tooling, and future edge/NAS-based personal health vaults. It does not harvest diabetic data.

This repo contains the first public landing page for OpenDiabetic.com. It is intentionally static: no backend, no login, no patient data collection, no diagnosis, and no fake form submission.

## Strategy Docs

- `docs/core_strategy.md` defines the OpenDiabetic Foundation positioning, product doctrine, compute roles, and data ownership principle.
- `docs/market_research_assignment.md` defines the expanded research assignment for the Diabetic Compute Infrastructure Market.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Static deployment on Cloudflare Pages

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
