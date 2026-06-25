style=open("/tmp/claude-1000/_odstyle.html").read()
header=open("/tmp/claude-1000/_odheader.html").read()
footer=open("/tmp/claude-1000/_odfooter.html").read()
HONEY="#F2B441";HONEY6="#D99A2B";HONEYLB="#e7c98a";INK="#0B0F14";INKT="#E8EEF5";INKS="#9aa7b3";INKT3="#7d8893";INKH="#1F2A36";INKH2="#2c3947";GREEN="#2FB67A";GREENT="#1f8f5d";PAPER="#FBF7EF";COCOA="#2B2118";SEC="#6b5e4f";MUTE="#9b8d7b";HAIR="#ece3d2"
MONO="'JetBrains Mono',monospace"
# add DailyOpen to nav (after OpenStudy if present, else before cta)
if '/study' in header: header=header.replace('<a href="/study">OpenStudy</a>','<a href="/study">OpenStudy</a><a href="/open">DailyOpen</a>',1)
else: header=header.replace('<a class="cta"','<a href="/open">DailyOpen</a>\n <a class="cta"',1)
def kick(n,t): return f'<div class="kick">{n} <span style="color:#5d6b78">—</span> {t}</div>'
def tile(big,lbl,sub,href="",hi=False):
    c=HONEY if hi else INKT
    inner=(f'<div style="font-size:clamp(40px,6vw,60px);font-weight:800;letter-spacing:-2px;color:{c};line-height:1">{big}</div>'
           f'<div style="font-size:15px;color:#fff;font-weight:700;margin-top:8px">{lbl}</div>'
           f'<div style="font-size:12.5px;color:{INKT3};font-family:{MONO};margin-top:6px;line-height:1.45">{sub}</div>')
    style_=f'background:rgba(255,255,255,.03);border:1px solid {INKH};border-radius:18px;padding:28px 26px;display:block;text-decoration:none;transition:transform .28s cubic-bezier(.2,.7,.2,1),border-color .28s'
    if href: return f'<a href="{href}" target="_blank" rel="noopener" class="otile" style="{style_}">{inner}<div style="font-family:{MONO};font-size:11.5px;color:{HONEY6};margin-top:12px">verify →</div></a>'
    return f'<div class="otile" style="{style_}">{inner}</div>'

