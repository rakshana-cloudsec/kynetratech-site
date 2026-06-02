'use client';

const tools = [
  'GoHighLevel', 'HubSpot', 'Zoho One', 'n8n', 'Make',
  'Zapier', 'Xero', 'Slack', 'Microsoft 365', 'Google Workspace',
];

// Double the array so the loop is seamless
const doubled = [...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section style={{
      borderBottom: '1px solid var(--frost)',
      borderTop: '1px solid var(--frost)',
      padding: '2rem 0',
      background: 'var(--white)',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2.5rem',
        marginBottom: '1.25rem',
        paddingLeft: '2.5rem',
      }}>
        <span className="label-slate">TOOLS WE BUILD WITH</span>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, var(--white), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, var(--white), transparent)',
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {doubled.map((tool, i) => (
            <span key={i} className="marquee-item">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--slate);
          text-transform: uppercase;
          padding: 0.5rem 2rem;
          border-right: 1px solid var(--frost);
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .marquee-item:hover {
          color: var(--teal);
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}