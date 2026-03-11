import { LOGOS } from "../data/data";

function LogoStrip() {
  return (
    <section
      style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        height: 120,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {LOGOS.map((logo) => (
          <span
            key={logo.name}
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: logo.color,
              opacity: 0.75,
              letterSpacing: 0.5,
            }}
          >
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LogoStrip;
