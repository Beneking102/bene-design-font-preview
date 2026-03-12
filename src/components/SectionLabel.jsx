export default function SectionLabel({ num, children }) {
  return (
    <div style={{
      display:      'flex',
      alignItems:   'center',
      gap:          12,
      fontSize:     10,
      letterSpacing: 5,
      color:        'var(--muted)',
      textTransform: 'uppercase',
      marginBottom: 48,
    }}>
      <span style={{ color: 'var(--red)', opacity: 0.5 }}>{num ? `0${num} —` : '//'}</span>
      {children}
      <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
