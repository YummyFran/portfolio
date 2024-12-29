import React, { useRef, useState } from 'react'
import Canvas from '../components/Canvas/Canvas'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const Homepage = () => {
  const [isAnimating, setIsAnimating] = useState(true) 
  const screenshots = useRef([])
  const root = document.documentElement.style

  let light = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const animateScreenshot = (x, y, el) => {
    const box = el.getBoundingClientRect()
    const calcX = -(y - box.y - (box.height / 2)) / 10
    const calcY = (x - box.x - (box.width / 2)) / 10

    el.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`
  }

  const handleMouseMove = e => {
    if(screenshots.current[Number(e.target.classList[0])]) {
        window.requestAnimationFrame(() => animateScreenshot(e.clientX, e.clientY, e.target))
    }
    
    light.x = e.pageX
    light.y = e.pageY

    root.setProperty('--light-x', `${light.x}px`)
    root.setProperty('--light-y', `${light.y}px`)
  }
  
  screenshots.current.forEach(ss => {
    if(!ss) return

    ss.addEventListener('mouseleave', () => {
      ss.style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
  })

  const throttledHandleMouseMove = throttle(handleMouseMove, isAnimating ? 0 : 100);

  const handleScroll = () => {
    if(window.scrollY < window.innerHeight && !isAnimating) {
        setIsAnimating(true)
    }

    const sections = document.querySelectorAll('section')

    sections.forEach(sec => {
        sec.classList.toggle('show-section', sec.getBoundingClientRect().top < 300)
    })
  }

  window.addEventListener('scroll', handleScroll)

  window.addEventListener('mousemove', throttledHandleMouseMove)
  
  return (
    <>
      {isAnimating && <Canvas isAnimating={isAnimating} setIsAnimating={setIsAnimating} light={light}/>}
      <div className="homepage">
          <Nav />
          <Banner />
          <Projects screenshots={screenshots}/>
          <About />
          <Contact />
      </div>
    </>
  )
}

export default Homepage