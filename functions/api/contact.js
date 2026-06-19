const CONTACT_TO_EMAIL = 'build@opendiabetic.com'
const MAX_MESSAGE_LENGTH = 2000

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

function clean(value, max = 400) {
  return String(value || '').trim().slice(0, max)
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[char])
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function sendEmail(env, payload) {
  const apiKey = env.RESEND_API_KEY
  const from = env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    throw new Error('Email service is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL in Cloudflare Pages.')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Email provider rejected the message: ${errorText.slice(0, 240)}`)
  }
}

export async function onRequestPost({ request, env }) {
  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body.' }, 400)
  }

  const honeypot = clean(body.website, 200)
  if (honeypot) {
    return jsonResponse({ ok: true })
  }

  const name = clean(body.name, 120)
  const email = clean(body.email, 180).toLowerCase()
  const role = clean(body.role, 80)
  const message = clean(body.message, MAX_MESSAGE_LENGTH)

  if (!name || !email || !role || !message) {
    return jsonResponse({ error: 'Name, email, role, and message are required.' }, 400)
  }
  if (!isEmail(email)) {
    return jsonResponse({ error: 'Enter a valid email address.' }, 400)
  }

  const to = env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL
  const submittedAt = new Date().toISOString()
  const subject = `OpenDiabetic contact: ${role}`
  const text = [
    'New OpenDiabetic contact form message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Role: ${role}`,
    `Submitted: ${submittedAt}`,
    '',
    'Message:',
    message,
  ].join('\n')

  await sendEmail(env, {
    from: env.CONTACT_FROM_EMAIL,
    to,
    reply_to: email,
    subject,
    text,
    html: `<h2>New OpenDiabetic contact form message</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Role:</strong> ${escapeHtml(role)}</p><p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p><h3>Message</h3><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  })

  await sendEmail(env, {
    from: env.CONTACT_FROM_EMAIL,
    to: email,
    reply_to: to,
    subject: 'We received your OpenDiabetic message',
    text: `Hi ${name},\n\nThanks for reaching out to OpenDiabetic. We received your message and will reply from ${to}.\n\nPlease do not send private medical details through email. OpenDiabetic does not provide medical advice, diagnosis, treatment, medication guidance, or emergency care. For urgent or medical concerns, contact licensed medical professionals or emergency services.\n\n- OpenDiabetic`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out to OpenDiabetic. We received your message and will reply from <a href="mailto:${escapeHtml(to)}">${escapeHtml(to)}</a>.</p><p>Please do not send private medical details through email. OpenDiabetic does not provide medical advice, diagnosis, treatment, medication guidance, or emergency care. For urgent or medical concerns, contact licensed medical professionals or emergency services.</p><p>- OpenDiabetic</p>`,
  })

  return jsonResponse({ ok: true })
}

export async function onRequestOptions() {
  return jsonResponse({ ok: true })
}
