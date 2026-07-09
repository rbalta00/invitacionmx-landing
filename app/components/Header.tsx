export default function Header() {
  return (
    <header style={{
      background: 'var(--bg-white)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        fontSize: '20px',
        fontWeight: 500,
        color: 'var(--primary)',
      }}>
        ✨ Invitamx
      </div>
      <nav style={{
        display: 'flex',
        gap: '2rem',
        fontSize: '14px',
        color: 'var(--text-secondary)',
      }}>
        <a href="#como-funciona" style={{ color: 'inherit', cursor: 'pointer' }}>Cómo funciona</a>
        <a href="#temas" style={{ color: 'inherit', cursor: 'pointer' }}>Temas</a>
        <a href="#planes" style={{ color: 'inherit', cursor: 'pointer' }}>Planes</a>
        <a href="#faq" style={{ color: 'inherit', cursor: 'pointer' }}>FAQ</a>
      </nav>
    </header>
  );
}
