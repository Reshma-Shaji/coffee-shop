"use client"

import React from 'react'

interface FloatingCupMotionProps {
  children: React.ReactNode
  className?: string
}

const FloatingCupMotion: React.FC<FloatingCupMotionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatMotionInPlace {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(1.2deg);
          }
        }
        .cup-motion-active {
          display: inline-block;
          animation: floatMotionInPlace 4s ease-in-out infinite;
          will-change: transform;
        }
      `}} />
      <div className="cup-motion-active">
        {children}
      </div>
    </div>
  )
}

export default FloatingCupMotion
