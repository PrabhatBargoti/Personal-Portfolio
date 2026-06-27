import React, { useRef } from 'react'
import CustomCursor from './Components/CustomCursor'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'

const App = () => {
  return (
    <div className='selection:bg-[#caff4c] selection:text-black'>
      <CustomCursor />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
