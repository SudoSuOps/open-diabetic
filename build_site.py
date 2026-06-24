#!/usr/bin/env python3
# Build opendiabetic.com index.html from the Claude Design handoff spec (recreated clean,
# no support.js scaffolding). One self-contained static page. Sibling-tight with LocalDiabetic.
import re

HONEY="#F2B441"; HONEY6="#D99A2B"; HONEYLB="#e7c98a"; HONEYTL="#a8741a"
PAPER="#FBF7EF"; CREAMB="#F3ECDD"; CARDC="#FBF0D8"; COCOA="#2B2118"; INK="#0B0F14"
BODY="#473b2d"; SEC="#6b5e4f"; MUTE="#9b8d7b"; HAIR="#ece3d2"; HBORD="#F0DCA8"
INKT="#E8EEF5"; INKS="#9aa7b3"; INKS2="#cdd6df"; INKT3="#7d8893"; INKT4="#5d6b78"
INKH="#1F2A36"; INKH2="#2c3947"; SEP="#3a4654"; GREEN="#2FB67A"; GREENT="#1f8f5d"; RED="#E2524F"

_n=[0]
def bee(w,h,ink=COCOA,wing="#FCE4B0",head=COCOA,eye=PAPER,cls=""):
    _n[0]+=1; i="b%d"%_n[0]
    c=(' class="%s"'%cls) if cls else ""
    return (f'<svg{c} width="{w}" height="{h}" viewBox="0 0 120 132" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">'
      f'<path d="M54 20 C48 6 41 3 34 5" stroke="{ink}" stroke-width="4.2" stroke-linecap="round"/><path d="M66 20 C72 6 79 3 86 5" stroke="{ink}" stroke-width="4.2" stroke-linecap="round"/>'
      f'<circle cx="33" cy="5" r="4.4" fill="{HONEY}" stroke="{ink}" stroke-width="3"/><circle cx="87" cy="5" r="4.4" fill="{HONEY}" stroke="{ink}" stroke-width="3"/>'
      f'<ellipse cx="36" cy="54" rx="19" ry="26" fill="{wing}" stroke="{ink}" stroke-width="4.2" transform="rotate(-24 36 54)"/><ellipse cx="84" cy="54" rx="19" ry="26" fill="{wing}" stroke="{ink}" stroke-width="4.2" transform="rotate(24 84 54)"/>'
      f'<rect x="40" y="44" width="40" height="72" rx="20" fill="{HONEY}" stroke="{ink}" stroke-width="4.2"/>'
      f'<g clip-path="url(#{i})"><rect x="36" y="66" width="48" height="12" fill="{ink}"/><rect x="36" y="90" width="48" height="12" fill="{ink}"/></g><clipPath id="{i}"><rect x="40" y="44" width="40" height="72" rx="20"/></clipPath>'
      f'<circle cx="60" cy="31" r="17" fill="{head}"/><circle cx="53" cy="29" r="3.4" fill="{eye}"/><circle cx="67" cy="29" r="3.4" fill="{eye}"/></svg>')

def kick(n,t): return f'<div class="kick">{n} <span style="color:{INKT4}">—</span> {t}</div>'

# ---- charter cards (sec 3) ----
def flag(live):
    if live: return f'<span class="flag flag-live"><span class="dot" style="background:{GREEN}"></span>LIVE</span>'
    return f'<span class="flag flag-build"><span class="dot" style="background:{HONEY6}"></span>BUILDING</span>'
def card3(icon,title,body,live=True,gate=False):
    if gate:
        return (f'<div class="card gate"><div class="cardtop"><span class="itile gate-itile">{icon}</span>'
                f'<span class="flag" style="background:rgba(242,180,65,.12);border-color:rgba(242,180,65,.4);color:{HONEYLB}">THE GATE</span></div>'
                f'<h3 style="color:#fff">{title}</h3><p style="color:#b8a98f">{body}</p></div>')
    return (f'<div class="card"><div class="cardtop"><span class="itile">{icon}</span>{flag(live)}</div>'
            f'<h3>{title}</h3><p>{body}</p></div>')

IC={
 "open":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/><line x1="13" y1="5" x2="11" y2="19"/></svg>',
 "shield":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 "chip":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
 "book":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h7M8 11h7"/></svg>',
 "target":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></svg>',
 "check":'<svg viewBox="0 0 24 24" fill="none" stroke="#F2B441" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 "car":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13v5h-2v-2H7v2H5z"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>',
 "shoe":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M3 16h15a3 3 0 0 0 3-3c0-1-1-1.6-2.5-2-2-.5-3.5-1.5-5-3.5L12 9 8 7v9H3z"/><path d="M3 16v2h18v-2"/></svg>',
 "heartline":'<svg viewBox="0 0 24 24" fill="none" stroke="#D99A2B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M3 12h4l2-5 3 9 2-4h7"/></svg>',
}

