import Link from 'next/link';

const tools = ['GoHighLevel', 'HubSpot', 'Zoho One', 'n8n', 'Make', 'Zapier', 'Xero', 'Slack', 'Microsoft 365', 'Google Workspace'];

const services = [
  {
    num: '01', badge: 'OPERATIONS',
    title: 'Operations Automation',
    body: 'From the moment a lead comes in to the moment an invoice is paid — we map every step of how your business runs and automate the parts that shouldn\'t need a human. Built once, running forever.',
    items: ['Automated quoting and contract generation', 'E-signature workflows — one document, one click', 'Project creation triggered on deposit', 'Payment milestone tracking and reminders'],
  },
  {
    num: '02', badge: 'CRM',
    title: 'CRM & Lead Management',
    body: 'Your CRM should know everything — where every lead came from, where they are in the pipeline, what\'s been sent, what\'s outstanding. We configure and automate your CRM so your team always has the full picture.',
    items: ['Full CRM audit and rebuild', 'Automated lead capture from website, Facebook, phone AI', 'Pipeline stages, lead scoring and smart tagging', 'Custom dashboards and saved views'],
  },
  {
    num: '03', badge: 'DOCUMENTS',
    title: 'Document & Communication Systems',
    body: 'Professionally branded quotes, contracts and emails — generated automatically from your CRM data, sent to the right person, stored in the right folder. No manual creation. No missed attachments.',
    items: ['Branded templates with CRM merge fields', 'Automated document generation and delivery', 'E-signature collection and signed document storage', 'Team notifications at every job stage'],
  },
  {
    num: '04', badge: 'INTEGRATIONS',
    title: 'Integrations & Workflow Engineering',
    body: 'Your business runs across multiple tools. We connect them so they talk to each other automatically. No more copy-pasting between systems. No more dropped balls. Everything flows.',
    items: ['Zoho One — CRM, Projects, Sign, Flow, Calendar', 'Xero accounting integrations', 'Cloud storage — Google Drive, SharePoint, Box', 'Google Workspace and Microsoft 365'],
  },
];

const steps = [
  { num: '01', title: 'We map how your business actually runs.', body: 'A free discovery call to understand your current setup — tools, processes, bottlenecks, and where jobs fall through. No templates. We look at your business specifically.' },
  { num: '02', title: 'We build it to your operation.', body: 'A clear scope, a fixed delivery, and a system built around how you actually work — not a generic template. You see exactly what\'s being built before we start.' },
  { num: '03', title: 'You run. The system handles the rest.', body: 'Full handover, full documentation, full training for your team. Most clients are running independently within a week.' },
];

const industries = [
  { title: 'Real Estate Agencies', body: 'Every missed lead is a listing lost. We build CRM pipelines, automated appraisal follow-ups, vendor communication sequences and lead routing so no enquiry goes cold.' },
  { title: 'Mortgage & Finance Brokers', body: 'Long client journeys. Document-heavy processes. Compliance at every step. We build CRM systems with automated document collection and milestone tracking so nothing gets missed.' },
  { title: 'Insurance Brokers', body: 'Renewals, referrals and policy follow-ups running on memory is a liability. We build automated renewal pipelines, referral tracking and communication sequences.' },
  { title: 'Trades & Construction', body: 'You\'re on site — not at a desk chasing paperwork. We build quoting systems, automated contracts, e-signature workflows and job creation triggers so admin runs itself.' },
  { title: 'Accounting & Bookkeeping Firms', body: 'Client onboarding, document collection, engagement letters, recurring reminders — all automated. Your team focuses on the work, not the admin around it.' },
  { title: 'Recruitment Agencies', body: 'Candidates move fast and so do clients. We build pipeline systems, automated candidate communication and client update sequences so your consultants always know where every placement stands.' },
];

