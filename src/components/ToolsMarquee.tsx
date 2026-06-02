'use client';

const tools = [
  'GoHighLevel', 'HubSpot', 'Zoho One', 'n8n', 'Make',
  'Zapier', 'Xero', 'Slack', 'Microsoft 365', 'Google Workspace',
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
              <span className="marquee-dot" />
              <span className="marquee-name">{tool}</span>
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
          gap: 1rem;
          padding: 0 2.75rem;
          border-right: 1px solid var(--frost);
          transition: opacity 0.2s ease;
          cursor: default;
        }

        .marquee-item:hover .marquee-name {
          color: var(--teal);
        }

        .marquee-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--teal);
          flex-shrink: 0;
          opacity: 0.5;
        }

        .marquee-name {
          font-family: 'Jost', system-ui, sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--deep-ink);
          white-space: nowrap;
          transition: color 0.2s ease;
          text-transform: uppercase;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}