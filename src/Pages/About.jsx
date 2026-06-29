import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import AboutImg from '../Components/About/AboutImg'
import AboutText from '../Components/About/AboutText'


const About = () => {
  useGSAP(()=>{
    gsap.from('#About-me', {
      y: 4,
      duration: .5,
      y: -4,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <section id='About' className='scroll-mt-20 relative w-full -mt-40'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-start'>
        <span id='About-me' className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'>
          // About Me
        </span>
      </div>
      <div className='flex md:flex-row flex-col mt-5 justify-center items-center '>
      <AboutImg />
      <AboutText />
      </div>
    </section>
  )
}
export default About