# ---- get-involved cards (sec 9) ----
def involve(dark,icon,title,body,link,linktxt,blank=True):
    cls="inv inv-dark" if dark else "inv"
    tg=' target="_blank" rel="noopener"' if blank else ""
    return (f'<a class="{cls}" href="{link}"{tg}><span class="itile">{icon}</span>'
            f'<h3>{title}</h3><p>{body}</p><span class="invlink">{linktxt} →</span></a>')

# ---- flywheel node ----
def node(x,y,num,label,sub="",hi=False):
    cls="fnode fnode-hi" if hi else "fnode"
    s=f'<span class="fsub">{sub}</span>' if sub else ""
    return f'<div class="{cls}" style="left:{x}%;top:{y}%"><span class="fnum">{num}</span><span class="flbl">{label}</span>{s}</div>'

STYLE = f"""
:root{{--ink:{INK};--paper:{PAPER};--honey:{HONEY};}}
*{{box-sizing:border-box}}
html{{scroll-behavior:smooth}}
body{{margin:0;background:{INK};color:{INKT};font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased}}
a{{color:inherit}}
h1,h2,h3{{margin:0}}
.wrap{{margin:0 auto;padding:0 24px}}
.kick{{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:{HONEY6};font-weight:600;margin-bottom:18px}}
.kick-d{{color:{HONEYLB}}}
.lede{{font-size:18px;line-height:1.6;color:{SEC};max-width:660px;margin:18px auto 0}}
.lede-d{{color:{INKS}}}
.h2{{font-weight:800;font-size:clamp(28px,4.4vw,46px);letter-spacing:-1.1px;line-height:1.12}}
/* header */
header{{position:sticky;top:0;z-index:50;background:rgba(11,15,20,.82);backdrop-filter:blur(12px);border-bottom:1px solid {INKH}}}
header .row{{max-width:1180px;margin:0 auto;padding:13px 24px;display:flex;align-items:center;justify-content:space-between;gap:24px}}
header nav{{display:flex;align-items:center;gap:24px;font-size:14.5px;font-weight:500;color:{INKS}}}
header nav a{{text-decoration:none;transition:color .2s}}
header nav a:hover{{color:{HONEY}}}
.brand{{display:flex;align-items:center;gap:11px;text-decoration:none}}
.brand b{{font-size:19px;letter-spacing:-.3px}}
.cta{{background:{HONEY};color:#1a1205;font-weight:800;padding:9px 18px;border-radius:11px;text-decoration:none;box-shadow:0 6px 16px -9px rgba(217,154,43,.8)}}
.btn{{display:inline-block;font-weight:800;padding:13px 24px;border-radius:12px;text-decoration:none;font-size:15.5px}}
.btn-h{{background:{HONEY};color:#1a1205;box-shadow:0 8px 24px -8px rgba(242,180,65,.6)}}
.btn-ghost{{background:rgba(255,255,255,.05);border:1px solid {INKH2};color:{INKS2}}}
.btn-ghost:hover{{border-color:{HONEY}}}
section{{position:relative;overflow:hidden}}
.glow{{position:absolute;left:50%;top:8%;width:1100px;height:900px;transform:translateX(-50%);pointer-events:none;background:radial-gradient(circle,rgba(242,180,65,.22) 0%,rgba(242,180,65,.06) 42%,transparent 66%);animation:od-pulse 7s ease-in-out infinite}}
.pill{{display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:12px;border-radius:999px;padding:7px 14px}}
.chip{{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.04);border:1px solid {INKH2};border-radius:999px;padding:9px 15px;font-size:13.5px;color:{INKS2}}}
/* cards */
.card,.inv{{background:{PAPER};border:1px solid {HAIR};border-radius:18px;padding:28px;transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s}}
.card:hover,.inv:hover,.mcard:hover{{transform:translateY(-5px);box-shadow:0 24px 48px -28px rgba(0,0,0,.55)}}
.card h3{{font-size:20px;font-weight:800;color:{COCOA};margin:16px 0 8px}}
.card p{{font-size:15.5px;line-height:1.55;color:{SEC};margin:0}}
.card.gate{{background:{COCOA};border-color:{COCOA}}}
.cardtop{{display:flex;align-items:flex-start;justify-content:space-between}}
.itile{{width:46px;height:46px;border-radius:13px;background:{CARDC};border:1px solid {HBORD};display:flex;align-items:center;justify-content:center}}
.gate-itile{{background:rgba(242,180,65,.14);border-color:rgba(242,180,65,.3)}}
.flag{{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.06em;border-radius:999px;padding:5px 11px;display:inline-flex;align-items:center;gap:6px}}
.flag-live{{background:rgba(47,182,122,.12);border:1px solid rgba(47,182,122,.4);color:{GREENT}}}
.flag-build{{background:rgba(217,154,43,.12);border:1px solid {HBORD};color:{HONEYTL}}}
.dot{{width:7px;height:7px;border-radius:50%}}
.mcard{{background:#fff;border:1px solid {HAIR};border-radius:16px;padding:24px;transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s}}
.mcard h4{{font-size:17px;font-weight:800;color:{COCOA};margin:14px 0 6px}}
.mcard p{{font-size:14px;line-height:1.55;color:{SEC};margin:0}}
/* engine bars */
.rig{{background:rgba(255,255,255,.03);border:1px solid {INKH};border-radius:22px;padding:32px}}
.bars{{display:flex;align-items:flex-end;gap:8px;height:120px;margin:22px 0}}
.bar{{flex:1;background:linear-gradient(180deg,{HONEY},{HONEY6});border-radius:5px;transform-origin:bottom;animation:od-rig 2.4s ease-in-out infinite}}
.specrow{{display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:13px;padding:11px 0;border-top:1px solid #1a2430}}
.specrow .l{{color:{INKT3}}}
/* involve */
.inv{{display:block;text-decoration:none}}
.inv h3{{font-size:19px;font-weight:800;color:{COCOA};margin:14px 0 7px}}
.inv p{{font-size:14.5px;line-height:1.55;color:{SEC};margin:0 0 14px}}
.inv .invlink{{font-family:'JetBrains Mono',monospace;font-size:13px;color:{HONEY6};font-weight:600}}
.inv-dark{{background:{COCOA};border-color:{COCOA}}}
.inv-dark h3{{color:#fff}} .inv-dark p{{color:#b8a98f}} .inv-dark .invlink{{color:{HONEY}}}
/* flywheel */
.fly{{position:relative;width:min(580px,100%);aspect-ratio:1/1;margin:40px auto 0}}
.fnode{{position:absolute;transform:translate(-50%,-50%);background:rgba(255,255,255,.04);border:1px solid {INKH2};border-radius:14px;padding:12px 16px;text-align:center;min-width:120px}}
.fnode-hi{{background:rgba(242,180,65,.12);border-color:rgba(242,180,65,.4)}}
.fnum{{display:block;font-family:'JetBrains Mono',monospace;font-size:12px;color:{HONEY6}}}
.flbl{{display:block;font-size:14px;font-weight:700;color:{INKT};margin-top:2px}}
.fsub{{display:block;font-family:'JetBrains Mono',monospace;font-size:10.5px;color:{INKT3};margin-top:3px}}
.fcenter{{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}}
/* firewall */
.fw{{background:#fff;border:1px solid {HAIR};border-radius:24px;overflow:hidden;display:grid;grid-template-columns:1fr auto 1fr;box-shadow:0 2px 6px rgba(43,33,24,.04),0 40px 80px -54px rgba(43,33,24,.5)}}
.fwcol{{padding:30px 26px}}
.fwmid{{width:200px;background:{INK};color:{INKT};position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:30px 18px}}
.fwmid:before{{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(242,180,65,.16),transparent 65%)}}
.fwmid>*{{position:relative}}
.monorow{{font-family:'JetBrains Mono',monospace;font-size:12.5px;display:flex;align-items:center;gap:9px;padding:7px 0;color:{SEC}}}
.sq{{width:9px;height:9px;border-radius:2px;flex:none}}
/* one house */
.house{{display:grid;grid-template-columns:1fr auto 1fr;gap:22px;align-items:center;margin-top:40px}}
.hcard{{border-radius:22px;padding:32px}}
.hcard.od{{background:{INK};border:1px solid {INKH}}}
.hcard.ld{{background:{PAPER};border:1px solid {HAIR}}}
/* footer */
footer{{background:{INK};border-top:1px solid {INKH}}}
footer .in{{max-width:1140px;margin:0 auto;padding:72px 24px 44px}}
footer a{{text-decoration:none;color:{INKS};transition:color .2s}} footer a:hover{{color:{HONEY}}}
.eco a{{color:{INKS}}} .sepdot{{color:{SEP};margin:0 8px}}
/* animations */
@keyframes od-pulse{{0%,100%{{opacity:.6}}50%{{opacity:1}}}}
@keyframes od-float{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-7px)}}}}
@keyframes od-rig{{0%,100%{{transform:scaleY(.55)}}50%{{transform:scaleY(1)}}}}
.float{{animation:od-float 6s ease-in-out infinite}}
@media (max-width:720px){{.fw,.house{{grid-template-columns:1fr}}.fwmid{{width:auto}}.two{{grid-template-columns:1fr !important}}}}
@media (prefers-reduced-motion:reduce){{.glow,.float,.bar{{animation:none}}}}
"""

