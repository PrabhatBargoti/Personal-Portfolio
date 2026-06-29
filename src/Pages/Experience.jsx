import React from 'react'
import ExperienceTop from '../Components/Experience/ExperienceTop'
import ExperienceCards from '../Components/Experience/ExperienceCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Experience = () => {
    useGSAP(()=>{
        gsap.from('#Experience-label',{
            y: 4,
            duration: .5,
            y: -4,
            repeat: -1,
            yoyo: true
        })
    })

  return (
    <div id='Experience' className='scroll-mt-20 relative w-full'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-start'>
        <span id='Experience-label' className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'>
          // Experience
        </span>
      </div>
      <div className='mt-10 md:mt-10 md:ml-0 ml-5'>
      <ExperienceTop />
      <ExperienceCards />
      </div>
    </div>
  )
}

export default Experience
