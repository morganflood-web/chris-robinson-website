import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Nuclear option: drop and recreate releases table with correct data
    // This guarantees correct schema + data regardless of any previous migration state
    await sql`DROP TABLE IF EXISTS releases`;

    await sql`
      CREATE TABLE releases (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        year INTEGER NOT NULL,
        award_text TEXT,
        cover_image TEXT NOT NULL DEFAULT '/images/release-placeholder.svg',
        platforms JSONB NOT NULL DEFAULT '[]',
        sort_order INTEGER NOT NULL DEFAULT 0
      )
    `;

    await sql`
      INSERT INTO releases (id, title, year, cover_image, platforms, sort_order) VALUES
      ('r1', 'UNRULY', 2024, '/images/unruly-album-art.jpg',
        '[{"label":"YouTube","url":"https://youtu.be/qx9FlFITcvI"},{"label":"Spotify","url":"https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z"},{"label":"Apple Music","url":"https://music.apple.com/us/album/unruly/1840954802"},{"label":"Amazon Music","url":"https://music.amazon.co.uk/albums/B0FRN7WD8V"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc"}]'::jsonb, 0),
      ('r2', 'PANNING FOR GOLD', 2016, '/images/panning-for-gold-album-art.jpg',
        '[{"label":"Apple TV","url":"https://tv.apple.com/ca/show/chris-robinson-panning-for-gold/umc.cmc.2nnmodekj9k1buvxldca7l6fo"}]'::jsonb, 1),
      ('r3', 'GUT BUSSA', 2020, '/images/gut-bussa-album-art.jpg',
        '[{"label":"Spotify","url":"https://open.spotify.com/album/4PRmgqAZNmsq5Bb8r7TguT"},{"label":"Apple Music","url":"https://music.apple.com/us/album/gut-bussa-vol-1/1510665105"},{"label":"Amazon Music","url":"https://music.amazon.ca/albums/B0882JR675"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_np-FyG18_LpRosOYC-STW_smSgvUaUrRk"}]'::jsonb, 2)
    `;

    const result = await sql`SELECT id, title, year, cover_image, sort_order FROM releases ORDER BY sort_order ASC`;
    return NextResponse.json({ ok: true, action: 'drop-recreate', releases: result.rows });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
