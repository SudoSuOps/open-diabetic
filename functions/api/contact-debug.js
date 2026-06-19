export async function onRequestGet({ env }) {
  return new Response(JSON.stringify({
    ok: true,
    has_RESEND_API_KEY: Boolean(env.RESEND_API_KEY),
    has_CONTACT_FROM_EMAIL: Boolean(env.CONTACT_FROM_EMAIL),
    has_CONTACT_TO_EMAIL: Boolean(env.CONTACT_TO_EMAIL),
    visible_keys: Object.keys(env).filter((key) => key.startsWith('CONTACT_') || key === 'RESEND_API_KEY').sort(),
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}
