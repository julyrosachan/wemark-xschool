'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="az">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#e0e0e0',
          fontFamily: '"TT Hoves", sans-serif',
          textAlign: 'center',
          padding: '40px 20px'
        }}>
          <h2 style={{ marginBottom: '16px' }}>Bir şeylər səhv getdi 😔</h2>
          <p style={{ marginBottom: '24px', maxWidth: '400px' }}>
            Xahiş edirik səhifəni yeniləyin və ya bir az sonra təkrar cəhd edin.
          </p>
          <button 
            onClick={() => reset()}
            style={{
              padding: '14px 32px',
              fontSize: '16px',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: '"TT Hoves", sans-serif',
            }}
          >
            Yenidən cəhd et
          </button>
        </div>
      </body>
    </html>
  );
}