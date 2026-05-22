import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { setupDb } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    if (searchParams.get('seed') === 'releases') {
      // Force seed releases with platforms JSONB
      await sql`DELETE FROM releases`;
      await sql`
        INSERT INTO releases (id, title, year, cover_image, platforms, sort_order) VALUES
        ('r1', 'UNRULY', '2024', '/images/release-placeholder.svg',
          '[{"label":"YouTube","url":"https://youtu.be/qx9FlFITcvI"},{"label":"Spotify","url":"https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z"},{"label":"Apple Music","url":"https://music.apple.com/us/album/unruly/1840954802"},{"label":"Amazon Music","url":"https://music.amazon.co.uk/albums/B0FRN7WD8V"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc"}]'::jsonb, 0),
        ('r2', 'PANNING FOR GOLD', '2016', '/images/release-placeholder.svg',
          '[{"label":"Apple TV","url":"https://tv.apple.com/ca/show/chris-robinson-panning-for-gold/umc.cmc.2nnmodekj9k1buvxldca7l6fo"}]'::jsonb, 1),
        ('r3', 'GUT BUSSA', '2020', '/images/release-placeholder.svg',
          '[{"label":"Spotify","url":"https://open.spotify.com/album/4PRmgqAZNmsq5Bb8r7TguT"},{"label":"Apple Music","url":"https://music.apple.com/us/album/gut-bussa-vol-1/1510665105"},{"label":"Amazon Music","url":"https://music.amazon.ca/albums/B0882JR675"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_np-FyG18_LpRosOYC-STW_smSgvUaUrRk"}]'::jsonb, 2)
      `;
      const result = await sql\`SELECT id, title, platforms FROM releases\`;
      return NextResponse.json({ ok: true, seeded: result.rows.length, releases: result.rows });
    }

    await setupDb();
    return NextResponse.json({ ok: true, message: 'Database tables created and seeded successfully.' });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
