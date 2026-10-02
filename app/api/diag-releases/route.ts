import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // First check what columns the releases table has
    const cols = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'releases'
      ORDER BY ordinal_position
    `;
    
    // Then try the exact getReleases query
    let rows: unknown[] = [];
    let queryError: string | null = null;
    try {
      const result = await sql`
        SELECT id, title, year, type, cover_image, platforms, sort_order, award_text,
               youtube_url, spotify_url, apple_music_url, apple_tv_url,
               amazon_music_url, youtube_music_url
        FROM releases
        ORDER BY created_at ASC
      `;
      rows = result.rows;
    } catch (qErr) {
      queryError = String(qErr);
    }

    return NextResponse.json({
      ok: true,
      columns: cols.rows,
      queryError,
      rowCount: rows.length,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
