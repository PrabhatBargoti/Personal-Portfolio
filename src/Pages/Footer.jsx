import React from 'react'

const links = [
  { label: 'Instagram',  href: 'https://www.instagram.com/itsz.prabhat/',  color: 'text-[#ede9e1]' },
  { label: 'GitHub',   href: 'https://github.com/PrabhatBargoti',   color: 'text-[#ede9e1]' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prabhat-bargoti-656b4235a/', color: 'text-[#ede9e1]' },
  { label: 'Twitter',  href: 'https://x.com/PrabhatBaroti',  color: 'text-[#ede9e1]' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full border-t border-hairline-border'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4'>

        <div className='flex flex-col gap-1'>
          <span className='Syne text-2xl font-black text-acid'>PB</span>
          <span className='Fira text-[11px] text-[#CAC2BD]'>
            © {year} PB — Built with precision.
          </span>
        </div>

        <div className='flex items-center md:gap-8 gap-5 ml-5'>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='DM-sans font-bold text-lg md:text-xl text-white hover:text-acid transition-colors duration-300'
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer