"use client";

import Script from "next/script";

const CSS = `
/* Reed Web Studio — single-file site CSS (ported) */
:root {
 --white: #ffffff;
 --off: #f8f7f4;
 --light: #f2f1ee;
 --border: #e8e5e0;
 --border2: #d4d0c8;
 --text: #1a1916;
 --text-mid: #4a4840;
 --text-lt: #888580;
 --amber: #d97706;
 --amber-lt: #f59e0b;
 --amber-bg: #fffbeb;
 --blue: #1d4ed8;
 --blue-lt: #3b82f6;
 --blue-bg: #eff6ff;
 --green: #059669;
 --green-bg: #ecfdf5;
 --purple: #7c3aed;
 --purple-bg: #f5f3ff;
 --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
 --shadow: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
 --shadow-lg: 0 20px 40px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04);
 --radius: 10px;
 --radius-lg: 16px;
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body {
 font-family: 'Plus Jakarta Sans', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
 background: var(--white);
 color: var(--text);
 line-height: 1.5;
 overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }
img { display: block; max-width: 100%; }
ul { list-style: none; }

nav {
 position: sticky;
 top: 0;
 z-index: 100;
 background: rgba(255,255,255,0.97);
 backdrop-filter: blur(12px);
 border-bottom: 1px solid var(--border);
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 40px;
 height: 60px;
 gap: 16px;
}
.nav-logo {
 font-size: 16px;
 font-weight: 700;
 color: var(--text);
 letter-spacing: -0.3px;
 white-space: nowrap;
 flex-shrink: 0;
}
.nav-links {
 display: flex;
 align-items: center;
 gap: 2px;
 flex-wrap: nowrap;
}
.nav-links a {
 font-size: 13px;
 font-weight: 500;
 color: var(--text-mid);
 padding: 6px 11px;
 border-radius: 6px;
 transition: all 0.15s;
 white-space: nowrap;
}
.nav-links a:hover,
.nav-links a.active { color: var(--text); background: var(--light); }
.nav-phone {
 font-size: 13px;
 font-weight: 600;
 color: var(--amber);
 white-space: nowrap;
 padding: 7px 14px;
 border: 1.5px solid var(--amber);
 border-radius: 8px;
 transition: all 0.15s;
 flex-shrink: 0;
}
.nav-phone:hover { background: var(--amber-bg); }

.page-header {
 padding: 56px 40px 48px;
 border-bottom: 1px solid var(--border);
 background: var(--off);
}
.page-tag {
 font-size: 11px;
 font-weight: 700;
 letter-spacing: 2px;
 text-transform: uppercase;
 color: var(--amber);
 margin-bottom: 10px;
}
.page-header h1 {
 font-size: 42px;
 font-weight: 800;
 letter-spacing: -1.5px;
 color: var(--text);
 line-height: 1.05;
 margin-bottom: 12px;
 max-width: 600px;
}
.page-header p {
 font-size: 16px;
 font-weight: 400;
 color: var(--text-mid);
 line-height: 1.65;
 max-width: 520px;
 margin-bottom: 28px;
}
.header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

.btn {
 display: inline-flex;
 align-items: center;
 gap: 6px;
 padding: 11px 20px;
 border-radius: var(--radius);
 font-size: 14px;
 font-weight: 600;
 border: none;
 cursor: pointer;
 transition: all 0.18s;
 white-space: nowrap;
 text-decoration: none;
}
.btn-dark { background: var(--text); color: #fff; }
.btn-dark:hover { background: #2d2b26; transform: translateY(-1px); box-shadow: var(--shadow); }
.btn-amber { background: var(--amber); color: #fff; }
.btn-amber:hover { background: #b45309; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(217,119,6,0.3); }
.btn-outline { background: var(--white); color: var(--text); border: 1.5px solid var(--border2); }
.btn-outline:hover { border-color: var(--text); background: var(--off); }
.btn-sm { padding: 8px 16px; font-size: 13px; }
.btn-full { width: 100%; justify-content: center; }
.btn-blue { background: var(--blue); color: #fff; }
.btn-blue:hover { background: #1e40af; transform: translateY(-1px); }
.btn-green { background: var(--green); color: #fff; }
.btn-green:hover { background: #047857; }

.section { padding: 56px 40px; }
.section-sm { padding: 32px 40px; }
.section-border { border-bottom: 1px solid var(--border); }
.sec-eyebrow {
 font-size: 11px;
 font-weight: 700;
 letter-spacing: 2px;
 text-transform: uppercase;
 color: var(--text-lt);
 margin-bottom: 6px;
}
.sec-title {
 font-size: 28px;
 font-weight: 800;
 letter-spacing: -0.8px;
 color: var(--text);
 margin-bottom: 6px;
}
.sec-sub {
 font-size: 15px;
 font-weight: 400;
 color: var(--text-mid);
 line-height: 1.65;
 max-width: 520px;
}

.process-grid {
 display: grid;
 grid-template-columns: repeat(4,1fr);
 gap: 1px;
 background: var(--border);
 border: 1px solid var(--border);
 border-radius: var(--radius-lg);
 overflow: hidden;
 margin-top: 32px;
}
.process-step { background: var(--white); padding: 28px 24px; transition: background 0.15s; }
.process-step:hover { background: var(--off); }
.step-num {
 font-size: 11px;
 font-weight: 700;
 letter-spacing: 2px;
 text-transform: uppercase;
 color: var(--amber);
 margin-bottom: 10px;
}
.step-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
.step-desc { font-size: 13px; font-weight: 400; color: var(--text-mid); line-height: 1.6; }

.pricing-grid {
 display: grid;
 grid-template-columns: repeat(2,1fr);
 gap: 16px;
 margin-top: 32px;
}
.pricing-card {
 background: var(--white);
 border: 1.5px solid var(--border);
 border-radius: var(--radius-lg);
 padding: 32px;
 display: flex;
 flex-direction: column;
 transition: all 0.2s;
 position: relative;
}
.pricing-card:hover { border-color: var(--border2); box-shadow: var(--shadow); transform: translateY(-2px); }
.pricing-card.featured { border-color: var(--blue-lt); box-shadow: 0 0 0 1px var(--blue-lt); }
.card-badge {
 display: inline-flex;
 align-items: center;
 gap: 5px;
 font-size: 11px;
 font-weight: 700;
 letter-spacing: 0.5px;
 padding: 4px 10px;
 border-radius: 20px;
 margin-bottom: 18px;
 width: fit-content;
}
.badge-amber { background: var(--amber-bg); color: var(--amber); border: 1px solid #fcd34d; }
.badge-blue { background: var(--blue-bg); color: var(--blue); border: 1px solid #93c5fd; }
.badge-purple{ background: var(--purple-bg); color: var(--purple); border: 1px solid #c4b5fd; }
.badge-green { background: var(--green-bg); color: var(--green); border: 1px solid #6ee7b7; }
.card-tier { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--text-lt); margin-bottom: 4px; }
.card-name { font-size: 22px; font-weight: 800; color: var(--text); letter-spacing: -0.5px; margin-bottom: 4px; }
.card-price { font-size: 40px; font-weight: 800; color: var(--text); letter-spacing: -2px; line-height: 1; margin-bottom: 2px; }
.card-price-note { font-size: 12px; color: var(--text-lt); margin-bottom: 16px; }
.card-desc { font-size: 13px; color: var(--text-mid); line-height: 1.65; margin-bottom: 20px; }
.card-features { flex: 1; margin-bottom: 24px; }
.card-features li {
 display: flex;
 align-items: flex-start;
 gap: 9px;
 font-size: 13px;
 color: var(--text-mid);
 padding: 7px 0;
 border-bottom: 1px solid var(--border);
 line-height: 1.5;
}
.card-features li:last-child { border-bottom: none; }
.feat-icon {
 width: 18px; height: 18px;
 border-radius: 50%;
 font-size: 10px;
 display: flex; align-items: center; justify-content: center;
 flex-shrink: 0;
 margin-top: 1px;
}
.fi-amber { background: var(--amber-bg); color: var(--amber); }
.fi-blue { background: var(--blue-bg); color: var(--blue); }
.fi-purple{ background: var(--purple-bg); color: var(--purple); }
.fi-green { background: var(--green-bg); color: var(--green); }
.card-actions { display: flex; flex-direction: column; gap: 8px; }

.mgmt-bar {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 20px;
 flex-wrap: wrap;
 background: var(--off);
 border: 1.5px solid var(--border);
 border-radius: var(--radius-lg);
 padding: 28px 32px;
 margin-top: 16px;
}
.mgmt-title { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 4px; letter-spacing: -0.3px; }
.mgmt-desc { font-size: 13px; color: var(--text-mid); line-height: 1.6; }
.mgmt-price { font-size: 28px; font-weight: 800; letter-spacing: -1px; color: var(--text); white-space: nowrap; }
.mgmt-price span { font-size: 14px; font-weight: 400; color: var(--text-lt); letter-spacing: 0; }

.gallery-intro { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 28px; flex-wrap: wrap; }
.gallery-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.gallery-card { border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--off); transition: all 0.2s; }
.gallery-card:hover { box-shadow: var(--shadow); transform: translateY(-2px); border-color: var(--border2); }
.gallery-img { width: 100%; aspect-ratio: 16/10; overflow: hidden; background: var(--light); }
.gallery-placeholder {
 width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
 flex-direction: column; gap: 8px; min-height: 180px; background: var(--light);
}
.gallery-placeholder-icon { font-size: 32px; opacity: 0.3; }
.gallery-placeholder-text { font-size: 12px; color: var(--text-lt); }
.gallery-body { padding: 18px 20px; }
.gallery-tag { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--amber); margin-bottom: 5px; }
.gallery-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 5px; letter-spacing: -0.2px; }
.gallery-desc { font-size: 12px; color: var(--text-mid); line-height: 1.6; }

.re-hero {
 background: var(--off);
 border-bottom: 1px solid var(--border);
 padding: 52px 40px;
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 60px;
 align-items: center;
}
.re-features { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 32px; }
.re-feature { background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 20px; transition: all 0.18s; }
.re-feature:hover { border-color: var(--border2); box-shadow: var(--shadow-sm); }
.re-feature-icon { font-size: 22px; margin-bottom: 8px; }
.re-feature-title { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.re-feature-desc { font-size: 12px; color: var(--text-mid); line-height: 1.6; }
.re-image-mock { background: var(--light); border-radius: var(--radius-lg); aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--text-lt); border: 1.5px solid var(--border); flex-direction: column; gap: 8px; }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.about-photo { background: var(--off); border: 1.5px solid var(--border); border-radius: var(--radius-lg); aspect-ratio: 4/5; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; font-size: 13px; color: var(--text-lt); }
.about-photo-icon { font-size: 40px; opacity: 0.25; }
.stat-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 32px; }
.stat-card { background: var(--off); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 20px; text-align: center; }
.stat-num { font-size: 32px; font-weight: 800; color: var(--text); letter-spacing: -1px; }
.stat-label { font-size: 12px; color: var(--text-lt); margin-top: 2px; }

.contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 56px; align-items: start; }
.contact-method { display: flex; align-items: center; gap: 14px; padding: 16px 20px; background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius); margin-bottom: 10px; transition: all 0.18s; cursor: pointer; text-decoration: none; color: var(--text); }
.contact-method:hover { border-color: var(--border2); box-shadow: var(--shadow-sm); background: var(--off); }
.cm-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--amber-bg); border: 1px solid #fcd34d; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.cm-label { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-lt); margin-bottom: 2px; }
.cm-val { font-size: 15px; font-weight: 700; color: var(--text); }

.contact-form-box { background: var(--off); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 32px; }
.contact-form-box h3 { font-size: 20px; font-weight: 800; color: var(--text); letter-spacing: -0.4px; margin-bottom: 4px; }
.contact-form-box p { font-size: 13px; color: var(--text-mid); margin-bottom: 22px; line-height: 1.6; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
.form-group label { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--text-lt); }
.form-group input,
.form-group textarea,
.form-group select {
 background: var(--white);
 border: 1.5px solid var(--border);
 border-radius: var(--radius);
 padding: 11px 14px;
 font-size: 14px;
 color: var(--text);
 outline: none;
 transition: border-color 0.15s;
 resize: vertical;
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-lt); }
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus { border-color: var(--amber); box-shadow: 0 0 0 3px rgba(217,119,6,0.08); }
.form-group textarea { min-height: 96px; }
.form-group select { appearance: none; cursor: pointer; }
.form-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
.form-note { font-size: 11px; color: var(--text-lt); }
.form-success-msg { display: none; background: var(--green-bg); border: 1px solid #6ee7b7; border-radius: var(--radius); padding: 14px 18px; font-size: 14px; color: var(--green); font-weight: 500; margin-top: 14px; }
.form-success-msg.show { display: block; }

.faq-list { max-width: 680px; margin-top: 28px; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-q { display: flex; align-items: center; justify-content: space-between; padding: 18px 0; cursor: pointer; font-size: 15px; font-weight: 600; color: var(--text); gap: 16px; user-select: none; background: none; border: none; width: 100%; text-align: left; }
.faq-q:hover { color: var(--amber); }
.faq-icon { width: 26px; height: 26px; border-radius: 50%; border: 1.5px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--text-lt); flex-shrink: 0; transition: all 0.2s; }
.faq-item.open .faq-icon { background: var(--text); border-color: var(--text); color: #fff; transform: rotate(45deg); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.2s; font-size: 14px; color: var(--text-mid); line-height: 1.75; }
.faq-item.open .faq-a { max-height: 200px; padding-bottom: 18px; }

.toast { position: fixed; bottom: 20px; right: 20px; background: var(--text); color: #fff; padding: 12px 18px; border-radius: var(--radius); font-size: 13px; font-weight: 600; z-index: 9999; opacity: 0; transform: translateY(16px); transition: all 0.22s; pointer-events: none; border-left: 3px solid var(--amber); max-width: 300px; box-shadow: var(--shadow); }
.toast.show { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
 nav { padding: 0 16px; }
 .nav-links { display: none; }
 .page-header, .section, .section-sm { padding-left: 16px; padding-right: 16px; }
 .page-header h1 { font-size: 30px; }
 .process-grid { grid-template-columns: 1fr 1fr; }
 .pricing-grid { grid-template-columns: 1fr; }
 .gallery-grid { grid-template-columns: 1fr; }
 .contact-grid { grid-template-columns: 1fr; gap: 28px; }
 .about-grid { grid-template-columns: 1fr; }
 .re-hero { grid-template-columns: 1fr; gap: 28px; }
 .re-features { grid-template-columns: 1fr 1fr; }
}
`;

