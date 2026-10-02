import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await sql`SELECT id, date, venue, city, ticket_url, sold_out FROM shows ORDER BY created_at ASC`;
    return NextResponse.json({ ok: true, count: result.rows.length, rows: result.rows });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err), stack: err instanceof Error ? err.stack : undefined }, { status: 500 });
  }
}
