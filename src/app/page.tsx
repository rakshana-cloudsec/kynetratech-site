import Link from 'next/link';
import ToolsMarquee from '@/components/ToolsMarquee';

const services = [
  { num: '01', badge: 'OPERATIONS', title: 'Operations Automation', body: 'From first enquiry to paid invoice — every step mapped, every manual task removed. Quoting, contracts, project creation, payment tracking. Built once, running forever.', items: ['Automated quoting and contract generation', 'E-signature workflows — one click, one signature', 'Project creation triggered on deposit', 'Payment milestone tracking and reminders'] },
  { num: '02', badge: 'CRM', title: 'CRM & Lead Management', body: 'Your CRM should know everything — where every lead came from, what\'s been sent, what\'s outstanding. Full visibility. Zero manual updating.', items: ['Full CRM audit and rebuild', 'Automated lead capture — web, Facebook, phone AI', 'Pipeline stages, lead scoring and smart tagging', 'Custom dashboards and saved views'] },
  { num: '03', badge: 'DOCUMENTS', title: 'Document & Communication Systems', body: 'Branded quotes, contracts and emails generated from your CRM data automatically — sent to the right person, stored in the right folder. No copy-pasting. No missed attachments.', items: ['Branded templates with CRM merge fields', 'Automated document generation and delivery', 'E-signature collection and storage', 'Team notifications at every job stage'] },
  { num: '04', badge: 'INTEGRATIONS', title: 'Integrations & Workflow Engineering', body: 'Your tools should talk to each other. We connect your CRM, accounting, storage, calendar and communication so everything flows automatically — no manual bridges.', items: ['Zoho One — CRM, Projects, Sign, Flow, Calendar', 'Xero accounting integrations', 'Cloud storage — Google Drive, SharePoint, Box', 'Google Workspace and Microsoft 365'] },
];

const steps = [
  { num: '01', title: 'We map how your business actually runs.', body: 'A free discovery call to understand your tools, processes and bottlenecks. No templates. We look at your business specifically.' },
  { num: '02', title: 'We build it to your operation.', body: 'A clear scope, a fixed delivery, a system built around how you actually work. You see exactly what\'s being built before we start.' },
  { num: '03', title: 'You run. The system handles the rest.', body: 'Full handover, full documentation, full training. Most clients are running independently within a week.' },
];

const industries = [
  { title: 'Real Estate Agencies', body: 'Every missed lead is a listing lost. We build CRM pipelines, automated appraisal follow-ups and lead routing so no enquiry goes cold.' },
  { title: 'Mortgage & Finance Brokers', body: 'Long client journeys. Document-heavy processes. We build CRM systems with automated document collection and milestone tracking.' },
  { title: 'Insurance Brokers', body: 'Renewals, referrals and follow-ups running on memory is a liability. We build automated renewal pipelines and communication sequences.' },
  { title: 'Trades & Construction', body: 'On site, not at a desk. We build quoting systems, automated contracts and job creation triggers so admin runs itself.' },
  { title: 'Accounting & Bookkeeping', body: 'Client onboarding, document collection, engagement letters, recurring reminders — all automated. Focus on the work, not the admin.' },
  { title: 'Recruitment Agencies', body: 'Candidates and clients move fast. We build pipeline systems and automated communication so your consultants always know where every placement stands.' },
];

