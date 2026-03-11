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
            fontSize: '30px',
            fontWeight: 800,
            color: '#111',
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          We provide the Perfect Solution<br />to your business growth
        </h2>


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
