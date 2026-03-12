import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import useAOS from '../components/useAOS'

const TABS = ['npm', 'CSS', 'Tailwind', 'BurstText']

const CODE = {
  npm: [
    { type: 'comment', text: '# 1. Add .npmrc to project root (add to .gitignore!)' },
    { type: 'code',    text: '@beneking102:registry=https://npm.pkg.github.com' },
    { type: 'code',    text: '//npm.pkg.github.com/:_authToken=YOUR_TOKEN' },
    { type: 'blank' },
    { type: 'comment', text: '# 2. Install' },
    { type: 'prompt',  text: 'npm install @beneking102/bene-design-fonts' },
    { type: 'blank' },
    { type: 'comment', text: '# 3. Import' },
    { type: 'jsx',     k: 'import', s: "'@beneking102/bene-design-fonts'",        comment: '// both fonts' },
    { type: 'jsx',     k: 'import', s: "'@beneking102/bene-design-fonts/hack'",   comment: '// only BeneHack' },
    { type: 'jsx',     k: 'import', s: "'@beneking102/bene-design-fonts/comic'",  comment: '// only BeneComic' },
  ],
  CSS: [
    { type: 'prop', p: 'font-family', v: "'BeneHack', monospace" },
    { type: 'prop', p: 'color',       v: '#ff2244' },
    { type: 'prop', p: 'text-shadow', v: '2px 2px 0 #881122, 0 0 20px rgba(255,34,68,.35)' },
    { type: 'prop', p: 'letter-spacing', v: '0.12em' },
    { type: 'blank' },
    { type: 'prop', p: 'font-family', v: "'BeneComic', sans-serif" },
    { type: 'prop', p: 'color',       v: '#ff4444' },
    { type: 'prop', p: 'text-shadow', v: '3px 3px 0 #880000' },
  ],
  Tailwind: [
    { type: 'comment', text: '// tailwind.config.js' },
    { type: 'raw', text: "plugins: [require('@beneking102/bene-design-fonts/tailwind')]" },
    { type: 'blank' },
    { type: 'comment', text: '// JSX' },
    { type: 'raw', text: '<h1 className="font-benehack tracking-hack shadow-cyber text-hack-red">' },
    { type: 'raw', text: '  NPM SCANNER' },
    { type: 'raw', text: '</h1>' },
    { type: 'blank' },
    { type: 'raw', text: '<h2 className="font-benecomic shadow-comic">' },
    { type: 'raw', text: '  ChromaForge' },
    { type: 'raw', text: '</h2>' },
  ],
  BurstText: [
    { type: 'comment', text: "import BurstText from '@beneking102/bene-design-fonts/components/BurstText'" },
    { type: 'blank' },
    { type: 'raw', text: '<BurstText variant="comic" bursts={{ tl: "POW!", tr: "ZAP!" }}>' },
    { type: 'raw', text: '  BENE SECKIT' },
    { type: 'raw', text: '</BurstText>' },
    { type: 'blank' },
    { type: 'raw', text: '<BurstText variant="cyber" animateOnScroll>' },
    { type: 'raw', text: '  NPM SCANNER' },
    { type: 'raw', text: '</BurstText>' },
  ],
}

function renderLine(line, i) {
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }
  if (line.type === 'blank')   return <div key={i} style={{ height: 8 }} />
  if (line.type === 'comment') return <div key={i} style={{ ...mono, color: 'var(--muted)' }}>{line.text}</div>
  if (line.type === 'prompt')  return <div key={i} style={{ ...mono, color: '#00ff88' }}>$ {line.text}</div>
  if (line.type === 'code')    return <div key={i} style={{ ...mono, color: 'var(--text)' }}>{line.text}</div>
  if (line.type === 'raw')     return <div key={i} style={{ ...mono, color: 'var(--text)' }}>{line.text}</div>
  if (line.type === 'prop')    return (
    <div key={i} style={mono}>
      <span style={{ color: 'var(--red)' }}>{line.p}</span>
      <span style={{ color: 'var(--muted)' }}>: </span>
      <span style={{ color: '#00ff88' }}>{line.v}</span>
      <span style={{ color: 'var(--muted)' }}>;</span>
    </div>
  )
  if (line.type === 'jsx') return (
    <div key={i} style={mono}>
      <span style={{ color: 'var(--red)' }}>{line.k} </span>
      <span style={{ color: '#00ff88' }}>{line.s}</span>
      {line.comment && <span style={{ color: 'var(--muted)', marginLeft: 12 }}>{line.comment}</span>}
    </div>
  )
  return null
}

export default function InstallSection() {
  const [active, setActive] = useState('npm')
  const { ref, style } = useAOS()

  return (
    <section id="install" style={{ padding: '0 40px 100px', maxWidth: 1160, margin: '0 auto' }}>
      <SectionLabel num={4}>Installation</SectionLabel>
      <div ref={ref} style={{
        background:   'var(--card)',
        border:       '1px solid var(--border)',
        borderRadius: 10,
        overflow:     'hidden',
        ...style,
      }}>
        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--card2)' }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              padding:      '12px 24px',
              fontSize:     11,
              letterSpacing: 2,
              color:        active === tab ? 'var(--red)' : 'var(--muted)',
              background:   'none',
              border:       'none',
              borderBottom: active === tab ? '2px solid var(--red)' : '2px solid transparent',
              cursor:       'pointer',
              fontFamily:   'var(--font-mono)',
              textTransform:'uppercase',
              transition:   'color 0.15s',
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Code pane */}
        <div style={{ padding: '28px 32px' }}>
          <div style={{
            background:   '#020406',
            border:       '1px solid var(--border)',
            borderLeft:   '4px solid var(--red)',
            borderRadius: 6,
            padding:      '18px 20px',
          }}>
            {CODE[active].map(renderLine)}
          </div>
        </div>
      </div>
    </section>
  )
}
