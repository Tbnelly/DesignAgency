import { GREEN, ORANGE } from "../data/data";
import LogoStrip from "./LogoStrip";

function Hero() {
  return (
    <>
      <section
        style={{
          minHeight: "calc(100vh - 62px - 120px)",
          marginTop: 62,
          background: "#d7f5dc",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 32px",
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
                src="/images/HeaderLady.png"
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

            {/* ── Decorators — arranged clockwise around image ── */}

            {/* TOP-LEFT: Orange icon box (star SVG) */}
            <div
              style={{
                position: "absolute",
                top: "6%",
                left: "4%",
                width: 52,
                height: 52,
                background: ORANGE,
                borderRadius: 10,
                zIndex: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6878 29.1577C16.5542 29.0994 16.4386 29.005 16.3548 28.8848L12.1914 23.4048L6.112 23.7554C5.11897 23.8154 4.26373 23.0583 4.20423 22.0642C4.20337 22.052 4.2025 22.0399 4.20214 22.0266C4.18827 21.6161 4.304 21.2137 4.5333 20.8734L8.07999 15.7352L5.99465 9.89311C5.65965 8.92614 6.1535 7.86708 7.11007 7.50108C7.48462 7.35405 7.89723 7.33854 8.28117 7.45742L14.0815 9.16051L18.8313 5.26465C19.5868 4.62313 20.7197 4.71466 21.3623 5.47068C21.6411 5.79815 21.792 6.21502 21.7894 6.64403L21.8608 12.8089L26.9076 16.1757C27.3163 16.4461 27.5973 16.8727 27.6863 17.3549C27.845 18.271 27.3362 19.1714 26.47 19.5089L20.6946 21.628L19.8404 24.8898C19.7063 25.3765 19.208 25.6685 18.7183 25.5435C18.2388 25.4166 17.9528 24.925 18.0802 24.4443L18.9246 21.1779C19.0881 20.5833 19.5256 20.1022 20.1024 19.886L25.9006 17.7435L20.8588 14.366C20.3494 14.0199 20.0524 13.4368 20.0711 12.8218L19.9908 6.67885L15.1662 10.6314C14.7066 11.0421 14.0696 11.1884 13.477 11.0206L7.67665 9.31747L9.73642 15.1163C9.94351 15.6902 9.85964 16.3271 9.51333 16.8286L5.96663 21.9668L12.0399 21.6264C12.6473 21.5801 13.2349 21.8541 13.5898 22.3491L17.7457 27.8256C17.9963 28.166 17.9862 28.6334 17.7211 28.9636C17.4636 29.2972 17.0112 29.4092 16.6269 29.2379L16.6878 29.1577Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* TOP: Small green diamond */}
            <div
              style={{
                position: "absolute",
                top: "2%",
                left: "38%",
                width: 14,
                height: 14,
                background: GREEN,
                transform: "rotate(45deg)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />

            {/* TOP-RIGHT: Small green diamond */}
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "6%",
                width: 14,
                height: 14,
                background: GREEN,
                transform: "rotate(45deg)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />

            {/* RIGHT: Green icon box (checkmark SVG) */}
            <div
              style={{
                position: "absolute",
                top: "28%",
                right: "0%",
                width: 48,
                height: 48,
                background: GREEN,
                borderRadius: 10,
                zIndex: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.7029 10.4553C23.7029 10.9495 23.3011 11.3513 22.8069 11.3513H22.7962V11.33C22.2961 11.33 21.8908 10.9258 21.8896 10.4257V10.4233V7.4107C21.8896 3.79246 19.9104 1.81327 16.3028 1.81327H7.41425C3.80431 1.81327 1.81327 3.80431 1.81327 7.4107V16.2993C1.81327 19.895 3.80431 21.886 7.4107 21.886H16.2993C19.9057 21.886 21.886 19.895 21.886 16.2993C21.886 15.7991 22.2914 15.3926 22.7927 15.3926C23.294 15.3926 23.6993 15.7991 23.6993 16.2993C23.7029 20.868 20.868 23.7029 16.3028 23.7029H7.4107C2.83486 23.7029 0 20.868 0 16.3028V7.41425C0 2.83486 2.83486 0 7.4107 0H16.2993C20.8467 0 23.7029 2.83486 23.7029 7.4107V10.4553ZM10.4454 13.4081L15.4419 8.41036C15.7892 8.06311 16.3521 8.06311 16.6994 8.41036C17.0466 8.75761 17.0466 9.32055 16.6994 9.6678L11.0735 15.2937C10.9064 15.4596 10.68 15.5532 10.4454 15.5532C10.2083 15.5532 9.98317 15.4596 9.81606 15.2937L7.00372 12.4801C6.65647 12.1329 6.65647 11.57 7.00372 11.2227C7.35097 10.8755 7.91391 10.8755 8.26116 11.2227L10.4454 13.4081Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* BOTTOM-RIGHT: Small orange diamond */}
            <div
              style={{
                position: "absolute",
                bottom: "16%",
                right: "4%",
                width: 14,
                height: 14,
                background: ORANGE,
                transform: "rotate(45deg)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />

            {/* BOTTOM: Green icon box (link/chain SVG) */}
            <div
              style={{
                position: "absolute",
                bottom: "6%",
                left: "38%",
                width: 48,
                height: 48,
                background: GREEN,
                borderRadius: 10,
                zIndex: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.0768 8.71376L17.4317 10.3588C16.0574 9.29619 14.0696 9.39508 12.81 10.6546L10.6463 12.8184C9.38671 14.0779 9.28699 16.0649 10.3496 17.4393L8.71378 19.0768C6.94974 20.8408 6.94639 23.7068 8.7054 25.4658L11.6108 28.3713C11.822 28.5824 12.1245 28.6738 12.4178 28.6135C15.2822 28.0268 18.0829 26.743 20.5182 24.9027C20.8827 24.632 20.9757 24.1418 20.7545 23.7529C20.2617 22.8864 20.4042 21.8305 21.109 21.1257C21.8062 20.4285 22.878 20.2902 23.7135 20.7872C24.0664 20.9975 24.513 20.9363 24.7963 20.6531C24.8256 20.6237 24.8524 20.5936 24.8776 20.5601C26.7321 18.1105 28.021 15.2964 28.6059 12.4254C28.6646 12.1321 28.5741 11.8304 28.3629 11.6192L25.4575 8.71376C23.6985 6.95475 20.8358 6.95475 19.0768 8.71376ZM26.7623 12.5326C26.241 14.7651 25.253 16.9515 23.8761 18.9167C22.4892 18.4482 20.9255 18.7952 19.8519 19.8687C18.7868 20.9338 18.434 22.5001 18.884 23.8937C16.9306 25.2622 14.7526 26.2486 12.5243 26.7706L9.96244 24.2088C8.89648 23.1428 8.89983 21.4048 9.97166 20.3329L12.2142 18.087C12.3818 17.9194 12.4748 17.694 12.4748 17.4577C12.4732 17.2214 12.3801 16.9959 12.2134 16.8292L11.9025 16.5199C11.2287 15.8462 11.2295 14.7492 11.9033 14.0754L14.0671 11.9117C14.6311 11.3477 15.4926 11.2555 16.1538 11.6368L13.8911 13.8994C13.5442 14.2464 13.5442 14.8095 13.8911 15.1565C14.238 15.5034 14.8012 15.5034 15.1481 15.1565L20.3338 9.9708C21.3998 8.90483 23.1345 8.90484 24.2004 9.9708L26.7623 12.5326ZM23.5721 22.3238L24.6565 23.4082C25.0034 23.7551 25.0034 24.3182 24.6565 24.6652C24.3096 25.0121 23.7464 25.0121 23.3995 24.6652L22.3151 23.5808C21.9681 23.2338 21.9681 22.6707 22.3151 22.3238C22.662 21.9768 23.2252 21.9768 23.5721 22.3238ZM30.1188 14.674C29.7895 15.0034 29.7836 15.5221 30.0803 15.8691C30.0803 15.8691 31.4169 17.4638 31.8527 17.9532C32.3337 18.4963 32.6832 19.2614 32.7418 19.9016C32.8265 20.8058 32.5658 21.4536 31.8116 22.2112C31.3163 22.7082 28.6414 25.3848 26.6201 27.4061C26.2723 27.7539 26.2723 28.317 26.6192 28.664C26.9662 29.0109 27.5293 29.0109 27.8763 28.664C29.8272 26.7131 32.6035 23.935 33.0712 23.4657C34.1866 22.3453 34.645 21.1595 34.5126 19.7365C34.4179 18.715 33.9209 17.608 33.1826 16.7741C32.8784 16.4318 32.1046 15.5282 31.6737 15.0249C31.4968 14.8183 31.3779 14.6794 31.3725 14.674C31.0264 14.3279 30.4649 14.3279 30.1188 14.674ZM22.2029 31.8196C22.3679 31.6562 22.7082 31.316 23.1548 30.8693C23.5018 30.5224 24.0675 30.5199 24.4144 30.8668C24.7613 31.2137 24.758 31.7803 24.4102 32.128C23.9577 32.5806 23.6275 32.9107 23.4582 33.0783C22.3369 34.1946 21.1511 34.653 19.7273 34.5197C18.7075 34.4251 17.5996 33.9289 16.7666 33.1898C16.4287 32.8905 15.546 32.1349 15.0387 31.7006C14.8201 31.5135 14.6712 31.3861 14.6657 31.3805C14.3196 31.0344 14.3196 30.4729 14.6657 30.1268C14.995 29.7975 15.5129 29.7925 15.8615 30.0891C15.8615 30.0891 17.4563 31.4258 17.9457 31.8599C18.4887 32.3409 19.253 32.6912 19.8924 32.749C20.7992 32.8345 21.4461 32.573 22.2029 31.8196Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* BOTTOM-LEFT: Small orange diamond */}
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "8%",
                width: 14,
                height: 14,
                background: ORANGE,
                transform: "rotate(45deg)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />

            {/* LEFT: Small green diamond */}
            <div
              style={{
                position: "absolute",
                top: "48%",
                left: "2%",
                width: 14,
                height: 14,
                background: GREEN,
                transform: "rotate(45deg)",
                borderRadius: 2,
                zIndex: 6,
              }}
            />
          </div>
        </div>
      </section>
      <LogoStrip/>
    </>
  );
}

export default Hero;
