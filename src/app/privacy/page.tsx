import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Kynetra Tech — ABN 43 773 244 648. Compliant with the Australian Privacy Act 1988.',
};

const sections = [
  {
    title: '1. About This Policy',
    body: `Kynetra Tech ("we", "us", "our") is a business operating under ABN 43 773 244 648, trading as Kynetra Tech, based in Melbourne, Victoria, Australia. This Privacy Policy explains how we collect, use, store and disclose personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).\n\nBy using our website at kynetratech.com or contacting us through any channel, you agree to the terms of this Privacy Policy.`,
  },
  {
    title: '2. What Information We Collect',
    body: `We may collect the following types of personal information:\n\n• Your name and business name\n• Email address and phone number\n• General information about your business and its operations\n• Any information you voluntarily provide when contacting us or completing our enquiry form\n\nWe do not collect sensitive information (as defined under the Privacy Act) unless you choose to provide it, and we do not collect payment information directly — any payment processing is handled by third-party providers.`,
  },
  {
    title: '3. How We Collect Information',
    body: `We collect personal information in the following ways:\n\n• Directly from you when you submit an enquiry via our contact form\n• When you email us directly at hello@kynetratech.com\n• Through cookies and analytics tools on our website (see Section 7)\n\nWe collect only what is reasonably necessary for the purpose of responding to your enquiry and, where applicable, delivering our services.`,
  },
  {
    title: '4. How We Use Your Information',
    body: `We use personal information to:\n\n• Respond to your enquiries and communicate with you about our services\n• Scope, deliver and manage service engagements\n• Send relevant follow-up communications where you have indicated interest\n• Improve our website and service delivery\n• Meet our legal and regulatory obligations\n\nWe do not use your personal information for unsolicited marketing without your consent.`,
  },
  {
    title: '5. Disclosure of Personal Information',
    body: `We do not sell, rent or trade your personal information. We may share your information with:\n\n• Third-party service providers who assist us in operating our business (e.g. email platforms, scheduling tools, cloud storage) — only to the extent necessary and under appropriate confidentiality obligations\n• Professional advisers including legal and accounting professionals, where required\n• Regulatory or government bodies, where required by law\n\nWhere we share information with third-party tools or platforms, we take reasonable steps to ensure those providers handle your data in accordance with applicable privacy laws.`,
  },
  {
    title: '6. Data Storage and Security',
    body: `Your personal information is stored securely using reputable cloud-based platforms. We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure.\n\nWe retain personal information for as long as it is needed for the purposes for which it was collected, or as required by law. When no longer needed, we take reasonable steps to destroy or de-identify it.`,
  },
  {
    title: '7. Cookies and Website Analytics',
    body: `Our website may use cookies and third-party analytics tools (such as Google Analytics) to understand how visitors use our site. This information is collected in aggregate and is not used to identify you personally.\n\nYou may disable cookies through your browser settings. Doing so may affect the functionality of certain parts of our website.`,
  },
  {
    title: '8. Links to Third-Party Websites',
    body: `Our website contains links to third-party websites including ciphersoc.com. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies separately.`,
  },
  {
    title: '9. Access and Correction',
    body: `You have the right to request access to the personal information we hold about you, and to request corrections if that information is inaccurate, out of date or incomplete. To make a request, contact us at hello@kynetratech.com.\n\nWe will respond to access and correction requests within a reasonable timeframe and in accordance with the Privacy Act.`,
  },
  {
    title: '10. Complaints',
    body: `If you believe we have handled your personal information in a way that does not comply with the Privacy Act or the Australian Privacy Principles, you may lodge a complaint by contacting us at hello@kynetratech.com.\n\nWe will acknowledge your complaint within 5 business days and aim to resolve it within 30 days. If you are not satisfied with our response, you may refer your complaint to the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
  },
  {
    title: '11. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The current version will always be available at kynetratech.com/privacy. We encourage you to review this page periodically.`,
  },
  {
    title: '12. Contact Us',
    body: `For any privacy-related questions or requests:\n\nKynetra Tech\nABN 43 773 244 648\nMelbourne, Victoria, Australia\nhello@kynetratech.com\nkynetratech.com`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: 'var(--sky-mist)', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>LEGAL</span>
          <h1 style={{ marginBottom: '0.75rem' }}>Privacy Policy</h1>
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
