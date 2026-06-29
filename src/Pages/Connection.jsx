import React from 'react'
import ConnectionTop from '../Components/Connection/ConnectionTop'
import ConnectionBottom from '../Components/Connection/ConnectionBottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Connection = () => {
  useGSAP(()=>{
    gsap.from('#Contact-Label', {
      y: 4,
      duration: .5,
      y: -4,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <div id='Contact' className='scroll-mt-20 relative w-full'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-start'>
        <span id='Contact-Label' className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'>
          // Contact
        </span>
      </div>
      <div className='mt-10 md:mt-10 md:ml-0 ml-5'>
      <ConnectionTop />
      <ConnectionBottom />
      </div>
    </div>
  )
}

export default Connection
