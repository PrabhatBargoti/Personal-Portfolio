import React from 'react'
import { RiPlayFill } from '@remixicon/react'

const ExperienceCard = ({ period, title, company, points }) => {
  return (
    <div className='shrink-0 w-[85vw] md:w-120 snap-center mt-20'>
      <span className='Fira text-[12px] text-[#caff4c] tracking-widest uppercase'>
        {period}
      </span>

      <div className='mt-3 border border-hairline-border rounded-lg p-8 md:p-10 bg-[#111111]'>
        <h3 className='Syne text-3xl md:text-4xl font-bold text-white leading-tight'>
          {title}
        </h3>
        <span className='block mt-2 Fira text-[12px] tracking-widest uppercase text-[#CAC2BD]'>
          {company}
        </span>

        <ul className='mt-8 flex flex-col gap-5'>
          {points.map((point, i) => (
            <li key={i} className='flex items-start gap-3'>
              <span className='mt-1 shrink-0 w-5 h-5 rounded-sm bg-[#caff4c] flex items-center justify-center'>
                <RiPlayFill size={12} className='text-black' />
              </span>
              <span className='DM-Sans text-[15px] text-[#CAC2BD] leading-relaxed'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard