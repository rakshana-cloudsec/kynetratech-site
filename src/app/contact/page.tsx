'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--sky-mist)', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>GET IN TOUCH</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Let&apos;s talk about your business.</h1>
          <p style={{ fontSize: '1.1rem' }}>No pitch. No pressure. Just an honest conversation about where you are and what we&apos;d do with it.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">

            {/* LEFT — Form */}
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>SEND US A MESSAGE</span>
              <form
                action="mailto:hello@kynetratech.com"
                method="get"
                encType="text/plain"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {[
                  { label: 'Full Name', type: 'text', id: 'name', name: 'name', placeholder: 'Your full name' },
                  { label: 'Business Name', type: 'text', id: 'business', name: 'business', placeholder: 'Your business name' },
                  { label: 'Email Address', type: 'email', id: 'email', name: 'email', placeholder: 'you@yourbusiness.com.au' },
                  { label: 'Phone Number (optional)', type: 'tel', id: 'phone', name: 'phone', placeholder: '+61 4XX XXX XXX' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem' }}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--deep-ink)', background: 'var(--white)', outline: 'none', transition: 'border-color 0.2s ease' }}
                      className="form-input"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem' }}>What are you looking for?</label>
                  <select id="service" name="service" style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--slate)', background: 'var(--white)', outline: 'none', cursor: 'pointer', appearance: 'none' }} className="form-input">
                    <option value="">Select an option</option>
                    <option>CRM &amp; Lead Management</option>
                    <option>Operations Automation</option>
                    <option>Document &amp; Communication Systems</option>
                    <option>Integrations &amp; Workflow Engineering</option>
                    <option>CipherSoc — Email Security</option>
                    <option>Not sure yet — just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem' }}>Tell us about your business</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What does your business do? What's broken or manual right now? What are you hoping to fix?"
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--deep-ink)', background: 'var(--white)', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s ease' }}
                    className="form-input"
                  />
                </div>

                <a
                  href="mailto:hello@kynetratech.com"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.92rem' }}
                >
                  Send Message
                </a>
                <p style={{ fontSize: '0.78rem', color: 'var(--slate)', textAlign: 'center', fontStyle: 'italic' }}>
                  We&apos;ll get back to you within one business day. Your details won&apos;t be shared with anyone.
                </p>
              </form>
            </div>

            {/* RIGHT — Details */}
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>OR REACH US DIRECTLY</span>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--slate)', textTransform: 'uppercase' as const, display: 'block', marginBottom: '0.5rem' }}>Email</span>
                <a href="mailto:hello@kynetratech.com" style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '1rem', color: 'var(--deep-ink)', textDecoration: 'none', transition: 'color 0.2s ease' }} className="contact-link">
                  hello@kynetratech.com
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--slate)', textTransform: 'uppercase' as const, display: 'block', marginBottom: '0.5rem' }}>Location</span>
                <span style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.95rem', color: 'var(--deep-ink)' }}>Melbourne, VIC — Australia</span>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--slate)', textTransform: 'uppercase' as const, display: 'block', marginBottom: '0.5rem' }}>Response time</span>
                <span style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--slate)', fontStyle: 'italic' }}>We typically respond within one business day.</span>
              </div>

              <div style={{ borderTop: '1px solid var(--frost)', paddingTop: '2rem' }}>
                <span className="label-slate" style={{ display: 'block', marginBottom: '0.75rem' }}>LOOKING FOR CIPHERSOC?</span>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>CipherSoc is our email security product for Australian SMEs. For CipherSoc-specific enquiries, visit ciphersoc.com directly.</p>
                <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--teal)', textDecoration: 'none' }} className="contact-link">
                  ciphersoc.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>WHAT TO EXPECT</span>
          <h2 style={{ marginBottom: '3rem' }}>What happens after you reach out.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="expect-grid">
            {[
              { num: '01', title: 'We read carefully.', body: 'Every message gets a real read — not a canned response. We\'ll look at what you\'ve shared and come back with something useful.' },
              { num: '02', title: 'We get on a call.', body: 'If it sounds like a fit, we\'ll book a free 30-minute discovery call. No sales deck. Just a conversation about your setup and what we\'d build.' },
              { num: '03', title: 'We give you a clear scope.', body: 'If we\'re the right fit, you get a written scope before anything is signed. No ambiguity. No surprises.' },
            ].map((step) => (
              <div key={step.num}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '2.5rem', fontWeight: 300, color: 'var(--frost-deep)', display: 'block', marginBottom: '1rem', lineHeight: 1 }}>{step.num}</span>
                <div style={{ width: '28px', height: '2px', background: 'var(--teal)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.65rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid var(--frost)' }}>
        <Link href="/" style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--teal)', textDecoration: 'none' }}>← Back to Home</Link>
      </div>

      <style>{`
        .form-input:focus { border-color: var(--teal) !important; }
        .contact-link:hover { color: var(--teal) !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .expect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