barsHTML="".join(f'<span class="bar" style="animation-delay:{i*0.3:.1f}s"></span>' for i in range(8))

flynodes = (
 node(50,13.33,"01","Our compute")+
 node(81.75,31.67,"02","R&D")+
 node(81.75,68.33,"03","Bounties","build · fundraise · give-back",hi=True)+
 node(50,86.67,"04","Vetted resources")+
 node(18.25,68.33,"05","The people")+
 node(18.25,31.67,"06","More compute")
)

# ---------- assemble ----------
HEAD=f'''<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>OpenDiabetic — The first dedicated diabetic-compute-engine</title>
<meta name="description" content="OpenDiabetic — a founder-led, self-funded, NVIDIA-Blackwell-powered diabetic-compute-engine. Compute in, help out. The foundation that makes LocalDiabetic possible.">
<link rel="canonical" href="https://opendiabetic.com/">
<meta property="og:title" content="OpenDiabetic — The first dedicated diabetic-compute-engine">
<meta property="og:description" content="Powered by NVIDIA Blackwell. Self-funded. Built for them. Compute in, help out.">
<meta property="og:url" content="https://opendiabetic.com/"><meta property="og:type" content="website">
<meta property="og:image" content="https://opendiabetic.com/assets/og.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://opendiabetic.com/assets/og.png">
<link rel="icon" type="image/svg+xml" href="/favicon/bee.svg"><link rel="icon" href="/assets/bee.svg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{STYLE}</style></head><body>'''

