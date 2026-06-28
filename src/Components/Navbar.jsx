import React, { useState } from 'react'
import { RiMenuFill, RiCloseLine } from '@remixicon/react'
import { scrollToSection, scrollToTop } from '../Hook/useLenis'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl py-3 border-b border-hairline-border px-6 md:px-10'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        <div
        onClick={scrollToTop}
        className="font-sans text-[32px] font-semibold text-acid tracking-tight">
          PB
        </div>

        <div className='hidden md:flex items-center gap-8 text-[13px] tracking-widest font-medium font-[FiraCode]'>
          <a onClick={() => scrollToSection('About')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>About</a>
          <a onClick={() => scrollToSection('Projects')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Projects</a>
          <a onClick={() => scrollToSection('Skills')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Skills</a>
          <a onClick={() => scrollToSection('Experience')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Experience</a>
          <a onClick={() => scrollToSection('Contact')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Contact</a>
        </div>

        <div className='flex items-center gap-4'>
          <button className='rounded-xs bg-white px-5 sm:px-7 py-1.5 text-[#31302B] font-[FiraCode] text-[13px] md:text-[14px] duration-200 transition-transform active:scale-[0.95] select-none'>
            Hire Me
          </button>

          <div className='md:hidden flex items-center' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RiCloseLine className='text-white cursor-pointer' size={24} />
            ) : (
              <RiMenuFill className='text-white cursor-pointer' size={24} />
            )}
          </div>
        </div>

      </div>

      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-hairline-border flex-col items-center py-6 gap-6 font-[FiraCode] text-[16px]`}>
        <a onClick={() => scrollToSection('About')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>About</a>
        <a onClick={() => scrollToSection('Projects')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Projects</a>
        <a onClick={() => scrollToSection('Skills')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Skills</a>
        <a onClick={() => scrollToSection('Experience')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Experience</a>
        <a onClick={() => scrollToSection('Contact')} className='cursor-pointer text-[#CAC2BD] hover:text-[#FFFFFF] transition-colors duration-300'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar