import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import AdminNav from './AdminNav';

export const metadata = {
  title: 'Admin — Chris Robinson',
  robots: 'noindex,nofollow',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect('/admin');
  }

  return (
    <div style={styles.shell}>
      <AdminNav />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  shell: {
    minHeight: '100vh',
    backgroundColor: '#1B2A1E',
    fontFamily: "system-ui, sans-serif",
    color: '#F0F4EF',
  },
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem 4rem',
  },
};
