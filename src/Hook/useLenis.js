import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenisInstance = null

export const scrollToSection = (id) => {
  lenisInstance?.scrollTo(`#${id}`)
}

export const scrollToTop = () => {
  lenisInstance?.scrollTo(0)
}

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    lenisInstance = lenis

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

export default useLenis