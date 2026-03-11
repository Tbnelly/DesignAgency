import { useState } from "react";
import { GREEN, NAV_SERVICES } from "../data/data";

function Navbar({ scrolled }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "#d7f5dc",
        boxShadow: scrolled
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — left side */}
        <div style={{ fontWeight: 900, fontSize: 18, cursor: "pointer" }}>
          Design<span style={{ color: "#f55e1d" }}>AGENCY</span>
        </div>

        {/* Right side — nav links + auth buttons all together */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>

          {/* Services dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 14,
                color: "#333",
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "inherit",
              }}
            >
              Services
              {/* Chevron icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  background: "#fff",
                  boxShadow: "0 10px 32px rgba(0,0,0,0.13)",
                  borderRadius: 12,
                  padding: "8px 0",
                  minWidth: 210,
                  zIndex: 9999,
                }}
              >
                {NAV_SERVICES.map((service) => (
                  <div
                    key={service}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      padding: "11px 20px",
                      fontSize: 14,
                      color: "#444",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f5f5f5")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="#about"
            style={{ fontSize: 14, fontWeight: 500, color: "#333", textDecoration: "none" }}
          >
            About Us
          </a>

          <a
            href="#contact"
            style={{ fontSize: 14, fontWeight: 500, color: "#333", textDecoration: "none" }}
          >
            Contact Us
          </a>

          {/* Auth buttons */}
          <a
            href="#login"
            style={{
              padding: "9px 22px",
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 500,
              color: "#333",
              textDecoration: "none",
              border: "1px solid #20B15A",
            }}
          >
            Login
          </a>
          <a
            href="#register"
            style={{
              background: GREEN,
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;