const founders = [
  { initial: 'R', name: 'Rakshana', role: 'Co-Founder', badges: 'CRM · EMAIL · AUTOMATION', location: 'MELBOURNE, VIC', bio: 'Rakshana leads CRM configuration, email deliverability and workflow automation. With hands-on experience building operational systems for Australian SMEs, she works directly with clients to map processes and build systems that run without manual effort.' },
  { initial: 'V', name: 'Vignesh', role: 'Co-Founder', badges: 'CYBERSECURITY · M365 · SYSTEMS', location: 'PARIS, FRANCE', bio: 'Vignesh handles the technical architecture behind every system Kynetra builds — integrations, security, Microsoft 365 infrastructure and back-end workflow engineering. He also leads development of CipherSoc, Kynetra\'s sister email security product.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--sky-mist)', position: 'relative', overflow: 'hidden', padding: '8rem 0 7rem' }}>
        <div className="orb orb-teal" style={{ top: '-120px', right: '5%' }} />
        <div className="orb orb-blue" style={{ bottom: '-180px', left: '-8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <span className="label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '2px', padding: '0.35rem 0.85rem' }}>
            KYNETRA TECH · MELBOURNE, AUSTRALIA
          </span>
          <h1 style={{ marginBottom: '0.15em', fontWeight: 500 }}>
            Smart systems for businesses
          </h1>
          <h1 style={{ marginBottom: '1.75rem' }}>
            that have{' '}
            <span className="headline-accent">better things to do.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.75, fontWeight: 300 }}>
            We engineer end-to-end operations for Australian businesses — from first enquiry to paid invoice, automated, integrated and running without the manual effort.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.92rem', padding: '1rem 2.5rem' }}>Let&apos;s Talk</Link>
            <Link href="/services" className="btn-ghost" style={{ fontSize: '0.92rem', padding: '1rem 2.5rem' }}>See What We Build</Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ borderBottom: '1px solid var(--frost)', borderTop: '1px solid var(--frost)', padding: '2.25rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <span className="label-slate" style={{ flexShrink: 0 }}>TOOLS WE BUILD WITH</span>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {tools.map((tool) => (
                <span key={tool} style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.07em',
                  color: 'var(--slate)',
                  background: 'var(--sky-mist)',
                  border: '1px solid var(--frost)',
                  borderRadius: '2px',
                  padding: '0.4rem 0.85rem',
                }}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>WHAT WE BUILD</span>
          <h2 style={{ marginBottom: '0.75rem' }}>One engagement.<br />Your entire operation, rebuilt.</h2>
          <p style={{ marginBottom: '4rem', maxWidth: '520px', fontSize: '1.05rem' }}>We don&apos;t patch broken systems. We rebuild how your business runs — from first enquiry to paid invoice.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'var(--frost)' }} className="services-grid">
            {services.map((s) => (
              <div key={s.num} style={{ background: 'var(--white)', padding: '3rem', transition: 'background 0.2s ease' }} className="service-card">
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--teal)', display: 'block', marginBottom: '1.5rem' }}>{s.num} · {s.badge}</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ marginBottom: '1.75rem', fontSize: '0.95rem', lineHeight: 1.8 }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '3px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/services" className="btn-ghost">View Full Services →</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" id="how-it-works" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>THE PROCESS</span>
          <h2 style={{ marginBottom: '4rem' }}>From messy to sorted.<br /><span className="headline-accent">Here&apos;s how.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="steps-grid">
            {steps.map((step) => (
              <div key={step.num}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '3.5rem', fontWeight: 300, color: 'var(--frost-deep)', lineHeight: 1, display: 'block', marginBottom: '1.5rem' }}>{step.num}</span>
                <div style={{ width: '36px', height: '2px', background: 'var(--teal)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem', lineHeight: 1.25 }}>{step.title}</h3>
                <p style={{ fontSize: '0.92rem' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="section" id="who-we-help">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>WHO WE WORK WITH</span>
          <h2 style={{ marginBottom: '0.75rem' }}>Built for businesses where the deal<br />lives and dies on follow-up.</h2>
          <p style={{ marginBottom: '4rem', maxWidth: '560px', fontSize: '1.05rem' }}>We work across industries — but these are the businesses where broken operations cost the most.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--frost)' }} className="industry-grid">
            {industries.map((ind) => (
              <div key={ind.title} style={{ background: 'var(--white)', padding: '2.25rem', borderLeft: '3px solid transparent', transition: 'all 0.25s ease' }} className="industry-card">
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', lineHeight: 1.2 }}>{ind.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>{ind.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--slate)', textAlign: 'center' }}>
            Not in this list? If your business runs on pipelines, documents and follow-up — we can almost certainly help.{' '}
            <Link href="/contact" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Get in touch.</Link>
          </p>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>REAL RESULTS</span>
          <h2 style={{ marginBottom: '3rem' }}>We rebuilt a business&apos;s entire<br /><span className="headline-accent">operations. From scratch.</span></h2>
          <div style={{ background: 'var(--white)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '3rem 3.5rem' }}>
            <p style={{ marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.85 }}>
              A growing Australian business came to us running everything manually. Quotes typed and emailed individually. Contracts managed through a platform nobody liked. Projects tracked across spreadsheets and memory. Files scattered with no consistent structure. The team had no single source of truth — and it was costing them time, money and jobs every week.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 3rem', marginBottom: '2.5rem' }} className="case-study-grid">
              {[
                { title: 'Quoting & Contracts', body: 'Replaced manual quoting with a single automated document — branded, generated from system data, sent in one click. Client signs digitally. Stored automatically against the job.' },
                { title: 'Project & Task Automation', body: 'The moment a deposit is paid, a fully structured project is created — tasks assigned, team notified, calendar updated, records stamped. Zero manual creation.' },
                { title: 'Document Storage', body: 'Every job gets its own folder — automatically created, named and structured. Every document lands in the right place without anyone filing anything manually.' },
                { title: 'Team Communication', body: 'When a new job is created, the team knows. When a task is completed, the team knows. When anything moves — the right person is notified automatically.' },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ width: '28px', height: '2px', background: 'var(--teal)', marginBottom: '0.85rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.6rem', fontFamily: 'DM Sans, system-ui, sans-serif', fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--frost)', paddingTop: '2rem' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.35rem', color: 'var(--deep-ink)', lineHeight: 1.55, marginBottom: '0.85rem', fontStyle: 'italic', fontWeight: 400 }}>
                &ldquo;A business that used to run on memory and manual effort now runs on a single integrated platform. Every job tracked. Every document generated. The owner focuses on growing the business. The system handles the rest.&rdquo;
              </p>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--slate)', textTransform: 'uppercase' as const }}>CLIENT NAME WITHHELD BY REQUEST</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="section" id="about">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>WHO WE ARE</span>
          <h2 style={{ marginBottom: '0.75rem' }}>Two specialists.<br /><span className="headline-accent">One focus.</span></h2>
          <p style={{ marginBottom: '4rem', maxWidth: '520px', fontSize: '1.05rem' }}>
            Kynetra Tech was founded in January 2026 by Rakshana and Vignesh — two professionals who&apos;d spent years watching Australian businesses lose time, money and jobs to systems that weren&apos;t working.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="founders-grid">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'var(--sky-mist)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
                  <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', color: 'var(--white)', fontWeight: 400 }}>{f.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{f.name}</h3>
                    <span style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.85rem', color: 'var(--slate)' }}>{f.role}</span>
                  </div>
                </div>
                <span className="label" style={{ display: 'block', marginBottom: '0.4rem' }}>{f.badges}</span>
                <span className="label-slate" style={{ display: 'block', marginBottom: '1.25rem' }}>{f.location}</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85 }}>{f.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/about" className="btn-ghost">More About Us →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--deep-ink)', padding: '7rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>LET&apos;S TALK</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to sort<br /><span className="headline-accent">your operations?</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '3rem', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Book a free 30-minute discovery call. We&apos;ll look at your current setup, tell you honestly what we&apos;d build, and give you a clear scope before anything is signed. No pressure. No retainer pitch. Just a conversation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '1.05rem 2.75rem' }}>Book a Free Call</Link>
          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:hello@kynetratech.com" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s ease' }} className="cta-email">
              hello@kynetratech.com
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .service-card:hover { background: var(--sky-mist) !important; }
        .industry-card:hover { border-left-color: var(--teal) !important; background: var(--sky-mist) !important; }
        .cta-email:hover { color: var(--teal) !important; }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .industry-grid { grid-template-columns: 1fr 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .industry-grid { grid-template-columns: 1fr !important; }
          .case-study-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
