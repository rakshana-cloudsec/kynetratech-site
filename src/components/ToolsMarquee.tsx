'use client';

const tools = [
  { name: 'GoHighLevel', logo: 'https://cdn.brandfetch.io/idgCKsF9Vj/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'HubSpot', logo: 'https://cdn.brandfetch.io/idVfYXnBap/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Zoho', logo: 'https://cdn.brandfetch.io/idJ6SKgSFe/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'n8n', logo: 'https://cdn.brandfetch.io/idksBMpknP/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Make', logo: 'https://cdn.brandfetch.io/id7wFUP7-m/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Zapier', logo: 'https://cdn.brandfetch.io/idgkjsrUSj/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Xero', logo: 'https://cdn.brandfetch.io/idBbBDHNkZ/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Slack', logo: 'https://cdn.brandfetch.io/idnrCPuv87/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Microsoft 365', logo: 'https://cdn.brandfetch.io/idchmboHEZ/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
  { name: 'Google Workspace', logo: 'https://cdn.brandfetch.io/id4PlDPnlv/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEyhd-mlg' },
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
      {/* Centred label */}
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
        {/* Fade edges */}
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
                  width: '32px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  marginBottom: '0.4rem',
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: 'var(--slate)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: marquee 32s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0 2.5rem;
          border-right: 1px solid var(--frost);
          transition: opacity 0.2s ease;
        }

        .marquee-item:hover {
          opacity: 0.7;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}