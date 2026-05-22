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

export async function getReleases(): Promise<Release[]> {
  const result = await sql`
    SELECT id, title, year, type,
           youtube_url, spotify_url, apple_music_url, apple_tv_url,
           amazon_music_url, youtube_music_url
    FROM releases
    ORDER BY created_at ASC
  `;
  return result.rows.map((row) => ({
    id: row.id,
    title: row.title,
    year: row.year,
    type: row.type,
    youtubeUrl: row.youtube_url,
    spotifyUrl: row.spotify_url,
    appleMusicUrl: row.apple_music_url,
    appleTvUrl: row.apple_tv_url,
    amazonMusicUrl: row.amazon_music_url,
    youtubeMusicUrl: row.youtube_music_url,
  }));
}

export async function getBio(): Promise<Bio> {
  const bioResult = await sql`SELECT text FROM bio WHERE id = 'main'`;
  return { text: bioResult.rows[0]?.text ?? '' };
}
