import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Project = () => {
  useGSAP(()=>{
    gsap.from('#Project-lable', {
      y: 4,
      duration: .5,
      y: -4,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <div id='Projects' className='scroll-mt-20 relative w-full'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-start'>
        <span id='Project-lable' className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'>
          // Project
        </span>
      </div>
    </div>
  )
}

export default Project
