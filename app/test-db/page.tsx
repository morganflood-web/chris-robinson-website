import { getShows } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function TestDbPage() {
  try {
    const shows = await getShows();
    return (
      <div style={{backgroundColor:"#1C3244",color:"#fff",padding:"40px",fontFamily:"monospace",minHeight:"100vh"}}>
        <h1 style={{color:"#C8A45A"}}>DB TEST — Shows: {shows.length}</h1>
        {shows.map(s => <p key={s.id}>{s.date} — {s.venue} — {s.city}</p>)}
        {shows.length === 0 && <p>No shows found</p>}
      </div>
    );
  } catch (err) {
    return (
      <div style={{backgroundColor:"#1C3244",color:"red",padding:"40px",fontFamily:"monospace",minHeight:"100vh"}}>
        <h1>ERROR in getShows()</h1>
        <pre style={{whiteSpace:"pre-wrap"}}>{String(err)}</pre>
        <pre style={{whiteSpace:"pre-wrap",fontSize:"0.8em"}}>{err instanceof Error ? err.stack : ""}</pre>
      </div>
    );
  }
}
