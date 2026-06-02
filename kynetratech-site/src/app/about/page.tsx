import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Kynetra Tech was founded in 2026 by Rakshana and Vignesh — two professionals building operational systems for Australian businesses.',
};

const founders = [
  { initial: 'R', name: 'Rakshana', role: 'Co-Founder', badges: 'CRM · EMAIL · AUTOMATION', location: 'MELBOURNE, VIC', bio: 'Rakshana leads CRM configuration, email deliverability and workflow automation at Kynetra. With hands-on experience building operational systems for Australian SMEs, she works directly with clients to map their processes and build systems that run without manual effort. Based in Melbourne, she is the primary point of contact for all Australian client engagements.' },
  { initial: 'V', name: 'Vignesh', role: 'Co-Founder', badges: 'CYBERSECURITY · M365 · SYSTEMS', location: 'PARIS, FRANCE', bio: 'Vignesh handles the technical architecture behind every system Kynetra builds — integrations, security, Microsoft 365 infrastructure and back-end workflow engineering. He also leads development of CipherSoc, Kynetra\'s sister email security product built specifically for Australian SMEs.' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--sky-mist)', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>ABOUT KYNETRA TECH</span>
          <h1 style={{ marginBottom: '1.5rem' }}>We got tired of watching good businesses run on broken systems.</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '560px' }}>So we built the thing we wished existed — a firm that actually fixes how Australian businesses operate, end to end.</p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>HOW WE STARTED</span>
          <h2 style={{ marginBottom: '2rem' }}>Founded in 2026. Built out of frustration.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Kynetra Tech started with a simple observation: most Australian small and mid-sized businesses are running on a combination of spreadsheets, memory, and manual effort that breaks the moment they try to grow. Not because the people are disorganised — but because nobody had ever built them a proper system.</p>
            <p>We saw businesses losing leads because follow-up was manual. Losing jobs because contracts were slow. Losing hours every day to admin that should have been automated years ago. The tools existed to fix all of it. What was missing was someone who could put it together properly.</p>
            <p>Kynetra Tech is that firm. We don&apos;t sell software licences. We build operational systems — configured, automated, integrated and handed over fully working. Founded in January 2026, operating under an Australian ABN, and focused entirely on the Australian market.</p>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>THE TEAM</span>
          <h2 style={{ marginBottom: '3rem' }}>Two specialists. One focus.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="founders-grid">
            {founders.map((f) => (
              <div key={f.name} style={{ background: 'var(--white)', border: '1px solid var(--frost)', borderRadius: '4px', padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--white)', fontWeight: 400 }}>{f.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{f.name}</h3>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--slate)' }}>{f.role}</span>
                  </div>
                </div>
                <span className="label" style={{ display: 'block', marginBottom: '0.4rem' }}>{f.badges}</span>
                <span className="label-slate" style={{ display: 'block', marginBottom: '1.25rem' }}>{f.location}</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.8 }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AUSTRALIA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WHY WE FOCUS ON AUSTRALIA</span>
          <h2 style={{ marginBottom: '2rem' }}>The Australian market has a specific problem. We built a specific solution.</h2>
          <p style={{ marginBottom: '1.25rem' }}>Australian SMEs are underserved by the global automation industry. Most tools are built for the US market. Most agencies are generalists. Most implementations are template jobs that don&apos;t account for how Australian businesses actually operate — the compliance requirements, the tool preferences, the way deals get done.</p>
          <p>We&apos;re Australian-based, Australian-focused, and we build for the way business actually works here. That means Xero over QuickBooks. Zoho over Salesforce. Real understanding of the industries that drive the Australian economy.</p>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>PART OF SOMETHING BIGGER</span>
          <h2 style={{ marginBottom: '1.5rem' }}>Kynetra Tech is the operations firm. CipherSoc is the security product.</h2>
          <p style={{ marginBottom: '2rem' }}>Alongside our services business, we build software. CipherSoc is our first product — an email security platform built specifically for Australian SMEs who rely on email and can&apos;t afford a breach. Two different offerings. One underlying mission: Australian businesses deserve better infrastructure.</p>
          <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex' }}>Visit CipherSoc ↗</a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '5rem 0', borderTop: '1px solid var(--frost)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '540px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Want to know if we&apos;re the right fit?</h2>
          <p style={{ marginBottom: '2rem' }}>Book a free 30-minute call. No pitch. Just an honest conversation about your setup and what we&apos;d do with it.</p>
          <Link href="/contact" className="btn-primary">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
