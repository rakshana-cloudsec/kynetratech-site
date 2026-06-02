'use client';

const tools = [
  { name: 'GoHighLevel', logo: '/tools/gohighlevel.png' },
  { name: 'HubSpot', logo: '/tools/hubspot.png' },
  { name: 'Zoho', logo: '/tools/zoho.png' },
  { name: 'n8n', logo: '/tools/n8n.png' },
  { name: 'Make', logo: '/tools/make.png' },
  { name: 'Zapier', logo: '/tools/zapier.png' },
  { name: 'Xero', logo: '/tools/xero.png' },
  { name: 'Slack', logo: '/tools/slack.png' },
  { name: 'Microsoft', logo: '/tools/microsoft.png' },
  { name: 'Google Workspace', logo: '/tools/google.png' },
];

const doubled = [...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section style={{
      borderBottom: '1px solid var(--frost)',
      borderTop: '1px solid var(--frost)',
      padding: '2.5rem 0',
      background: 'var(--white)',
      overflow: 'hidden',
    }}>
      <p style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.68rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--slate)',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 400,
      }}>
        Tools We Build With
      </p>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '140px', zIndex: 2,
          background: 'linear-gradient(to right, var(--white), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '140px', zIndex: 2,
          background: 'linear-gradient(to left, var(--white), transparent)',
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {doubled.map((tool, i) => (
            <div key={i} className="marquee-item">
              <img
                src={tool.logo}
                alt={tool.name}
                style={{
                  height: '32px',
                  width: 'auto',
                  maxWidth: '130px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 36s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 3rem;
          border-right: 1px solid var(--frost);
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}