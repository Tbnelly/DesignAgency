import { PORTFOLIO } from '../data/data';
import Label from '../components/Label';
import PortfolioCard from '../components/PortfolioCard';

function Portfolio() {
  return (
    <section id="portfolio" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Label>OUR PORTFOLIO</Label>
        <h2
          style={{
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 800,
            color: '#111',
            lineHeight: 1.25,
            marginBottom: 44,
          }}
        >
          We provide the Perfect Solution<br />to your business growth
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {PORTFOLIO.map((item, i) => (
            <PortfolioCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
