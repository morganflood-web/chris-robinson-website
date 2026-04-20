"use client";

import Link from "next/link";
import { Header, Footer, EmailSignup, C } from "./_components/shared";

// ─── DATA ────────────────────────────────────────────────────────────────────

const UPCOMING_SHOWS = [
  { date: "Thu, May 1, 2026", venue: "Brewery Bay", city: "Orillia, ON", note: "Sin Bin Comedy Show", ticketUrl: "https://www.eventbrite.ca/e/sin-bin-comedy-show-with-chris-robinson-at-brewery-bay-tickets-1984623026898", soldOut: false },
  { date: "Thu, May 14, 2026", venue: "IDK Social Bar and Cafe", city: "Toronto, ON", note: "Block Party Vol. 11", ticketUrl: "https://www.eventbrite.ca/e/block-party-vol-11-thursday-may-14th-tickets-1985201000633", soldOut: false },
  { date: "Thu, May 22, 2026", venue: "River Run Centre", city: "Guelph, ON", note: "Roll on the Floor ft. Keith Pedro & Chris Robinson", ticketUrl: "https://riverrun.ca/whats-on/roll-on-the-floor-ft-keith-pedro-chris-robinson/", soldOut: false },
  { date: "Sat, Jun 13, 2026", venue: "East Street Cider Co. Taproom", city: "Goderich, ON", note: "Comedy Show at The Taproom", ticketUrl: "https://www.eaststreetcider.com/events-1/comedy-show-the-taproom-13", soldOut: false },
];

const UNRULY_PLATFORMS = [
  { label: "Watch on YouTube", url: "https://youtu.be/qx9FlFITcvI" },
  { label: "Spotify", url: "https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z" },
  { label: "Apple Music", url: "https://music.apple.com/us/album/unruly/1840954802" },
  { label: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc" },
  { label: "Amazon Music", url: "https://music.amazon.co.uk/albums/B0FRN7WD8V" },
];

// ─── FEATURED RELEASE ────────────────────────────────────────────────────────

function FeaturedReleaseSection() {
  return (
    <section style={{ backgroundColor: C.bgAlt, padding: "80px 32px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* LEFT: text + streaming buttons */}
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.accent, margin: 0 }}>
            New Comedy Special &amp; Album — Out Now
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "0.05em", lineHeight: 1.0, margin: 0, color: C.text }}>
            UNRULY
          </h2>
          <p style={{ fontSize: "0.9rem", color: C.light, margin: 0 }}>2025 · Comedy Special &amp; Album</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            {UNRULY_PLATFORMS.map((btn) => (
              <a
                key={btn.label}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1px solid ${C.accent}`,
                  color: C.text,
                  textAlign: "center",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  maxWidth: "320px",
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        {/* RIGHT: image */}
        <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
          <img
            src="/images/unruly-hero.jpg"
            alt="Unruly"
            style={{ width: "100%", maxWidth: "560px", borderRadius: "12px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── UPCOMING SHOWS ──────────────────────────────────────────────────────────

function UpcomingShowsSection() {
  return (
    <section style={{ backgroundColor: C.bg, padding: "80px 32px", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{ textAlign: "center", fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.text, marginBottom: "48px" }}>
        Upcoming Shows
      </h2>
      <div style={{ borderTop: `1px solid ${C.border}`, maxWidth: "900px", margin: "0 auto" }}>
        {UPCOMING_SHOWS.map((show, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}`, gap: "16px" }}>
            <div style={{ flex: 2 }}>
              <span style={{ fontSize: "0.9rem", color: C.text, display: "block" }}>{show.date} — {show.venue}</span>
              {show.note && <span style={{ fontSize: "0.78rem", color: C.light, display: "block", marginTop: "2px" }}>{show.note}</span>}
            </div>
            <span style={{ flex: 1, textAlign: "center", fontSize: "0.9rem", color: C.light }}>{show.city}</span>
            <span style={{ flex: 0, textAlign: "right" }}>
              {show.soldOut ? (
                <span style={{ color: C.light, fontSize: "0.8rem", letterSpacing: "0.1em" }}>SOLD OUT</span>
              ) : (
                <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer" style={{ border: `1px solid ${C.accent}`, color: C.accent, padding: "4px 16px", borderRadius: "999px", fontSize: "0.8rem", whiteSpace: "nowrap", textDecoration: "none" }}>
                  Tickets
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <Link href="/live" style={{ border: `1px solid ${C.accent}`, color: C.accent, padding: "10px 28px", borderRadius: "999px", fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.1em" }}>
          All Dates →
        </Link>
      </div>
    </section>
  );
}

// ─── BOOKING ─────────────────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section style={{ backgroundColor: C.bgWarm, padding: "80px 32px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.text, marginBottom: "12px" }}>
          Booking
        </h2>
        <p style={{ fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "32px" }}>
          Grand Wave Entertainment
        </p>
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ color: C.text, fontSize: "0.95rem", marginBottom: "4px" }}>Morgan Flood</p>
            <a href="mailto:morgan@grandwaveentertainment.com" style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}>
              morgan@grandwaveentertainment.com
            </a>
          </div>
          <div>
            <p style={{ color: C.text, fontSize: "0.95rem", marginBottom: "4px" }}>Carolyn Sterling</p>
            <a href="mailto:carolyn@grandwaveentertainment.com" style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}>
              carolyn@grandwaveentertainment.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header activePath="/" />
      <main>
        <FeaturedReleaseSection />
        <UpcomingShowsSection />
        <BookingSection />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
