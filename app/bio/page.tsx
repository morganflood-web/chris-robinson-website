"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

export default function BioPage() {
  return (
    <>
      <Header activePath="/bio" />
      <main style={{ backgroundColor: C.bg }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "64px",
            padding: "60px 32px 80px",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Photo */}
          <div style={{ flex: "1 1 280px", maxWidth: "400px" }}>
            <img
              src="/images/photo-bio.jpg"
              alt="Chris Robinson"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", objectPosition: "top" }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2 1 380px" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.accent,
                marginBottom: "12px",
              }}
            >
              About
            </p>
            <h1
              style={{
                fontFamily: "var(--font-bebas), Impact, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "32px",
                lineHeight: 1.0,
                color: C.text,
              }}
            >
              Chris Robinson
            </h1>
            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
              Chris Robinson is one of the premier comics working in Canada today. He made a name for himself with multiple
              appearances at the Just For Laughs Comedy Festival in Montreal, winning Sirius XM&apos;s Top Comic honours
              in 2016 taking home the $25,000 grand prize, and shooting his special &lsquo;Panning for Gold&rsquo; which
              can be seen on AppleTV.
            </p>
            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
              Chris has since released a follow up special &lsquo;Unruly&rsquo; which can be streamed on Youtube. As an
              actor Chris has appeared in Workin&apos; Moms, Tallboyz, The Amazing Gayle Pile, Kids in the Hall,
              he&apos;s a lead on the Crave series Pillow Talk, and plays a recurring role on the new CBC comedy One
              More Time.
            </p>

            {/* Highlights */}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "28px" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.light,
                  marginBottom: "16px",
                }}
              >
                Highlights
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Sirius XM Top Comic Winner, 2016 — $25,000 Grand Prize",
                  "Just For Laughs Comedy Festival, Montreal — Multiple Appearances",
                  "Comedy Special: Panning for Gold — AppleTV",
                  "Comedy Special: Unruly — YouTube",
                  "Actor: Workin' Moms, Tallboyz, The Amazing Gayle Pile, Kids in the Hall",
                  "Lead: Pillow Talk — Crave",
                  "Recurring Role: One More Time — CBC",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      color: C.light,
                      fontSize: "0.9rem",
                      margin: 0,
                      lineHeight: 1.6,
                      paddingLeft: "12px",
                      borderLeft: `2px solid ${C.accent}`,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
