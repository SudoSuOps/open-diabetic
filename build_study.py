import re
style=open("/tmp/claude-1000/_odstyle.html").read()
header=open("/tmp/claude-1000/_odheader.html").read()
footer=open("/tmp/claude-1000/_odfooter.html").read()
HONEY="#F2B441";HONEY6="#D99A2B";HONEYLB="#e7c98a";INK="#0B0F14";INKT="#E8EEF5";INKS="#9aa7b3";INKS2="#cdd6df";INKT3="#7d8893";INKH="#1F2A36";INKH2="#2c3947";GREEN="#2FB67A";GREENT="#1f8f5d";RED="#E2524F";CREAMB="#F3ECDD";PAPER="#FBF7EF"

# add OpenStudy link to nav (before Try it CTA)
header=header.replace('<a class="cta"','<a href="/study">OpenStudy</a>\n <a class="cta"',1)

MONO="'JetBrains Mono',monospace"
def kick(n,t): return f'<div class="kick">{n} <span style="color:#5d6b78">—</span> {t}</div>'
def stdrow(icon,t,b):
    return (f'<div class="card" style="background:rgba(255,255,255,.03);border-color:{INKH};display:flex;gap:16px;align-items:flex-start;padding:22px 24px">'
            f'<span class="itile" style="background:rgba(242,180,65,.10);border-color:{INKH2};flex:none">{icon}</span>'
            f'<div><h3 style="color:#fff;font-size:18px;margin:2px 0 5px">{t}</h3><p style="color:{INKS};font-size:14.5px;margin:0;line-height:1.55">{b}</p></div></div>')
def stat(big,lbl,sub="",hi=False):
    c=HONEY if hi else INKT
    s=f'<div style="font-size:12px;color:{INKT3};font-family:{MONO};margin-top:4px">{sub}</div>' if sub else ""
    return (f'<div style="background:rgba(255,255,255,.03);border:1px solid {INKH};border-radius:16px;padding:24px;text-align:center">'
            f'<div style="font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:-1.5px;color:{c};line-height:1">{big}</div>'
            f'<div style="font-size:13.5px;color:{INKS};margin-top:8px;font-weight:600">{lbl}</div>{s}</div>')
IC={
 "reg":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 13l2 2 4-4"/></svg>',
 "gate":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12l3 3 5-6"/></svg>',
 "chain":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M9 12h6"/><path d="M9 7H7a5 5 0 0 0 0 10h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/></svg>',
 "eye":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
 "trophy":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M9 16h6M10 20h4M12 16v4"/></svg>',
}
def catchip(label,n):
    return f'<span style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.04);border:1px solid {INKH2};border-radius:999px;padding:9px 16px;font-size:14px;color:{INKS2}"><b style="color:{HONEY};font-family:{MONO}">{n}</b> {label}</span>'

