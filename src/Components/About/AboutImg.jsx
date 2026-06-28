import React from 'react'
import Profile from '../../assets/Profile.png'
import BG from '../../assets/Background.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutImg = () => {
  useGSAP(()=>{
    gsap.from('#Profile',{
      y: 5,
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 1.5
    })
  })

  return (
    <div className='relative flex items-center justify-center w-160 h-160'>
      <img
        src={BG}
        alt=""
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
      <img
        src={Profile}
        alt="Profile"
        id='Profile'
        className='relative z-10 w-72 rounded-full'
        style={{
          maskImage: 'radial-gradient(circle, black 55%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 80%)',
        }}
      />

    </div>
  )
}

export default AboutImg