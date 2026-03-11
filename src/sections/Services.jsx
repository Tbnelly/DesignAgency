import { GREEN, MGRAY, SERVICES, STATS_SM } from '../data/data';
import Label from '../components/Label';
import ServiceCard from '../components/ServiceCard';

function Services() {
  return (
    <section id="services" style={{ background: '#fafafa', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label>WHAT WE DO</Label>
        <h2
          style={{
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 800,
            color: '#111',
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          We provide the Perfect Solution<br />to your business growth
        </h2>

        {/* Small stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 20,
            margin: '36px 0 52px',
          }}
        >
          {STATS_SM.map((stat) => (
            <div
              key={stat.val}
              style={{
                textAlign: 'center',
                background: '#fff',
                borderRadius: 14,
                padding: '22px 16px',
                boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ fontSize: 26 }}>{stat.icon}</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: GREEN, marginTop: 8 }}>{stat.val}</div>
              <div style={{ fontSize: 12, color: MGRAY, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 22,
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
