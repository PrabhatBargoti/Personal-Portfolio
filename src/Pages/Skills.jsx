import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import SkillsTop from '../Components/Skills/SkillsTop'
import SkillsBottom from '../Components/Skills/SkillsBottom'

const Skills = () => {
  useGSAP(() => {
    gsap.from('#skills-label', {
        y: 4,
        duration: 0.5,
        y: -4,
        repeat: -1,
        yoyo: true,
    })
  })

  return (
    <div id='Skills' className='scroll-mt-20 relative w-full'>
      <div id='skills-label' className='max-w-7xl mx-auto px-6 md:px-10'>
        <span
          className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'
        >
          // Skills
        </span>
      </div>

      <div className='flex flex-col items-center w-full py-10 md:py-16 gap-4 ml-5 md:ml-0'>
        <SkillsTop />
        <SkillsBottom />
      </div>

    </div>
  )
}

export default Skills