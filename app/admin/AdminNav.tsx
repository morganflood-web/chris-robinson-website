'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/admin/shows', label: 'Shows' },
  { href: '/admin/releases', label: 'Releases' },
  { href: '/admin/bio', label: 'Bio' },
];

export default function AdminNav() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin';
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <span style={styles.brand}>Chris Robinson — Admin</span>
        <div style={styles.links}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                ...styles.link,
                ...(pathname.startsWith(href) ? styles.linkActive : {}),
              }}
            >
              {label}
            </Link>
          ))}
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    backgroundColor: '#0F1D26',
    borderBottom: '1px solid #2A4A62',
    padding: '0.75rem 1rem',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  brand: {
    color: '#C8A45A',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.02em',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#8AB4C8',
    textDecoration: 'none',
    padding: '0.4rem 0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  linkActive: {
    color: '#EEF5F8',
    backgroundColor: 'rgba(200,164,90,0.15)',
  },
  logoutBtn: {
    marginLeft: '0.5rem',
    padding: '0.4rem 0.75rem',
    backgroundColor: 'transparent',
    border: '1px solid #2A4A62',
    borderRadius: '4px',
    color: '#8AB4C8',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
};
