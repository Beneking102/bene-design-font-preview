import { useRef, useEffect, useState } from 'react'

const DEFAULTS = {
  comic: {
    tl: { word: 'POW!',  color: '#ff4444', shadow: '#880000', size: 28, rotate: -14, top: -22,   left: -30  },
    tr: { word: 'ZAP!',  color: '#ffd700', shadow: '#886600', size: 22, rotate:  11, top: -26,   right: -24 },
    bl: { word: '★',     color: '#00ff88', shadow: '#006633', size: 18, rotate:  -8, bottom: -18, left: 12  },
    br: { word: 'WOW!',  color: '#00cfff', shadow: '#005577', size: 20, rotate:   7, bottom: -22, right: 10 },
  },
  cyber: {
    tl: { word: 'BREACH', color: '#ff2244', shadow: '#881122', glow: 'rgba(255,34,68,0.5)',  size: 20, rotate: -14, top: -20,   left: -28  },
    tr: { word: 'CVE!',   color: '#00e5ff', shadow: '#005566', glow: 'rgba(0,229,255,0.4)',  size: 16, rotate:  11, top: -24,   right: -22 },
    bl: { word: '0DAY',   color: '#00ff88', shadow: '#006633', glow: 'rgba(0,255,136,0.4)',  size: 14, rotate:  -8, bottom: -18, left: 12  },
    br: { word: 'PWND!',  color: '#ffd700', shadow: '#7a6500',                               size: 15, rotate:   7, bottom: -22, right: 8  },
  },
}

const ENTRY = {
  tl: 'translate(-20px,-20px) scale(0.3)',
  tr: 'translate( 20px,-20px) scale(0.3)',
  bl: 'translate(-20px, 20px) scale(0.3)',
  br: 'translate( 20px, 20px) scale(0.3)',
}

const SLOTS = ['tl', 'tr', 'bl', 'br']

export default function BurstText({
  children,
  variant         = 'comic',
  bursts          = {},
  fontSize        = '64px',
  color,
  style           = {},
  className       = '',
  animateOnScroll = true,
  threshold       = 0.3,
  staggerMs       = 80,
}) {
  const wrapRef             = useRef(null)
  const [ready,  setReady]  = useState(!animateOnScroll)
  const [popped, setPopped] = useState(!animateOnScroll)

  useEffect(() => {
    if (!animateOnScroll) return
    const el = wrapRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setReady(true); setPopped(true); return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true)
        requestAnimationFrame(() => setTimeout(() => setPopped(true), 30))
        obs.disconnect()
      }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [animateOnScroll, threshold])

  const isComic   = variant === 'comic'
  const defaults  = DEFAULTS[variant]
  const defColor  = isComic ? '#ff4444' : '#ff2244'
  const defShadow = isComic
    ? '4px 4px 0 #880000'
    : '3px 3px 0 #881122, 0 0 28px rgba(255,34,68,0.3)'

  return (
    <span
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      {SLOTS.map((slot, idx) => {
        const cfg  = defaults[slot]
        if (!cfg) return null
        const word = bursts[slot] !== undefined ? bursts[slot] : cfg.word
        if (!word) return null

        const pos = {}
        if (cfg.top    !== undefined) pos.top    = cfg.top
        if (cfg.bottom !== undefined) pos.bottom = cfg.bottom
        if (cfg.left   !== undefined) pos.left   = cfg.left
        if (cfg.right  !== undefined) pos.right  = cfg.right

        const textShadow = cfg.glow
          ? `1px 1px 0 ${cfg.shadow}, 0 0 10px ${cfg.glow}`
          : `2px 2px 0 ${cfg.shadow}`

        const delay    = idx * staggerMs
        const rotation = `rotate(${cfg.rotate}deg)`
        const isIn     = popped

        return (
          <span key={slot} style={{
            position:      'absolute',
            fontFamily:    isComic ? 'var(--font-comic)' : 'var(--font-hack)',
            fontSize:      cfg.size,
            color:         cfg.color,
            textShadow,
            lineHeight:    1,
            pointerEvents: 'none',
            userSelect:    'none',
            whiteSpace:    'nowrap',
            zIndex:        10,
            letterSpacing: isComic ? 0 : '1px',
            ...pos,
            opacity:    animateOnScroll ? (ready ? (isIn ? 1 : 0) : 0) : 1,
            transform:  animateOnScroll
              ? (isIn ? rotation : `${ENTRY[slot]} ${rotation}`)
              : rotation,
            transition: animateOnScroll
              ? `opacity 0.35s ease ${delay}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`
              : undefined,
            animation: (!animateOnScroll || isIn)
              ? `burstFloat 3s ease-in-out ${delay * 3}ms infinite`
              : 'none',
          }}>
            {word}
          </span>
        )
      })}
      <span style={{
        fontFamily:    isComic ? 'var(--font-comic)' : 'var(--font-hack)',
        fontSize,
        color:         color || defColor,
        textShadow:    defShadow,
        letterSpacing: isComic ? undefined : '3px',
        position:      'relative',
        zIndex:        1,
      }}>
        {children}
      </span>
    </span>
  )
}
