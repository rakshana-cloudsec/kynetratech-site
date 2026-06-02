'use client';

const tools = [
  { name: 'GoHighLevel', logo: '/tools/gohighlevel.png', dark: true },
  { name: 'HubSpot', logo: '/tools/hubspot.png', dark: false },
  { name: 'Zoho', logo: '/tools/zoho.png', dark: false },
  { name: 'n8n', logo: '/tools/n8n.png', dark: false },
  { name: 'Make', logo: '/tools/make.png', dark: true },
  { name: 'Zapier', logo: '/tools/zapier.png', dark: false },
  { name: 'Xero', logo: '/tools/xero.png', dark: true },
  { name: 'Slack', logo: '/tools/slack.png', dark: false },
  { name: 'Microsoft', logo: '/tools/microsoft.png', dark: false },
  { name: 'Google Workspace', logo: '/tools/google.png', dark: true },
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
              <div style={{
                background: tool.dark ? '#111' : 'transparent',
                borderRadius: '8px',
                padding: tool.dark ? '8px 12px' : '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '44px',
              }}>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  style={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '130px',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'grayscale(100%) opacity(70%)',
                    transition: 'filter 0.3s ease',
                  }}
                  className="marquee-logo"
                />
              </div>
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

        .marquee-item:hover .marquee-logo {
          filter: grayscale(0%) opacity(100%);
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}