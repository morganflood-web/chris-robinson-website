'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { isAuthenticated } from '../auth';

export async function addRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const id = Date.now().toString();
  const title = formData.get('title') as string;
  const year = formData.get('year') as string;
  const type = formData.get('type') as string;
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string || '[]';
  const awardText = (formData.get('awardText') as string) || null;
  const youtubeUrl = (formData.get('youtubeUrl') as string) || null;
  const spotifyUrl = (formData.get('spotifyUrl') as string) || null;
  const appleMusicUrl = (formData.get('appleMusicUrl') as string) || null;
  const appleTvUrl = (formData.get('appleTvUrl') as string) || null;
  const amazonMusicUrl = (formData.get('amazonMusicUrl') as string) || null;
  const youtubeMusicUrl = (formData.get('youtubeMusicUrl') as string) || null;

  await sql`
    INSERT INTO releases
      (id, title, year, type, cover_image, platforms, sort_order, award_text, youtube_url, spotify_url, apple_music_url, apple_tv_url, amazon_music_url, youtube_music_url)
    VALUES
      (${id}, ${title}, ${year}, ${type}, ${coverImage}, ${platformsJson}::jsonb, ${sortOrder}, ${awardText}, ${youtubeUrl}, ${spotifyUrl}, ${appleMusicUrl}, ${appleTvUrl}, ${amazonMusicUrl}, ${youtubeMusicUrl})
  `;

  revalidatePath('/');
  revalidatePath('/releases');
  revalidatePath('/admin/releases');
}

export async function updateRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const year = formData.get('year') as string;
  const type = formData.get('type') as string;
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string || '[]';
  const awardText = (formData.get('awardText') as string) || null;
  const youtubeUrl = (formData.get('youtubeUrl') as string) || null;
  const spotifyUrl = (formData.get('spotifyUrl') as string) || null;
  const appleMusicUrl = (formData.get('appleMusicUrl') as string) || null;
  const appleTvUrl = (formData.get('appleTvUrl') as string) || null;
  const amazonMusicUrl = (formData.get('amazonMusicUrl') as string) || null;
  const youtubeMusicUrl = (formData.get('youtubeMusicUrl') as string) || null;

  await sql`
    UPDATE releases
    SET title = ${title},
        year = ${year},
        type = ${type},
        cover_image = ${coverImage},
        platforms = ${platformsJson}::jsonb,
        sort_order = ${sortOrder},
        award_text = ${awardText},
        youtube_url = ${youtubeUrl},
        spotify_url = ${spotifyUrl},
        apple_music_url = ${appleMusicUrl},
        apple_tv_url = ${appleTvUrl},
        amazon_music_url = ${amazonMusicUrl},
        youtube_music_url = ${youtubeMusicUrl}
    WHERE id = ${id}
  `;

  revalidatePath('/');
  revalidatePath('/releases');
  revalidatePath('/admin/releases');
}

export async function deleteRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const id = formData.get('id') as string;
  await sql`DELETE FROM releases WHERE id = ${id}`;

  revalidatePath('/');
  revalidatePath('/releases');
  revalidatePath('/admin/releases');
}