// NOTE: Admin drawer/login removed intentionally (client-side passwords are not real security).
const HTML = `
<nav>
  <a href="#" onclick="showTab('services');return false;" class="nav-logo">Reed Web Studio</a>
  <div class="nav-links">
    <a href="#" onclick="showTab('services');return false;" class="">Home</a>
    <a href="#" class="active" onclick="showTab('services');return false;">Services</a>
    <a href="#" onclick="showTab('pricing');return false;">Pricing</a>
    <a href="#" onclick="showTab('portfolio');return false;">Portfolio</a>
    <a href="#" onclick="showTab('realestate');return false;">Real Estate</a>
    <a href="#" onclick="showTab('about');return false;">About</a>
    <a href="#" onclick="showTab('contact');return false;">Contact</a>
    <a href="#" onclick="showTab('payment');return false;">Payment</a>
    <a href="#" onclick="showTab('intake');return false;" style="color:var(--amber);font-weight:700">Start a Project</a>
    <a href="#" onclick="showTab('terms');return false;" style="color:var(--text-lt);font-size:12px">Terms</a>
  </div>
  <a href="tel:8583055764" class="nav-phone">📞 (858) 305-5764</a>
</nav>

<div class="tab-pane active" id="pane-services">
  <div class="page-header">
    <div class="page-tag">Reed Web Studio</div>
    <h1 id="srv-headline">Services</h1>
    <p id="srv-subhead">Pick the tier that matches your business. Each package is designed with a specific client type in mind — not a template swap.</p>
    <div class="header-actions">
      <a href="tel:8583055764" class="btn btn-dark">📞 Call or Text Charlie</a>
      <button class="btn btn-outline" onclick="showTab('contact')">Send a message</button>
    </div>
  </div>

  <div class="section section-border">
    <div class="sec-eyebrow">The process</div>
    <div class="sec-title">Simple. Fast. Done right.</div>
    <div class="process-grid">
      <div class="process-step"><div class="step-num">01 — Pick</div><div class="step-title">Choose your package</div><div class="step-desc">Pick the tier that fits your business type and goals. Not sure? Text Charlie — same-day reply.</div></div>
      <div class="process-step"><div class="step-num">02 — Pay</div><div class="step-title">Pay your deposit</div><div class="step-desc">Secure your project slot with a deposit via Stripe. Safe, fast, no account needed.</div></div>
      <div class="process-step"><div class="step-num">03 — Build</div><div class="step-title">I build, you review</div><div class="step-desc">Preview before anything goes live. Your input shapes the final product every step of the way.</div></div>
      <div class="process-step"><div class="step-num">04 — Launch</div><div class="step-title">Go live & convert</div><div class="step-desc">Your site launches and starts doing its job — attracting customers while you run your business.</div></div>
    </div>
  </div>

  <div class="section section-border">
    <div class="sec-eyebrow">Packages</div>
    <div class="sec-title">Clear starting points.</div>
    <div class="sec-sub">Final pricing depends on pages, features, and how custom you want the build.</div>

    <div class="pricing-grid" id="services-cards">
      <div class="pricing-card">
        <div class="card-badge badge-amber">⚡ Best for restaurants</div>
        <div class="card-tier">STARTER</div>
        <div class="card-name">Starter Site</div>
        <div class="card-price">$249<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time. Deposit secures your slot.</div>
        <div class="card-desc">A clean, affordable starter website for restaurants and food businesses that need a professional presence fast.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-amber">✓</span>Stylish landing page / section-based layout</li>
          <li><span class="feat-icon fi-amber">✓</span>Mobile-friendly design</li>
          <li><span class="feat-icon fi-amber">✓</span>Menu preview section</li>
          <li><span class="feat-icon fi-amber">✓</span>Location, hours, and contact section</li>
          <li><span class="feat-icon fi-amber">✓</span>Reservation or call-to-action button</li>
          <li><span class="feat-icon fi-amber">✓</span>Polished, on-brand design</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('intake');return false;" class="btn btn-dark btn-full">Get Started →</a>
          <button class="btn btn-outline btn-full btn-sm" onclick="showTab('pricing')">View pricing details</button>
        </div>
      </div>

      <div class="pricing-card featured">
        <div class="card-badge badge-blue">🏆 Most Popular · Best for real estate</div>
        <div class="card-tier">PRO</div>
        <div class="card-name">Pro Site</div>
        <div class="card-price">$399<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time. Deposit secures your slot.</div>
        <div class="card-desc">A polished, trust-building website for agents who want stronger branding, lead capture, and a premium look.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-blue">✓</span>3–5 strong sections or compact multi-section layout</li>
          <li><span class="feat-icon fi-blue">✓</span>Agent intro section</li>
          <li><span class="feat-icon fi-blue">✓</span>Buyer / seller call-to-actions</li>
          <li><span class="feat-icon fi-blue">✓</span>Featured listings preview</li>
          <li><span class="feat-icon fi-blue">✓</span>Testimonials section</li>
          <li><span class="feat-icon fi-blue">✓</span>Contact / lead capture form</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('intake');return false;" class="btn btn-blue btn-full">Get Started →</a>
          <button class="btn btn-outline btn-full btn-sm" onclick="showTab('pricing')">View pricing details</button>
        </div>
      </div>

      <div class="pricing-card">
        <div class="card-badge badge-purple">🏢 Full business presence</div>
        <div class="card-tier">BUSINESS</div>
        <div class="card-name">Business Site</div>
        <div class="card-price">$900<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time. Deposit secures your slot.</div>
        <div class="card-desc">A multi-page business website for companies that need a complete online presence and stronger conversion structure.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-purple">✓</span>Multi-page structure</li>
          <li><span class="feat-icon fi-purple">✓</span>Premium design + stronger branding</li>
          <li><span class="feat-icon fi-purple">✓</span>Lead-generation layout</li>
          <li><span class="feat-icon fi-purple">✓</span>More advanced sections</li>
          <li><span class="feat-icon fi-purple">✓</span>More custom strategy</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('intake');return false;" class="btn btn-dark btn-full">Get Started →</a>
          <button class="btn btn-outline btn-full btn-sm" onclick="showTab('pricing')">View pricing details</button>
        </div>
      </div>

      <div class="pricing-card">
        <div class="card-badge badge-green">🚀 Premium · High-conversion</div>
        <div class="card-tier">CUSTOM</div>
        <div class="card-name">Custom Lead Gen Build</div>
        <div class="card-price" style="font-size:26px;letter-spacing:-0.5px">Custom quote</div>
        <div class="card-price-note">Let's talk scope and timeline first.</div>
        <div class="card-desc">A fully custom build for businesses that want premium design, stronger positioning, and a serious sales system.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-green">✓</span>Custom design system</li>
          <li><span class="feat-icon fi-green">✓</span>Landing pages / campaigns</li>
          <li><span class="feat-icon fi-green">✓</span>Advanced integrations</li>
          <li><span class="feat-icon fi-green">✓</span>Conversion-focused copy structure</li>
          <li><span class="feat-icon fi-green">✓</span>Full strategy session included</li>
        </ul>
        <div class="card-actions">
          <a href="tel:8583055764" class="btn btn-green btn-full">📞 Call to Discuss →</a>
          <button class="btn btn-outline btn-full btn-sm" onclick="showTab('contact')">Send a message</button>
        </div>
      </div>
    </div>

    <div class="mgmt-bar">
      <div>
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:5px">Annual Plan</div>
        <div class="mgmt-title">Annual Website Management</div>
        <div class="mgmt-desc">Web hosting, email hosting, Supabase, and ongoing maintenance — all bundled. $100/yr.</div>
      </div>
      <div class="mgmt-price">$100<span>/yr</span></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a href="https://buy.stripe.com/test_3cI4gyeKA4ZU492aLhdfG04" target="_blank" class="btn btn-amber btn-sm">Pay $100/yr via Stripe</a>
        <button class="btn btn-outline btn-sm" onclick="showTab('contact')">Ask a question</button>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="sec-eyebrow">FAQ</div>
    <div class="sec-title">Common questions.</div>
    <div class="faq-list">
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">How long does a build take? <span class="faq-icon">+</span></button><div class="faq-a">All builds are completed in under 5 business days. Custom builds vary — we set a timeline in the kickoff call.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">What do I need to provide? <span class="faq-icon">+</span></button><div class="faq-a">Just your logo (if you have one), any photos, your menu or service list, and some info about your business. Charlie handles the rest — layout, copy direction, design, and launch.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Is there a monthly fee after launch? <span class="faq-icon">+</span></button><div class="faq-a">No recurring fee unless you add the annual management plan ($100/yr). That covers web hosting, email hosting, Supabase, and ongoing maintenance — everything bundled.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Can I make changes after launch? <span class="faq-icon">+</span></button><div class="faq-a">Minor tweaks within 2 weeks of launch are included. Ongoing changes are covered by the annual management plan ($100/yr), or Charlie can quote one-off updates.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Is Stripe payment secure? <span class="faq-icon">+</span></button><div class="faq-a">Yes — Stripe is fully encrypted and PCI-compliant. Your card info never touches Charlie's systems. Same platform used by millions of businesses.</div></div>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-pricing">
  <div class="page-header">
    <div class="page-tag">Pricing</div>
    <h1>Clear starting points.</h1>
    <p>Final pricing depends on pages, features, and how custom you want the build. Text your business type and timeline and Charlie will recommend the right route.</p>
    <div class="header-actions">
      <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark">Request a quote</a>
      <button class="btn btn-outline" onclick="showTab('payment')">Pay deposit</button>
    </div>
  </div>
  <div class="section">
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="card-badge badge-amber">Best for restaurants</div>
        <div class="card-tier">STARTER</div>
        <div class="card-name">Starter Site</div>
        <div class="card-price">$249<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time payment. Deposit secures your slot.</div>
        <div class="card-desc">A clean, affordable starter website for restaurants and food businesses that need a professional online presence fast.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-amber">✓</span>Stylish landing page / section-based layout</li>
          <li><span class="feat-icon fi-amber">✓</span>Mobile-friendly design</li>
          <li><span class="feat-icon fi-amber">✓</span>Menu preview section</li>
          <li><span class="feat-icon fi-amber">✓</span>Location, hours, and contact section</li>
          <li><span class="feat-icon fi-amber">✓</span>Reservation or call-to-action button</li>
          <li><span class="feat-icon fi-amber">✓</span>Polished but simple design</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark btn-full">Request a quote</a>
          <a href="https://buy.stripe.com/9B64gy0SfaeNeDg4QhgA800" target="_blank" class="btn btn-amber btn-full btn-sm">Pay $249 Deposit via Stripe →</a>
        </div>
      </div>
      <div class="pricing-card featured">
        <div class="card-badge badge-blue">🏆 Most Popular · Real estate</div>
        <div class="card-tier">PRO</div>
        <div class="card-name">Pro Site</div>
        <div class="card-price">$399<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time payment. Deposit secures your slot.</div>
        <div class="card-desc">A polished, trust-building website for agents who want stronger branding, lead capture, and a premium look.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-blue">✓</span>3–5 strong sections or compact multi-section layout</li>
          <li><span class="feat-icon fi-blue">✓</span>Agent intro section</li>
          <li><span class="feat-icon fi-blue">✓</span>Buyer / seller call-to-actions</li>
          <li><span class="feat-icon fi-blue">✓</span>Featured listings preview</li>
          <li><span class="feat-icon fi-blue">✓</span>Testimonials section</li>
          <li><span class="feat-icon fi-blue">✓</span>Contact / lead capture form</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark btn-full">Request a quote</a>
          <a href="https://buy.stripe.com/28E3cubwT86FgLo2I9gA802" target="_blank" class="btn btn-blue btn-full btn-sm">Pay $399 Deposit via Stripe →</a>
        </div>
      </div>
      <div class="pricing-card">
        <div class="card-badge badge-purple">Full business presence</div>
        <div class="card-tier">BUSINESS</div>
        <div class="card-name">Business Site</div>
        <div class="card-price">$900<span style="font-size:20px;font-weight:500;letter-spacing:0;color:var(--text-lt)">+</span></div>
        <div class="card-price-note">One-time payment. Deposit secures your slot.</div>
        <div class="card-desc">A multi-page business website for companies that need a more complete online presence and higher conversion structure.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-purple">✓</span>Multi-page structure</li>
          <li><span class="feat-icon fi-purple">✓</span>Premium design + stronger branding</li>
          <li><span class="feat-icon fi-purple">✓</span>Lead-generation layout</li>
          <li><span class="feat-icon fi-purple">✓</span>More advanced sections</li>
          <li><span class="feat-icon fi-purple">✓</span>More custom strategy</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark btn-full">Request a quote</a>
          <a href="https://buy.stripe.com/eVq14m0Sf4Ut3YC2I9gA801" target="_blank" class="btn btn-dark btn-full btn-sm">Pay $900 Deposit via Stripe →</a>
        </div>
      </div>
      <div class="pricing-card">
        <div class="card-badge badge-green">Custom · High-conversion</div>
        <div class="card-tier">CUSTOM</div>
        <div class="card-name">Custom Lead Gen Build</div>
        <div class="card-price" style="font-size:24px;letter-spacing:0">Custom quote</div>
        <div class="card-price-note">Let's talk scope and timeline.</div>
        <div class="card-desc">A fully custom build for businesses that want premium design, stronger positioning, and a serious sales system.</div>
        <ul class="card-features">
          <li><span class="feat-icon fi-green">✓</span>Custom design system</li>
          <li><span class="feat-icon fi-green">✓</span>Landing pages / campaigns</li>
          <li><span class="feat-icon fi-green">✓</span>Advanced integrations</li>
          <li><span class="feat-icon fi-green">✓</span>Conversion-focused copy structure</li>
        </ul>
        <div class="card-actions">
          <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark btn-full">Request a quote</a>
          <a href="tel:8583055764" class="btn btn-green btn-full btn-sm">📞 Call to Discuss</a>
        </div>
      </div>
    </div>

    <div class="mgmt-bar">
      <div>
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:5px">Monthly</div>
        <div class="mgmt-title">Annual Website Management</div>
        <div class="mgmt-desc">Web hosting, email hosting, Supabase, and ongoing maintenance — all bundled.</div>
      </div>
      <div class="mgmt-price">$100<span>/yr</span></div>
      <a href="https://buy.stripe.com/test_3cI4gyeKA4ZU492aLhdfG04" target="_blank" class="btn btn-amber">Pay $100/yr via Stripe</a>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-portfolio">
  <div class="page-header">
    <div class="page-tag">Portfolio</div>
    <h1>Recent work.</h1>
    <p>A sample of sites built for local businesses — restaurants, real estate agents, and service companies across San Diego.</p>
    <div class="header-actions"><a href="tel:8583055764" class="btn btn-dark">📞 Talk about your project</a></div>
  </div>
  <div class="section">
    <div class="gallery-intro"><div><div class="sec-eyebrow">Gallery</div><div class="sec-title">Built for local businesses.</div></div></div>
    <div class="gallery-grid" id="portfolio-grid">
      <div class="gallery-card"><div class="gallery-img"><div class="gallery-placeholder"><div class="gallery-placeholder-icon">🍽️</div><div class="gallery-placeholder-text">Restaurant Site</div></div></div><div class="gallery-body"><div class="gallery-tag">Starter · Restaurant</div><div class="gallery-title">Santorini Island Grill</div><div class="gallery-desc">Full site with filterable menu, admin panel, online ordering, and Google Maps integration. Scripps Ranch, SD.</div></div></div>
      <div class="gallery-card"><div class="gallery-img"><div class="gallery-placeholder"><div class="gallery-placeholder-icon">🏠</div><div class="gallery-placeholder-text">Real Estate Site</div></div></div><div class="gallery-body"><div class="gallery-tag">Pro · Real Estate</div><div class="gallery-title">Agent Pro Site</div><div class="gallery-desc">Trust-building agent site with featured listings, testimonials, and a lead capture form for buyer/seller leads.</div></div></div>
      <div class="gallery-card"><div class="gallery-img"><div class="gallery-placeholder"><div class="gallery-placeholder-icon">🔧</div><div class="gallery-placeholder-text">Business Site</div></div></div><div class="gallery-body"><div class="gallery-tag">Business · Home Services</div><div class="gallery-title">Home Services Co.</div><div class="gallery-desc">Multi-page business site with service area map, quote request form, Google reviews integration, and strong SEO structure.</div></div></div>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-realestate">
  <div class="re-hero">
    <div>
      <div class="page-tag">Real Estate</div>
      <h1 style="font-size:38px;font-weight:800;letter-spacing:-1.2px;line-height:1.08;margin-bottom:12px">Sites built for agents who want to win more listings.</h1>
      <p style="font-size:15px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">The Pro Site is built specifically for real estate. Strong branding, lead capture, featured listings, and the trust signals buyers and sellers actually look for.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a href="#" onclick="showTab('intake');return false;" class="btn btn-dark">Get started — $399+</a>
        <a href="tel:8583055764" class="btn btn-outline">📞 Talk to Charlie</a>
      </div>
    </div>
    <div class="re-image-mock"><span style="font-size:36px;opacity:0.2">🏡</span><span>Pro Site preview</span></div>
  </div>

  <div class="section section-border">
    <div class="sec-eyebrow">What's included</div>
    <div class="sec-title">Everything an agent needs online.</div>
    <div class="re-features" style="margin-top:28px">
      <div class="re-feature"><div class="re-feature-icon">👤</div><div class="re-feature-title">Agent Intro Section</div><div class="re-feature-desc">Professional bio, photo, credentials, and your personal brand front and center.</div></div>
      <div class="re-feature"><div class="re-feature-icon">🏠</div><div class="re-feature-title">Featured Listings Preview</div><div class="re-feature-desc">Showcase active or recent listings with photos, price, and key details.</div></div>
      <div class="re-feature"><div class="re-feature-icon">📩</div><div class="re-feature-title">Lead Capture Form</div><div class="re-feature-desc">Buyer and seller inquiry forms that deliver leads directly to your email or CRM.</div></div>
      <div class="re-feature"><div class="re-feature-icon">⭐</div><div class="re-feature-title">Testimonials Section</div><div class="re-feature-desc">Client reviews and social proof that build trust before anyone calls you.</div></div>
      <div class="re-feature"><div class="re-feature-icon">📱</div><div class="re-feature-title">Mobile-First Design</div><div class="re-feature-desc">Most buyers search on their phone. Your site looks perfect on every screen.</div></div>
      <div class="re-feature"><div class="re-feature-icon">🔍</div><div class="re-feature-title">SEO-Ready Structure</div><div class="re-feature-desc">Built so Google can find you — local SEO, meta tags, fast load times.</div></div>
    </div>
  </div>

  <div class="section">
    <div class="sec-eyebrow">Pricing</div>
    <div class="sec-title">Pro Site — $399+</div>
    <div class="sec-sub" style="margin-bottom:24px">Everything above, built and launched in under 5 business days. Final price depends on pages and features. Text to get an exact quote.</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a href="#" onclick="showTab('contact');return false;" class="btn btn-dark">Request a quote</a>
      <a href="https://buy.stripe.com/28E3cubwT86FgLo2I9gA802" target="_blank" class="btn btn-amber">Pay $399 Deposit via Stripe →</a>
      <a href="tel:8583055764" class="btn btn-outline">📞 (858) 305-5764</a>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-about">
  <div class="page-header">
    <div class="page-tag">About</div>
    <h1 id="about-headline">Hi, I'm Charlie.</h1>
    <p id="about-sub">I build conversion-focused websites for local businesses in San Diego. Fast turnaround, clean code, and designs that actually get you customers.</p>
  </div>

  <div class="section section-border">
    <div class="about-grid">
      <div><div class="about-photo"><div class="about-photo-icon">👤</div><span>Charlie Reed</span><span style="font-size:11px">Owner, Reed Web Studio</span></div></div>
      <div>
        <div class="sec-eyebrow">About Charlie</div>
        <div class="sec-title" style="margin-bottom:16px" id="about-title">Reed Web Studio</div>
        <p id="about-p1" style="font-size:15px;color:var(--text-mid);line-height:1.75;margin-bottom:14px">I'm a freelance web designer based in San Diego, CA. I specialize in building websites for restaurants, real estate agents, home service businesses, and local brands that want a professional online presence without the agency price tag.</p>
        <p id="about-p2" style="font-size:15px;color:var(--text-mid);line-height:1.75;margin-bottom:28px">Every site I build is custom — not a template swap. I focus on clean design, fast load times, and layouts that convert visitors into customers. You get same-day replies and a direct line to the person actually building your site.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a href="tel:8583055764" class="btn btn-dark">📞 (858) 305-5764</a>
          <button class="btn btn-outline" onclick="showTab('contact')">Send a message</button>
        </div>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num">$249</div><div class="stat-label">Starting price</div></div>
      <div class="stat-card"><div class="stat-num">&lt;5 days</div><div class="stat-label">Typical turnaround</div></div>
      <div class="stat-card"><div class="stat-num">Same day</div><div class="stat-label">Response time</div></div>
    </div>
  </div>

  <div class="section">
    <div class="sec-eyebrow">What I build for</div>
    <div class="sec-title">Industries I specialize in.</div>
    <div class="re-features" style="margin-top:24px;grid-template-columns:repeat(4,1fr)">
      <div class="re-feature"><div class="re-feature-icon">🍽️</div><div class="re-feature-title">Restaurants</div><div class="re-feature-desc">Menu sites, ordering integrations, reservation CTAs.</div></div>
      <div class="re-feature"><div class="re-feature-icon">🏠</div><div class="re-feature-title">Real Estate</div><div class="re-feature-desc">Agent sites with listings, testimonials, and lead capture.</div></div>
      <div class="re-feature"><div class="re-feature-icon">🔧</div><div class="re-feature-title">Home Services</div><div class="re-feature-desc">Plumbing, HVAC, landscaping, cleaning — local service sites.</div></div>
      <div class="re-feature"><div class="re-feature-icon">🏪</div><div class="re-feature-title">Local Brands</div><div class="re-feature-desc">Retail, boutiques, studios, and any local business wanting a premium presence.</div></div>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-contact">
  <div class="page-header">
    <div class="page-tag">Contact</div>
    <h1>Let's talk.</h1>
    <p>Text or call Charlie directly — same-day replies. Tell me your business type, the vibe you want, and your timeline.</p>
  </div>

  <div class="section">
    <div class="contact-grid">
      <div>
        <a href="tel:8583055764" class="contact-method"><div class="cm-icon">📞</div><div><div class="cm-label">Call or Text</div><div class="cm-val">(858) 305-5764</div></div></a>
        <a href="mailto:charlie@reedwebstudio.com" class="contact-method"><div class="cm-icon">✉️</div><div><div class="cm-label">Email</div><div class="cm-val">charlie@reedwebstudio.com</div></div></a>
        <a href="sms:8583055764" class="contact-method"><div class="cm-icon">💬</div><div><div class="cm-label">Text Message</div><div class="cm-val">Quick question? Text me</div></div></a>
        <div style="background:var(--amber-bg);border:1px solid #fcd34d;border-radius:var(--radius);padding:14px 16px;margin-top:8px;font-size:13px;color:var(--text-mid);line-height:1.65">⚡ <strong style="color:var(--amber)">Same-day replies</strong> when you text or call. Best way is always a direct text — I respond fast.</div>
      </div>

      <div class="contact-form-box">
        <h3>Send a message</h3>
        <p>Fill this out and I'll get back to you the same day. Include your business type and what you're looking for.</p>
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1a3bb62e-f8c0-43a2-a709-e200827188a5">
          <input type="hidden" name="subject" value="New inquiry — Reed Web Studio">
          <input type="hidden" name="from_name" value="Reed Web Studio Contact Form">
          <input type="hidden" name="replyto" value="charlespkon@gmail.com">
          <input type="hidden" name="redirect" value="false">
          <input type="checkbox" name="botcheck" style="display:none">

          <div class="form-row">
            <div class="form-group"><label>Name *</label><input type="text" name="name" placeholder="Jane Smith" required></div>
            <div class="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="(858) 000-0000"></div>
          </div>
          <div class="form-group"><label>Email *</label><input type="email" name="email" placeholder="jane@yourbusiness.com" required></div>

          <div class="form-group">
            <label>Business Type</label>
            <select name="business_type">
              <option value="">Select your business type...</option>
              <option>Restaurant / Food & Beverage</option>
              <option>Real Estate Agent / Broker</option>
              <option>Home Services</option>
              <option>Retail / Local Brand</option>
              <option>Other</option>
            </select>
          </div>

          <div class="form-group">
            <label>Package interest</label>
            <select name="package">
              <option value="">Which package are you interested in?</option>
              <option>Starter Site ($249+)</option>
              <option>Pro Site ($399+)</option>
              <option>Business Site ($900+)</option>
              <option>Custom / Lead Gen Build</option>
              <option>Annual Management ($100/yr)</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div class="form-group"><label>Message *</label><textarea name="message" placeholder="Business type, vibe you're going for, timeline, any specific features..." required></textarea></div>

          <div class="form-footer">
            <button type="submit" class="btn btn-dark" id="submit-btn">Send Message →</button>
            <span class="form-note">Replies within a few hours, same-day.</span>
          </div>

          <div class="form-success-msg" id="form-success">✅ Message sent! Charlie will reply same-day. You can also text (858) 305-5764.</div>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-payment">
  <div class="page-header">
    <div class="page-tag">Payment</div>
    <h1>Pay via Stripe.</h1>
    <p>Use the buttons below to pay via Stripe checkout. Before paying, fill out the quick intake form so we can hit the ground running: <a href="#" onclick="showTab('intake');return false;" style="color:var(--amber);font-weight:600">the intake form</a></p>
  </div>
  <div class="section">
    <div class="pricing-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="pricing-card">
        <div class="card-tier">Starter</div>
        <div class="card-name">Starter Site Deposit</div>
        <div class="card-desc">Deposit for a restaurant-friendly starter site. Locks in your project slot.</div>
        <div class="card-price" style="font-size:32px">$249</div>
        <div class="card-actions">
          <a href="https://buy.stripe.com/9B64gy0SfaeNeDg4QhgA800" target="_blank" class="btn btn-amber btn-full btn-sm">Pay Starter Deposit →</a>
          <div style="font-size:11px;color:var(--text-lt)">🔒 Secure checkout via Stripe</div>
        </div>
      </div>
      <div class="pricing-card featured">
        <div class="card-tier">Pro · Most Popular</div>
        <div class="card-name">Pro Site Deposit</div>
        <div class="card-desc">Deposit for a real-estate-ready Pro Site with lead capture and premium design.</div>
        <div class="card-price" style="font-size:32px">$399</div>
        <div class="card-actions">
          <a href="https://buy.stripe.com/28E3cubwT86FgLo2I9gA802" target="_blank" class="btn btn-blue btn-full btn-sm">Pay Pro Deposit →</a>
          <div style="font-size:11px;color:var(--text-lt)">🔒 Secure checkout via Stripe</div>
        </div>
      </div>
      <div class="pricing-card">
        <div class="card-tier">Business</div>
        <div class="card-name">Business Site Deposit</div>
        <div class="card-desc">Deposit for a multi-page Business Site with full custom strategy.</div>
        <div class="card-price" style="font-size:32px">$900</div>
        <div class="card-actions">
          <a href="https://buy.stripe.com/eVq14m0Sf4Ut3YC2I9gA801" target="_blank" class="btn btn-dark btn-full btn-sm">Pay Business Deposit →</a>
          <div style="font-size:11px;color:var(--text-lt)">🔒 Secure checkout via Stripe</div>
        </div>
      </div>
    </div>

    <div class="mgmt-bar" style="margin-top:16px">
      <div>
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:5px">Annual Plan</div>
        <div class="mgmt-title">Annual Management ($100/yr)</div>
        <div class="mgmt-desc">Web hosting, email hosting, Supabase, and ongoing maintenance. $100/yr total.</div>
      </div>
      <div class="mgmt-price">$100<span>/yr</span></div>
      <a href="https://buy.stripe.com/test_3cI4gyeKA4ZU492aLhdfG04" target="_blank" class="btn btn-amber btn-sm">Pay $100/yr →</a>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-intake">
  <div class="page-header">
    <div class="page-tag">Start Your Project</div>
    <h1>Let's build something <em style="font-style:italic;color:var(--amber)">great.</em></h1>
    <p>Fill this out before your deposit so Charlie knows exactly what you need from day one. He usually responds same day via text or email.</p>
  </div>

  <div class="section">
    <div class="contact-grid" style="grid-template-columns:1fr 2fr">
      <div>
        <a href="tel:8583055764" class="contact-method"><div class="cm-icon">📞</div><div><div class="cm-label">Call or Text</div><div class="cm-val">(858) 305-5764</div></div></a>
        <a href="mailto:charlespkon@gmail.com" class="contact-method"><div class="cm-icon">✉️</div><div><div class="cm-label">Email Charlie</div><div class="cm-val">charlespkon@gmail.com</div></div></a>
        <div style="background:var(--amber-bg);border:1px solid #fcd34d;border-radius:var(--radius);padding:14px 16px;margin-top:8px;font-size:13px;color:var(--text-mid);line-height:1.7">✅ Once submitted, Charlie will reach out shortly. He'll send you the deposit link to get started.</div>
      </div>

      <div class="contact-form-box">
        <h3>Project Intake Form</h3>
        <p>Fill this out so Charlie knows exactly what you need from day one. Takes 2 minutes.</p>

        <form id="intake-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1a3bb62e-f8c0-43a2-a709-e200827188a5">
          <input type="hidden" name="subject" value="New Project Intake — Reed Web Studio">
          <input type="hidden" name="from_name" value="Reed Web Studio Intake Form">
          <input type="hidden" name="redirect" value="false">
          <input type="checkbox" name="botcheck" style="display:none">

          <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--border)">01 — Your Info</div>
          <div class="form-row">
            <div class="form-group"><label>Full Name *</label><input type="text" name="full_name" placeholder="Jane Smith" required></div>
            <div class="form-group"><label>Business Name *</label><input type="text" name="business_name" placeholder="Jane's Restaurant" required></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Email *</label><input type="email" name="email" placeholder="jane@yourbusiness.com" required></div>
            <div class="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="(858) 000-0000"></div>
          </div>

          <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin:18px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--border)">02 — Your Project</div>
          <div class="form-group">
            <label>Which package are you interested in? *</label>
            <select name="package" required>
              <option value="">Select a package</option>
              <option>Starter Site – $249 (restaurants)</option>
              <option>Pro Site – $399 (real estate)</option>
              <option>Business Site – $900 (multi-page)</option>
              <option>Annual Management – $100/yr</option>
              <option>Custom / Not sure yet</option>
            </select>
          </div>
          <div class="form-group"><label>What does your business do? *</label><textarea name="business_desc" placeholder="Tell Charlie what your business is and who your customers are..." required style="min-height:72px"></textarea></div>
          <div class="form-group"><label>What's the main goal of this website? *</label><textarea name="website_goal" placeholder="Get more customers, showcase menu, generate leads, etc..." required style="min-height:72px"></textarea></div>

          <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin:18px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--border)">03 — Design & Style</div>
          <div class="form-group">
            <label>How would you describe the vibe you want?</label>
            <select name="vibe">
              <option value="">Pick one</option>
              <option>Clean & minimal</option>
              <option>Bold & modern</option>
              <option>Warm & inviting</option>
              <option>Luxury / high-end</option>
              <option>Fun & colorful</option>
              <option>Professional / corporate</option>
              <option>Not sure — I trust you</option>
            </select>
          </div>
          <div class="form-group"><label>Do you have any websites you love the look of?</label><input type="text" name="inspo_sites" placeholder="e.g. apple.com, competitor site, etc."></div>
          <div class="form-group">
            <label>Do you have existing branding?</label>
            <select name="branding">
              <option value="">Select</option>
              <option>Yes — I have a logo and colors</option>
              <option>Partial — I have a logo but no color scheme</option>
              <option>No — starting from scratch</option>
            </select>
          </div>

          <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin:18px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--border)">04 — Content & Pages</div>
          <div class="form-group">
            <label>What pages or sections do you need?</label>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px" id="pages-checkboxes">
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Home" style="accent-color:var(--amber)"> Home</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="About"> About</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Services"> Services</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Menu"> Menu</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Gallery / Portfolio"> Gallery / Portfolio</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Testimonials"> Testimonials</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Contact"> Contact</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:400;color:var(--text-mid);background:var(--off);border:1.5px solid var(--border);padding:6px 12px;border-radius:20px;cursor:pointer;letter-spacing:0;text-transform:none" class="page-check-label"><input type="checkbox" name="pages" value="Booking / Reservations"> Booking / Reservations</label>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="form-group">
              <label>Do you have copy (text) ready?</label>
              <select name="copy_status">
                <option value="">Select</option>
                <option>I have copy ready</option>
                <option>I have some — need help filling gaps</option>
                <option>I need help writing everything</option>
              </select>
            </div>
            <div class="form-group">
              <label>Do you have photos?</label>
              <select name="photo_status">
                <option value="">Select</option>
                <option>I have my own photos</option>
                <option>Mix of mine and stock</option>
                <option>I need stock images</option>
              </select>
            </div>
          </div>

          <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin:18px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--border)">05 — Timeline & Notes</div>
          <div class="form-group">
            <label>When do you need this done?</label>
            <select name="timeline">
              <option value="">Select</option>
              <option>ASAP (under 5 business days)</option>
              <option>Within a month</option>
              <option>1–3 months</option>
              <option>No rush</option>
            </select>
          </div>
          <div class="form-group"><label>Anything else Charlie should know?</label><textarea name="notes" placeholder="Special features, concerns, budget notes, anything..." style="min-height:80px"></textarea></div>

          <div class="form-footer">
            <button type="submit" class="btn btn-dark" id="intake-submit-btn">Submit & I'll be in touch →</button>
            <span class="form-note">Charlie usually responds same day via text or email.</span>
          </div>

          <div class="form-success-msg" id="intake-success">✅ Got it! Charlie will reach out shortly. Once you've spoken, he'll send you the deposit link to get started.</div>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="tab-pane" id="pane-terms">
  <div class="page-header"><div class="page-tag">Legal</div><h1>Terms of Service</h1><p>Last updated March 2025. By paying a deposit or submitting an intake form you agree to these terms.</p></div>
  <div class="section" style="max-width:760px">
    <div style="display:flex;flex-direction:column;gap:24px;font-size:14px;color:var(--text-mid);line-height:1.85">
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:10px">1. Who this is between</div>
        <p>This is an agreement between Reed Web Studio (owned and operated by Charlie Reed, based in San Diego, CA) and you, the person or business hiring him. Paying a deposit or filling out the intake form means you've read this and agreed to it.</p>
      </div>
      <div style="height:1px;background:var(--border)"></div>
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:10px">2. What you're getting</div>
        <p>Charlie builds you a website based on the package you picked — Starter, Pro, Business, or Custom. What's included is whatever was agreed to before work started, in writing (text or email). Anything outside that scope is a separate conversation and may cost extra.</p>
      </div>
      <div style="height:1px;background:var(--border)"></div>
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--amber);margin-bottom:10px">3. Payment</div>
        <p>A deposit is due before work starts. Once Charlie starts building, that deposit is gone — there are no refunds. This isn't a product you can return. A website is custom work. Once it's built, it's built for you.</p>
        <p style="margin-top:12px">The remaining balance is due when the site is done, before it goes live or gets handed over. All payments go through Stripe. If the balance isn't paid within 14 days of completion, the site may be taken down until it is.</p>
        <p style="margin-top:12px">The annual management plan ($100/yr) covers web hosting, email hosting, Supabase, and maintenance. It renews each year. Cancel it with 30 days notice before the renewal date.</p>
      </div>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>
`;

