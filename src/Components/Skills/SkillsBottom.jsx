import React from 'react'

const css = `
  @keyframes spinCW  { from { transform: rotate(45deg); } to { transform: rotate(405deg); } }
  @keyframes spinCCW { from { transform: rotate(45deg); } to { transform: rotate(-315deg); } }

  .rings-wrap {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .rings-wrap { transform: scale(0.45); }
  }
`

const P = {
  top:         { top: 0,    left: '50%',  transform: 'translate(-50%, -50%)' },
  right:       { top: '50%', right: 0,    transform: 'translate(50%, -50%)' },
  bottom:      { bottom: 0, left: '50%',  transform: 'translate(-50%, 50%)' },
  left:        { top: '50%', left: 0,     transform: 'translate(-50%, -50%)' },
  topRight:    { top: 0,    right: 0,     transform: 'translate(50%, -50%)' },
  topLeft:     { top: 0,    left: 0,      transform: 'translate(-50%, -50%)' },
  bottomRight: { bottom: 0, right: 0,     transform: 'translate(50%, 50%)' },
  bottomLeft:  { bottom: 0, left: 0,      transform: 'translate(-50%, 50%)' },
}

const rings = [
  {
    size: 240,
    animation: 'spinCW 10s linear infinite',
    opacity: 'rgba(255,255,255,0.12)',
    labels: [
      { text: 'React',   ...P.top },
      { text: 'Next.js', ...P.bottom },
    ],
  },
  {
    size: 420,
    animation: 'spinCCW 18s linear infinite',
    opacity: 'rgba(255,255,255,0.08)',
    labels: [
      { text: 'Tailwind',   ...P.topLeft },
      { text: 'TypeScript', ...P.right },
      { text: 'Three.js',   ...P.bottomRight },
    ],
  },
  {
    size: 610,
    animation: 'spinCW 28s linear infinite',
    opacity: 'rgba(255,255,255,0.05)',
    labels: [
      { text: 'Node.js',   ...P.top },
      { text: 'GSAP',      ...P.topRight },
      { text: 'Anthropic', ...P.right },
      { text: 'Figma',     ...P.bottomLeft },
      { text: 'Python',    ...P.bottom },
    ],
  },
]

const Label = ({ text, style }) => (
  <div
    style={{ position: 'absolute', ...style }}
    className='bg-[#0a0a0a] border border-white/10 px-2.5 py-1.25 rounded-sm backdrop-blur-sm'
  >
    <span className='font-[FiraCode] text-[10px] text-acid uppercase tracking-[0.18em] whitespace-nowrap'>
      {text}
    </span>
  </div>
)

const SkillsBottom = () => {
  return (
    <div className='relative flex items-center justify-center w-full h-85 md:h-170 mt-10 md:mt-25 overflow-hidden'>
      <style>{css}</style>

      <div className='absolute w-48 h-48 rounded-full bg-acid/10 blur-[80px] pointer-events-none' />
      <div className='absolute w-24 h-24 rounded-full bg-acid/20 blur-2xl pointer-events-none' />

      <div
        className='absolute z-20 w-24 h-24 md:w-32 md:h-32 bg-[#caff4c] rounded-2xl flex items-center justify-center'
        style={{ boxShadow: '0 0 40px rgba(202,255,76,0.35), 0 0 80px rgba(202,255,76,0.15)' }}
      >
        <span className='FiraCode font-black text-black text-center text-[10px] md:text-[13px] leading-snug tracking-widest uppercase'>
          FULL<br />STACK
        </span>
      </div>

      <div className='rings-wrap absolute'>
        {rings.map((ring, i) => (
          <div
            key={i}
            className='absolute'
            style={{
              width: ring.size,
              height: ring.size,
              top: '50%',
              left: '50%',
              marginTop: -ring.size / 2,
              marginLeft: -ring.size / 2,
              border: `1px solid ${ring.opacity}`,
              animation: ring.animation,
            }}
          >
            {ring.labels.map((label, j) => {
              const { text, ...style } = label
              return <Label key={j} text={text} style={style} />
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBottom