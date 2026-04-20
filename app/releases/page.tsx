"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

const RELEASES = [
  {
    id: "unruly",
    title: "UNRULY",
    year: "2025",
    type: "Comedy Special & Album",
    description: "",
    platforms: [
      { label: "Watch on YouTube", url: "https://youtu.be/qx9FlFITcvI" },
      { label: "Spotify", url: "https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z" },
      { label: "Apple Music", url: "https://music.apple.com/us/album/unruly/1840954802" },
      { label: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc" },
      { label: "Amazon Music", url: "https://music.amazon.co.uk/albums/B0FRN7WD8V" },
    ],
  },
  {
    id: "panning-for-gold",
    title: "PANNING FOR GOLD",
    year: "2023",
    type: "Comedy Special",
    description: "",
    platforms: [
      { label: "Watch on Apple TV", url: "https://tv.apple.com/ca/show/chris-robinson-panning-for-gold/umc.cmc.2nnmodekj9k1buvxldca7l6fo" },
    ],
  },
  {
    id: "gut-bussa",
    title: "GUT BUSSA",
    year: "2020",
    type: "Debut Comedy Album",
    description: "",
    platforms: [
      { label: "Spotify", url: "https://open.spotify.com/album/4PRmgqAZNmsq5Bb8r7TguT" },
      { label: "Apple Music", url: "https://music.apple.com/us/album/gut-bussa-vol-1/1510665105" },
      { label: "Amazon Music", url: "https://music.amazon.ca/albums/B0882JR675" },
      { label: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_np-FyG18_LpRosOYC-STW_smSgvUaUrRk" },
    ],
  },
];

// Placeholder color per release (no images yet)
const PLACEHOLDER_COLORS: Record<string, string> = {
  "unruly": "#2C3A2B",
  "panning-for-gold": "#2A3226",
  "gut-bussa": "#263328",
};

const PLACEHOLDER_LABELS: Record<string, string> = {
  "unruly": "UNRULY",
  "panning-for-gold": "PANNING\nFOR GOLD",
  "gut-bussa": "GUT BUSSA",
};

const ALBUM_ART: Record<string, string> = {
  unruly: "/images/unruly-album-art.jpg",
  "gut-bussa": "/images/gut-bussa-album-art.jpg",
  "panning-for-gold": "/images/panning-for-gold-album-art.jpg",
};

function AlbumPlaceholder({ releaseId, title }: { releaseId: string; title: string }) {
  if (ALBUM_ART[releaseId]) {
    return (
      <img
        src={ALBUM_ART[releaseId]}
        alt={title}
        style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: "12px" }}
      />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        backgroundColor: PLACEHOLDER_COLORS[releaseId] ?? "#2A3226",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${C.border}`,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          letterSpacing: "0.1em",
          color: C.light,
          textAlign: "center",
          padding: "16px",
          whiteSpace: "pre-line",
        }}
      >
        {PLACEHOLDER_LABELS[releaseId] ?? title}
      </span>
    </div>
  );
}

export default function ReleasesPage() {
  return (
    <>
      <Header activePath="/releases" />
      <main style={{ backgroundColor: C.bgDeep, minHeight: "80vh" }}>
        {/* Page header */}
        <div
          style={{
            padding: "60px 32px 40px",
            textAlign: "center",
            backgroundColor: C.bgAlt,
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
            Specials &amp; Albums
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
            Releases
          </h1>
        </div>

        {/* Release cards */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px" }}>
          {RELEASES.map((release, idx) => (
            <div
              key={release.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                alignItems: "flex-start",
                marginBottom: idx < RELEASES.length - 1 ? "80px" : 0,
                flexWrap: "wrap",
                paddingBottom: idx < RELEASES.length - 1 ? "80px" : 0,
                borderBottom: idx < RELEASES.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              {/* Left: album art */}
              <div style={{ flex: "0 0 280px", maxWidth: "320px", alignSelf: "flex-start" }}>
                <AlbumPlaceholder releaseId={release.id} title={release.title} />
              </div>

              {/* Right: info + platform buttons */}
              <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "flex-start" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: C.light,
                    margin: 0,
                  }}
                >
                  {release.type} · {release.year}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas), Impact, sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1.0,
                    color: C.text,
                  }}
                >
                  {release.title}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
                  {release.platforms.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: `1px solid ${C.accent}`,
                        color: C.text,
                        textAlign: "center",
                        padding: "10px 0",
                        borderRadius: "999px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        letterSpacing: "0.05em",
                        width: "260px",
                        display: "block",
                        transition: "background 0.2s, color 0.2s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.accent;
                        (e.currentTarget as HTMLAnchorElement).style.color = "#1B2A1E";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color = C.text;
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
