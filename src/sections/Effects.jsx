import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import useAOS from '../components/useAOS'

const effects = [
  { label: 'Glow Red',     font: 'hack',  text: 'CRITICAL', style: { color: '#ff2244', textShadow: '0 0 10px #ff2244, 0 0 30px rgba(255,34,68,0.5)' } },
  { label: 'Glow Green',   font: 'hack',  text: 'VERIFIED',  style: { color: '#00ff88', textShadow: '0 0 10px #00ff88, 0 0 30px rgba(0,255,136,0.4)' } },
  { label: 'Glow Cyan',    font: 'hack',  text: 'SCANNING',  style: { color: '#00e5ff', textShadow: '0 0 10px #00e5ff, 0 0 25px rgba(0,229,255,0.4)' } },
  { label: 'Outline',      font: 'hack',  text: 'OUTLINE',   style: { WebkitTextStroke: '1.5px #ff2244', color: 'transparent' } },
  { label: 'Shadow Drop',  font: 'hack',  text: 'SHADOW',    style: { color: '#fff', textShadow: '3px 3px 0 #881122' } },
  { label: 'Comic Drop',   font: 'comic', text: 'BOOM!',     style: { color: '#ff4444', textShadow: '4px 4px 0 #880000' } },
  { label: 'Comic Gold',   font: 'comic', text: 'WHAM!',     style: { color: '#ffd700', textShadow: '3px 3px 0 #7a6500' } },
  { label: 'Comic Outline',font: 'comic', text: 'POW!',      style: { WebkitTextStroke: '2px #ff4444', color: 'transparent' } },
  { label: 'Glitch',       font: 'hack',  text: 'SYS ERROR', isGlitch: true },
]

function GlitchText() {
  const ref  = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    const clips = [
      'inset(0% 0 95% 0)', 'inset(20% 0 70% 0)',
      'inset(60% 0 15% 0)', 'inset(40% 0 45% 0)', 'none',
    ]
    const iv = setInterval(() => {
      if (!ref1.current || !ref2.current) return
      ref1.current.style.clipPath = clips[Math.floor(Math.random() * clips.length)]
      ref2.current.style.clipPath = clips[Math.floor(Math.random() * clips.length)]
      ref1.current.style.transform = Math.random() > 0.5 ? 'translateX(-3px)' : 'none'
      ref2.current.style.transform = Math.random() > 0.5 ? 'translateX(3px)' : 'none'
      setTimeout(() => {
        if (!ref1.current || !ref2.current) return
        ref1.current.style.clipPath = 'none'
        ref2.current.style.clipPath = 'none'
        ref1.current.style.transform = 'none'
        ref2.current.style.transform = 'none'
      }, 120)
    }, 2600)
    return () => clearInterval(iv)
  }, [])

  const base = { fontFamily: 'var(--font-hack)', fontSize: 30, letterSpacing: 3, color: '#fff', lineHeight: 1 }
  return (
    <div ref={ref} style={{ position: 'relative', ...base }}>
      SYS ERROR
      <span ref={ref1} style={{ position: 'absolute', left: 2, top: 0, color: '#00e5ff', opacity: 0.5, pointerEvents: 'none', ...base }}>SYS ERROR</span>
      <span ref={ref2} style={{ position: 'absolute', left: -2, top: 0, color: '#ff2244', opacity: 0.4, pointerEvents: 'none', ...base }}>SYS ERROR</span>
    </div>
  )
}

export default function EffectsSection() {
  const { ref, style } = useAOS()

  return (
    <section id="effects" style={{ padding: '0 40px 100px', maxWidth: 1160, margin: '0 auto' }}>
      <SectionLabel num={2}>Visual Effects</SectionLabel>
      <div ref={ref} style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap:                 14,
        ...style,
      }}>
        {effects.map(ef => (
          <div key={ef.label} style={{
            background:   'var(--card)',
            border:       '1px solid var(--border)',
            borderRadius: 8,
            padding:      '22px 20px',
            textAlign:    'center',
            transition:   'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,34,68,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--muted)', marginBottom: 14, textTransform: 'uppercase' }}>
              {ef.label}
            </div>
            {ef.isGlitch
              ? <GlitchText />
              : <div style={{
                  fontFamily: ef.font === 'comic' ? 'var(--font-comic)' : 'var(--font-hack)',
                  fontSize:   38,
                  lineHeight: 1,
                  ...ef.style,
                }}>
                  {ef.text}
                </div>
            }
          </div>
        ))}
      </div>
    </section>
  )
}
