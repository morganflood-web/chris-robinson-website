'use client';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div style={{ padding: '40px', fontFamily: 'monospace', color: '#fff', backgroundColor: '#1C3244', minHeight: '100vh' }}>
      <h1 style={{ color: '#C8A45A' }}>Debug Error</h1>
      <p><strong>Message:</strong> {error.message}</p>
      <p><strong>Digest:</strong> {error.digest}</p>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem', color: '#8AB4C8' }}>{error.stack}</pre>
    </div>
  );
}
