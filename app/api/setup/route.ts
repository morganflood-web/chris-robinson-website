import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { setupDb } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    if (searchParams.get('debug') === 'releases') {
      const result = await sql`SELECT id, title, platforms, youtube_url, cover_image, sort_order FROM releases ORDER BY sort_order ASC`;
      return NextResponse.json({ ok: true, releases: result.rows });
    }
    
    await setupDb();
    return NextResponse.json({ ok: true, message: 'Database tables created and seeded successfully.' });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
