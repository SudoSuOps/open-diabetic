// Cloudflare Pages Function — POST /api/contact -> sends an email via Resend.
// Requires the env var RESEND_API_KEY (set in the Pages project settings).
// Sends from the verified opendiabetic.com domain to build@opendiabetic.com,
// with the submitter as reply-to so you can answer directly.

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });

const clean = (v, n) => String(v ?? "").trim().slice(0, n);
const looksEmail = (e) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

export async function onRequestPost({ request, env }) {
  let data;
  try { data = await request.json(); } catch { return json({ error: "bad request" }, 400); }

  const name = clean(data.name, 120);
  const email = clean(data.email, 160);
  const topic = clean(data.topic, 80) || "Contact";
  const message = clean(data.message, 4000);
  if (data.company) return json({ ok: true });            // honeypot: silently accept bots
  if (!looksEmail(email) || message.length < 2) return json({ error: "Please add a valid email and a message." }, 400);
  if (!env.RESEND_API_KEY) return json({ error: "Email isn't configured yet." }, 500);

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "OpenDiabetic <contact@opendiabetic.com>",
      to: ["build@opendiabetic.com"],
      reply_to: email,
      subject: `[OpenDiabetic] ${topic} — ${name || email}`,
      text: `New message from opendiabetic.com\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    }),
  });
  if (!r.ok) return json({ error: "Couldn't send right now — please email build@opendiabetic.com.", detail: (await r.text()).slice(0, 200) }, 502);
  return json({ ok: true });
}

export const onRequestGet = () => json({ ok: true, endpoint: "contact" });
