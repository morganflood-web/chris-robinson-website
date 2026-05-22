import { Header, Footer, C, EmailSignup } from "../_components/shared";
import { getReleases } from "@/lib/data";

export const dynamic = "force-dynamic";


// Placeholder color per release (no images yet)



function AlbumPlaceholder({ releaseId, title, coverImage }: { releaseId: string; title: string; coverImage: string }) {
  if (coverImage && !coverImage.includes("placeholder")) {
    return (
      <img
        src={coverImage}
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
        backgroundColor: "#2A3226",
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
        }}
      >
        {title}
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
              {/* Left: album art */}
              <div style={{ flex: "0 0 280px", maxWidth: "320px", alignSelf: "flex-start" }}>
                <AlbumPlaceholder releaseId={release.id} title={release.title} coverImage={release.coverImage} />
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
                  {release.year}
                </p>
                {release.awardText && (
                  <p style={{ fontSize: "0.75rem", color: C.light, margin: 0 }}>{release.awardText}</p>
                )}
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
