import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Start Your Project – Reed Web Studio",
};

export default function IntakePage() {
  return (
    <main>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

            :root {
              --ink: #0e0e0e;
              --paper: #f5f2ee;
              --accent: #c8a96e;
              --accent-dark: #a8893e;
              --muted: #7a7570;
              --border: #dedad4;
              --white: #ffffff;
            }

            .intake-page {
              font-family: 'DM Sans', sans-serif;
              background: var(--paper);
              color: var(--ink);
              min-height: 100vh;
              padding: 60px 20px;
            }

            .intake-page .container {
              max-width: 680px;
              margin: 0 auto;
            }

            .intake-page header {
              margin-bottom: 48px;
            }

            .intake-page .logo {
              font-family: 'DM Serif Display', serif;
              font-size: 13px;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: var(--accent);
              margin-bottom: 24px;
              display: block;
            }

            .intake-page h1 {
              font-family: 'DM Serif Display', serif;
              font-size: clamp(32px, 6vw, 52px);
              line-height: 1.1;
              margin-bottom: 16px;
            }

            .intake-page h1 em {
              font-style: italic;
              color: var(--accent);
            }

            .intake-page .subtitle {
              color: var(--muted);
              font-size: 16px;
              line-height: 1.6;
              font-weight: 300;
            }

            .intake-page .divider {
              height: 1px;
              background: var(--border);
              margin: 40px 0;
            }

            .intake-page .section-label {
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              color: var(--accent);
              margin-bottom: 24px;
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .intake-page .section-label::after {
              content: '';
              flex: 1;
              height: 1px;
              background: var(--border);
            }

            .intake-page .field {
              margin-bottom: 28px;
            }

            .intake-page label {
              display: block;
              font-size: 13px;
              font-weight: 500;
              letter-spacing: 0.04em;
              margin-bottom: 8px;
              color: var(--ink);
            }

            .intake-page label span {
              color: var(--accent);
            }

            .intake-page input, .intake-page textarea, .intake-page select {
              width: 100%;
              background: var(--white);
              border: 1.5px solid var(--border);
              border-radius: 6px;
              padding: 13px 16px;
              font-family: 'DM Sans', sans-serif;
              font-size: 15px;
              color: var(--ink);
              transition: border-color 0.2s, box-shadow 0.2s;
              outline: none;
              appearance: none;
            }

            .intake-page input:focus, .intake-page textarea:focus, .intake-page select:focus {
              border-color: var(--accent);
              box-shadow: 0 0 0 3px rgba(200, 169, 110, 0.12);
            }

            .intake-page textarea {
              resize: vertical;
              min-height: 110px;
              line-height: 1.6;
            }

            .intake-page select {
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7570' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: right 16px center;
              cursor: pointer;
            }

            .intake-page .row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }

            @media (max-width: 520px) {
              .intake-page .row { grid-template-columns: 1fr; }
            }

            .intake-page .checkbox-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }

            @media (max-width: 420px) {
              .intake-page .checkbox-group { grid-template-columns: 1fr; }
            }

            .intake-page .checkbox-item {
              display: flex;
              align-items: center;
              gap: 10px;
              background: var(--white);
              border: 1.5px solid var(--border);
              border-radius: 6px;
              padding: 12px 14px;
              cursor: pointer;
              transition: border-color 0.2s, background 0.2s;
              font-size: 14px;
              user-select: none;
            }

            .intake-page .checkbox-item:has(input:checked) {
              border-color: var(--accent);
              background: #fdf9f2;
            }

            .intake-page .checkbox-item input[type="checkbox"] {
              width: 16px;
              height: 16px;
              min-width: 16px;
              accent-color: var(--accent);
              cursor: pointer;
              border: none;
              padding: 0;
              box-shadow: none;
            }

            .intake-page .hint {
              font-size: 12px;
              color: var(--muted);
              margin-top: 6px;
            }

            .intake-page .submit-wrap {
              margin-top: 40px;
              display: flex;
              align-items: center;
              gap: 20px;
              flex-wrap: wrap;
            }

            .intake-page button[type="submit"] {
              background: var(--ink);
              color: var(--white);
              border: none;
              border-radius: 6px;
              padding: 15px 36px;
              font-family: 'DM Sans', sans-serif;
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 0.05em;
              cursor: pointer;
              transition: background 0.2s, transform 0.15s;
            }

            .intake-page button[type="submit"]:hover {
              background: var(--accent-dark);
              transform: translateY(-1px);
            }

            .intake-page .submit-note {
              font-size: 13px;
              color: var(--muted);
              line-height: 1.5;
            }

            .intake-page .success {
              display: none;
              background: #f0faf4;
              border: 1.5px solid #a8dbb8;
              border-radius: 8px;
              padding: 20px 24px;
              margin-top: 32px;
              font-size: 15px;
              color: #2d6a4a;
              line-height: 1.6;
            }
          `,
        }}
      />

      {/* Font links preserved as provided */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="intake-page">
        <div className="container">
          <header>
            <span className="logo">Reed Web Studio</span>
            <h1>
              Let's build something <em>great.</em>
            </h1>
            <p className="subtitle">
              Fill this out before your deposit so Charlie knows exactly what you
              need from day one.
            </p>
          </header>

          <form
            id="intakeForm"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="1a3bb62e-f8c0-43a2-a709-e200827188a5"
            />
            <input
              type="hidden"
              name="subject"
              value="New Client Intake – Reed Web Studio"
            />
            <input type="hidden" name="redirect" value="false" />

            {/* Contact */}
            <div className="section-label">01 — Your Info</div>
            <div className="row">
              <div className="field">
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                />
              </div>
              <div className="field">
                <label>
                  Business Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Smith Realty"
                />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@smithrealty.com"
                />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="(858) 000-0000" />
              </div>
            </div>

            <div className="divider"></div>

            {/* Project */}
            <div className="section-label">02 — Your Project</div>
            <div className="field">
              <label>
                Which package are you interested in? <span>*</span>
              </label>
              <select name="package" required defaultValue="">
                <option value="" disabled>
                  Select a package
                </option>
                <option>Starter Site – $249 (restaurants)</option>
                <option>Pro Site – $399 (real estate)</option>
                <option>Business Site – $900 (multi-page)</option>
                <option>Monthly Management – $50/mo</option>
                <option>Custom / Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label>
                What does your business do? <span>*</span>
              </label>
              <textarea
                name="business_description"
                required
                placeholder="Brief description of what you offer, who your customers are, and what makes you different..."
              ></textarea>
            </div>
            <div className="field">
              <label>
                What's the main goal of this website? <span>*</span>
              </label>
              <textarea
                name="goal"
                required
                placeholder="e.g. Get more phone calls, show my menu, capture leads from Google searches..."
              ></textarea>
            </div>

            <div className="divider"></div>

            {/* Design */}
            <div className="section-label">03 — Design & Style</div>
            <div className="field">
              <label>How would you describe the vibe you want?</label>
              <select name="vibe" defaultValue="">
                <option value="" disabled>
                  Pick one
                </option>
                <option>Clean & minimal</option>
                <option>Bold & modern</option>
                <option>Warm & inviting</option>
                <option>Luxury / high-end</option>
                <option>Fun & colorful</option>
                <option>Professional / corporate</option>
                <option>Not sure — I trust you</option>
              </select>
            </div>
            <div className="field">
              <label>Do you have any websites you love the look of?</label>
              <input
                type="text"
                name="inspiration"
                placeholder="Paste URLs or describe what you like about them"
              />
            </div>
            <div className="field">
              <label>Do you have existing branding?</label>
              <select name="branding" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Yes — I have a logo and colors</option>
                <option>Partial — I have a logo but no color scheme</option>
                <option>No — starting from scratch</option>
              </select>
            </div>

            <div className="divider"></div>

            {/* Content */}
            <div className="section-label">04 — Content & Pages</div>
            <div className="field">
              <label>What pages or sections do you need?</label>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Home" /> Home
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="About" /> About
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Services" /> Services
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Menu" /> Menu
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Gallery/Portfolio" />
                  Gallery / Portfolio
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Testimonials" />
                  Testimonials
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Contact" /> Contact
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="pages" value="Booking/Reservations" />
                  Booking / Reservations
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Do you have copy (text) ready, or do you need help writing it?
              </label>
              <select name="copy" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>I have copy ready</option>
                <option>I have some — need help filling gaps</option>
                <option>I need help writing everything</option>
              </select>
            </div>
            <div className="field">
              <label>Do you have photos, or do you need stock images?</label>
              <select name="photos" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>I have my own photos</option>
                <option>Mix of mine and stock</option>
                <option>I need stock images</option>
              </select>
            </div>

            <div className="divider"></div>

            {/* Timeline */}
            <div className="section-label">05 — Timeline & Notes</div>
            <div className="field">
              <label>When do you need this done?</label>
              <select name="timeline" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>ASAP (1–2 weeks)</option>
                <option>Within a month</option>
                <option>1–3 months</option>
                <option>No rush</option>
              </select>
            </div>
            <div className="field">
              <label>Anything else Charlie should know?</label>
              <textarea
                name="notes"
                placeholder="Special requests, questions, context about your business..."
              ></textarea>
            </div>

            <div className="submit-wrap">
              <button type="submit">Submit & I'll be in touch →</button>
              <p className="submit-note">
                Charlie usually responds
                <br />
                same day via text or email.
              </p>
            </div>

            <div className="success" id="successMsg">
              ✅ Got it! Charlie will reach out shortly. Once you've spoken, he'll
              send you the deposit link to get started.
            </div>
          </form>
        </div>
      </div>

      <Script id="intakeFormScript" strategy="afterInteractive">{`
        document.getElementById('intakeForm').addEventListener('submit', function(e) {
          e.preventDefault();
          document.getElementById('successMsg').style.display = 'block';
          window.scrollTo({ top: document.getElementById('successMsg').offsetTop - 20, behavior: 'smooth' });
        });
      `}</Script>
    </main>
  );
}
