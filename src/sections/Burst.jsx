import SectionLabel from '../components/SectionLabel'
import BurstText from '../components/BurstText'

export default function BurstSection() {
  return (
    <section id="bursttext" style={{ padding: '0 40px 100px', maxWidth: 1160, margin: '0 auto' }}>
      <SectionLabel num={3}>BurstText Component</SectionLabel>

      <p style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 1, marginBottom: 32, lineHeight: 2 }}>
        React component — decorative burst words that{' '}
        <span style={{ color: 'var(--text)' }}>float around headings</span>.
        Animates in on scroll via native{' '}
        <span style={{ color: 'var(--cyan)' }}>IntersectionObserver</span> — zero dependencies.
      </p>

      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '80px 40px',
        background:     'var(--card)',
        border:         '1px solid var(--border)',
        borderRadius:   10,
        marginBottom:   16,
        overflow:       'visible',
      }}>
        <BurstText
          variant="comic"
          bursts={{ tl: 'POW!', tr: 'ZAP!', bl: '★', br: 'WOW!' }}
          fontSize="clamp(36px, 5vw, 64px)"
          animateOnScroll
        >
          BENE SECKIT
        </BurstText>
      </div>

      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '80px 40px',
        background:     'var(--card2)',
        border:         '1px solid var(--border)',
        borderRadius:   10,
        overflow:       'visible',
      }}>
        <BurstText
          variant="cyber"
          bursts={{ tl: 'BREACH', tr: 'CVE!', bl: '0DAY', br: 'PWND!' }}
          fontSize="clamp(36px, 5vw, 64px)"
          animateOnScroll
          threshold={0.4}
        >
          BENEHACK
        </BurstText>
      </div>

      {/* Props table */}
      <div style={{ marginTop: 32, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)', background: 'var(--card2)', fontSize: 10, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase' }}>
          Props
        </div>
        {[
          ['variant',         "'comic' | 'cyber'",    "'comic'",  'Font style and default burst words'],
          ['bursts',          '{ tl, tr, bl, br }',  'preset',   'Override any slot — omit to hide'],
          ['fontSize',        'string',               "'64px'",   'Main heading size'],
          ['animateOnScroll', 'boolean',              'true',     'Burst words fly in on viewport enter'],
          ['threshold',       'number',               '0.3',      'IntersectionObserver threshold'],
          ['staggerMs',       'number',               '80',       'Delay between each burst (ms)'],
        ].map(([prop, type, def, desc]) => (
          <div key={prop} style={{
            display:     'grid',
            gridTemplateColumns: '1fr 1.2fr 0.8fr 2fr',
            gap:         16,
            padding:     '10px 24px',
            borderBottom:'1px solid var(--border)',
            fontSize:    12,
            alignItems:  'center',
          }}>
            <code style={{ color: 'var(--cyan)' }}>{prop}</code>
            <code style={{ color: 'var(--muted)' }}>{type}</code>
            <code style={{ color: 'var(--gold)' }}>{def}</code>
            <span style={{ color: 'var(--muted)' }}>{desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
