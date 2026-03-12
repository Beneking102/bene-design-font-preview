import SectionLabel from '../components/SectionLabel'
import useAOS from '../components/useAOS'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

function CharGrid({ variant }) {
  const isComic = variant === 'comic'
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 20 }}>
      {CHARS.map(c => (
        <div
          key={c}
          style={{
            width: 30, height: 30,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: isComic ? 'var(--font-comic)' : 'var(--font-hack)',
            fontSize: 16,
            color: isComic ? '#ff4444' : 'var(--red)',
            background: 'var(--card2)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            cursor: 'default',
            transition: 'all 0.12s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = isComic ? 'rgba(255,68,68,0.12)' : 'rgba(255,34,68,0.12)'
            e.currentTarget.style.borderColor = isComic ? '#ff4444' : 'var(--red)'
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.transform = 'scale(1.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--card2)'
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = isComic ? '#ff4444' : 'var(--red)'
            e.currentTarget.style.transform = 'none'
          }}
        >
          {c}
        </div>
      ))}
    </div>
  )
}

function FontCard({ variant }) {
  const { ref, style } = useAOS()
  const isComic = variant === 'comic'

  return (
    <div
      ref={ref}
      style={{
        background:   'var(--card)',
        border:       '1px solid var(--border)',
        borderRadius: 10,
        padding:      '36px 36px 32px',
        position:     'relative',
        overflow:     'hidden',
        transition:   'border-color 0.3s, transform 0.3s',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = isComic ? '#ff4444' : 'var(--red)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      {/* Top line */}
      <div style={{
        position:   'absolute',
        top: 0, left: 0, right: 0,
        height:     2,
        background: `linear-gradient(90deg, transparent, ${isComic ? '#ff4444' : 'var(--red)'}, transparent)`,
        opacity:    0.6,
      }} />

      <div style={{ fontSize: 10, letterSpacing: 4, color: 'var(--muted)', marginBottom: 20, textTransform: 'uppercase' }}>
        {isComic ? 'Comic Typeface' : 'Cybersecurity Typeface'}
      </div>

      <div style={{
        fontFamily:   isComic ? 'var(--font-comic)' : 'var(--font-hack)',
        fontSize:     52,
        color:        isComic ? '#ff4444' : 'var(--red)',
        textShadow:   isComic ? '3px 3px 0 #880000' : '2px 2px 0 #881122, 0 0 24px rgba(255,34,68,0.2)',
        letterSpacing: isComic ? 0 : 3,
        lineHeight:   1,
      }}>
        {isComic ? 'BeneComic' : 'BENEHACK'}
      </div>

      <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: 1.5, marginTop: 14, lineHeight: 2 }}>
        {isComic
          ? <><span style={{ color: 'var(--text)' }}>Rounded · Jittered · Casual</span><br />Handwritten-feel jitter on every glyph.<br />Built for landing pages, fun UI &amp; headings.</>
          : <><span style={{ color: 'var(--text)' }}>Angular · Condensed · 5° Slant</span><br />Bezier curves flattened to sharp geometry.<br />Built for security tools, terminals &amp; dashboards.</>
        }
      </div>

      <CharGrid variant={variant} />
    </div>
  )
}

export default function FontsSection() {
  return (
    <section id="fonts" style={{ padding: '100px 40px', maxWidth: 1160, margin: '0 auto' }}>
      <SectionLabel num={1}>The Fonts</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        <FontCard variant="hack" />
        <FontCard variant="comic" />
      </div>
    </section>
  )
}
