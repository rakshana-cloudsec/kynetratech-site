'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Who We Help', href: '/#who-we-help' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--frost)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
         <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}><img
    src="/kt-logo.png"
    alt="Kynetra Tech"
    style={{ height: '48px', width: 'auto', display: 'block' }}
  />
</Link>

          {/* Desktop Nav Links — centred */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    color: isActive ? 'var(--teal)' : 'var(--deep-ink)',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    position: 'relative',
                    paddingBottom: '2px',
                    transition: 'color 0.2s ease',
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      background: 'var(--teal)',
                      borderRadius: '1px',
                    }} />
                  )}
                </Link>
              );
            })}

            {/* CipherSoc subtle link */}
            <a
              href="https://ciphersoc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--slate)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                paddingLeft: '1rem',
                borderLeft: '1px solid var(--frost)',
              }}
              className="ciphersoc-link"
            >
              CipherSoc ↗
            </a>
          </div>

          {/* Right — CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
            >
              Book a Call
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger"
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <span style={{
                display: 'block', width: '22px', height: '1.5px',
                background: 'var(--deep-ink)',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '22px', height: '1.5px',
                background: 'var(--deep-ink)',
                transition: 'all 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: '22px', height: '1.5px',
                background: 'var(--deep-ink)',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            maxHeight: menuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.35s ease',
            borderTop: menuOpen ? '1px solid var(--frost)' : 'none',
            background: 'var(--white)',
          }}
          className="mobile-menu"
        >
          <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: pathname === link.href ? 'var(--teal)' : 'var(--deep-ink)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--frost)',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://ciphersoc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--slate)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--frost)',
              }}
            >
              CipherSoc ↗
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
              }}
              className="btn-primary"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hover styles injected globally */}
      <style>{`
        .nav-link:hover { color: var(--teal) !important; }
        .ciphersoc-link:hover { color: var(--teal) !important; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
