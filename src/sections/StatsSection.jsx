import { GREEN, STATS_LG } from '../data/data';

function StatsSection() {
  return (
    <section style={{ background: '#fff', padding: '64px 32px' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}
      >
        {STATS_LG.map((stat, index) => (
          <div
            key={stat.val}
            style={{
              textAlign: 'center',
              padding: '32px 24px',
              borderRight: index < STATS_LG.length - 1 ? '1px solid #e0e0e0' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {/* Icon — swap emoji for your image */}
            <img
              src={stat.icon}
              alt={stat.label}
              style={{ width: 52, height: 52, objectFit: 'contain' }}
            />

            {/* Label first, then value — matching Figma order */}
            <div style={{ fontSize: 14, color: '#444', fontWeight: 500 }}>{stat.label}</div>
            <div
              style={{
                fontSize: 'clamp(28px, 3vw, 46px)',
                fontWeight: 900,
                color: GREEN,
                letterSpacing: -1,
              }}
            >
              {stat.val}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;