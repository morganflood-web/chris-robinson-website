import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // UNCONDITIONAL — force correct cover_image paths regardless of current value
    const u1 = await sql`UPDATE releases SET cover_image = '/images/unruly-album-art.jpg' WHERE id = 'r1'`;
    const u2 = await sql`UPDATE releases SET cover_image = '/images/panning-for-gold-album-art.jpg' WHERE id = 'r2'`;
    const u3 = await sql`UPDATE releases SET cover_image = '/images/gut-bussa-album-art.jpg' WHERE id = 'r3'`;

    // Dump full state — every column — to diagnose what the DB actually has
    const result = await sql`SELECT id, title, year, cover_image, sort_order, platforms FROM releases ORDER BY sort_order ASC`;

    return NextResponse.json({
      ok: true,
      rowsAffected: [u1.rowCount, u2.rowCount, u3.rowCount],
      releases: result.rows,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
