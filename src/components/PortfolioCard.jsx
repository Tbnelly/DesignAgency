import { useState } from 'react';
import { MGRAY } from '../data/data';

function PortfolioCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid #eee',
        cursor: 'pointer',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered
          ? '0 12px 36px rgba(0,0,0,0.12)'
          : '0 2px 10px rgba(0,0,0,0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <div style={{ height: 220, overflow: 'hidden' }}>
        <img
          src={item.img}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.4s ease',
            display: 'block',
          }}
        />
      </div>
      <div style={{ padding: '20px 20px 24px' }}>
        <h3 style={{ fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 8 }}>
          {item.title}
        </h3>
        <p style={{ fontSize: 13, color: MGRAY, lineHeight: 1.65 }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default PortfolioCard;
