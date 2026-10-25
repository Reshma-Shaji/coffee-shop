"use client"

import React, { useEffect, useRef, useState } from 'react'

interface ScrollDarkenParagraphProps {
  children: React.ReactNode
  className?: string
}

const ScrollDarkenParagraph: React.FC<ScrollDarkenParagraphProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      // Starts light when enters bottom of viewport, fully darkens by middle of viewport
      const enterY = windowHeight * 0.95
      const finishY = windowHeight * 0.4
      const calculated = (enterY - rect.top) / (enterY - finishY)
      setProgress(Math.min(Math.max(calculated, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Interpolate color from light gray (210, 210, 215) to deep coffee brown / dark (28, 18, 10)
  const r = Math.round(210 - progress * (210 - 28))
  const g = Math.round(210 - progress * (210 - 18))
  const b = Math.round(215 - progress * (215 - 10))
  const dynamicColor = `rgb(${r}, ${g}, ${b})`

  return (
    <h2
      ref={ref}
      style={{ color: dynamicColor }}
      className={`transition-colors duration-150 ease-out will-change-[color] ${className}`}
    >
      {children}
    </h2>
  )
}

export default ScrollDarkenParagraph
