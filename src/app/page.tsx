import Link from 'next/link';

const tools = ['GoHighLevel', 'HubSpot', 'Zoho One', 'n8n', 'Make', 'Zapier', 'Xero', 'Slack', 'Microsoft 365', 'Google Workspace'];

const services = [
  {
    num: '01',
    badge: 'OPERATIONS',
    title: 'Operations Automation',
    body: 'From the moment a lead comes in to the moment an invoice is paid — we map every step of how your business runs and automate the parts that shouldn\'t need a human. Built once, running forever.',
    items: ['Automated quoting and contract generation', 'E-signature workflows — one document, one click', 'Project creation triggered on deposit', 'Payment milestone tracking and reminders'],
  },
  {
    num: '02',
    badge: 'CRM',
    title: 'CRM & Lead Management',
    body: 'Your CRM should know everything — where every lead came from, where they are in the pipeline, what\'s been sent, what\'s outstanding. We configure and automate your CRM so your team always has the full picture.',
    items: ['Full CRM audit and rebuild', 'Automated lead capture from website, Facebook, phone AI', 'Pipeline stages, lead scoring and smart tagging', 'Custom dashboards and saved views'],
  },
  {
    num: '03',
    badge: 'DOCUMENTS',
    title: 'Document & Communication Systems',
    body: 'Professionally branded quotes, contracts and emails — generated automatically from your CRM data, sent to the right person, stored in the right folder. No manual creation. No missed attachments.',
    items: ['Branded templates with CRM merge fields', 'Automated document generation and delivery', 'E-signature collection and signed document storage', 'Team notifications at every job stage'],
  },
  {
    num: '04',
    badge: 'INTEGRATIONS',
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
      {/* HERO */}
      <section style={{ background: 'var(--sky-mist)', position: 'relative', overflow: 'hidden', padding: '7rem 0 6rem' }}>
        <div className="orb orb-teal" style={{ top: '-100px', right: '10%' }} />
        <div className="orb orb-blue" style={{ bottom: '-150px', left: '-5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>KYNETRA TECH · MELBOURNE, AUSTRALIA</span>
          <h1 style={{ marginBottom: '1.5rem', fontWeight: 400, letterSpacing: '-0.01em' }}>
            Smart systems for businesses that have better things to do.
          </h1>
          <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: 1.8 }}>
            We engineer end-to-end operations for Australian businesses — from first enquiry to paid invoice, automated, integrated and running without the manual effort.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Let&apos;s Talk</Link>
            <Link href="/services" className="btn-ghost">See What We Build</Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ borderBottom: '1px solid var(--frost)', borderTop: '1px solid var(--frost)', padding: '2rem 0', overflow: 'hidden' }}>
        <div className="container">
          <span className="label-slate" style={{ display: 'block', marginBottom: '1.25rem' }}>TOOLS WE BUILD WITH</span>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {tools.map((tool) => (
              <span key={tool} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--slate)',
                background: 'var(--sky-mist)',
                border: '1px solid var(--frost)',
                borderRadius: '2px',
                padding: '0.4rem 0.85rem',
              }}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WHAT WE BUILD</span>
          <h2 style={{ marginBottom: '0.75rem' }}>One engagement. Your entire operation, rebuilt.</h2>
          <p style={{ marginBottom: '3.5rem', maxWidth: '540px' }}>We don&apos;t patch broken systems. We rebuild how your business runs — from first enquiry to paid invoice.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'var(--frost)' }} className="services-grid">
            {services.map((s) => (
              <div key={s.num} style={{ background: 'var(--white)', padding: '2.5rem', transition: 'background 0.2s ease' }} className="service-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--teal)' }}>{s.num} · {s.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.85rem' }}>{s.title}</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.93rem' }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/services" className="btn-ghost">View Full Services →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>THE PROCESS</span>
          <h2 style={{ marginBottom: '3.5rem' }}>From messy to sorted. Here&apos;s how.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="steps-grid">
            {steps.map((step) => (
              <div key={step.num} style={{ position: 'relative', paddingTop: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', fontWeight: 300, color: 'var(--frost-deep)', lineHeight: 1, display: 'block', marginBottom: '1.25rem' }}>{step.num}</span>
                <div style={{ width: '32px', height: '2px', background: 'var(--teal)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section" id="who-we-help">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WHO WE WORK WITH</span>
          <h2 style={{ marginBottom: '0.75rem' }}>Built for businesses where the deal lives and dies on follow-up.</h2>
          <p style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>We work across industries — but these are the businesses where broken operations cost the most.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--frost)' }} className="industry-grid">
            {industries.map((ind) => (
              <div key={ind.title} style={{ background: 'var(--white)', padding: '2rem', borderLeft: '2px solid transparent', transition: 'all 0.2s ease' }} className="industry-card">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{ind.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{ind.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.75rem', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--slate)', textAlign: 'center' }}>
            Not in this list? If your business runs on pipelines, documents and follow-up — we can almost certainly help.{' '}
            <Link href="/contact" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Get in touch.</Link>
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>REAL RESULTS</span>
          <h2 style={{ marginBottom: '2.5rem' }}>We rebuilt a business&apos;s entire operations. From scratch.</h2>
          <div style={{ background: 'var(--white)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '2.5rem 3rem' }}>
            <p style={{ marginBottom: '2rem' }}>
              A growing Australian business came to us running everything manually. Quotes typed and emailed individually. Contracts managed through a platform nobody liked. Projects tracked across spreadsheets and memory. Files scattered with no consistent structure. The team had no single source of truth — and it was costing them time, money and jobs every week.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2.5rem', marginBottom: '2rem' }} className="case-study-grid">
              {[
                { title: 'Quoting & Contracts', body: 'Replaced manual quoting with a single automated document — branded, generated from system data, sent in one click. Client signs digitally. Stored automatically against the job.' },
                { title: 'Project & Task Automation', body: 'The moment a deposit is paid, a fully structured project is created — tasks assigned, team notified, calendar updated, records stamped. Zero manual creation.' },
                { title: 'Document Storage', body: 'Every job gets its own folder — automatically created, named and structured. Every document lands in the right place without anyone filing anything manually.' },
                { title: 'Team Communication', body: 'When a new job is created, the team knows. When a task is completed, the team knows. When anything moves — the right person is notified automatically.' },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ width: '24px', height: '2px', background: 'var(--teal)', marginBottom: '0.75rem' }} />
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--deep-ink)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--frost)', paddingTop: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--deep-ink)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                &ldquo;A business that used to run on memory and manual effort now runs on a single integrated platform. Every job tracked. Every document generated. The owner focuses on growing the business. The system handles the rest.&rdquo;
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--slate)' }}>CLIENT NAME WITHHELD BY REQUEST</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / FOUNDERS */}
      <section className="section" id="about">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WHO WE ARE</span>
          <h2 style={{ marginBottom: '0.75rem' }}>Two specialists. One focus.</h2>
          <p style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
            Kynetra Tech was founded in January 2026 by Rakshana and Vignesh — two professionals who&apos;d spent years watching Australian businesses lose time, money and jobs to systems that weren&apos;t working.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="founders-grid">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'var(--sky-mist)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--white)', fontWeight: 400 }}>{f.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.15rem' }}>{f.name}</h3>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--slate)' }}>{f.role}</span>
                  </div>
                </div>
                <span className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>{f.badges}</span>
                <span className="label-slate" style={{ display: 'block', marginBottom: '1rem' }}>{f.location}</span>
                <p style={{ fontSize: '0.9rem' }}>{f.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/about" className="btn-ghost">More About Us →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--deep-ink)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>LET&apos;S TALK</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>Ready to sort your operations?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Book a free 30-minute discovery call. We&apos;ll look at your current setup, tell you honestly what we&apos;d build, and give you a clear scope before anything is signed. No pressure. No retainer pitch. Just a conversation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/contact" className="btn-primary">Book a Free Call</Link>
          </div>
          <a href="mailto:hello@kynetratech.com" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s ease' }} className="cta-email">
            hello@kynetratech.com
          </a>
        </div>
      </section>

      <style>{`
        .service-card:hover { background: var(--sky-mist) !important; }
        .industry-card:hover { border-left-color: var(--teal) !important; background: var(--sky-mist) !important; }
        .cta-email:hover { color: var(--teal) !important; }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .industry-grid { grid-template-columns: 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
          .case-study-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