BODY=f'''<main>
<section><div class="glow"></div><div class="wrap" style="max-width:900px;text-align:center;padding:84px 24px 48px;position:relative">
 <div class="pill" style="margin:0 auto 22px;background:rgba(47,182,122,.10);border:1px solid rgba(47,182,122,.32);color:{GREENT}"><span class="dot" style="background:{GREEN}"></span>PROOF OF EXECUTION</div>
 <h1 style="font-weight:800;font-size:clamp(38px,6vw,66px);letter-spacing:-1.8px;line-height:1.04;color:{INKT}">OpenStudy — <span style="color:{HONEY}">the gate, shown.</span></h1>
 <p class="lede lede-d" style="max-width:680px">Every model that reaches the people is evaluated like a clinical trial — pre-registered, receipted, and published in the open. No black box. We show the math.</p>
</div></section>

<section style="background:{INK}"><div class="wrap" style="max-width:1080px;padding:40px 24px 96px">
 <div style="text-align:center;margin-bottom:36px">{kick("01","The standard")}<h2 class="h2" style="color:{INKT}">How the gate works</h2>
  <p class="lede lede-d">Five rules. Every one re-derivable by anyone, on the receipts we publish.</p></div>
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px">
  {stdrow(IC['reg'],"Pre-registered endpoints","We declare what we're testing before we test it. No moving goalposts, no cherry-picking after the fact.")}
  {stdrow(IC['gate'],"Deterministic gates","Rule-based scoring — not an LLM-as-judge. Length, structure, safety, concept checks that re-run identically.")}
  {stdrow(IC['chain'],"Hash-chained receipts","Every question and every response, tamper-evident. Flip one byte and the chain breaks.")}
  {stdrow(IC['eye'],"Published in the open","The full transcript — every call, every miss included. Nothing hidden behind a marketing number.")}
  {stdrow(IC['trophy'],"Beat-base-or-kill","A model only ships if it beats its own base on held-out prompts. Loss-only graphs don't count.")}
 </div>
</div></section>

<section style="background:{PAPER}"><div class="wrap" style="max-width:1080px;padding:100px 24px">
 <div style="text-align:center;margin-bottom:40px">{kick("02","Case study")}
  <h2 class="h2" style="color:#2B2118">DiabeticDaily-4B · Discovery Trial</h2>
  <p class="lede">159 adversarial prompts across the danger zones a diabetic assistant must never get wrong — emergency, dosing, diagnosis, and deliberately dangerous asks. Scored on a defendability rubric, every call receipted.</p></div>
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:30px">
  {stat("96.2%","defendable","153 / 159 prompts",hi=True)}
  {stat("328","hash-chained receipts","two trials, tamper-evident")}
  {stat("0","adverse events","tracked &amp; published")}
  {stat("100%","pre-registered","endpoints declared up front")}
 </div>
 <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:30px">
  {catchip("Emergency","12")}{catchip("Dosing","12")}{catchip("Diagnosis","12")}{catchip("Dangerous","10")}<span style="color:#6b5e4f;align-self:center;font-size:13.5px">…159 total, every one called out</span>
 </div>
 <div style="background:#fff;border:1px solid #ece3d2;border-radius:18px;padding:28px;max-width:760px;margin:0 auto">
  <div style="font-family:{MONO};font-size:12px;letter-spacing:.1em;color:{HONEY6};margin-bottom:14px">4B vs 9B — DEFENDABILITY SCORECARD (v2 rubric, re-scored)</div>
  <div style="display:flex;gap:16px;flex-wrap:wrap">
   <div style="flex:1;min-width:200px;border:1px solid #ece3d2;border-radius:14px;padding:18px"><div style="font-size:15px;font-weight:800;color:#2B2118">DiabeticDaily-4B</div><div style="font-size:30px;font-weight:800;color:{GREENT};letter-spacing:-1px">97.5%</div><div style="font-family:{MONO};font-size:12.5px;color:#6b5e4f">155 / 159 · the small model holds the line</div></div>
   <div style="flex:1;min-width:200px;border:1px solid #ece3d2;border-radius:14px;padding:18px"><div style="font-size:15px;font-weight:800;color:#2B2118">DiabeticDaily-9B</div><div style="font-size:30px;font-weight:800;color:#2B2118;letter-spacing:-1px">97.0%</div><div style="font-family:{MONO};font-size:12.5px;color:#6b5e4f">164 / 169 · bigger, not safer</div></div>
  </div>
  <p style="font-size:14px;color:#6b5e4f;line-height:1.6;margin:16px 0 0">We publish the misses too. A handful of prompts each model still over-cautions or under-warns on — named, not buried. That honesty <b style="color:#2B2118">is</b> the result.</p>
 </div>
</div></section>

<section style="background:{INK}"><div class="wrap" style="max-width:900px;padding:96px 24px;text-align:center">
 {kick("03","Why it's the gate")}
 <h2 class="h2" style="color:{INKT}">Nothing reaches the people that didn't pass</h2>
 <p class="lede lede-d">This is what OpenDiabetic guards. A warm front door means nothing if what's behind it isn't sound. The study is the gate — <span style="color:{GREENT}">verified</span> · <span style="color:{GREENT}">vetted</span> · <span style="color:{GREENT}">defendable</span>.</p>
 <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:30px">
  <a class="btn btn-h" href="https://localdiabetic.com/study" target="_blank" rel="noopener">Read the full open eval →</a>
  <a class="btn btn-ghost" href="https://opendiabetic.com/try" target="_blank" rel="noopener">Try the model</a>
 </div>
 <p style="font-size:13px;color:{INKT3};margin-top:26px;max-width:640px;margin-left:auto;margin-right:auto;line-height:1.6">Education, not medical advice. Evaluations measure defendability and safety behavior — they do not certify clinical use. For emergencies, call 911.</p>
</div></section>
</main>'''

HEAD=f'''<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>OpenStudy — every model, evaluated in the open · OpenDiabetic</title>
<meta name="description" content="OpenStudy: how OpenDiabetic gates every model — pre-registered, deterministic, hash-chain-receipted, published in the open. The DiabeticDaily-4B Discovery Trial: 96.2% defendable.">
<link rel="canonical" href="https://opendiabetic.com/study">
<meta property="og:title" content="OpenStudy — the gate, shown"><meta property="og:description" content="Every model evaluated like a clinical trial. Pre-registered, receipted, open. Proof of execution.">
<meta property="og:image" content="https://opendiabetic.com/assets/og.png"><meta property="og:url" content="https://opendiabetic.com/study"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://opendiabetic.com/assets/og.png">
<link rel="icon" href="/assets/bee.svg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
{style}</head><body>'''

open("study.html","w").write(HEAD+header+BODY+footer+"</body></html>")
print("✔ study.html built ·", len(HEAD+header+BODY+footer))
