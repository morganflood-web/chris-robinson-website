import { sql } from '@vercel/postgres';

export async function setupDb() {
  // Migrations — add new columns if missing
  await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS cover_image TEXT NOT NULL DEFAULT '/images/release-placeholder.svg'`.catch(() => null);
  await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS platforms JSONB NOT NULL DEFAULT '[]'`.catch(() => null);
  await sql`ALTER TABLE releases ADD COLUMN IF NOT EXISTS sort_order INTEGER NOT NULL DEFAULT 0`.catch(() => null);

  // Shows table
  await sql`
    CREATE TABLE IF NOT EXISTS shows (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      venue TEXT NOT NULL,
      city TEXT NOT NULL,
      province_state TEXT,
      ticket_url TEXT NOT NULL,
      sold_out BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`ALTER TABLE shows ADD COLUMN IF NOT EXISTS province_state TEXT`.catch(() => null);

  // Releases table
  await sql`
    CREATE TABLE IF NOT EXISTS releases (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      year TEXT NOT NULL,
      cover_image TEXT NOT NULL DEFAULT '/images/release-placeholder.svg',
      platforms JSONB NOT NULL DEFAULT '[]',
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Bio table
  await sql`
    CREATE TABLE IF NOT EXISTS bio (
      id TEXT PRIMARY KEY DEFAULT 'main',
      text TEXT NOT NULL DEFAULT ''
    )
  `;

  // Seed shows if empty
  const showsCount = await sql`SELECT COUNT(*) FROM shows`;
  if (parseInt(showsCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO shows (id, date, venue, city, ticket_url, sold_out) VALUES
      ('1', 'Thu, May 1, 2026', 'Brewery Bay', 'Orillia, ON', 'https://www.eventbrite.ca/e/sin-bin-comedy-show-with-chris-robinson-at-brewery-bay-tickets-1984623026898', false),
      ('2', 'Thu, May 14, 2026', 'IDK Social Bar and Cafe', 'Toronto, ON', 'https://www.eventbrite.ca/e/block-party-vol-11-thursday-may-14th-tickets-1985201000633', false),
      ('3', 'Thu, May 22, 2026', 'River Run Centre', 'Guelph, ON', 'https://riverrun.ca/whats-on/roll-on-the-floor-ft-keith-pedro-chris-robinson/', false),
      ('4', 'Sat, Jun 13, 2026', 'East Street Cider Co. Taproom', 'Goderich, ON', 'https://www.eaststreetcider.com/events-1/comedy-show-the-taproom-13', false)
    `;
  }

  // Migrate existing releases: convert URL columns to platforms JSONB if needed
  const relResult = await sql`SELECT id, title, year, youtube_url, spotify_url, apple_music_url, apple_tv_url, amazon_music_url, youtube_music_url, platforms FROM releases`;
  for (const row of relResult.rows) {
    const existing = Array.isArray(row.platforms) ? row.platforms : [];
    if (existing.length > 0) continue; // already migrated

    const platforms: {label: string, url: string}[] = [];
    if (row.youtube_url) platforms.push({ label: 'YouTube', url: row.youtube_url });
    if (row.spotify_url) platforms.push({ label: 'Spotify', url: row.spotify_url });
    if (row.apple_music_url) platforms.push({ label: 'Apple Music', url: row.apple_music_url });
    if (row.apple_tv_url) platforms.push({ label: 'Apple TV', url: row.apple_tv_url });
    if (row.amazon_music_url) platforms.push({ label: 'Amazon Music', url: row.amazon_music_url });
    if (row.youtube_music_url) platforms.push({ label: 'YouTube Music', url: row.youtube_music_url });

    if (platforms.length > 0) {
      await sql`UPDATE releases SET platforms = ${JSON.stringify(platforms)}::jsonb WHERE id = ${row.id}`;
    }
  }

  // Seed releases if empty
  const releasesCount = await sql`SELECT COUNT(*) FROM releases`;
  if (parseInt(releasesCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO releases (id, title, year, cover_image, platforms, sort_order) VALUES
      ('r1', 'UNRULY', '2024', '/images/release-placeholder.svg',
        '[{"label":"YouTube","url":"https://youtu.be/qx9FlFITcvI"},{"label":"Spotify","url":"https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z"},{"label":"Apple Music","url":"https://music.apple.com/us/album/unruly/1840954802"},{"label":"Amazon Music","url":"https://music.amazon.co.uk/albums/B0FRN7WD8V"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc"}]'::jsonb, 0),
      ('r2', 'PANNING FOR GOLD', '2016', '/images/release-placeholder.svg',
        '[{"label":"Apple TV","url":"https://tv.apple.com/ca/show/chris-robinson-panning-for-gold/umc.cmc.2nnmodekj9k1buvxldca7l6fo"}]'::jsonb, 1),
      ('r3', 'GUT BUSSA', '2020', '/images/release-placeholder.svg',
        '[{"label":"Spotify","url":"https://open.spotify.com/album/4PRmgqAZNmsq5Bb8r7TguT"},{"label":"Apple Music","url":"https://music.apple.com/us/album/gut-bussa-vol-1/1510665105"},{"label":"Amazon Music","url":"https://music.amazon.ca/albums/B0882JR675"},{"label":"YouTube Music","url":"https://music.youtube.com/playlist?list=OLAK5uy_np-FyG18_LpRosOYC-STW_smSgvUaUrRk"}]'::jsonb, 2)
    `;
  }

  // Seed bio if empty
  const bioCount = await sql`SELECT COUNT(*) FROM bio`;
  if (parseInt(bioCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO bio (id, text) VALUES (
        'main',
        'Chris Robinson is one of the premier comics working in Canada today. He made a name for himself with multiple appearances at the Just For Laughs Comedy Festival in Montreal, winning Sirius XM\'s Top Comic honours in 2016 taking home the $25,000 grand prize, and shooting his special \'Panning for Gold\' which can be seen on AppleTV. Chris has since released a follow up special \'Unruly\' which can be streamed on Youtube.'
      )
    `;
  }
}

export async function resetDb() {
  await sql`DROP TABLE IF EXISTS releases`;
  await setupDb();
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PlatformLink {
  label: string;
  url: string;
}

export interface Show {
  id: string;
  date: string;
  venue: string;
  city: string;
  ticketUrl: string;
  soldOut: boolean;
}

export interface Release {
  id: string;
  title: string;
  year: string;
  awardText?: string | null;
  coverImage: string;
  platforms: PlatformLink[];
  sortOrder: number;
}

export interface Bio {
  text: string;
}
