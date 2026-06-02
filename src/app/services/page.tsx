import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Operations automation, CRM & lead management, document systems and workflow engineering for Australian businesses.',
};

const services = [
  { num: '01', badge: 'OPERATIONS', title: 'Operations Automation', body: 'From the moment a lead comes in to the moment an invoice is paid — we map every step and automate the parts that shouldn\'t need a human. Built once, running forever.', items: ['Automated quoting and contract generation', 'E-signature workflows — one document, one click, one signature', 'Project creation triggered automatically on deposit', 'Task tracking synced to your CRM in real time', 'Payment milestone tracking and overdue reminders', 'Job numbering systems and document naming conventions'] },
  { num: '02', badge: 'CRM', title: 'CRM & Lead Management', body: 'Your CRM should know everything — where every lead came from, where they are in the pipeline, what\'s been sent, what\'s outstanding. Full picture. Zero manual updating.', items: ['Full CRM audit and rebuild', 'Automated lead capture from website, Facebook, phone AI', 'Pipeline stages, lead scoring and smart tagging', 'Automated follow-up sequences', 'Custom dashboards and saved views', 'Multi-user access and data sharing rules'] },
  { num: '03', badge: 'DOCUMENTS', title: 'Document & Communication Systems', body: 'Professionally branded quotes, contracts and emails — generated from your CRM data, sent to the right person, stored in the right folder. No manual creation. No missed attachments.', items: ['Branded quote and contract templates with CRM merge fields', 'Automated document generation and delivery', 'E-signature collection and signed document storage', 'Structured cloud storage — every job folder created automatically', 'HTML email templates built for inbox and mobile', 'Team notifications via Slack or email at every stage'] },
  { num: '04', badge: 'INTEGRATIONS', title: 'Integrations & Workflow Engineering', body: 'Your tools should talk to each other. We connect your CRM, accounting, storage, calendar and communication so data flows automatically — no manual bridges, no dropped balls.', items: ['Zoho One — CRM, Projects, Sign, Writer, Flow, Calendar', 'Slack — automated job and production notifications', 'AI receptionist tools — leads captured overnight', 'Cloud storage — Box, Google Drive, SharePoint, Egnyte', 'Xero accounting integrations', 'Google Workspace and Microsoft 365'] },
];

const tools = [
  { name: 'Zoho One', use: 'CRM, projects, documents, e-signature, email, calendar' },
  { name: 'GoHighLevel', use: 'CRM, pipeline management, automated follow-up' },
  { name: 'HubSpot', use: 'CRM, marketing automation, reporting' },
  { name: 'n8n / Make / Zapier', use: 'Workflow automation and cross-platform integration' },
  { name: 'Xero', use: 'Accounting integration, invoice and payment tracking' },
  { name: 'Slack', use: 'Team notifications and job stage alerts' },
  { name: 'Google Workspace', use: 'Email, calendar, cloud storage integration' },
  { name: 'Microsoft 365', use: 'Email infrastructure, SharePoint, Teams integration' },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--deep-ink)', padding: '8rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>What We Build</span>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.75rem' }}>End-to-end operations.<br /><span className="headline-accent">Built once. Running forever.</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.85 }}>We don&apos;t patch broken systems. We rebuild how your business runs — from first enquiry to paid invoice.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Our Services</span>
          <h2 style={{ marginBottom: '1rem' }}>One engagement.<br /><span className="headline-accent">Your entire operation, rebuilt.</span></h2>
          <p style={{ marginBottom: '4.5rem', maxWidth: '520px' }}>Every service connects to the others. Most clients end up with two or more — because that&apos;s where the real leverage is.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--frost)' }}>
            {services.map((s) => (
              <div key={s.num} className="service-row" style={{ background: 'var(--white)', padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }}>
                <div>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--teal)', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>{s.num} · {s.badge}</span>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', lineHeight: 1.15 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85 }}>{s.body}</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--frost)', paddingLeft: '3rem' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>What we build</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {s.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.7 }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px', fontWeight: 600 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>How It Works</span>
          <h2 style={{ marginBottom: '1rem' }}>Fixed scope. Clear delivery.<br /><span className="headline-accent">No retainer surprises.</span></h2>
          <p style={{ marginBottom: '4rem' }}>Every Kynetra engagement is scoped, priced and delivered as a fixed project. You know exactly what you&apos;re getting, what it costs, and when it&apos;s done.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--frost)' }} className="delivery-grid">
            {[
              { num: '01', title: 'Scoped to your business', body: 'Not a template. We map your actual processes before we build anything — so what we deliver reflects how your business actually operates.' },
              { num: '02', title: 'Fixed delivery', body: 'A clear timeline, a clear scope, a clear handover. No scope creep. When it\'s done, it\'s done — and it works.' },
              { num: '03', title: 'Fully documented', body: 'Every system comes with documentation your team can use. We train the people running it before we hand over.' },
            ].map((item) => (
              <div key={item.num} style={{ background: 'var(--white)', padding: '2.5rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--teal)', display: 'block', marginBottom: '1.25rem' }}>{item.num}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.85rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>The Stack</span>
          <h2 style={{ marginBottom: '1rem' }}>We work with the tools<br /><span className="headline-accent">you&apos;re already paying for.</span></h2>
          <p style={{ marginBottom: '4rem', maxWidth: '500px' }}>No new software to buy. We configure, automate and integrate what already makes sense for your business.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', background: 'var(--frost)' }} className="tools-grid">
            {tools.map((tool) => (
              <div key={tool.name} style={{ background: 'var(--white)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: 'var(--deep-ink)', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>{tool.name}</h3>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>{tool.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--teal)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1.5rem' }}>Ready to Start</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>Not sure which service you need?<br />That&apos;s what the call is for.</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.8 }}>Most clients come knowing something is broken — but not exactly what to build. The discovery call is where we work that out together.</p>
          <Link href="/contact" className="btn-ghost-white">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .service-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .service-row > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--frost); padding-top: 2rem; }
          .delivery-grid { grid-template-columns: 1fr !important; }
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .tools-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}