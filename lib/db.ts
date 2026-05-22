import { sql } from '@vercel/postgres';

export async function setupDb() {
  // Shows table
  await sql`
    CREATE TABLE IF NOT EXISTS shows (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      venue TEXT NOT NULL,
      city TEXT NOT NULL,
      ticket_url TEXT NOT NULL,
      sold_out BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Releases table
  await sql`
    CREATE TABLE IF NOT EXISTS releases (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      year TEXT NOT NULL,
      type TEXT NOT NULL,
      youtube_url TEXT,
      spotify_url TEXT,
      apple_music_url TEXT,
      apple_tv_url TEXT,
      amazon_music_url TEXT,
      youtube_music_url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Bio table (single row)
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

  // Seed releases if empty
  const releasesCount = await sql`SELECT COUNT(*) FROM releases`;
  if (parseInt(releasesCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO releases (id, title, year, type, youtube_url, spotify_url, apple_music_url, apple_tv_url, amazon_music_url, youtube_music_url) VALUES
      ('r1', 'UNRULY', '2024', 'Comedy Special & Album',
        'https://youtu.be/qx9FlFITcvI',
        'https://open.spotify.com/album/6Mx5Zi9KXjsm1IuyH5Iw8z',
        'https://music.apple.com/us/album/unruly/1840954802',
        NULL,
        'https://music.amazon.co.uk/albums/B0FRN7WD8V',
        'https://music.youtube.com/playlist?list=OLAK5uy_lz1HMTSH8vDZD4KWovxv9_1Az_X7mPyDc'),
      ('r2', 'PANNING FOR GOLD', '2016', 'Comedy Special',
        NULL, NULL, NULL,
        'https://tv.apple.com/ca/show/chris-robinson-panning-for-gold/umc.cmc.2nnmodekj9k1buvxldca7l6fo',
        NULL, NULL),
      ('r3', 'GUT BUSSA', '2020', 'Comedy Album',
        NULL,
        'https://open.spotify.com/album/4PRmgqAZNmsq5Bb8r7TguT',
        'https://music.apple.com/us/album/gut-bussa-vol-1/1510665105',
        NULL,
        'https://music.amazon.ca/albums/B0882JR675',
        'https://music.youtube.com/playlist?list=OLAK5uy_np-FyG18_LpRosOYC-STW_smSgvUaUrRk')
    `;
  }

  // Seed bio if empty
  const bioCount = await sql`SELECT COUNT(*) FROM bio`;
  if (parseInt(bioCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO bio (id, text) VALUES (
        'main',
        'Chris Robinson is one of the premier comics working in Canada today. He made a name for himself with multiple appearances at the Just For Laughs Comedy Festival in Montreal, winning Sirius XM''s Top Comic honours in 2016 taking home the $25,000 grand prize, and shooting his special ''Panning for Gold'' which can be seen on AppleTV.\n\nChris has since released a follow up special ''Unruly'' which can be streamed on Youtube. As an actor Chris has appeared in Workin'' Moms, Tallboyz, The Amazing Gayle Pile, Kids in the Hall, he''s a lead on the Crave series Pillow Talk, and plays a recurring role on the new CBC comedy One More Time.'
      )
    `;
  }
}

// ─── Type exports ───────────────────────────────────────────────────────────

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
  type: string;
  youtubeUrl?: string | null;
  spotifyUrl?: string | null;
  appleMusicUrl?: string | null;
  appleTvUrl?: string | null;
  amazonMusicUrl?: string | null;
  youtubeMusicUrl?: string | null;
}

export interface Bio {
  text: string;
}
