"use client"

import React, { useEffect, useState } from 'react'

interface AnimatedCoffeeTextProps {
  text?: string
  className?: string
}

const AnimatedCoffeeText: React.FC<AnimatedCoffeeTextProps> = ({
  text = "Coffee",
  className = "",
}) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const duration = 2800 // 2.8 seconds for graceful handwriting draw

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)

      // easeOutCubic curve for organic handwriting feel
      const ease = 1 - Math.pow(1 - progress, 3)
      setPercent(ease * 100)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="relative inline-block overflow-visible py-4 pr-12 select-none">
      {/* 
        clipPath uses -20% to 140% vertical bounds to ensure tall cursive loops (ascenders & descenders like 'C' and 'f')
        are NEVER cut off or clipped at the edges.
      */}
      <h1
        className={`text-[270px] font-clicker_script leading-[1] inline-block ${className}`}
        style={{
          clipPath: `polygon(-10% -25%, ${percent * 1.1}% -25%, ${percent * 1.1}% 135%, -10% 135%)`,
          WebkitClipPath: `polygon(-10% -25%, ${percent * 1.1}% -25%, ${percent * 1.1}% 135%, -10% 135%)`,
          willChange: 'clip-path',
        }}
      >
        {text}
      </h1>
    </div>
  )
}

export default AnimatedCoffeeText
