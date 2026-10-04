'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { isAuthenticated } from '../auth';

export async function addRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const id = Date.now().toString();
  const title = formData.get('title') as string;
  const year = parseInt((formData.get('year') as string) || '0', 10);
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string || '[]';
  const awardText = (formData.get('awardText') as string) || null;

  // Live DB schema: id, title, year (int), cover_image, platforms (jsonb), sort_order, award_text
  // Old URL columns (type, youtube_url, spotify_url, etc.) do NOT exist in the live Neon DB
  await sql`
    INSERT INTO releases (id, title, year, cover_image, platforms, sort_order, award_text)
    VALUES (${id}, ${title}, ${year}, ${coverImage}, ${platformsJson}::jsonb, ${sortOrder}, ${awardText})
  `;

  revalidatePath('/');
  revalidatePath('/releases');
  revalidatePath('/admin/releases');
}

export async function updateRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const year = parseInt((formData.get('year') as string) || '0', 10);
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string || '[]';
  const awardText = (formData.get('awardText') as string) || null;

  // Live DB schema: id, title, year (int), cover_image, platforms (jsonb), sort_order, award_text
  // Old URL columns (type, youtube_url, spotify_url, etc.) do NOT exist in the live Neon DB
  await sql`
    UPDATE releases
    SET title = ${title},
        year = ${year},
        cover_image = ${coverImage},
        platforms = ${platformsJson}::jsonb,
        sort_order = ${sortOrder},
        award_text = ${awardText}
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
