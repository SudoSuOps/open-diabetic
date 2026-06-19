# OpenDiabetic

OpenDiabetic Foundation is a privacy-first diabetic compute foundation focused on local ownership, diabetic records, reminders, vetted local resources, research workloads, developer tooling, and future edge/NAS-based personal health vaults. It does not harvest diabetic data.

Contact: `build@opendiabetic.com`  
X: https://x.com/opendiabetics

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

## Contact Form Email Setup

The contact form posts to a Cloudflare Pages Function at `/api/contact`. It sends the message to `build@opendiabetic.com`, sets the visitor's email as `Reply-To`, and sends a confirmation email back to the visitor.

Configure these Cloudflare Pages environment variables:

```text
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=OpenDiabetic <build@opendiabetic.com>
CONTACT_TO_EMAIL=build@opendiabetic.com
```

`CONTACT_FROM_EMAIL` defaults to `OpenDiabetic <build@opendiabetic.com>` in code if omitted, but that sender/domain must be verified with the email provider. The form is for general interest only and warns visitors not to submit private medical details or emergency requests.

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
