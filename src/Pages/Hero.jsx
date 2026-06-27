import React from 'react'
import HeroTop from '../Components/HeroTop' 
import HeroBottom from '../Components/HeroBottom' 

const Hero = () => {
  return (
    <div className='relative h-221 w-full flex flex-col justify-center items-start overflow-hidden ml-10'>
      <HeroTop />
      <HeroBottom />
    </div>
  )
}

export default Hero
