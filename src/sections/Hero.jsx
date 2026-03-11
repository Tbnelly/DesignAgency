import { GREEN, ORANGE } from "../data/data";
import LogoStrip from "./LogoStrip";

function Hero() {
  return (
    <>
      <section
        style={{
          minHeight: "calc(100vh - 62px)",
          marginTop: 62,
          background: "#d7f5dc",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
          paddingTop: 60,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* ── LEFT — text ── */}
          <div style={{ flex: "0 0 44%", maxWidth: 500 }}>
            <h1
              style={{
                fontSize: "clamp(36px, 4vw, 58px)",
                fontWeight: 900,
                lineHeight: 1.12,
                color: "#111",
                marginBottom: 20,
              }}
            >
              Increase Your
              <br />
              Customers Loyalty
              <br />
              and Satisfaction
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 400,
              }}
            >
              We help businesses like yours earn more customers, standout from
              competitors, make more money.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                background: GREEN,
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </div>

          {/* ── RIGHT — image + decorators ── */}
          <div
            style={{
              flex: "0 0 52%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 500,
            }}
          >
            {/* Woman image */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: 672,
                height: 564,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/Group 38.png"
                alt="Professional woman with laptop"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <LogoStrip />
    </>
  );
}

export default Hero;
