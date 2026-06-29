import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import SkillsTop from '../Components/Skills/SkillsTop'
import SkillsBottom from '../Components/Skills/SkillsBottom'

const Skills = () => {
  useGSAP(() => {
    gsap.from('#skills-label', {
      y: -4,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <div id='Skills' className='scroll-mt-10 relative w-full'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <span
          id='skills-label'
          className='font-[Syne] text-[#cac6bd] font-light text-[20px] mt-10 inline-block'
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