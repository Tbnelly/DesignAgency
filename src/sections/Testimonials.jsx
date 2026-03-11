import { useRef } from 'react';
import { TESTIMONIALS, MGRAY } from '../data/data';
import Label from '../components/Label';

function Testimonials() {
  const stripRef = useRef(null);

  const scroll = (direction) => {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: direction * 340, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ background: '#f7f7f7', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 36,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <Label>TESTIMONIALS</Label>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#111', lineHeight: 1.25 }}>
              See What Our Customer<br />Say About Us
            </h2>
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['‹', '›'].map((arrow, i) => (
              <button
                key={arrow}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: '1.5px solid #ddd',
                  background: '#fff',
                  fontSize: 20,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: '#555',
                  fontFamily: 'inherit',
                }}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={stripRef}
          className="no-scrollbar"
          style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 4 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 calc(33.33% - 14px)',
                minWidth: 280,
                background: '#fff',
                borderRadius: 16,
                padding: '28px 24px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              }}
            >
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 22 }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#111' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: MGRAY }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