HEADER=f'''<header><div class="row">
 <a class="brand" href="/">{bee(30,33)}<b><span style="font-weight:600;color:{INKT}">Open</span><span style="font-weight:800;color:{HONEY}">Diabetic</span></b></a>
 <nav><a href="#why">The why</a><a href="#engine">The engine</a><a href="#trust">Trust</a><a href="#sibling">LocalDiabetic</a><a href="/study">OpenStudy</a>
 <a class="cta" href="https://opendiabetic.com/try" target="_blank" rel="noopener">Try it</a></nav>
</div></header>'''

HERO=f'''<section><div class="glow"></div>
 <div class="wrap" style="max-width:940px;text-align:center;padding-top:78px;padding-bottom:84px;position:relative">
  <div class="float" style="display:flex;justify-content:center">{bee(68,75)}</div>
  <div class="pill" style="margin:26px auto 22px;background:rgba(242,180,65,.10);border:1px solid rgba(242,180,65,.32);color:{HONEYLB}">POWERED BY NVIDIA BLACKWELL · SELF-FUNDED</div>
  <h1 style="font-weight:800;font-size:clamp(38px,5.8vw,66px);letter-spacing:-1.8px;line-height:1.04;color:{INKT}">The first dedicated <span style="color:{HONEY}">diabetic-compute-engine.</span></h1>
  <p style="font-size:19px;font-weight:600;color:{INKS2};margin:26px auto 6px;max-width:720px">Diabetes is a 24/7 job. You don't have to carry it alone.</p>
  <p style="font-size:18px;color:{INKS};margin:0 auto;max-width:760px;line-height:1.6">Win big — every day. Not someday. We own the machines, point them at the disease, and turn what they earn into real help. Built for them.</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:28px 0">
   <span class="chip">{IC['heartline']}<span style="color:{INKS2}">Lived &amp; scarred</span></span>
   <span class="chip">{IC['chip']}<span style="color:{INKS2}">NVIDIA Blackwell</span></span>
   <span class="chip">{IC['shield']}<span style="color:{INKS2}">Self-funded · no VC</span></span>
   <span class="chip">{IC['target']}<span style="color:{INKS2}">First of its kind</span></span>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
   <a class="btn btn-h" href="https://opendiabetic.com/try" target="_blank" rel="noopener">Try it today →</a>
   <a class="btn btn-ghost" href="#engine">See the engine</a>
  </div>
  <div class="monorow" style="justify-content:center;color:{INKT3};margin-top:30px;flex-wrap:wrap;gap:6px 18px">
   <span><span style="color:{GREEN}">●</span> LIVE <span style="color:{INKT3}">assistant · education · organization</span></span>
   <span style="color:{SEP}">|</span>
   <span><span style="color:{HONEYLB}">◐</span> BUILDING <span style="color:{INKT3}">ride network · shoe-shipping</span></span>
  </div>
 </div></section>'''

THESIS=f'''<section style="background:{CREAMB}"><div class="wrap" style="max-width:1000px;text-align:center;padding:80px 24px">
 <div class="kick">The thesis</div>
 <div style="font-weight:800;font-size:clamp(28px,4.6vw,52px);letter-spacing:-1.4px;line-height:1.12;color:{COCOA}">I live the disease. We own the <span style="color:{HONEY6}">machines</span>. So we point the machines at the <span style="color:{HONEY6}">disease</span>.</div>
</div></section>'''

