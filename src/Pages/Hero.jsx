import React from 'react'
import HeroTop from '../Components/HeroTop' 
import HeroBottom from '../Components/HeroBottom' 

const Hero = () => {
  return (
    <div className='relative md:h-221 h-190 w-full flex flex-col justify-center items-start overflow-hidden ml-10 mt-30 md:mt-0'>
      <HeroTop />
      <HeroBottom />
    </div>
  )
}

export default Hero
