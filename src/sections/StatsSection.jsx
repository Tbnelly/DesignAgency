import { GREEN, STATS_LG } from '../data/data';

function StatsSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #111 0%, #1e1e1e 100%)', padding: '64px 32px' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 32,
        }}
      >
        {STATS_LG.map((stat) => (
          <div key={stat.val} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32 }}>{stat.icon}</div>
            <div
              style={{
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                fontWeight: 900,
                color: GREEN,
                letterSpacing: -1,
                marginTop: 8,
              }}
            >
              {stat.val}
            </div>
            <div style={{ fontSize: 13, color: '#aaa', marginTop: 6 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
