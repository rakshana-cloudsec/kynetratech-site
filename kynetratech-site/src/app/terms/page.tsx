import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Kynetra Tech — ABN 43 773 244 648. Governed by the laws of Victoria, Australia.',
};

const sections = [
  {
    title: '1. About These Terms',
    body: `These Terms of Service ("Terms") govern your use of the Kynetra Tech website at kynetratech.com and any services provided by Kynetra Tech ("we", "us", "our"), a business operating under ABN 43 773 244 648, trading as Kynetra Tech, based in Melbourne, Victoria, Australia.\n\nBy accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or engage our services.`,
  },
  {
    title: '2. About Kynetra Tech',
    body: `Kynetra Tech is a trading name operating under a personal ABN (ABN 43 773 244 648). It is not a registered company or proprietary limited entity. References to "Kynetra Tech" in these Terms refer to the business operating under that trading name.`,
  },
  {
    title: '3. Our Services',
    body: `Kynetra Tech provides business operations consulting and implementation services including CRM configuration, workflow automation, document systems, and integration engineering. The specific scope, deliverables, timeline and pricing for any engagement are agreed in writing between Kynetra Tech and the client prior to commencement.\n\nThese Terms apply generally to all engagements. Where a separate service agreement or statement of work exists, that document will take precedence over these Terms in the event of any inconsistency.`,
  },
  {
    title: '4. Enquiries and Contact',
    body: `Submitting an enquiry through our website or contacting us via email does not constitute an agreement to engage our services and does not create any contractual obligation on either party. A formal engagement begins only when both parties have agreed to a written scope of work.`,
  },
  {
    title: '5. Intellectual Property',
    body: `All content on kynetratech.com — including text, design, structure and branding — is owned by or licensed to Kynetra Tech. You may not reproduce, distribute or use our content without prior written permission.\n\nIntellectual property in deliverables produced during a client engagement will be addressed in the relevant service agreement. Unless otherwise agreed in writing, all custom-built systems, workflows and documents delivered to a client become the property of that client upon receipt of full payment.`,
  },
  {
    title: '6. Client Responsibilities',
    body: `Where you engage Kynetra Tech for services, you agree to:\n\n• Provide accurate and complete information about your business, systems and requirements\n• Respond to reasonable requests for information or feedback within agreed timeframes\n• Ensure we have appropriate access to the tools and platforms required to complete the engagement\n• Not use any systems or deliverables we build in a manner that violates applicable laws or regulations`,
  },
  {
    title: '7. Payment',
    body: `Payment terms for service engagements are set out in the relevant scope of work or invoice. Unless otherwise agreed:\n\n• A deposit may be required prior to commencement of work\n• Remaining amounts are due upon completion or as specified in the scope\n• Overdue invoices may attract late payment follow-up and, in persistent cases, suspension of services\n\nAll prices are in Australian dollars (AUD) and, where applicable, inclusive of GST.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by law:\n\n• Kynetra Tech provides services in good faith and with reasonable skill and care, but does not guarantee specific business outcomes or results\n• We are not liable for any indirect, incidental or consequential loss arising from the use of our services or website\n• Our total liability to you in connection with any engagement will not exceed the total fees paid by you for that engagement\n\nNothing in these Terms excludes any rights you may have under the Australian Consumer Law that cannot be excluded by agreement.`,
  },
  {
    title: '9. Warranties and Consumer Law',
    body: `Our services come with guarantees under the Australian Consumer Law that cannot be excluded. Where we fail to deliver services with due care and skill, you may be entitled to a remedy. Nothing in these Terms is intended to limit or exclude any right you have under applicable Australian law.`,
  },
  {
    title: '10. Confidentiality',
    body: `Both parties agree to keep confidential any sensitive business information shared during an engagement. We will not disclose your business information to third parties except as required to deliver the services or as required by law. Client names and details are not used in any public-facing materials without prior written consent.`,
  },
  {
    title: '11. Website Use',
    body: `You may use kynetratech.com for lawful purposes only. You must not:\n\n• Use our website in any way that causes or may cause damage to the website or impairs its availability\n• Attempt to gain unauthorised access to any part of our website or its underlying systems\n• Use our website to transmit unsolicited communications or malicious content\n\nWe reserve the right to restrict access to our website at any time without notice.`,
  },
  {
    title: '12. Third-Party Links',
    body: `Our website contains links to third-party websites including ciphersoc.com. These links are provided for convenience only. We are not responsible for the content, accuracy or practices of any third-party website and do not endorse them by linking to them.`,
  },
  {
    title: '13. Governing Law',
    body: `These Terms are governed by the laws of the State of Victoria, Australia. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts of Victoria.`,
  },
  {
    title: '14. Changes to These Terms',
    body: `We may update these Terms from time to time. The current version will always be available at kynetratech.com/terms. Continued use of our website or services after any update constitutes acceptance of the revised Terms.`,
  },
  {
    title: '15. Contact Us',
    body: `For any questions about these Terms:\n\nKynetra Tech\nABN 43 773 244 648\nMelbourne, Victoria, Australia\nhello@kynetratech.com\nkynetratech.com`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section style={{ background: 'var(--sky-mist)', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>LEGAL</span>
          <h1 style={{ marginBottom: '0.75rem' }}>Terms of Service</h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--slate)' }}>
            Kynetra Tech — ABN 43 773 244 648 · Last updated: January 2026
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          {sections.map((s) => (
            <div key={s.title} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--frost)' }}>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--deep-ink)', marginBottom: '1rem', letterSpacing: '0.01em' }}>{s.title}</h2>
              {s.body.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '0.75rem', whiteSpace: 'pre-line' }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
