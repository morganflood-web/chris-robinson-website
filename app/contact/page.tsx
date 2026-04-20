"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

export default function ContactPage() {
  return (
    <>
      <Header activePath="/contact" />
      <main style={{ backgroundColor: C.bg, minHeight: "80vh" }}>
        {/* Page header */}
        <div
          style={{
            padding: "60px 32px 40px",
            textAlign: "center",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: C.accent,
              marginBottom: "12px",
            }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas), Impact, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.text,
              margin: 0,
            }}
          >
            Contact
          </h1>
        </div>

        {/* Booking info */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "80px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: C.bgAlt,
              border: `1px solid ${C.border}`,
              borderRadius: "12px",
              padding: "48px 40px",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.light,
                marginBottom: "8px",
              }}
            >
              Represented by
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), Impact, sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.1em",
                color: C.accent,
                marginBottom: "32px",
              }}
            >
              Grand Wave Entertainment
            </h2>

            <div
              style={{
                display: "flex",
                gap: "48px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Morgan */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: C.mid,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    fontSize: "1.1rem",
                    color: C.accent,
                    fontFamily: "var(--font-bebas), Impact, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  MF
                </div>
                <p style={{ color: C.text, fontSize: "1rem", fontWeight: 600 }}>Morgan Flood</p>
                <a
                  href="mailto:morgan@grandwaveentertainment.com"
                  style={{
                    color: C.accent,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderBottom: `1px solid transparent`,
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = C.accent;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                  }}
                >
                  morgan@grandwaveentertainment.com
                </a>
              </div>

              {/* Carolyn */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: C.mid,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    fontSize: "1.1rem",
                    color: C.accent,
                    fontFamily: "var(--font-bebas), Impact, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  CS
                </div>
                <p style={{ color: C.text, fontSize: "1rem", fontWeight: 600 }}>Carolyn Sterling</p>
                <a
                  href="mailto:carolyn@grandwaveentertainment.com"
                  style={{
                    color: C.accent,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderBottom: `1px solid transparent`,
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = C.accent;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                  }}
                >
                  carolyn@grandwaveentertainment.com
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "32px",
                borderTop: `1px solid ${C.border}`,
                color: C.light,
                fontSize: "0.85rem",
                lineHeight: 1.7,
              }}
            >
              <p>
                For all booking inquiries, media requests, and corporate entertainment,
                please reach out to Grand Wave Entertainment directly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
