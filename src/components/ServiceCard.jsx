import { useState } from "react";
import { GREEN, MGRAY } from "../data/data";

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 30,
        padding: "50px 30px",
        width: 380,
        height: 415,
        display: "flex",
        flexDirection: "column",
        gap: 43,
        cursor: "pointer",
        boxSizing: "border-box",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 14px 40px rgba(76,175,80,0.12)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "#D7F5DC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={svc.icon}
          alt={svc.title}
          style={{ width: 24, height: 24, objectFit: "contain" }}
        />
      </div>

      <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111", margin: 0 }}>
        {svc.title}
      </h3>

      <p style={{ fontSize: 13, color: MGRAY, lineHeight: 1.65, margin: 0 }}>
        {svc.desc}
      </p>
      <a
        href="#services"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "black",
          textDecoration: "none",
        }}
      >
        Learn More{" "}
        <img
          src="/images/Arrow.png"
          alt=""
          style={{ width: 14, height: 14, verticalAlign: "middle" }}
        />
      </a>
    </div>
  );
}

export default ServiceCard;
