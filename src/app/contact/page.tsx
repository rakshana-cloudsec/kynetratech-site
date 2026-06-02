'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--deep-ink)', padding: '8rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ top: '-80px', right: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>Get in Touch</span>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.75rem' }}>Let&apos;s talk about<br /><span className="headline-accent">your business.</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>No pitch. No pressure. Just an honest conversation about where you are and what we&apos;d do with it.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">

            {/* Form */}
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '2rem' }}>Send Us a Message</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Full Name', type: 'text', id: 'name', placeholder: 'Your full name' },
                  { label: 'Business Name', type: 'text', id: 'business', placeholder: 'Your business name' },
                  { label: 'Email Address', type: 'email', id: 'email', placeholder: 'you@yourbusiness.com.au' },
                  { label: 'Phone Number (optional)', type: 'tel', id: 'phone', placeholder: '+61 4XX XXX XXX' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{field.label}</label>
                    <input type={field.type} id={field.id} placeholder={field.placeholder} className="form-input" style={{ width: '100%', padding: '0.9rem 1.1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.95rem', color: 'var(--deep-ink)', background: 'var(--white)', outline: 'none', transition: 'border-color 0.2s ease' }} />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>What are you looking for?</label>
                  <select id="service" className="form-input" style={{ width: '100%', padding: '0.9rem 1.1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.95rem', color: 'var(--slate)', background: 'var(--white)', outline: 'none', cursor: 'pointer', appearance: 'none' }}>
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
                  <label htmlFor="message" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--deep-ink)', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tell us about your business</label>
                  <textarea id="message" rows={5} placeholder="What does your business do? What's broken or manual right now?" className="form-input" style={{ width: '100%', padding: '0.9rem 1.1rem', border: '1px solid var(--frost)', borderRadius: '2px', fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.95rem', color: 'var(--deep-ink)', background: 'var(--white)', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s ease' }} />
                </div>

                <a href="mailto:hello@kynetratech.com" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</a>
                <p style={{ fontSize: '0.8rem', color: 'var(--slate)', textAlign: 'center', fontStyle: 'italic' }}>We&apos;ll get back to you within one business day.</p>
              </div>
            </div>

            {/* Details */}
            <div style={{ paddingTop: '4rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Email</span>
                <a href="mailto:hello@kynetratech.com" className="contact-link" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '1.05rem', color: 'var(--deep-ink)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}>hello@kynetratech.com</a>
              </div>
              <div style={{ marginBottom: '3rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Location</span>
                <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '1rem', color: 'var(--deep-ink)', fontWeight: 500 }}>Melbourne, VIC — Australia</span>
              </div>
              <div style={{ marginBottom: '3rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Response Time</span>
                <span style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.92rem', color: 'var(--slate)', fontStyle: 'italic' }}>Within one business day.</span>
              </div>
              <div style={{ borderTop: '1px solid var(--frost)', paddingTop: '2.5rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Looking for CipherSoc?</span>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.8 }}>For CipherSoc-specific enquiries, visit ciphersoc.com directly.</p>
                <a href="https://ciphersoc.com" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontFamily: 'Jost, system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--teal)', textDecoration: 'none', fontWeight: 500, transition: 'opacity 0.2s ease' }}>ciphersoc.com ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section" style={{ background: 'var(--sky-mist)' }}>
        <div className="container">
          <span className="label" style={{ display: 'block', marginBottom: '1.25rem' }}>What to Expect</span>
          <h2 style={{ marginBottom: '4rem' }}>What happens after<br /><span className="headline-accent">you reach out.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--frost)' }} className="expect-grid">
            {[
              { num: '01', title: 'We read carefully.', body: 'Every message gets a real read — not a canned response. We\'ll look at what you\'ve shared and come back with something useful.' },
              { num: '02', title: 'We get on a call.', body: 'If it sounds like a fit, we\'ll book a free 30-minute call. No sales deck. Just a conversation about your setup and what we\'d build.' },
              { num: '03', title: 'We give you a clear scope.', body: 'If we\'re the right fit, you get a written scope before anything is signed. No ambiguity. No surprises.' },
            ].map((step) => (
              <div key={step.num} style={{ background: 'var(--white)', padding: '2.75rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--teal)', display: 'block', marginBottom: '1.25rem' }}>{step.num}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .form-input:focus { border-color: var(--teal) !important; }
        .contact-link:hover { color: var(--teal) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .expect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}