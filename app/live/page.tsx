"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

const UPCOMING_SHOWS = [
  {
    date: "Thu, May 1, 2026",
    venue: "Brewery Bay",
    city: "Orillia, ON",
    note: "Sin Bin Comedy Show",
    ticketUrl: "https://www.eventbrite.ca/e/sin-bin-comedy-show-with-chris-robinson-at-brewery-bay-tickets-1984623026898",
    soldOut: false,
  },
  {
    date: "Thu, May 14, 2026",
    venue: "IDK Social Bar and Cafe",
    city: "Toronto, ON",
    note: "Block Party Vol. 11",
    ticketUrl: "https://www.eventbrite.ca/e/block-party-vol-11-thursday-may-14th-tickets-1985201000633",
    soldOut: false,
  },
  {
    date: "Thu, May 22, 2026",
    venue: "River Run Centre",
    city: "Guelph, ON",
    note: "Roll on the Floor ft. Keith Pedro & Chris Robinson",
    ticketUrl: "https://riverrun.ca/whats-on/roll-on-the-floor-ft-keith-pedro-chris-robinson/",
    soldOut: false,
  },
  {
    date: "Sat, Jun 13, 2026",
    venue: "East Street Cider Co. Taproom",
    city: "Goderich, ON",
    note: "Comedy Show at The Taproom",
    ticketUrl: "https://www.eaststreetcider.com/events-1/comedy-show-the-taproom-13",
    soldOut: false,
  },
];

export default function LivePage() {
  return (
    <>
      <Header activePath="/live" />
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
            On Tour
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
            Live Dates
          </h1>
        </div>

        {/* Upcoming shows */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px 32px" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.light,
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            Upcoming
          </h2>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {UPCOMING_SHOWS.map((show, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: `1px solid ${C.border}`,
                  gap: "16px",
                }}
              >
                <div style={{ flex: 2 }}>
                  <span style={{ fontSize: "0.9rem", color: C.text, display: "block" }}>
                    {show.date} — {show.venue}
                  </span>
                  {show.note && (
                    <span style={{ fontSize: "0.78rem", color: C.light, display: "block", marginTop: "2px" }}>
                      {show.note}
                    </span>
                  )}
                </div>
                <span style={{ flex: 1, textAlign: "center", fontSize: "0.9rem", color: C.light }}>
                  {show.city}
                </span>
                <span style={{ flex: 0, textAlign: "right" }}>
                  {show.soldOut ? (
                    <span style={{ color: C.light, fontSize: "0.8rem", letterSpacing: "0.1em" }}>SOLD OUT</span>
                  ) : (
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: `1px solid ${C.accent}`,
                        color: C.accent,
                        padding: "4px 16px",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                      }}
                    >
                      Tickets
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "32px 32px 80px",
            textAlign: "center",
          }}
        >
          <p style={{ color: C.light, fontSize: "0.9rem", marginBottom: "8px" }}>
            Interested in booking Chris for your event?
          </p>
          <a
            href="/contact"
            style={{
              color: C.accent,
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              borderBottom: `1px solid ${C.accent}`,
              paddingBottom: "2px",
            }}
          >
            Contact Grand Wave Entertainment →
          </a>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
