const badges = [
  { label: 'BeneHack',       color: 'var(--red)',    bg: 'rgba(255,34,68,0.06)',    border: 'rgba(255,34,68,0.3)'   },
  { label: 'BeneComic',      color: 'var(--text)',   bg: 'var(--card)',             border: 'var(--border)'         },
  { label: 'WOFF · TTF',     color: 'var(--green)',  bg: 'rgba(0,255,136,0.05)',    border: 'rgba(0,255,136,0.25)'  },
  { label: 'Tailwind Plugin',color: 'var(--cyan)',   bg: 'rgba(0,229,255,0.05)',    border: 'rgba(0,229,255,0.25)'  },
  { label: 'BurstText AOS',  color: 'var(--gold)',   bg: 'rgba(255,215,0,0.05)',    border: 'rgba(255,215,0,0.25)'  },
  { label: '826 Glyphs',     color: 'var(--muted)',  bg: 'var(--card)',             border: 'var(--border)'         },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight:      '100vh',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      textAlign:      'center',
      padding:        '52px 40px 80px',
      position:       'relative',
    }}>

      {/* Grid background */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: `
          linear-gradient(rgba(255,34,68,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,34,68,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage:      'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        pointerEvents:  'none',
      }} />

      {/* Radial glow */}
      <div style={{
        position:       'absolute',
        top:            '40%',
        left:           '50%',
        transform:      'translate(-50%,-50%)',
        width:          600,
        height:         400,
        background:     'radial-gradient(ellipse, rgba(255,34,68,0.07) 0%, transparent 70%)',
        pointerEvents:  'none',
      }} />

      <p style={{
        fontSize:     10,
        letterSpacing: 6,
        color:        'var(--muted)',
        marginBottom: 28,
        animation:    'fadeUp 0.8s ease 0.2s both',
      }}>
        @beneking102 &nbsp;·&nbsp; <span style={{ color: 'var(--red)' }}>Private GitHub Package</span> &nbsp;·&nbsp; Personal Design System
      </p>

      <h1
        data-t="BENE-DESIGN-FONTS"
        style={{
          fontFamily:   'var(--font-hack)',
          fontSize:     'clamp(38px, 7.5vw, 92px)',
          color:        '#fff',
          letterSpacing: 5,
          lineHeight:   1,
          textShadow:   '0 0 40px rgba(255,34,68,0.28), 0 0 80px rgba(255,34,68,0.12), 3px 3px 0 #881122',
          position:     'relative',
          animation:    'fadeUp 0.8s ease 0.4s both',
        }}
      >
        BENE-DESIGN-FONTS
        {/* Glitch layers */}
        <span style={{
          position:  'absolute',
          left:      3, top: 0,
          color:     'var(--cyan)',
          opacity:   0.18,
          animation: 'glitch 7s infinite 3s',
          userSelect:'none',
          pointerEvents:'none',
        }}>BENE-DESIGN-FONTS</span>
      </h1>

      <p style={{
        fontSize:     13,
        letterSpacing: 5,
        color:        'var(--muted)',
        marginTop:    20,
        animation:    'fadeUp 0.8s ease 0.6s both',
      }}>
        Custom Typefaces &nbsp;
        <span style={{ color: 'var(--cyan)' }}>·</span>&nbsp;
        BeneHack &nbsp;
        <span style={{ color: 'var(--cyan)' }}>·</span>&nbsp;
        BeneComic &nbsp;
        <span style={{ color: 'var(--cyan)' }}>·</span>&nbsp;
        Tailwind Plugin &nbsp;
        <span style={{ color: 'var(--cyan)' }}>·</span>&nbsp;
        React Components
      </p>

      <div style={{
        display:        'flex',
        gap:            10,
        marginTop:      36,
        flexWrap:       'wrap',
        justifyContent: 'center',
        animation:      'fadeUp 0.8s ease 0.8s both',
      }}>
        {badges.map(b => (
          <span key={b.label} style={{
            fontSize:     11,
            letterSpacing: 2,
            padding:      '5px 14px',
            borderRadius: 4,
            border:       `1px solid ${b.border}`,
            color:        b.color,
            background:   b.bg,
            textTransform:'uppercase',
          }}>{b.label}</span>
        ))}
      </div>

      {/* Scroll hint */}
      <span style={{
        position:      'absolute',
        bottom:        36,
        left:          '50%',
        transform:     'translateX(-50%)',
        fontSize:      10,
        letterSpacing: 4,
        color:         'var(--muted)',
        animation:     'fadeIn 1s ease 1.8s both',
      }}>
        SCROLL ↓
      </span>
    </section>
  )
}
