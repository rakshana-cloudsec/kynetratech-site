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
      <section style={{ background: 'var(--sky-mist)', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>OUR PRODUCTS</span>
          <h1 style={{ marginBottom: '1.5rem' }}>We build for others. We also build for ourselves.</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '560px' }}>Alongside our services work, we&apos;re developing software for the Australian market. Purposefully scoped, built carefully, and launched when it&apos;s ready.</p>
        </div>
      </section>

      {/* CIPHERSOC FEATURE */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="product-grid">
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>FIRST PRODUCT · LAUNCHING SOON</span>
              <h2 style={{ marginBottom: '1.25rem' }}>Introducing CipherSoc.</h2>
              <p style={{ marginBottom: '1.25rem' }}>CipherSoc is our first product — an email security platform built specifically for Australian SMEs. Email is the most common entry point for cyber threats targeting small businesses, and most of the time it comes down to fundamentals that were never configured properly.</p>
              <p style={{ marginBottom: '2rem' }}>CipherSoc is designed to change that. Clean, straightforward email security — no enterprise complexity, no jargon, no security team required. We&apos;re currently in the final stages of development and will be launching to the Australian market soon.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Find Out More ↗</a>
              </div>
            </div>

            {/* Product card */}
            <div style={{
              background: '#0A0A0A',
              borderRadius: '8px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,115,119,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFFFFF', display: 'block', lineHeight: 1, marginBottom: '4px' }}>CipherSoc</span>
                  <div style={{ width: '100%', height: '1.5px', background: '#0D7377', margin: '4px 0' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#FFFFFF', textTransform: 'uppercase' }}>by Kynetra Tech</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', color: '#0D7377', textTransform: 'uppercase', background: 'rgba(13,115,119,0.15)', border: '1px solid rgba(13,115,119,0.3)', borderRadius: '2px', padding: '0.3rem 0.7rem', display: 'inline-block', marginBottom: '2rem' }}>LAUNCHING SOON</span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Email authentication — SPF, DKIM & DMARC',
                    'Domain spoofing protection',
                    'Threat monitoring & visibility',
                    'Plain English reporting',
                    'Built for Australian SMEs',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                      <span style={{ color: '#0D7377', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>ciphersoc.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIGGER PICTURE */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>THE BIGGER PICTURE</span>
          <h2 style={{ marginBottom: '1.5rem' }}>Two ways we help Australian businesses run better.</h2>
          <p style={{ marginBottom: '1.25rem' }}>Our services work is hands-on and custom — we come in, map your processes, and build operational systems specific to your business. CipherSoc is the product side — email security packaged and ready to use, without needing an engagement.</p>
          <p>They sit alongside each other naturally. CipherSoc handles email security. Our services handle operations. Together they cover two of the most common gaps we see in Australian SMEs.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--white)', padding: '5rem 0', borderTop: '1px solid var(--frost)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '540px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WANT TO KNOW MORE?</span>
          <h2 style={{ marginBottom: '1rem' }}>Interested in CipherSoc or our services?</h2>
          <p style={{ marginBottom: '2rem' }}>Whether you want to know more about CipherSoc, talk through a services engagement, or just ask a question — we&apos;re easy to reach.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}
