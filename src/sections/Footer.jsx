import { GREEN } from '../data/data';

const QUICK_LINKS     = ['Services', 'Portfolio', 'About Us', 'Contact Us'];
const FOOTER_SERVICES = ['Web Development', 'Brand Strategy', 'UI/UX Design', 'Digital Marketing'];
const SOCIAL          = ['f', 't', 'in', '◆'];

function Footer() {
  return (
    <footer style={{ background: GREEN, padding: '52px 32px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 40,
            marginBottom: 44,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, color: '#fff', marginBottom: 14 }}>
              WEB LOGO
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, maxWidth: 240 }}>
              Some footer text about the agency. Just a little description to help people understand you better.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {SOCIAL.map((icon) => (
                <div
                  key={icon}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 15 }}>Quick Links</p>
            {QUICK_LINKS.map((link) => (
              <div key={link} style={{ marginBottom: 10 }}>
                <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                  {link}
                </a>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 15 }}>Services</p>
            {FOOTER_SERVICES.map((svc) => (
              <div key={svc} style={{ marginBottom: 10 }}>
                <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                  {svc}
                </a>
              </div>
            ))}
          </div>

          {/* Address */}
          <div>
            <p style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 15 }}>Address</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
              Design Agency Head Office<br />Hijam Road<br />United Arab Emirates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: 22, textAlign: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
            Copyright Design Agency 2021
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