# founder
P=lambda lead,rest:f'<p style="font-size:18px;line-height:1.74;color:{BODY};margin:0 0 20px">{lead}{rest}</p>'
FOUNDER=f'''<section id="why" style="background:{PAPER}"><div class="wrap" style="max-width:860px;padding:114px 24px">
 <div style="text-align:center;margin-bottom:40px">
  {kick("02","The why")}
  <h2 class="h2" style="color:{COCOA};font-size:clamp(30px,4.4vw,48px)">Built from my own scars.<br><span style="color:{HONEY6}">Powered by NVIDIA Blackwell.</span></h2>
 </div>
 <div style="max-width:660px;margin:0 auto;text-align:left">
  <p style="font-size:19px;line-height:1.74;color:{COCOA};margin:0 0 20px"><b>I'm Donovan. I'm a Type 1 diabetic</b> — and I built OpenDiabetic from the inside of it.</p>
  {P("","I know this disease the way you only know it once it's taken something. I've lost toes. More than a dozen surgeries on my feet. This month: fifteen days in a hospital bed, four surgeries, two more toes gone. I'm healing as I write this. Not for sympathy — because it's the whole reason this exists, and because if you're living it too, you are not the only one.")}
  {P("","Here's the other half — the half that wins:")}
  {P("","We know compute. Our own rigs, powered by NVIDIA Blackwell. Not rentals — our silicon, our electrons. We cook best-in-class models and we run the machines around the clock. This is the thing we're cracked at.")}
  {P("","And we built it the hard way: no VC. Self-funded. Real skin in the game. Nobody owns this mission but the people it serves — no investor to answer to, no exit to chase. I put my own money and my own machines behind it, the same way I've put my own body through this disease.")}
 </div>
 <div style="max-width:880px;margin:14px auto 14px;text-align:center">
  <div style="width:46px;height:3px;background:{HONEY};border-radius:2px;margin:0 auto 22px"></div>
  <div style="font-weight:800;font-size:clamp(26px,3.7vw,42px);letter-spacing:-1px;line-height:1.18;color:{COCOA}">I live the disease. We own the <span style="color:{HONEY6}">machines</span>. So we point the machines at the <span style="color:{HONEY6}">disease</span>.</div>
 </div>
 <div style="max-width:660px;margin:0 auto;text-align:left">
  {P("","We are the first dedicated diabetic-compute-engine — and the engine earns. The proceeds come back as the things people actually need: a ride to the doctor. Shoes that fit. The right thing, right time, no charge, no strings. We give people what they need, not what we happen to have. Dignity, not charity.")}
  {P("","Compute in, help out — every single day. The gift that keeps on giving.")}
 </div>
 <div style="max-width:880px;margin:14px auto 14px;text-align:center">
  <div style="width:46px;height:3px;background:{HONEY};border-radius:2px;margin:0 auto 22px"></div>
  <div style="font-weight:800;font-size:clamp(28px,4.2vw,48px);letter-spacing:-1.2px;line-height:1.12;color:{HONEY6}">Win big — every day. Not someday.</div>
 </div>
 <div style="max-width:660px;margin:0 auto 36px;text-align:left">
  {P("","I'm not waiting on a cure to start living, and neither should you. Every day you take care of yourself is a win. We've got the machines, the mission, and the scars to mean it. Let's stack the wins together.")}
 </div>
 <div style="display:flex;align-items:center;justify-content:center;gap:14px">
  {bee(42,46)}<div style="text-align:left"><div style="font-size:16.5px;font-weight:800;color:{COCOA}">— Donovan, founder</div><div style="font-size:13.5px;color:{SEC}">building one day at a time 🐝</div></div>
 </div>
</div></section>'''

WHATIS=f'''<section style="background:{CREAMB}"><div class="wrap" style="max-width:1140px;padding:104px 24px">
 <div style="text-align:center;margin-bottom:44px">{kick("03","What it is")}
  <h2 class="h2" style="color:{COCOA}">The foundation that makes LocalDiabetic <span style="color:{HONEY6}">possible</span></h2>
  <p class="lede">OpenDiabetic doesn't ship to your door — it makes sure what reaches you is worth trusting. The gatekeeper behind the warm front door.</p></div>
 <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(326px,1fr));gap:18px">
  {card3(IC['open'],"Open-source","Built in the open. The work is visible, forkable, and auditable — no black box.",True)}
  {card3(IC['shield'],"DefendableOS","Proof of execution. Every claim is receipted and re-derivable. Show the math, never trust-me-bro.",True)}
  {card3(IC['chip'],"R&amp;D on our own compute","Our rigs, our models. We do the research on silicon we own — pointed at diabetes.",True)}
  {card3(IC['book'],"Education board","Reviews, builds, and vets what gets made — so the deliverables are sound before they ship.",True)}
  {card3(IC['target'],"Bounty engine","Build-by-design → fundraise → give-back. Aligned competitions that fund real resources.",False)}
  {card3(IC['check'],"Verified · vetted · defendable","Nothing reaches the people that didn't pass the gate. Quality is the culture.",gate=True)}
 </div>
</div></section>'''

