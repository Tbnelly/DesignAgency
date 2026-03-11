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
          <img
            key={logo.img}
            src={logo.img}
            alt="logo"
            style={{
              height: 20,
              opacity: 0.75,
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default LogoStrip;
