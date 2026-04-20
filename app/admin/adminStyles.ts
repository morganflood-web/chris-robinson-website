import type { CSSProperties } from 'react';

// Shared admin UI styles — Arctic Camo palette matching the Chris Robinson site

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  backgroundColor: '#1B2A1E',
  border: '1px solid #3D4F3C',
  borderRadius: '4px',
  color: '#F0F4EF',
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
  backgroundColor: '#C8A45A',
  color: '#1B2A1E',
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
  border: '1px solid #3D4F3C',
  color: '#7A8C74',
};

export const dangerBtnStyle: CSSProperties = {
  ...btnStyle,
  backgroundColor: '#4a1f1f',
  color: '#f5c0c0',
};

export const s: Record<string, CSSProperties> = {
  pageTitle: {
    color: '#C8A45A',
    fontSize: '1.8rem',
    fontWeight: 700,
    margin: '0 0 1.5rem',
    letterSpacing: '0.02em',
  },
  sectionTitle: {
    color: '#F0F4EF',
    fontSize: '1rem',
    fontWeight: 700,
    margin: '0 0 1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    borderBottom: '1px solid #3D4F3C',
    paddingBottom: '0.5rem',
  },
  card: {
    backgroundColor: '#243326',
    border: '1px solid #3D4F3C',
    borderRadius: '6px',
    padding: '1.25rem',
    marginBottom: '1.5rem',
  },
  editCard: {
    backgroundColor: '#1B2A1E',
    border: '1px solid #C8A45A',
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
    color: '#7A8C74',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  checkLabel: {
    color: '#F0F4EF',
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
    color: '#7A8C74',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    padding: '0.5rem 0.75rem',
    borderBottom: '1px solid #3D4F3C',
    whiteSpace: 'nowrap' as const,
  },
  tr: {
    borderBottom: '1px solid #2A3A2C',
  },
  editRow: {
    borderBottom: '1px solid #C8A45A',
    backgroundColor: '#1B2A1E',
  },
  td: {
    padding: '0.6rem 0.75rem',
    color: '#F0F4EF',
    verticalAlign: 'middle' as const,
  },
  empty: {
    color: '#7A8C74',
    fontStyle: 'italic',
    margin: 0,
  },
  link: {
    color: '#C8A45A',
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
    backgroundColor: '#1B2A1E',
    border: '1px solid #2A3A2C',
    borderRadius: '4px',
  },
  releaseInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.2rem',
    flex: 1,
  },
  releaseMeta: {
    color: '#7A8C74',
    fontSize: '0.8rem',
  },
  hint: {
    color: '#4A5E49',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
  },
};
