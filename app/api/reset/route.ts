import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { setupDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * GET /api/reset
 * Clears all tables and re-seeds with Chris Robinson's data.
 * TEMPORARY — delete after use.
 */
export async function GET() {
  try {
    await sql`DELETE FROM shows`;
    await sql`DELETE FROM releases`;
    await sql`DELETE FROM bio`;
    // Patch schema if columns are missing
    await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS type TEXT NOT NULL DEFAULT ''`;
    await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS youtube_music_url TEXT`;
    await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS amazon_music_url TEXT`;
    await setupDb();
    return NextResponse.json({ ok: true, message: 'DB cleared and re-seeded.' });
  } catch (error) {
    console.error('Reset error:', error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
