'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { isAuthenticated } from '../auth';

export async function addRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');
  const id = Date.now().toString();
  const title = formData.get('title') as string;
  const year = formData.get('year') as string;
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string;

  await sql`
    INSERT INTO releases (id, title, year, cover_image, platforms, sort_order)
    VALUES (${id}, ${title}, ${year}, ${coverImage}, ${platformsJson}::jsonb, ${sortOrder})
  `;
  revalidatePath('/'); revalidatePath('/releases'); revalidatePath('/admin/releases');
}

export async function updateRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const year = formData.get('year') as string;
  const coverImage = (formData.get('coverImage') as string) || '/images/release-placeholder.svg';
  const sortOrder = parseInt((formData.get('sortOrder') as string) || '0', 10);
  const platformsJson = formData.get('platforms') as string;

  await sql`
    UPDATE releases
    SET title=${title}, year=${year}, cover_image=${coverImage},
        platforms=${platformsJson}::jsonb, sort_order=${sortOrder}, updated_at=NOW()
    WHERE id=${id}
  `;
  revalidatePath('/'); revalidatePath('/releases'); revalidatePath('/admin/releases');
}

export async function deleteRelease(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  await sql`DELETE FROM releases WHERE id=${id}`;
  revalidatePath('/'); revalidatePath('/releases'); revalidatePath('/admin/releases');
}
