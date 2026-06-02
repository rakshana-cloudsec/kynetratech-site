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
    <footer style={{
      background: 'var(--deep-ink)',
      color: 'var(--white)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">

        {/* Top Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(216,232,240,0.12)',
        }}
          className="footer-grid"
        >

          {/* Col 1 — Brand */}
          <div>
            {/* Logo */}
           <img
  src="/footer-kt-logo.png"
  alt="Kynetra Tech"
  style={{ height: '52px', width: 'auto', display: 'block', marginBottom: '1.25rem', filter: 'brightness(0) invert(1)' }}
/>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '260px',
              marginBottom: '1.5rem',
            }}>
              Smart systems for businesses that have better things to do.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
              }}>
                Melbourne, Australia
              </span>
              <a
                href="mailto:hello@kynetratech.com"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                className="footer-email"
              >
                hello@kynetratech.com
              </a>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <span className="label-slate" style={{
              color: 'rgba(255,255,255,0.3)',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              Navigate
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <span className="label-slate" style={{
              color: 'rgba(255,255,255,0.3)',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              Legal
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Sister Product */}
          <div>
            <span className="label-slate" style={{
              color: 'rgba(255,255,255,0.3)',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              A Kynetra Product
            </span>

            <a
              href="https://ciphersoc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(216,232,240,0.1)',
                borderRadius: '4px',
                padding: '1.25rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              className="ciphersoc-card"
            >
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--white)',
                display: 'block',
                marginBottom: '0.4rem',
              }}>
                CipherSoc
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.45)',
                display: 'block',
                lineHeight: 1.6,
              }}>
                Email security for Australian SMEs.
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'var(--teal)',
                display: 'block',
                marginTop: '0.75rem',
              }}>
                ciphersoc.com ↗
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.75rem',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.25)',
          }}>
            ABN 43 773 244 648 · Trading name · Founded January 2026 · Melbourne, Australia
          </span>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.25)',
          }}>
            © 2026 Kynetra Tech. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--teal) !important; }
        .footer-email:hover { color: var(--teal) !important; }
        .ciphersoc-card:hover {
          background: rgba(29,158,117,0.08) !important;
          border-color: rgba(29,158,117,0.3) !important;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