const founders = [
  { initial: 'R', name: 'Rakshana', role: 'Co-Founder', badges: 'CRM · EMAIL · AUTOMATION', location: 'MELBOURNE, VIC', bio: 'Rakshana leads CRM configuration, email deliverability and workflow automation. She works directly with Australian clients to map processes and build systems that run without manual effort.' },
  { initial: 'V', name: 'Vignesh', role: 'Co-Founder', badges: 'CYBERSECURITY · M365 · SYSTEMS', location: 'PARIS, FRANCE', bio: 'Vignesh handles technical architecture — integrations, security, Microsoft 365 infrastructure and back-end workflow engineering. He also leads development of CipherSoc.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--sky-mist)', position: 'relative', overflow: 'hidden', padding: '9rem 0 8rem' }}>
        <div className="orb orb-teal" style={{ top: '-150px', right: '0%' }} />
        <div className="orb orb-blue" style={{ bottom: '-200px', left: '-10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '2px', padding: '0.4rem 1rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
              <span className="label">Kynetra Tech · Melbourne, Australia</span>
            </div>
            <h1 style={{ marginBottom: '1.5rem', fontWeight: 400 }}>
              Smart systems for businesses<br />
              that have <span className="headline-accent">better things to do.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '580px', lineHeight: 1.8, color: 'var(--slate)' }}>
              We engineer end-to-end operations for Australian businesses — from first enquiry to paid invoice, automated, integrated and running without the manual effort.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Let&apos;s Talk</Link>
              <Link href="/services" className="btn-ghost">See What We Build</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <ToolsMarquee />

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>What We Build</span>
            <h2 style={{ maxWidth: '700px', marginBottom: '1.25rem' }}>One engagement.<br />Your entire operation, rebuilt.</h2>
            <p style={{ maxWidth: '500px' }}>We don&apos;t patch broken systems. We rebuild how your business runs — end to end.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', background: 'var(--frost)' }} className="services-grid">
            {services.map((s) => (
              <div key={s.num} className="service-card" style={{ background: 'var(--white)', padding: '3.5rem', transition: 'background 0.25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--teal)', textTransform: 'uppercase' }}>{s.num} · {s.badge}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '3rem', fontWeight: 300, color: 'var(--frost)', lineHeight: 1 }}>{s.num}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.85 }}>{s.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--frost)', paddingTop: '1.5rem' }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px', fontWeight: 600 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/services" className="btn-ghost">View Full Services →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ background: 'var(--deep-ink)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem', color: 'var(--teal)' }}>The Process</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '5rem' }}>From messy to sorted.<br /><span className="headline-accent">Here&apos;s how.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }} className="steps-grid">
            {steps.map((step, i) => (
              <div key={step.num} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--teal)', display: 'block', marginBottom: '1.5rem' }}>{step.num}</span>
                <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', lineHeight: 1.85 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section" id="who-we-help">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Who We Work With</span>
          <h2 style={{ marginBottom: '1rem', maxWidth: '700px' }}>Built for businesses where the deal lives and dies on follow-up.</h2>
          <p style={{ marginBottom: '4.5rem', maxWidth: '520px' }}>We work across industries — but these are the businesses where broken operations cost the most.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--frost)' }} className="industry-grid">
            {industries.map((ind, i) => (
              <div key={ind.title} className="industry-card" style={{ background: 'var(--white)', padding: '2.75rem', borderTop: '3px solid transparent', transition: 'all 0.25s ease' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', lineHeight: 1.2 }}>{ind.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>{ind.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--slate)', textAlign: 'center' }}>
            Not in this list? If your business runs on pipelines, documents and follow-up — we can almost certainly help.{' '}
            <Link href="/contact" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 500 }}>Get in touch.</Link>
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem', alignItems: 'start' }} className="case-study-layout">
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Real Results</span>
              <h2 style={{ marginBottom: '1.5rem' }}>We rebuilt a business&apos;s entire operations.<br /><span className="headline-accent">From scratch.</span></h2>
              <p style={{ marginBottom: '2rem' }}>A growing Australian business came to us running everything manually. Quotes typed by hand. Projects tracked in spreadsheets. Files scattered everywhere. No single source of truth.</p>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Client name withheld by request.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { title: 'Quoting & Contracts', body: 'Replaced manual quoting with a single automated document — generated from system data, sent in one click, signed digitally, stored automatically.' },
                { title: 'Project & Task Automation', body: 'The moment a deposit is paid, a fully structured project is created — tasks assigned, team notified, calendar updated. Zero manual creation.' },
                { title: 'Document Storage', body: 'Every job gets its own folder — automatically created, named and structured. Every document lands in the right place without anyone filing manually.' },
                { title: 'Team Communication', body: 'When a job is created the team knows. When a task completes the team knows. Every movement triggers the right notification automatically.' },
              ].map((item, i) => (
                <div key={item.title} style={{ padding: '2rem 0', borderBottom: '1px solid var(--frost)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--teal)', flexShrink: 0, paddingTop: '4px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: 'var(--deep-ink)', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section" id="about">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Who We Are</span>
          <h2 style={{ marginBottom: '1rem' }}>Two specialists.<br /><span className="headline-accent">One focus.</span></h2>
          <p style={{ marginBottom: '4.5rem', maxWidth: '500px' }}>Founded January 2026. Built because Australian businesses deserve operational systems that actually work.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--frost)' }} className="founders-grid">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'var(--white)', padding: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Tenor Sans, Georgia, serif', fontSize: '1.5rem', color: 'var(--white)' }}>{f.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{f.name}</h3>
                    <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.82rem', color: 'var(--slate)', fontWeight: 400 }}>{f.role}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {f.badges.split(' · ').map((b) => (
                    <span key={b} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--teal)', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '2px', padding: '0.3rem 0.65rem', textTransform: 'uppercase' }}>{b}</span>
                  ))}
                </div>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>{f.location}</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85 }}>{f.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/about" className="btn-ghost">More About Us →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--teal)', padding: '8rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1.5rem' }}>Let&apos;s Talk</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to sort your operations?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Book a free 30-minute discovery call. We&apos;ll look at your setup, tell you honestly what we&apos;d build, and give you a clear scope before anything is signed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-ghost-white">Book a Free Call</Link>
            <a href="mailto:hello@kynetratech.com" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s ease' }} className="cta-email">
              hello@kynetratech.com
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .service-card:hover { background: var(--sky-mist) !important; }
        .industry-card:hover { border-top-color: var(--teal) !important; background: var(--sky-mist) !important; }
        .cta-email:hover { color: rgba(255,255,255,1) !important; }
        @media (max-width: 1024px) { .case-study-layout { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .industry-grid { grid-template-columns: 1fr 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .industry-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}