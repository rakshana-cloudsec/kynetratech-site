import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Kynetra Tech was founded in January 2026 by Rakshana and Vignesh — building operational systems for Australian businesses.',
};

const founders = [
  { initial: 'R', name: 'Rakshana', role: 'Co-Founder', badges: ['CRM', 'EMAIL', 'AUTOMATION'], location: 'MELBOURNE, VIC', bio: 'Rakshana leads CRM configuration, email deliverability and workflow automation at Kynetra. With hands-on experience building operational systems for Australian SMEs, she works directly with clients to map processes and build systems that run without manual effort. Based in Melbourne, she is the primary point of contact for all Australian client engagements.' },
  { initial: 'V', name: 'Vignesh', role: 'Co-Founder', badges: ['CYBERSECURITY', 'M365', 'SYSTEMS'], location: 'PARIS, FRANCE', bio: 'Vignesh handles the technical architecture behind every system Kynetra builds — integrations, security, Microsoft 365 infrastructure and back-end workflow engineering. He also leads development of CipherSoc, Kynetra\'s sister email security product built for Australian SMEs.' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--deep-ink)', padding: '8rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-100px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>About Kynetra Tech</span>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.75rem' }}>We got tired of watching good businesses run on <span className="headline-accent">broken systems.</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>So we built the firm we wished existed — one that actually fixes how Australian businesses operate, end to end.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem', alignItems: 'start' }} className="story-grid">
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>How We Started</span>
              <h2 style={{ marginBottom: '1rem' }}>Founded in 2026.<br /><span className="headline-accent">Built out of frustration.</span></h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
              <p>Kynetra Tech started with a simple observation: most Australian small and mid-sized businesses are running on spreadsheets, memory and manual effort that breaks the moment they try to grow. Not because the people are disorganised — but because nobody had built them a proper system.</p>
              <p>We saw businesses losing leads because follow-up was manual. Losing jobs because contracts were slow. Losing hours every day to admin that should have been automated years ago. The tools existed to fix it. What was missing was someone to put it together properly.</p>
              <p>Kynetra Tech is that firm. We don&apos;t sell software licences. We build operational systems — configured, automated, integrated and handed over fully working. Founded in January 2026, operating under an Australian ABN, focused entirely on the Australian market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>The Team</span>
          <h2 style={{ marginBottom: '4rem' }}>Two specialists.<br /><span className="headline-accent">One focus.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--frost)' }} className="founders-grid">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'var(--white)', padding: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Tenor Sans, Georgia, serif', fontSize: '1.6rem', color: 'var(--white)' }}>{f.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>{f.name}</h3>
                    <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.85rem', color: 'var(--slate)' }}>{f.role}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {f.badges.map((b) => (
                    <span key={b} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--teal)', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.2)', borderRadius: '2px', padding: '0.3rem 0.65rem' }}>{b}</span>
                  ))}
                </div>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>{f.location}</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85 }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AUSTRALIA */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem', alignItems: 'start' }} className="story-grid">
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Why Australia</span>
              <h2>A specific problem.<br /><span className="headline-accent">A specific solution.</span></h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
              <p>Australian SMEs are underserved by the global automation industry. Most tools are built for the US market. Most agencies are generalists. Most implementations are template jobs that don&apos;t account for how Australian businesses actually operate.</p>
              <p>We&apos;re Australian-based, Australian-focused, and we build for the way business actually works here. That means Xero over QuickBooks. Zoho over Salesforce. Real understanding of the industries that drive the Australian economy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section style={{ background: 'var(--deep-ink)', padding: '6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="ecosystem-grid">
          <div>
            <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>Part of Something Bigger</span>
            <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Services and products.<br /><span className="headline-accent">Two ways we help.</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', lineHeight: 1.85 }}>Our services business rebuilds how individual Australian businesses operate — custom, hands-on, built to your specific processes. CipherSoc is the product side — email security packaged and ready to use.</p>
            <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-white">Visit CipherSoc ↗</a>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '3rem' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--teal)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>First Product · Launching Soon</span>
            <span style={{ fontFamily: 'Tenor Sans, Georgia, serif', fontSize: '2rem', color: 'var(--white)', display: 'block', marginBottom: '0.75rem' }}>CipherSoc</span>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>Email security for Australian SMEs. SPF, DKIM, DMARC — plain English, no jargon, no enterprise complexity.</p>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--teal)' }}>ciphersoc.com ↗</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '6rem 0', borderTop: '1px solid var(--frost)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '580px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Want to know if we&apos;re the right fit?</h2>
          <p style={{ marginBottom: '2.5rem' }}>Book a free 30-minute call. No pitch. Just an honest conversation about your setup and what we&apos;d do with it.</p>
          <Link href="/contact" className="btn-primary">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
          .ecosystem-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}