ENGINE=f'''<section id="engine" style="background:{INK}"><div class="glow" style="animation-duration:8s"></div>
 <div class="wrap" style="max-width:1080px;padding:108px 24px;position:relative">
  <div style="text-align:center;margin-bottom:40px">{kick("04","The engine")}
   <h2 class="h2" style="color:{INKT}">Our own silicon. Pointed at the <span style="color:{HONEY}">disease</span>.</h2>
   <p class="lede lede-d">NVIDIA Blackwell rigs on our own floor, running around the clock. Not rented — owned. The machines earn; the people win.</p></div>
  <div class="two" style="display:grid;grid-template-columns:1.1fr 1fr;gap:22px;align-items:stretch">
   <div class="rig">
    <div style="display:flex;align-items:center;gap:10px;font-family:'JetBrains Mono',monospace;font-size:13px;color:{HONEYLB};letter-spacing:.1em">{IC['chip']} THE RIG</div>
    <div class="bars">{barsHTML}</div>
    <div class="specrow" style="border-top:0"><span class="l">fabric</span><span style="color:{INKT}">NVIDIA Blackwell</span></div>
    <div class="specrow"><span class="l">silicon</span><span style="color:{INKT}">our own floor</span></div>
    <div class="specrow"><span class="l">uptime</span><span style="color:{GREEN}">around the clock</span></div>
    <div class="specrow"><span class="l">rented</span><span style="color:{INKT}">none</span></div>
    <div class="specrow"><span class="l">funded by</span><span style="color:{HONEY}">compute income · no VC</span></div>
   </div>
   <div style="display:flex;flex-direction:column;gap:14px;justify-content:center">
    <div style="background:rgba(255,255,255,.03);border:1px solid {INKH};border-radius:18px;padding:26px">
     <h3 style="font-size:21px;font-weight:800;color:#fff;margin:0 0 8px">The machines earn</h3>
     <p style="font-size:15.5px;color:{INKS};margin:0;line-height:1.55">Compute is real value. We sell it the honest way and keep the lights on without a hand out.</p></div>
    <div style="text-align:center;color:{HONEY};font-size:24px">↓</div>
    <div style="background:rgba(242,180,65,.10);border:1px solid rgba(242,180,65,.3);border-radius:18px;padding:26px">
     <h3 style="font-size:21px;font-weight:800;color:#fff;margin:0 0 8px">The people win</h3>
     <p style="font-size:15.5px;color:#cdbf9f;margin:0;line-height:1.55">Compute in, help out. Every day. The proceeds become rides, shoes, and the right thing at the right time.</p></div>
   </div>
  </div>
 </div></section>'''

MODEL=f'''<section style="background:{PAPER}"><div class="wrap" style="max-width:980px;padding:108px 24px;text-align:center">
 {kick("05","The model")}
 <h2 style="font-weight:800;font-size:clamp(30px,4.8vw,52px);letter-spacing:-1.4px;line-height:1.1;color:{COCOA}">Give people what they need, not what you <span style="color:{HONEY6}">have</span>.</h2>
 <p class="lede">It costs the people nothing — no charge, no strings. Self-funded, no VC, no investor to answer to. Dignity, not charity.</p>
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin:40px 0 28px;text-align:left">
  <div class="mcard"><div class="cardtop"><span class="itile">{IC['car']}</span>{flag(False)}</div><h4>A ride to the doctor</h4><p>Getting there shouldn't be the thing that stops care. We close that gap.</p></div>
  <div class="mcard"><div class="cardtop"><span class="itile">{IC['shoe']}</span>{flag(False)}</div><h4>Shoes that fit</h4><p>Diabetic footwear, shipped. Your feet are worth protecting — every day.</p></div>
  <div class="mcard"><div class="cardtop"><span class="itile">{IC['heartline']}</span>{flag(False)}</div><h4>The full continuum</h4><p>The right thing at the right time, across the whole journey — no charge.</p></div>
 </div>
 <div style="background:{CARDC};border:1px solid {HBORD};border-radius:14px;padding:20px 24px;font-size:16px;color:{COCOA};line-height:1.55">🐝 Funded by compute income, recycled as net straight back into the people. <b style="color:{HONEY6}">The gift that keeps on giving.</b></div>
</div></section>'''

FLY=f'''<section style="background:{INK}"><div class="wrap" style="max-width:1080px;padding:104px 24px">
 <div style="text-align:center">{kick("06","The flywheel")}
  <h2 class="h2" style="color:{INKT}">Compute in, <span style="color:{HONEY}">help</span> out — on a loop</h2>
  <p class="lede lede-d">No exit, no extraction. The proceeds of the machine come back to the people, and the people keep it spinning.</p></div>
 <div class="fly">
  <svg viewBox="0 0 600 600" style="position:absolute;inset:0;width:100%;height:100%">
   <circle cx="300" cy="300" r="220" fill="none" stroke="rgba(242,180,65,.34)" stroke-width="2" stroke-dasharray="3 9"/>
   {''.join(f'<g transform="translate({300+220*__import__("math").sin(__import__("math").radians(a)):.1f},{300-220*__import__("math").cos(__import__("math").radians(a)):.1f}) rotate({a})"><polygon points="0,-7 15,0 0,7" fill="{HONEY}"/></g>' for a in (30,90,150,210,270,330))}
  </svg>
  <div class="fcenter">{bee(62,68)}<div style="font-family:'JetBrains Mono',monospace;color:{HONEY};font-weight:700;margin-top:6px;letter-spacing:.1em">WIN BIG</div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:{INKT3};margin-top:3px">our compute, recycled as net</div></div>
  {flynodes}
 </div>
</div></section>'''

