"use client";

import Link from "next/link";
import { EmailSignup } from "./_components/shared";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SOCIALS = {
  instagram: "https://www.instagram.com/snapshotrobinson/",
  tiktok: "https://www.tiktok.com/@chrisrobinsonjokes",
  youtube: "https://www.youtube.com/@chrisrobinson5434",
};

const UPCOMING_SHOWS = [
  {
    date: "Thu, May 1",
    venue: "Brewery Bay",
    city: "Orillia, ON",
    ticketUrl: "https://www.eventbrite.ca/e/sin-bin-comedy-show-with-chris-robinson-at-brewery-bay-tickets-1984623026898",
    soldOut: false,
  },
  {
    date: "Thu, May 14",
    venue: "IDK Social Bar and Cafe",
    city: "Toronto, ON",
    ticketUrl: "https://www.eventbrite.ca/e/block-party-vol-11-thursday-may-14th-tickets-1985201000633",
    soldOut: false,
  },
  {
    date: "Thu, May 22",
    venue: "River Run Centre",
    city: "Guelph, ON",
    ticketUrl: "https://riverrun.ca/whats-on/roll-on-the-floor-ft-keith-pedro-chris-robinson/",
    soldOut: false,
  },
  {
    date: "Sat, Jun 13",
    venue: "East Street Cider Co. Taproom",
    city: "Goderich, ON",
    ticketUrl: "https://www.eaststreetcider.com/events-1/comedy-show-the-taproom-13",
    soldOut: false,
  },
];

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────

const C = {
  bg: "#0F1D26",
  bgAlt: "#1A2E3A",
  mid: "#476E84",
  light: "#6E8E98",
  snow: "#A8C0C8",
  text: "#E8F2F6",
  accent: "#C8A45A",
  border: "#2A4A5A",
};

// ─── ICONS ───────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ─── NAV ITEMS ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "LIVE", href: "/live" },
  { label: "RELEASES", href: "/releases" },
  { label: "BIO", href: "/bio" },
  { label: "CONTACT", href: "/contact" },
];

// ─── HEADER ───────────────────────────────────────────────────────────────────

function Header({ activePath }: { activePath?: string }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        backgroundColor: C.bg,
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      {/* Nav — left */}
      <nav style={{ display: "flex", gap: "24px" }}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: activePath === item.href ? C.accent : C.light,
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Name — centered */}
      <Link
        href="/"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "1.5rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: C.text,
          whiteSpace: "nowrap",
          fontFamily: "var(--font-bebas), Impact, sans-serif",
        }}
      >
        CHRIS ROBINSON
      </Link>

      {/* Social icons — right */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="TikTok">
          <TikTokIcon />
        </a>
        <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="YouTube">
          <YouTubeIcon />
        </a>
      </div>
    </header>
  );
}

// ─── FEATURED RELEASE ────────────────────────────────────────────────────────

const UNRULY_PLATFORMS = [
  { label: "Watch on YouTube", url: "https://youtu.be/qx9FlFITcvI" },
  { label: "Spotify", url: "https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z" },
  { label: "Apple Music", url: "https://music.apple.com/us/album/unruly/1840954802" },
  { label: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc" },
  { label: "Amazon Music", url: "https://music.amazon.co.uk/albums/B0FRN7WD8V" },
];

function FeaturedReleaseSection() {
  return (
    <section style={{ backgroundColor: C.bg, padding: "80px 32px" }}>
      <p style={{ textAlign: "center", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "48px" }}>
        New Release
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", maxWidth: "1000px", margin: "0 auto", alignItems: "center" }}>
        {/* Image — left */}
        <div style={{ flex: "1 1 280px", maxWidth: "400px" }}>
          <img
            src="/images/unruly-album-art.jpg"
            alt="Unruly"
            style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
          />
        </div>
        {/* Text + links — right */}
        <div style={{ flex: "1 1 280px" }}>
          <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", letterSpacing: "0.05em", color: C.text, margin: "0 0 4px" }}>
            UNRULY
          </h2>
          <p style={{ color: C.light, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
            2025 · Comedy Special & Album
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {UNRULY_PLATFORMS.map((btn) => (
              <a
                key={btn.label}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: `1px solid ${C.accent}`,
                  color: C.accent,
                  padding: "8px 20px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── UPCOMING SHOWS ───────────────────────────────────────────────────────────

function UpcomingShowsSection() {
  return (
    <section style={{ backgroundColor: C.bgAlt, padding: "80px 32px" }}>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: C.text,
          marginBottom: "48px",
        }}
      >
        Upcoming Shows
      </h2>
      <div style={{ borderTop: `1px solid ${C.border}`, maxWidth: "900px", margin: "0 auto" }}>
        {UPCOMING_SHOWS.map((show, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <span style={{ flex: 2, fontSize: "0.9rem", color: C.text }}>
              {show.date} — {show.venue}
            </span>
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
      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <Link
          href="/live"
          style={{
            border: `1px solid ${C.accent}`,
            color: C.accent,
            padding: "10px 28px",
            borderRadius: "999px",
            fontSize: "0.85rem",
            textDecoration: "none",
            letterSpacing: "0.1em",
          }}
        >
          All Dates →
        </Link>
      </div>
    </section>
  );
}

// ─── BOOKING ──────────────────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section style={{ backgroundColor: C.bg, padding: "80px 32px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-bebas), Impact, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.text,
            marginBottom: "12px",
          }}
        >
          Booking
        </h2>
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.light,
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Grand Wave Entertainment
        </p>
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap" }}>
          <div>
                <p style={{ color: C.text, fontSize: "0.95rem", marginBottom: "4px" }}>Morgan Flood</p>
            <a
              href="mailto:morgan@grandwaveentertainment.com"
              style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}
            >
              morgan@grandwaveentertainment.com
            </a>
          </div>
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.light,
                marginBottom: "8px",
              }}
            >
              &nbsp;
            </p>
            <p style={{ color: C.text, fontSize: "0.95rem", marginBottom: "4px" }}>Carolyn Sterling</p>
            <a
              href="mailto:carolyn@grandwaveentertainment.com"
              style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}
            >
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