const JS = `
function showTab(name) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const pane = document.getElementById('pane-' + name);
  if (pane) pane.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// CONTACT FORM (Web3Forms AJAX)
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
  try {
    const res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(this) });
    const data = await res.json();
    if (data.success) {
      document.getElementById('form-success')?.classList.add('show');
      this.reset();
      if (btn) { btn.textContent = 'Sent ✓'; btn.style.background = 'var(--green)'; }
      showToast('✅ Message sent! Charlie will reply same-day.');
    } else { throw new Error('web3forms'); }
  } catch {
    showToast('Something went wrong. Please text (858) 305-5764 directly.');
    if (btn) { btn.textContent = 'Send Message →'; btn.disabled = false; }
  }
});

// INTAKE FORM (Web3Forms AJAX)
document.getElementById('intake-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('intake-submit-btn');
  if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

  const checked = [...this.querySelectorAll('input[name="pages"]:checked')].map(c => c.value);
  const pagesInput = document.createElement('input');
  pagesInput.type = 'hidden';
  pagesInput.name = 'pages_needed';
  pagesInput.value = checked.join(', ') || 'None selected';
  this.appendChild(pagesInput);

  try {
    const res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(this) });
    const data = await res.json();
    if (data.success) {
      document.getElementById('intake-success')?.classList.add('show');
      this.reset();
      if (btn) { btn.textContent = 'Submitted ✓'; btn.style.background = 'var(--green)'; }
      showToast('✅ Intake submitted! Charlie will reach out same day.');
    } else { throw new Error('web3forms'); }
  } catch {
    showToast('Something went wrong. Please text (858) 305-5764 directly.');
    if (btn) { btn.textContent = "Submit & I'll be in touch →"; btn.disabled = false; }
  }

  this.removeChild(pagesInput);
});

// CHECKBOX label highlight
document.querySelectorAll('.page-check-label input').forEach(cb => {
  cb.addEventListener('change', function() {
    const label = this.closest('label');
    if (!label) return;
    if (this.checked) {
      label.style.background = 'var(--amber-bg)';
      label.style.borderColor = 'var(--amber)';
      label.style.color = 'var(--amber)';
    } else {
      label.style.background = 'var(--off)';
      label.style.borderColor = 'var(--border)';
      label.style.color = 'var(--text-mid)';
    }
  });
});
`;

export function ReedStatic() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script id="reed-static" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JS }} />
    </>
  );
}
