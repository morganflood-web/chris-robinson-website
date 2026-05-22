import { Header, Footer, C, EmailSignup } from "../_components/shared";
import { getReleases } from "@/lib/data";

export const dynamic = "force-dynamic";

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
