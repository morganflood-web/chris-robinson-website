import type { CSSProperties } from 'react';

// Shared admin UI styles — matching the Chris Robinson site blue palette
// Design tokens from app/_components/shared.tsx
const bg     = '#1C3244'; // base dark blue
const bgAlt  = '#2A4A62'; // lighter blue (card backgrounds)
const bgDeep = '#0F1D26'; // deepest navy
const border = '#2A4A62';
const light  = '#8AB4C8'; // secondary text
const text   = '#EEF5F8'; // near-white
const accent = '#C8A45A'; // amber CTA

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  backgroundColor: bgDeep,
  border: `1px solid ${border}`,
  borderRadius: '4px',
  color: text,
  fontSize: '0.9rem',
  boxSizing: 'border-box',
  outline: 'none',
};

export const selectStyle: CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
};

export const btnStyle: CSSProperties = {
  padding: '0.55rem 1.1rem',
  backgroundColor: accent,
  color: bgDeep,
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.875rem',
  fontWeight: 700,
  cursor: 'pointer',
  letterSpacing: '0.03em',
  whiteSpace: 'nowrap',
};

export const secondaryBtnStyle: CSSProperties = {
  ...btnStyle,
  backgroundColor: 'transparent',
  border: `1px solid ${border}`,
  color: light,
};

export const dangerBtnStyle: CSSProperties = {
  ...btnStyle,
  backgroundColor: '#3a1a1a',
  color: '#f5c0c0',
};

export const s: Record<string, CSSProperties> = {
  pageTitle: {
    color: accent,
    fontSize: '1.8rem',
    fontWeight: 700,
    margin: '0 0 1.5rem',
    letterSpacing: '0.02em',
  },
  sectionTitle: {
    color: text,
    fontSize: '1rem',
    fontWeight: 700,
    margin: '0 0 1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    borderBottom: `1px solid ${border}`,
    paddingBottom: '0.5rem',
  },
  card: {
    backgroundColor: bgAlt,
    border: `1px solid ${border}`,
    borderRadius: '6px',
    padding: '1.25rem',
    marginBottom: '1.5rem',
  },
  editCard: {
    backgroundColor: bg,
    border: `1px solid ${accent}`,
    borderRadius: '6px',
    padding: '1.25rem',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '0.75rem',
  },
  formActions: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  label: {
    display: 'block',
    color: light,
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  checkLabel: {
    color: text,
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '0.875rem',
  },
  th: {
    textAlign: 'left' as const,
    color: light,
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    padding: '0.5rem 0.75rem',
    borderBottom: `1px solid ${border}`,
    whiteSpace: 'nowrap' as const,
  },
  tr: {
    borderBottom: `1px solid ${border}`,
  },
  editRow: {
    borderBottom: `1px solid ${accent}`,
    backgroundColor: bg,
  },
  td: {
    padding: '0.6rem 0.75rem',
    color: text,
    verticalAlign: 'middle' as const,
  },
  empty: {
    color: light,
    fontStyle: 'italic',
    margin: 0,
  },
  link: {
    color: accent,
    textDecoration: 'none',
    fontSize: '0.8rem',
    wordBreak: 'break-all' as const,
  },
  releaseRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '0.75rem',
    backgroundColor: bgDeep,
    border: `1px solid ${border}`,
    borderRadius: '4px',
  },
  releaseInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.2rem',
    flex: 1,
  },
  releaseMeta: {
    color: light,
    fontSize: '0.8rem',
  },
  hint: {
    color: light,
    fontSize: '0.8rem',
    marginTop: '0.5rem',
    opacity: 0.6,
  },
};
