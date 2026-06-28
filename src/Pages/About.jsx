import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import AboutTop from '../Components/About/AboutTop'
import AboutBottom from '../Components/About/AboutBottom'

const About = () => {
  useGSAP(()=>{
    gsap.from('#About', {
      y: 4,
      duration: .5,
      y: -4,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <section id='About' className='scroll-mt-20 relative w-full -mt-40'>
      <AboutTop />
      <AboutBottom />
    </section>
  )
}
export default About
