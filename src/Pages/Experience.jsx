import React, { useRef, useState } from 'react'
import ExperienceTop from '../Components/Experience/ExperienceTop'
import ExperienceCards from '../Components/Experience/ExperienceCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'

const experiences = [
  {
    period: '2026 — Present',
    title: 'AI Engineer',
    company: '',
    points: [
      'Studying LLM fundamentals, prompt engineering, and the Anthropic API through hands-on practice.',
      'Building small AI agent prototypes to understand tool use, context handling, and automation flows.',
      'Following both self-directed learning and structured courses to build a practical foundation.'
    ],
  },
  {
    period: '2025',
    title: 'FullStack Developer',
    company: '',
    points: [
      'Working stack: React, Next.js, Tailwind CSS, Node.js — frontend to backend, design system to deployment.',
      'Designed and built my own portfolio from scratch — component architecture, smooth scroll, responsive across devices.',
      'Comfortable owning a project solo: requirements, design, development, and client communication.'
    ],
  },
]

const Experience = () => {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })

  useGSAP(() => {
    gsap.from('#Experience-label', {
      y: 4,
      duration: 0.5,
      y: -4,
      repeat: -1,
      yoyo: true,
    })
  })

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstChild?.offsetWidth || 480
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24,
      behavior: 'smooth',
    })
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    dragStart.current = {
      x: e.pageX,
      scrollLeft: scrollRef.current.scrollLeft,
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const walk = e.pageX - dragStart.current.x
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <div id='Experience' className='scroll-mt-20 relative w-full'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center'>
        <span id='Experience-label' className='text-[#cac6bd] hover:underline transition-all duration-100 font-light text-[25px]'>
          // Experience
        </span>

        <div className='hidden md:flex items-center gap-3'>
          <button
            onClick={() => scroll('left')}
            className='w-10 h-10 rounded-full border border-hairline-border flex items-center justify-center hover:border-acid hover:text-acid transition-colors duration-300'
          >
            <RiArrowLeftLine size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className='w-10 h-10 rounded-full border border-hairline-border flex items-center justify-center hover:border-acid hover:text-acid transition-colors duration-300'
          >
            <RiArrowRightLine size={18} />
          </button>
        </div>
      </div>

      <div className='mt-10 md:mt-10 md:ml-0 ml-10'>
        <ExperienceTop />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 max-w-7xl mx-auto px-6 md:px-10 ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCards key={i} {...exp} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience