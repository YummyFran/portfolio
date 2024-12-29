import React, { useEffect, useRef, useState } from 'react'
import { Box } from './Box'
import './canvas.css'

function Canvas({isAnimating, setIsAnimating, light}) {
  const [canvas, setCanvas] = useState(null)
  const [ctx, setCtx] = useState(null)
  const canvasRef = useRef(null)
  
  const MAX_SQUARES = 8
  let squares = []

  const initCanvas = () => {
    resize()
    while (squares.length < MAX_SQUARES) {
      squares.push(new Box(canvas, ctx))
    }
    animate()
  }

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    squares.forEach(box => {
        box.rotate()
        box.drawShadow(light)
    });

    squares.forEach(box => {
        box.draw()
    })

    if(window.scrollY < window.innerHeight && isAnimating) {
        requestAnimationFrame(animate)
    } else {
        setIsAnimating(false)
    }
  }

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')

    setCanvas(cv)
    setCtx(cx)
  }, [])

  useEffect(() => {
    const init = () => initCanvas()
    if(canvas && ctx) init()
  }, [canvas, ctx, isAnimating])

  return (
    <canvas ref={canvasRef} id="canvas"/>
  )
}

export default Canvas