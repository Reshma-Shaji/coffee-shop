"use client"

import React from "react"
import { motion, Variants } from "framer-motion"

interface FadeInViewProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  staggerChildren?: number
  delayChildren?: number
  className?: string
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.18,
  delayChildren = 0.2,
  className = "",
}) => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string; yOffset?: number }> = ({
  children,
  className = "",
  yOffset = 30,
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

interface KenBurnsBackgroundProps {
  children: React.ReactNode
  scale?: number
  duration?: number
  className?: string
}

export const KenBurnsBackground: React.FC<KenBurnsBackgroundProps> = ({
  children,
  scale = 1.06,
  duration = 18,
  className = "absolute inset-0 z-0",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1 }}
      animate={{ scale }}
      transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    >
      {children}
    </motion.div>
  )
}

interface GentleFloatProps {
  children: React.ReactNode
  yRange?: number
  rotateRange?: number
  duration?: number
  className?: string
}

export const GentleFloat: React.FC<GentleFloatProps> = ({
  children,
  yRange = 12,
  rotateRange = 1.5,
  duration = 4.5,
  className = "",
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -yRange, 0],
        rotate: [0, rotateRange, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
