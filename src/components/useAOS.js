import { useEffect, useRef, useState } from 'react'

export default function useAOS(threshold = 0.12) {
  const ref     = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  const style = {
    opacity:    vis ? 1 : 0,
    transform:  vis ? 'none' : 'translateY(24px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  return { ref, style }
}
