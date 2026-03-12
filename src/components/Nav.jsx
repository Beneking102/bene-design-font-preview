import { useState, useEffect } from 'react'

const links = ['Fonts', 'Effects', 'BurstText', 'Install', 'Playground']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav style={{
      position:       'fixed',
      top: 0, left: 0, right: 0,
      zIndex:         200,
      height:         52,
      display:        'flex',
      alignItems:     'center',
      padding:        '0 40px',
      gap:            32,
      background:     scrolled ? 'rgba(6,8,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom:   scrolled ? '1px solid #1c2230' : '1px solid transparent',
      transition:     'all 0.3s ease',
    }}>
      <span style={{
        fontFamily:   'var(--font-hack)',
        fontSize:     17,
        color:        'var(--red)',
        letterSpacing: 2,
        textShadow:   '0 0 16px rgba(255,34,68,0.35)',
        marginRight:  'auto',
      }}>
        BENE-DESIGN-FONTS
      </span>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize:       11,
                letterSpacing:  3,
                color:          'var(--muted)',
                textDecoration: 'none',
                textTransform:  'uppercase',
                transition:     'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <span style={{
        fontSize:     10,
        letterSpacing: 2,
        color:        'var(--green)',
        border:       '1px solid rgba(0,255,136,0.3)',
        padding:      '4px 10px',
        borderRadius: 3,
        background:   'rgba(0,255,136,0.05)',
      }}>
        v2.0.0
      </span>
    </nav>
  )
}
