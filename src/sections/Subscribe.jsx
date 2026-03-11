import { useState } from 'react';
import { ORANGE, DKGREEN, MGRAY } from '../data/data';
import Label from '../components/Label';

function Subscribe() {
  const [email, setEmail]       = useState('');
  const [done, setDone]         = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) setDone(true);
  };

  return (
    <section style={{ background: '#fff', padding: '72px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <Label center>SUBSCRIBE</Label>

        <h2
          style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 800,
            color: '#111',
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          Subscribe To Get The Latest<br />News About Us
        </h2>

        <p style={{ fontSize: 14, color: MGRAY, marginBottom: 32 }}>
          Please Drop Your Email Below To Get Daily Updates About What We Do
        </p>

        {done ? (
          <div
            style={{
              background: '#e8f5e9',
              borderRadius: 10,
              padding: '16px 24px',
              color: DKGREEN,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            ✓ You're subscribed! Thank you.
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              maxWidth: 460,
              margin: '0 auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              style={{
                flex: 1,
                border: 'none',
                padding: '14px 18px',
                fontSize: 14,
                outline: 'none',
                color: '#333',
                fontFamily: 'inherit',
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{
                background: ORANGE,
                color: '#fff',
                border: 'none',
                padding: '14px 26px',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Subscribe;
