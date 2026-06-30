import React from 'react'
import { RiArrowRightUpLine } from '@remixicon/react'

const ProjectCard = ({ number, title, image, techStack, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative w-full h-70 flex items-center px-8 md:px-12 border border-hairline-border rounded-lg overflow-hidden bg-[#0e0e0e]'
    >
      <div
        className='absolute inset-0 bg-cover bg-center opacity-100 md:opacity-0 md:group-hover:opacity-100 scale-100 md:scale-105 md:group-hover:scale-100 transition-all duration-700 ease-out'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='absolute inset-0 bg-black/40 md:bg-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700' />
      <span className='relative z-10 Fira text-[#caff4c] text-2xl font-bold mr-6 md:mr-10 shrink-0'>
        {number}
      </span>
      <div className='relative z-10 flex flex-col gap-3'>
        <h3 className='Syne text-4xl md:text-6xl font-bold uppercase text-white leading-none transition-colors duration-300'>
          {title}
        </h3>
        <div className='flex items-center gap-2'>
          {techStack.map((tech, i) => (
            <span
              key={i}
              className='Fira text-[11px] uppercase tracking-wide text-[#CAC2BD] border border-hairline-border rounded-sm px-2 py-1'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <span className='relative z-10 ml-auto hidden md:flex items-center gap-1 Fira text-[12px] uppercase tracking-widest text-acid shrink-0'>
        Explore More
        <RiArrowRightUpLine size={16} />
      </span>
    </a>
  )
}

export default ProjectCard