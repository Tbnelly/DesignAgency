import { useState } from 'react';
import { GREEN, MGRAY } from '../data/data';
import SvcIcon from './SvcIcon';

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid #eee',
        borderRadius: 16,
        padding: '28px 24px',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 14px 40px rgba(76,175,80,0.12)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: '#e8f5e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18,
        }}
      >
        <SvcIcon />
      </div>

      <h3 style={{ fontWeight: 700, fontSize: 16, color: '#111', marginBottom: 8 }}>
        {svc.title}
      </h3>
      <p style={{ fontSize: 13, color: MGRAY, lineHeight: 1.65, marginBottom: 16 }}>
        {svc.desc}
      </p>
      <a href="#services" style={{ fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: 'none' }}>
        Learn More →
      </a>
    </div>
  );
}

export default ServiceCard;