TRUST=f'''<section id="trust" style="background:{PAPER}"><div class="wrap" style="max-width:1080px;padding:108px 24px">
 <div style="text-align:center;margin-bottom:40px">{kick("07","The trust layer")}
  <h2 class="h2" style="color:{COCOA}">Your records never leave your <span style="color:{HONEY6}">home</span></h2>
  <p class="lede">Models flow down, receipts flow up — your data never crosses. The math is visible because there's no cap table to hide.</p></div>
 <div class="fw">
  <div class="fwcol">
   <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">{IC['shield']}<b style="color:{COCOA};font-size:17px">Your home</b></div>
   <p style="font-size:14px;color:{SEC};margin:0 0 16px;line-height:1.5">LocalDiabetic, on a box in your house. PHI stays put.</p>
   <div class="monorow"><span class="sq" style="background:{RED}"></span>glucose_logs <span style="color:{MUTE}">· PHI</span></div>
   <div class="monorow"><span class="sq" style="background:{RED}"></span>foot_photos <span style="color:{MUTE}">· PHI</span></div>
   <div class="monorow"><span class="sq" style="background:{RED}"></span>medications <span style="color:{MUTE}">· PHI</span></div>
  </div>
  <div class="fwmid">
   <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;color:{HONEYLB}">FIREWALL</div>
   <div class="monorow" style="color:{GREEN}">models →</div>
   <div class="monorow" style="color:{GREEN}">← receipts</div>
   <div style="width:40px;height:40px;border:2px solid {RED};border-radius:50%;display:flex;align-items:center;justify-content:center;color:{RED};font-size:20px">⦸</div>
   <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:{RED};text-align:center">PHI never crosses</div>
  </div>
  <div class="fwcol" style="background:{CREAMB}">
   <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">{bee(26,29)}<b style="color:{COCOA};font-size:17px">The hive · OpenDiabetic</b></div>
   <p style="font-size:14px;color:{SEC};margin:0 0 16px;line-height:1.5">The compute foundation. Sees models and receipts — never you.</p>
   <div class="monorow"><span class="sq" style="background:{GREEN}"></span>model_v4.gguf <span style="color:{GREEN}">↓</span></div>
   <div class="monorow"><span class="sq" style="background:{GREEN}"></span>receipt: ok <span style="color:{GREEN}">↑</span></div>
   <div class="monorow" style="border:1px dashed {HAIR};border-radius:9px;padding:7px 10px;margin-top:8px">sig 0xA7F3…9C2 · verified ✓</div>
  </div>
 </div>
 <div style="text-align:center;margin-top:24px;font-family:'JetBrains Mono',monospace;font-size:13px;color:{SEC}"><span style="color:{GREENT}">verified</span> · <span style="color:{GREENT}">vetted</span> · <span style="color:{GREENT}">defendable</span> · proof of execution</div>
</div></section>'''

HOUSE=f'''<section id="sibling" style="background:{CREAMB}"><div class="wrap" style="max-width:1080px;padding:104px 24px">
 <div style="text-align:center">{kick("08","One house")}
  <h2 class="h2" style="color:{COCOA}">OpenDiabetic &amp; <span style="color:{HONEY6}">LocalDiabetic</span></h2>
  <p class="lede">Two surfaces, one mission. The foundation and the front door.</p></div>
 <div class="house">
  <div class="hcard od">{bee(34,37,ink=INKT,wing="#3a3526",head=INKT,eye=INK)}
   <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;color:{HONEYLB};margin:14px 0 10px">THE FOUNDATION · THE GATEKEEPER</div>
   <p style="color:{INKS};font-size:15px;line-height:1.6;margin:0">OpenDiabetic builds the compute, runs the R&amp;D, and guards the gate — so every deliverable is verified, vetted, and defendable.</p></div>
  <div style="text-align:center;color:{HONEY}"><div style="font-size:26px">⇌</div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:{INKT3};margin-top:4px;letter-spacing:.12em">SIBLINGS</div></div>
  <div class="hcard ld">{bee(34,37)}
   <div style="font-size:18px;margin:14px 0 0"><span style="font-weight:600;color:{COCOA}">Local</span><span style="font-weight:800;color:{HONEY6}">Diabetic</span></div>
   <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;color:{HONEY6};margin:8px 0 10px">THE WARM FRONT DOOR</div>
   <p style="color:{SEC};font-size:15px;line-height:1.6;margin:0 0 12px">The home vault, the bee on your shoulder. Simple, warm, built for real life.</p>
   <a href="https://localdiabetic.com" target="_blank" rel="noopener" style="color:{HONEY6};font-weight:700;text-decoration:underline">Visit LocalDiabetic →</a></div>
 </div>
</div></section>'''

