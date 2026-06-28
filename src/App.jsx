import React, { useRef } from 'react'
import CustomCursor from './Components/CustomCursor'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import useLenis from './Hook/useLenis'

const App = () => {
  useLenis()
  
  return (
    <div className='selection:bg-[#caff4c] selection:text-black'>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
