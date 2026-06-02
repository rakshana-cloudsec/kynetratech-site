import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Who We Help', href: '/#who-we-help' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep-ink)', color: 'var(--white)', paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="footer-grid">

          {/* Col 1 */}
          <div>
            <img src="/footer-kt-logo.png" alt="Kynetra Tech" style={{ height: '48px', width: 'auto', display: 'block', marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '2rem', fontFamily: 'Jost, system-ui, sans-serif', fontWeight: 400 }}>
              Smart systems for businesses that have better things to do.
            </p>
            <a href="mailto:hello@kynetratech.com" className="footer-email" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s ease', display: 'block', marginBottom: '0.4rem' }}>
              hello@kynetratech.com
            </a>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
              Melbourne, Australia
            </span>
          </div>

          {/* Col 2 */}
          <div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '1.5rem' }}>Navigate</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s ease' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '1.5rem' }}>Legal</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s ease' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — CipherSoc */}
          <div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '1.5rem' }}>A Kynetra Product</span>
            <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="ciphersoc-card" style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '1.5rem', textDecoration: 'none', transition: 'all 0.25s ease' }}>
              <span style={{ fontFamily: 'Tenor Sans, Georgia, serif', fontSize: '1.2rem', color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>CipherSoc</span>
              <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', display: 'block', lineHeight: 1.6, marginBottom: '1rem' }}>Email security for Australian SMEs.</span>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--teal)' }}>ciphersoc.com ↗</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
            ABN 43 773 244 648 · Trading name · Founded January 2026 · Melbourne, Australia
          </span>
          <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Kynetra Tech. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--teal) !important; }
        .footer-email:hover { color: var(--teal) !important; }
        .ciphersoc-card:hover { background: rgba(29,158,117,0.08) !important; border-color: rgba(29,158,117,0.25) !important; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}