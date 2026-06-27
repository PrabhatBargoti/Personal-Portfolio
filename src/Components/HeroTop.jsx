import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const HeroTop = () => {
    useGSAP(()=>{
        gsap.from('#indicator',{
            opacity: 0.5,
            delay: 0.5,
            yoyo: true,
            repeat: -1
        })
    })

  return (
    <div>
        <div className="flex items-center gap-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#caff4c]" id='indicator'></span>
            <span className='text-[#caff4c] text-[12px] leading-[1.2] tracking-widest font-medium'>Available for work</span>
        </div>
        <h1 className='uppercase text-[#ede9e1] text-9xl leading-[0.82] tracking-[-0.03em] font-extrabold Syne select-none'>
            Prabhat 
            <br />
            Bargoti
        </h1>
    </div>
  )
}

export default HeroTop
