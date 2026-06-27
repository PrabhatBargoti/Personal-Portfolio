import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-50 bg-background\/80 backdrop-blur-md pt-1.5 pb-1.5 border-b border-hairline-border flex justify-between items-center max-w-full pl-10 pr-10'>
        <div className="font-sans text-[32px] leading-[-0.05em] font-semibold text-acid ">PB</div>
        <div className='hidden justify-between w-100 md:flex text-[13px] leading-[1.2] tracking-widest font-medium font-[FiraCode]'>
            <a href="#About" className='text-[#CAC2BD] hover:text-[#FFFFFF] hover:transition-colors duration-300 '>About</a>
            <a href="#Projects" className='text-[#CAC2BD] hover:text-[#FFFFFF] hover:transition-colors duration-300 '>Projects</a>
            <a href="#Skills" className='text-[#CAC2BD] hover:text-[#FFFFFF] hover:transition-colors duration-300'>Skills</a>
            <a href="#Experiece" className='text-[#CAC2BD] hover:text-[#FFFFFF] hover:transition-colors duration-300'>Experience</a>
            <a href="#Contact" className='text-[#CAC2BD] hover:text-[#FFFFFF] hover:transition-colors duration-300'>Contact</a>
        </div>
            <button className='rounded-xs bg-white pl-7 pr-7 text-[#31302B] flex-wrap font-[FiraCode] pt-1.5 pb-1.5 duration-200 transition-transform active:scale-[0.95] select-none'>
              Hire Me
            </button>
    </div>
  )
}

export default Navbar
