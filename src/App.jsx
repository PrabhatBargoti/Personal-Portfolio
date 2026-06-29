import React, { useRef } from 'react'
import CustomCursor from './Components/CustomCursor'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import useLenis from './Hook/useLenis'
import Skills from './Pages/Skills'

const App = () => {
  useLenis()
  
  return (
    <div className='selection:bg-[#caff4c] selection:text-black w-full'>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