INVOLVE=f'''<section id="start" style="background:{PAPER}"><div class="wrap" style="max-width:1080px;padding:108px 24px">
 <div style="text-align:center;margin-bottom:40px">{kick("09","Get involved")}
  <h2 class="h2" style="color:{COCOA}">Pick up a corner of the <span style="color:{HONEY6}">load</span></h2>
  <p class="lede">Try it, give compute, run a bounty, or back the mission. Every hand helps carry the day.</p></div>
 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:18px">
  {involve(True,IC['target'],"Try it","The assistant and the education board are live today.","https://opendiabetic.com/try","Open the assistant")}
  {involve(False,IC['chip'],"Contribute compute","Point a GPU or spare cycles at the engine — cycles become care.","mailto:build@opendiabetic.com?subject=Contribute%20compute","Email us",blank=False)}
  {involve(False,IC['target'],"Join a bounty","Build by design, fundraise, give back. Aligned with the mission.","mailto:build@opendiabetic.com?subject=Join%20a%20bounty","Email us",blank=False)}
  {involve(False,IC['heartline'],"Support the mission","Help fund a ride, a pair of shoes, the right thing at the right time.","mailto:build@opendiabetic.com?subject=Support%20the%20mission","Email us",blank=False)}
 </div>
 <p style="text-align:center;font-size:13.5px;color:{MUTE};margin-top:30px;max-width:680px;margin-left:auto;margin-right:auto;line-height:1.6">OpenDiabetic educates and organizes — it is <b style="color:{SEC}">education, not medical advice</b>, and does not replace your doctor. For emergencies, call 911.</p>
</div></section>'''

XGLYPH='<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="vertical-align:-2px"><path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-4.86-6.36L5.2 22H1.94l8.02-9.17L1.5 2h7.06l4.39 5.81zm-1.21 18h1.81L7.04 3.9H5.1z"/></svg>'
FOOTER=f'''<footer><div class="in">
 <div style="display:flex;align-items:center;gap:11px">{bee(30,33,ink=INKT,wing="#3a3526",head=INKT,eye=INK)}<b style="font-size:19px"><span style="font-weight:600;color:{INKT}">Open</span><span style="font-weight:800;color:{HONEY}">Diabetic</span></b></div>
 <p style="color:{INKS};font-size:15px;line-height:1.6;max-width:620px;margin:16px 0 26px">The first dedicated diabetic-compute-engine. Powered by NVIDIA Blackwell, self-funded, built for them. Compute in, help out. 🐝</p>
 <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;color:{INKT4};margin-bottom:10px">THE ECOSYSTEM</div>
 <div class="eco" style="font-size:14.5px;margin-bottom:18px"><a href="https://localdiabetic.com">localdiabetic.com</a><span class="sepdot">·</span><a href="https://diabeticmodels.com">diabeticmodels.com</a><span class="sepdot">·</span><a href="https://diabeticdatasets.com">diabeticdatasets.com</a><span class="sepdot">·</span><a href="https://diabeticdonate.com">diabeticdonate.com</a><span class="sepdot">·</span><a href="https://diabeticnode.com">diabeticnode.com</a></div>
 <div style="font-size:14px;color:{INKS};margin-bottom:26px">DefendableOS<span class="sepdot">·</span>Proof of Execution<span class="sepdot">·</span><a href="https://opendiabetic.com/try">opendiabetic.com/try</a></div>
 <div style="border-top:1px solid {INKH};padding-top:22px;font-size:14px;color:{INKS}">
  <a href="mailto:build@opendiabetic.com">build@opendiabetic.com</a><span class="sepdot">·</span><a href="https://x.com/opendiabetic" target="_blank" rel="noopener">{XGLYPH} @opendiabetic</a><span class="sepdot">·</span>Jupiter, Florida</div>
 <div style="font-size:13px;color:{INKT4};margin-top:16px;line-height:1.6">Owned &amp; operated by Swarm and Bee LLC<br>© 2026 · "Give people what they need, not what you have."</div>
</div></footer>'''

HTML=HEAD+HEADER+HERO+THESIS+FOUNDER+WHATIS+ENGINE+MODEL+FLY+TRUST+HOUSE+INVOLVE+INVOLVE.replace('id="start"','id="start2"') if False else HEAD+HEADER+HERO+THESIS+FOUNDER+WHATIS+ENGINE+MODEL+FLY+TRUST+HOUSE+INVOLVE+FOOTER+"</body></html>"
open("index.html","w").write(HTML)
print("✔ index.html built ·", len(HTML), "bytes · sections: hero/thesis/founder/whatis/engine/model/flywheel/trust/house/involve/footer")
