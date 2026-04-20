'use client';

import { useState } from 'react';
import type { Bio } from '@/lib/db';
import { s, inputStyle, btnStyle } from '../adminStyles';

interface Props {
  bio: Bio;
  updateBio: (fd: FormData) => Promise<void>;
}

export default function BioClient({ bio, updateBio }: Props) {
  const [bioText, setBioText] = useState(bio.text);
  const [submitting, setSubmitting] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSaved(false);

    const fd = new FormData();
    fd.append('text', bioText);

    await updateBio(fd);
    setSubmitting(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      <h1 style={s.pageTitle}>Bio</h1>

      <form onSubmit={handleSave}>
        {/* ── Bio Text ── */}
        <section style={s.card}>
          <h2 style={s.sectionTitle}>Bio Text</h2>
          <textarea
            value={bioText}
            onChange={(e) => setBioText(e.target.value)}
            rows={12}
            style={{
              ...inputStyle,
              width: '100%',
              resize: 'vertical',
              lineHeight: 1.7,
              fontFamily: 'inherit',
            }}
          />
          <p style={s.hint}>Separate paragraphs with a blank line (\n\n).</p>
        </section>

        {/* ── Save ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button type="submit" disabled={submitting} style={{ ...btnStyle, padding: '0.75rem 2rem' }}>
            {submitting ? 'Saving…' : 'Save Bio'}
          </button>
          {saved && <span style={{ color: '#5cba7d', fontWeight: 600 }}>✓ Saved!</span>}
        </div>
      </form>
    </div>
  );
}
