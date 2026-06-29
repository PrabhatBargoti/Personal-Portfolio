import React from 'react'

const links = [
  { label: 'Instagram',  href: 'https://www.instagram.com/itsz.prabhat/',  color: 'text-[#ede9e1]' },
  { label: 'GitHub',   href: 'https://github.com/PrabhatBargoti',   color: 'text-[#ede9e1]' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prabhat-bargoti-656b4235a/', color: 'text-[#ede9e1]' },
  { label: 'Twitter',  href: 'https://x.com/PrabhatBaroti',  color: 'text-[#ede9e1]' },
]

const ConnectionBottom = () => {
  return (
    <div className='w-full flex flex-col items-center gap-8 px-6'>
      <div className='w-52 md:w-100 h-px bg-[#ede9e1] mt-15 opacity-20' />

      <div className='w-full max-w-7xl h-px bg-hairline-border' />

      <div className='flex items-center gap-10 md:gap-20 ml-5 md:ml-0'>
        {links.map(({ label, href, color }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
          className={`group relative Fira text-[11px] md:text-[13px] tracking-[0.2em] uppercase hover:text-[#caff4c] ${color} hover:opacity-70 transition-opacity duration-300`}
          >
            {label}
          </a>
        ))}
      </div>

    </div>
  )
}

export default ConnectionBottom