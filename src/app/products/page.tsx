import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products',
  description: 'CipherSoc — email security for Australian SMEs. Launching soon from Kynetra Tech.',
};

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--deep-ink)', padding: '8rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>Our Products</span>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.75rem' }}>We build for others.<br /><span className="headline-accent">We also build for ourselves.</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.85 }}>Alongside our services work, we&apos;re developing software for the Australian market. Purposefully scoped, built carefully, launched when it&apos;s ready.</p>
        </div>
      </section>

      {/* CIPHERSOC */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="product-grid">
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>First Product · Launching Soon</span>
              <h2 style={{ marginBottom: '1.25rem' }}>Introducing<br /><span className="headline-accent">CipherSoc.</span></h2>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.85 }}>CipherSoc is our first product — an email security platform built for Australian SMEs. Email is the most common entry point for cyber threats targeting small businesses, and most of the time it comes down to fundamentals never configured properly.</p>
              <p style={{ marginBottom: '2.5rem', lineHeight: 1.85 }}>Clean, straightforward email security — no enterprise complexity, no jargon, no security team required. We&apos;re in final stages of development and launching to the Australian market soon.</p>
              <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Find Out More ↗</a>
            </div>

            <div style={{ background: '#0A0A0A', borderRadius: '12px', padding: '3.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,115,119,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#0D7377', textTransform: 'uppercase', background: 'rgba(13,115,119,0.15)', border: '1px solid rgba(13,115,119,0.3)', borderRadius: '2px', padding: '0.35rem 0.75rem', display: 'inline-block', marginBottom: '2rem' }}>Launching Soon</span>
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'Tenor Sans, Georgia, serif', fontSize: '2.5rem', color: '#FFFFFF', display: 'block', lineHeight: 1, marginBottom: '4px' }}>CipherSoc</span>
                  <div style={{ width: '100%', height: '1px', background: '#0D7377', margin: '8px 0' }} />
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>by Kynetra Tech</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {['Email authentication — SPF, DKIM & DMARC', 'Domain spoofing protection', 'Threat monitoring & visibility', 'Plain English reporting', 'Built for Australian SMEs'].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      <span style={{ color: '#0D7377', flexShrink: 0, fontWeight: 600 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>ciphersoc.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIGGER PICTURE */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>The Bigger Picture</span>
          <h2 style={{ marginBottom: '1.5rem' }}>Two ways we help Australian<br /><span className="headline-accent">businesses run better.</span></h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.85 }}>Our services work is hands-on and custom — we come in, map your processes, and build operational systems specific to your business. CipherSoc is the product side — email security packaged and ready to use, without an engagement.</p>
          <p style={{ lineHeight: 1.85 }}>CipherSoc handles email security. Our services handle operations. Together they cover two of the most common gaps we see in Australian SMEs.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '6rem 0', borderTop: '1px solid var(--frost)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Interested in CipherSoc<br />or our services?</h2>
          <p style={{ marginBottom: '2.5rem' }}>Whether you want to know more about CipherSoc or talk through a services engagement — we&apos;re easy to reach.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}