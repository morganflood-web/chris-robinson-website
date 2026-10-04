import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Fix cover_image paths — seeded incorrectly as release-placeholder.svg
    // Actual album art files exist in public/images/
    await sql`
      UPDATE releases SET cover_image = '/images/unruly-album-art.jpg'
      WHERE id = 'r1' AND (cover_image IS NULL OR cover_image LIKE '%placeholder%')
    `;
    await sql`
      UPDATE releases SET cover_image = '/images/panning-for-gold-album-art.jpg'
      WHERE id = 'r2' AND (cover_image IS NULL OR cover_image LIKE '%placeholder%')
    `;
    await sql`
      UPDATE releases SET cover_image = '/images/gut-bussa-album-art.jpg'
      WHERE id = 'r3' AND (cover_image IS NULL OR cover_image LIKE '%placeholder%')
    `;

    const result = await sql`SELECT id, title, cover_image FROM releases ORDER BY sort_order ASC`;
    return NextResponse.json({ ok: true, releases: result.rows });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
