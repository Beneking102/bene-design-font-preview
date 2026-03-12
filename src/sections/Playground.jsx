import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'

const PRESETS = [
  { label: 'Red Cyber',  color: '#ff2244', shadow: '#991122', ls: 4,  effect: 'drop', font: 'hack',  active: true },
  { label: 'Terminal',   color: '#00ff88', shadow: '#004422', ls: 3,  effect: 'glow', font: 'hack'  },
  { label: 'Ice Cyan',   color: '#00e5ff', shadow: '#005566', ls: 3,  effect: 'glow', font: 'hack'  },
  { label: 'Warning',    color: '#ffd700', shadow: '#7a6500', ls: 2,  effect: 'drop', font: 'hack'  },
  { label: 'Clean',      color: '#ffffff', shadow: '#333333', ls: 2,  effect: 'drop', font: 'hack'  },
  { label: 'Outline',    color: '#ff2244', shadow: '#000000', ls: 4,  effect: 'outline', font: 'hack' },
  { label: 'Comic Red',  color: '#ff4444', shadow: '#880000', ls: 0,  effect: 'drop', font: 'comic' },
  { label: 'Comic Gold', color: '#ffd700', shadow: '#7a6500', ls: 0,  effect: 'drop', font: 'comic' },
]

function getTextShadow(effect, color, shadow) {
  if (effect === 'glow')    return `0 0 10px ${color}, 0 0 30px ${color}80`
  if (effect === 'outline') return 'none'
  return `2px 2px 0 ${shadow}, 0 0 20px ${color}50`
}

export default function Playground() {
  const [text,   setText]   = useState('ACCESS DENIED')
  const [size,   setSize]   = useState(56)
  const [color,  setColor]  = useState('#ff2244')
  const [shadow, setShadow] = useState('#991122')
  const [ls,     setLs]     = useState(4)
  const [effect, setEffect] = useState('drop')
  const [font,   setFont]   = useState('hack')
  const [preset, setPreset] = useState(0)

  function applyPreset(i) {
    const p = PRESETS[i]
    setColor(p.color); setShadow(p.shadow)
    setLs(p.ls); setEffect(p.effect); setFont(p.font)
    setPreset(i)
  }

  const displayStyle = {
    fontFamily:    font === 'hack' ? 'var(--font-hack)' : 'var(--font-comic)',
    fontSize:      size,
    letterSpacing: ls,
    color:         effect === 'outline' ? 'transparent' : color,
    textShadow:    getTextShadow(effect, color, shadow),
    WebkitTextStroke: effect === 'outline' ? `1.5px ${color}` : undefined,
    wordBreak:     'break-all',
    transition:    'all 0.1s',
  }

  const ctrl = { display: 'flex', flexDirection: 'column', gap: 5 }
  const label = { fontSize: 10, letterSpacing: 2, color: 'var(--muted)', textTransform: 'uppercase' }
  const inputBase = {
    background:  'var(--card2)',
    border:      '1px solid var(--border)',
    borderRadius: 4,
    color:       '#fff',
    fontFamily:  'var(--font-mono)',
    outline:     'none',
  }

  return (
    <section id="playground" style={{ padding: '0 40px 100px', maxWidth: 1160, margin: '0 auto' }}>
      <SectionLabel num={5}>Live Playground</SectionLabel>

      {/* Display */}
      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        minHeight:      130,
        background:     '#020406',
        border:         '1px solid var(--border)',
        borderRadius:   8,
        padding:        '24px 32px',
        marginBottom:   20,
        ...displayStyle,
      }}>
        {text || 'TYPE SOMETHING'}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end' }}>
        <div style={ctrl}>
          <span style={label}>Text</span>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            style={{ ...inputBase, padding: '7px 12px', fontSize: 14, minWidth: 180 }}
          />
        </div>

        <div style={ctrl}>
          <span style={label}>Size — {size}px</span>
          <input type="range" min={14} max={120} value={size}
            onChange={e => setSize(+e.target.value)}
            style={{ accentColor: 'var(--red)', width: 120 }}
          />
        </div>

        <div style={ctrl}>
          <span style={label}>Farbe</span>
          <input type="color" value={color} onChange={e => setColor(e.target.value)}
            style={{ ...inputBase, width: 36, height: 30, cursor: 'pointer', padding: 2 }}
          />
        </div>

        <div style={ctrl}>
          <span style={label}>Schatten</span>
          <input type="color" value={shadow} onChange={e => setShadow(e.target.value)}
            style={{ ...inputBase, width: 36, height: 30, cursor: 'pointer', padding: 2 }}
          />
        </div>

        <div style={ctrl}>
          <span style={label}>Spacing — {ls}px</span>
          <input type="range" min={-4} max={30} value={ls}
            onChange={e => setLs(+e.target.value)}
            style={{ accentColor: 'var(--red)', width: 100 }}
          />
        </div>

        <div style={ctrl}>
          <span style={label}>Effekt</span>
          <select value={effect} onChange={e => setEffect(e.target.value)}
            style={{ ...inputBase, padding: '7px 10px', fontSize: 12 }}>
            <option value="drop">Drop Shadow</option>
            <option value="glow">Glow</option>
            <option value="outline">Outline</option>
          </select>
        </div>

        <div style={ctrl}>
          <span style={label}>Font</span>
          <select value={font} onChange={e => setFont(e.target.value)}
            style={{ ...inputBase, padding: '7px 10px', fontSize: 12 }}>
            <option value="hack">BeneHack</option>
            <option value="comic">BeneComic</option>
          </select>
        </div>
      </div>

      {/* Presets */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
        {PRESETS.map((p, i) => (
          <button key={p.label} onClick={() => applyPreset(i)} style={{
            background:   i === preset ? 'rgba(255,34,68,0.15)' : 'var(--card2)',
            border:       `1px solid ${i === preset ? 'var(--red)' : 'var(--border)'}`,
            borderRadius: 4,
            color:        i === preset ? '#fff' : 'var(--muted)',
            fontSize:     10,
            letterSpacing: 1,
            padding:      '5px 12px',
            cursor:       'pointer',
            fontFamily:   'var(--font-mono)',
            textTransform:'uppercase',
            transition:   'all 0.15s',
          }}>
            {p.label}
          </button>
        ))}
      </div>
    </section>
  )
}
