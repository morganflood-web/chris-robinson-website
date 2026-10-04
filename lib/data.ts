import { sql } from '@vercel/postgres';
import type { Show, Release, Bio } from './db';

export async function getShows(): Promise<Show[]> {
  const result = await sql`
    SELECT id, date, venue, city, ticket_url, sold_out
    FROM shows
    ORDER BY created_at ASC
  `;
  return result.rows.map((row) => ({
    id: row.id,
    date: row.date,
    venue: row.venue,
    city: row.city,
    ticketUrl: row.ticket_url,
    soldOut: row.sold_out,
  }));
}

function parsePlatforms(raw: unknown): import('./db').PlatformLink[] {
  if (!Array.isArray(raw)) return [];
  return (raw as { label?: string; url?: string }[])
    .filter((x) => typeof x?.label === 'string' && typeof x?.url === 'string')
    .map((x) => ({ label: x.label!, url: x.url! }));
}


export async function getReleases(): Promise<Release[]> {
  // DB schema: id, title, year (int), award_text, cover_image, platforms (jsonb), sort_order
  // Old URL columns (type, youtube_url, etc.) do not exist in the live DB — use platforms JSONB only
  // NOTE: no created_at in ORDER BY — that column does not exist in the live Neon schema
  const result = await sql`
    SELECT id, title, year, award_text, cover_image, platforms, sort_order
    FROM releases
    ORDER BY sort_order ASC
  `;
  return result.rows.map((row) => ({
    id: row.id,
    title: row.title,
    year: String(row.year),
    type: null,
    awardText: (row.award_text ?? null) as string | null,
    coverImage: row.cover_image ?? '/images/release-placeholder.svg',
    platforms: parsePlatforms(row.platforms),
    sortOrder: row.sort_order ?? 0,
  }));
}

export async function getBio(): Promise<Bio> {
  const bioResult = await sql`SELECT text FROM bio WHERE id = 'main'`;
  return { text: bioResult.rows[0]?.text ?? '' };
}
