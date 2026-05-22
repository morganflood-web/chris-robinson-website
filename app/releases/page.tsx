import { Header, Footer, C, EmailSignup } from "../_components/shared";
import { getReleases } from "@/lib/data";

export const dynamic = "force-dynamic";

const ALBUM_ART: Record<string, string> = {
  r1: "/images/unruly-album-art.jpg",
  r2: "/images/panning-for-gold-album-art.jpg",
  r3: "/images/gut-bussa-album-art.jpg",
};

const PLACEHOLDER_COLORS: Record<string, string> = {
  r1: "#2C3A2B",
  r2: "#2A3226",
  r3: "#263328",
};

const PLACEHOLDER_LABELS: Record<string, string> = {
  r1: "UNRULY",
  r2: "PANNING\nFOR GOLD",
  r3: "GUT BUSSA",
};

function AlbumPlaceholder({ releaseId, title }: { releaseId: string; title: string }) {
  const art = ALBUM_ART[releaseId];
  if (art) {
    return (
      <img
        src={art}
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

export default async function ReleasesPage() {
  const releases = await getReleases();

  return (
    <>
      <Header activePath="/releases" />
      <main style={{ backgroundColor: C.bgDeep, minHeight: "80vh" }}>
        <div
          style={{
            padding: "60px 32px 40px",
            textAlign: "center",
            backgroundColor: C.bgAlt,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>
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

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px" }}>
          {releases.map((release, idx) => (
            <div
              key={release.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                alignItems: "flex-start",
                marginBottom: idx < releases.length - 1 ? "80px" : 0,
                flexWrap: "wrap",
                paddingBottom: idx < releases.length - 1 ? "80px" : 0,
                borderBottom: idx < releases.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <div style={{ flex: "0 0 280px", maxWidth: "320px", alignSelf: "flex-start" }}>
                <AlbumPlaceholder releaseId={release.id} title={release.title} />
              </div>
              <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "flex-start" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, margin: 0 }}>
                  {release.year}
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
                {release.awardText && (
                  <p style={{ color: C.light, fontSize: "0.85rem", margin: 0 }}>{release.awardText}</p>
                )}
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
