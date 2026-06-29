import React from 'react'
import { scrollToSection } from '../../Hook/useLenis'

const AboutText = () => {
  return (
    <div className='flex flex-col gap-6 max-w-lg ml-10 mt-10 md:-mt-30'>
      <div className='flex flex-col gap-2'>
        <h2 className='Syne text-3xl md:text-5xl font-bold text-white leading-tight'>
          I'm Prabhat —
        </h2>
        <p className='Syne text-xl text-[#CAC2BD] leading-relaxed'>
          a full-stack developer 1.5 years into turning a web dev foundation into something sharper: AI engineering.
        </p>
      </div>

      <div className='w-10 h-px bg-acid opacity-50' />

      <div className='flex flex-col gap-4'>
        <p className='text-[15px] text-[#CAC2BD] leading-[1.8]'>
          I started with the frontend stuff — layouts, components, client sites. Got good at it. Then I hit the AI rabbit hole and realized I didn't want to just build the interface around intelligence — I wanted to build the intelligence itself.
        </p>
        <p className='text-[15px] text-[#CAC2BD] leading-[1.8]'>
          These days I work with Next.js, React, and the Anthropic API. My projects have shifted from "here's a clean website" to "here's an agent that actually does something useful." That gap between UI and AI automation is exactly where I want to live.
        </p>
        <p className='text-[15px] text-[#CAC2BD] leading-[1.8]'>
          No filler, no clones. Just the work.
        </p>
      </div>
        <button
          onClick={() => scrollToSection('Contact')}
          className='w-fit Fira uppercase text-[15px] tracking-widest text-black bg-[#caff4c] px-10 py-3.5 rounded-xs mt-6 active:scale-[0.95] transition-transform duration-150 select-none cursor-pointer mb-5'
          >
          Let's Connect
        </button>

    </div>
  )
}

export default AboutText