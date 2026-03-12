export default function Footer() {
  const link = (href, label) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      fontSize:       11,
      letterSpacing:  2,
      color:          'var(--muted)',
      textDecoration: 'none',
      textTransform:  'uppercase',
      transition:     'color 0.2s',
    }}
      onMouseEnter={e => e.target.style.color = 'var(--red)'}
      onMouseLeave={e => e.target.style.color = 'var(--muted)'}
    >{label}</a>
  )

  const sep = <span style={{ color: 'var(--border)' }}>·</span>

  return (
    <footer style={{
      borderTop:  '1px solid var(--border)',
      padding:    '36px 40px',
      display:    'flex',
      alignItems: 'center',
      gap:        20,
      flexWrap:   'wrap',
    }}>
      <span style={{
        fontFamily:   'var(--font-hack)',
        fontSize:     18,
        color:        'var(--red)',
        letterSpacing: 2,
        marginRight:  'auto',
        textShadow:   '0 0 12px rgba(255,34,68,0.3)',
      }}>
        @BENEKING102
      </span>

      {link('https://github.com/Beneking102/bene-design-fonts', 'GitHub')}
      {sep}
      {link('https://github.com/Beneking102', 'Profile')}
      {sep}
      {link('https://benedikt-pkr.info', 'Portfolio')}
      {sep}

      <span style={{ fontSize: 11, letterSpacing: 2, color: 'var(--muted)' }}>
        BUSL-1.1 / OFL-1.1 · v2.0.0
      </span>
    </footer>
  )
}
