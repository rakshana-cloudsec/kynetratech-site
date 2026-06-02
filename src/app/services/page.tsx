import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Kynetra Tech provides operations automation, CRM & lead management, document systems, and workflow engineering for Australian businesses.',
};

const services = [
  {
    num: '01', badge: 'OPERATIONS',
    title: 'Operations Automation',
    body: 'From the moment a lead comes in to the moment an invoice is paid — we map every step of how your business runs and automate the parts that shouldn\'t need a human. Quoting, contracts, project creation, task management, payment tracking — built once, running forever.',
    items: ['Automated quoting and contract generation', 'E-signature workflows — one document, one click, one signature', 'Project creation triggered automatically on deposit', 'Task tracking synced to your CRM in real time', 'Payment milestone tracking and overdue reminders', 'Job numbering systems and document naming conventions'],
  },
  {
    num: '02', badge: 'CRM',
    title: 'CRM & Lead Management',
    body: 'Your CRM should know everything — where every lead came from, where they are in the pipeline, what\'s been sent, what\'s been signed, what\'s outstanding. We configure and automate your CRM so your team always has the full picture without updating anything manually.',
    items: ['Full CRM audit and rebuild', 'Automated lead capture from website, Facebook, phone AI', 'Pipeline stages, lead scoring and smart tagging', 'Automated follow-up sequences', 'Custom dashboards and saved views', 'Multi-user access and data sharing rules'],
  },
  {
    num: '03', badge: 'DOCUMENTS',
    title: 'Document & Communication Systems',
    body: 'Professionally branded quotes, contracts, variation orders and confirmation emails — generated automatically from your CRM data, sent to the right person, stored in the right folder. No manual document creation. No copy-pasting. No missed attachments.',
    items: ['Branded quote and contract templates with CRM merge fields', 'Automated document generation and delivery', 'E-signature collection and signed document storage', 'Structured cloud storage — every job folder created automatically', 'HTML email templates built for inbox and mobile rendering', 'Team notifications via Slack or email at every job stage'],
  },
  {
    num: '04', badge: 'INTEGRATIONS',
    title: 'Integrations & Workflow Engineering',
    body: 'Your business runs across multiple tools — CRM, project management, accounting, calendar, cloud storage, communication. We connect them so they talk to each other automatically. No more copy-pasting. No more "did someone update the CRM?" Everything flows.',
    items: ['Zoho One — CRM, Projects, Sign, Writer, Flow, Calendar', 'Slack — automated job and production notifications', 'AI receptionist tools — leads captured automatically overnight', 'Cloud storage — Box, Google Drive, SharePoint, Egnyte', 'Xero accounting integrations', 'Google Workspace and Microsoft 365'],
  },
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
      <section style={{ background: 'var(--sky-mist)', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-60px', right: '8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>WHAT WE BUILD</span>
          <h1 style={{ marginBottom: '1.5rem' }}>End-to-end operations. Built once. Running forever.</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '560px' }}>We don&apos;t patch broken systems. We rebuild how your business runs — from first enquiry to paid invoice, automated, integrated and working without the manual effort.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>OUR SERVICES</span>
          <h2 style={{ marginBottom: '0.75rem' }}>One engagement. Your entire operation, rebuilt.</h2>
          <p style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>Every service we offer connects to the others. Most clients end up with two or more — because that&apos;s where the real leverage is.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--frost)' }}>
            {services.map((s) => (
              <div key={s.num} style={{ background: 'var(--white)', padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }} className="service-row">
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--teal)', display: 'block', marginBottom: '1rem' }}>{s.num} · {s.badge}</span>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.92rem' }}>{s.body}</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>What we build</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {s.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--slate)' }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }}>→</span>
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

      {/* HOW ENGAGEMENTS WORK */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>HOW IT WORKS</span>
          <h2 style={{ marginBottom: '1rem' }}>Fixed scope. Clear delivery. No retainer surprises.</h2>
          <p style={{ marginBottom: '3rem' }}>We don&apos;t do open-ended retainers that run forever with nothing to show. Every Kynetra engagement is scoped, priced and delivered as a fixed project. You know exactly what you&apos;re getting, what it costs, and when it&apos;s done.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="delivery-grid">
            {[
              { title: 'Scoped to your business', body: 'Not a template. We map your actual processes before we build anything — so what we deliver reflects how your business actually operates.' },
              { title: 'Fixed delivery', body: 'A clear timeline, a clear scope, a clear handover. No scope creep, no endless back-and-forth. When it\'s done, it\'s done — and it works.' },
              { title: 'Fully documented', body: 'Every system we build comes with documentation your team can actually use. We train the people running it and make sure they\'re confident before we hand over.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--white)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '2rem' }}>
                <div style={{ width: '28px', height: '2px', background: 'var(--teal)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>THE STACK</span>
          <h2 style={{ marginBottom: '0.75rem' }}>We work with the tools you&apos;re already paying for.</h2>
          <p style={{ marginBottom: '3rem', maxWidth: '540px' }}>No new software to buy. No platforms to learn from scratch. We configure, automate and integrate what already makes sense for your business.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--frost)' }} className="tools-grid">
            {tools.map((tool) => (
              <div key={tool.name} style={{ background: 'var(--white)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'var(--deep-ink)', marginBottom: '0.5rem' }}>{tool.name}</h3>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{tool.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--deep-ink)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>READY TO START</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>Not sure which service you need? That&apos;s what the call is for.</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem' }}>Most clients come to us knowing something is broken — but not exactly what to build. The discovery call is where we work that out together. Free, no obligation, no pitch.</p>
          <Link href="/contact" className="btn-primary">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .service-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
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