BODY=f'''<main>
<section><div class="glow"></div><div class="wrap" style="max-width:920px;text-align:center;padding:84px 24px 40px;position:relative">
 <div class="pill" style="margin:0 auto 22px;background:rgba(47,182,122,.10);border:1px solid rgba(47,182,122,.32);color:{GREENT}"><span class="dot" style="background:{GREEN}"></span>PROOF OF EXECUTION</div>
 <h1 style="font-weight:800;font-size:clamp(38px,6vw,64px);letter-spacing:-1.8px;line-height:1.04;color:{INKT}">DailyOpen — <span style="color:{HONEY}">the numbers, in the open.</span></h1>
 <p class="lede lede-d" style="max-width:680px">No black box. The evals, the datasets, the compute, the receipts — counted in public, and every figure links to its proof. We show the math.</p>
 <div style="font-family:{MONO};font-size:12.5px;color:{INKT3};margin-top:14px">snapshot · 2026-06-24 · updated as we publish</div>
</div></section>

<section style="background:{INK}"><div class="wrap" style="max-width:1080px;padding:30px 24px 90px">
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
  {tile("96.2%","Latest model defendability","153/159 adversarial prompts · DiabeticDaily-4B","https://opendiabetic.com/study",hi=True)}
  {tile("3.36M","Training pairs donated to the commons","99 packages · ~$50K appraised · PII-scrubbed","https://diabeticdatasets.com")}
  {tile("328","Hash-chained eval receipts","tamper-evident · flip one byte, the chain breaks","https://opendiabetic.com/study")}
  {tile("194 GB","VRAM on our own floor","2× NVIDIA Blackwell · owned, not rented")}
  {tile("$250","A Bee on a Jetson","4B model running on-box at the edge · records never leave home",hi=True)}
  {tile("+57%","Best cook vs its base","DiabeticAnchor-27B · held-out perplexity")}
  {tile("#14","DiabeticLedger receipt","the dataset donation, recorded on-chain","https://diabeticledger.com")}
 </div>
</div></section>

<section style="background:{PAPER}"><div class="wrap" style="max-width:900px;padding:96px 24px">
 <div style="text-align:center;margin-bottom:34px">{kick("01","How we count")}<h2 class="h2" style="color:{COCOA}">Every number, receipted</h2>
  <p class="lede">A figure with no receipt is a marketing number. Here's the rule.</p></div>
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px">
  <div style="background:#fff;border:1px solid {HAIR};border-radius:16px;padding:24px"><div style="font-weight:800;color:{COCOA};font-size:16px;margin-bottom:6px">Re-derivable</div><p style="font-size:14px;color:{SEC};margin:0;line-height:1.55">Every stat links to its source — an eval transcript, a ledger entry, a scorecard. Recompute it yourself.</p></div>
  <div style="background:#fff;border:1px solid {HAIR};border-radius:16px;padding:24px"><div style="font-weight:800;color:{COCOA};font-size:16px;margin-bottom:6px">We publish the misses</div><p style="font-size:14px;color:{SEC};margin:0;line-height:1.55">The defendability score names where each model still slips — not buried, called out. Honesty is the number.</p></div>
  <div style="background:#fff;border:1px solid {HAIR};border-radius:16px;padding:24px"><div style="font-weight:800;color:{COCOA};font-size:16px;margin-bottom:6px">Dated snapshots</div><p style="font-size:14px;color:{SEC};margin:0;line-height:1.55">No live counter theater. Figures are point-in-time and stamped, updated when we publish new proof.</p></div>
 </div>
</div></section>

<section style="background:{INK}"><div class="wrap" style="max-width:900px;padding:30px 24px 70px">
 <div style="background:rgba(242,180,65,.08);border:1px solid rgba(242,180,65,.25);border-radius:18px;padding:26px 28px">
  <div style="font-family:{MONO};font-size:12px;letter-spacing:.12em;color:{HONEYLB};margin-bottom:10px">HONEST LEDGER · LIVE vs BUILDING</div>
  <p style="color:{INKS};font-size:15px;line-height:1.65;margin:0">
   <span style="color:{GREEN}">● LIVE &amp; counted:</span> model evals, donated datasets, owned compute, hash-chained receipts, the assistant.<br>
   <span style="color:{HONEYLB}">◐ BUILDING (not yet counted):</span> real-world gives — rides to the doctor, shoes shipped. The framework is built; we will not post a gives number until the gives are real. Never vaporware.
  </p></div>
 <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:30px">
  <a class="btn btn-h" href="https://diabeticledger.com" target="_blank" rel="noopener">Verify on the ledger →</a>
  <a class="btn btn-ghost" href="/study">Read OpenStudy</a>
 </div>
 <p style="text-align:center;font-size:12.5px;color:{INKT3};margin-top:24px;max-width:640px;margin-left:auto;margin-right:auto;line-height:1.6">Education, not medical advice. Figures describe research and operations, not clinical outcomes.</p>
</div></section>
</main>'''
SCHEMA='<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"DailyOpen — the numbers, in the open","url":"https://opendiabetic.com/open","isPartOf":{"@type":"WebSite","name":"OpenDiabetic","url":"https://opendiabetic.com"},"description":"OpenDiabetic transparency scoreboard: model evals (96.2% defendable), 3.36M donated training pairs, 328 hash-chained receipts, owned NVIDIA Blackwell compute — every figure receipted.","publisher":{"@type":"Organization","name":"Swarm and Bee LLC"}}</script>'
HEAD=f'''<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>DailyOpen — the numbers, in the open · OpenDiabetic</title>
<meta name="description" content="OpenDiabetic's transparency scoreboard: model evals, donated datasets, owned compute, and hash-chained receipts — every figure linked to its proof. Show the math.">
<link rel="canonical" href="https://opendiabetic.com/open">
<meta property="og:title" content="DailyOpen — the numbers, in the open"><meta property="og:description" content="Proof of execution: evals, datasets, compute, receipts — every figure receipted."><meta property="og:image" content="https://opendiabetic.com/assets/og.png"><meta property="og:url" content="https://opendiabetic.com/open"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://opendiabetic.com/assets/og.png">
<link rel="icon" href="/assets/bee.svg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
{SCHEMA}{style}</head><body>
<style>.otile:hover{{transform:translateY(-5px);border-color:rgba(242,180,65,.5) !important}}</style>'''
open("open.html","w").write(HEAD+header+BODY+footer+"</body></html>")
print("✔ open.html (DailyOpen) built ·", len(HEAD+header+BODY+footer))
