import './index.scss'
import LogoK from '../../../assets/images/letter-k.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    // simple fade + scale animation, no paid plugins
    const tl = gsap.timeline()

    tl.to(bgRef.current, {
      opacity: 1,
      duration: 1,
    })
    .fromTo(
      solidLogoRef.current,
      { opacity: 0, scale: 0.5, rotate: 10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 2, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoK} alt="K" />
    </div>
  )
}

export default Logo