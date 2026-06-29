import React from 'react'

const ConnectionTop = () => {
  return (
    <div className='flex flex-col items-center text-center gap-8 px-6'>
      <span className='Fira text-[11px] tracking-[0.3em] text-acid uppercase'>
        § 04 / Connection
      </span>
      <h2 className='Syne font-black uppercase leading-[1.05] text-4xl md:text-8xl'>
        <span className='text-white'>Let's Build<br />Something<br /></span>
        <span className='text-acid italic'>Unreasonable.</span>
      </h2>
      <div
        className='group relative Syne font-bold text-xl md:text-3xl text-white hover:text-[#caff4c] transition-colors duration-300'
      >
        Prabhat78961@gmail.com
        <span className='absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#caff4c] group-hover:w-full transition-all duration-500 ease-in-out' />
      </div>

    </div>
  )
}

export default ConnectionTop