"use client"

import { motion } from "framer-motion"

type Mood = "sad" | "lost" | "sleepy"

const CoffeeCartoon = ({ mood, className = "" }: { mood: Mood; className?: string }) => {
  return (
    <motion.svg
      viewBox="0 0 180 200"
      className={className}
      initial={{ scale: 0, rotate: -8 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      aria-hidden="true"
    >
      {/* steam */}
      {[72, 92, 112].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 66 q-7 -10 0 -18 q7 -8 0 -16`}
          fill="none"
          stroke="#c9a27a"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ y: [0, -6, 0], opacity: mood === "sad" ? [0.1, 0.4, 0.1] : [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* saucer */}
      <ellipse cx="90" cy="174" rx="62" ry="9" fill="#e8d5c4" />

      {/* handle */}
      <path d="M42 96 q-30 4 -18 30 q6 12 22 12" fill="none" stroke="#603809" strokeWidth="9" strokeLinecap="round" />

      {/* cup body */}
      <path d="M40 80 h100 v44 a42 42 0 0 1 -42 42 h-16 a42 42 0 0 1 -42 -42 z" fill="#603809" />
      <ellipse cx="90" cy="80" rx="50" ry="9" fill="#F9C06A" />
      <ellipse cx="90" cy="80" rx="41" ry="5" fill="#8a5a22" />

      {/* cheeks */}
      <circle cx="62" cy="128" r="7" fill="#F9C06A" opacity="0.6" />
      <circle cx="118" cy="128" r="7" fill="#F9C06A" opacity="0.6" />

      {mood === "sad" && (
        <>
          {/* eyes looking down */}
          <circle cx="72" cy="108" r="6" fill="#FFFEFC" />
          <circle cx="108" cy="108" r="6" fill="#FFFEFC" />
          <circle cx="72" cy="111" r="3" fill="#3a1c06" />
          <circle cx="108" cy="111" r="3" fill="#3a1c06" />
          {/* worried brows */}
          <path d="M64 96 l16 -4 M116 96 l-16 -4" stroke="#FFFEFC" strokeWidth="3" strokeLinecap="round" />
          {/* frown */}
          <path d="M79 136 q11 -12 22 0" fill="none" stroke="#FFFEFC" strokeWidth="3.5" strokeLinecap="round" />
          {/* tear */}
          <motion.path
            d="M72 118 q-4 7 0 10 q4 -3 0 -10 z"
            fill="#7dd3fc"
            animate={{ y: [0, 14], opacity: [1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </>
      )}

      {mood === "lost" && (
        <>
          {/* eyes looking sideways */}
          <circle cx="72" cy="108" r="6" fill="#FFFEFC" />
          <circle cx="108" cy="108" r="6" fill="#FFFEFC" />
          <motion.circle
            cx="74" cy="108" r="3" fill="#3a1c06"
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="110" cy="108" r="3" fill="#3a1c06"
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* mouth "o" */}
          <circle cx="90" cy="134" r="4.5" fill="none" stroke="#FFFEFC" strokeWidth="3" />
          {/* floating question mark */}
          <motion.text
            x="136" y="62" fontSize="34" fontWeight="bold" fill="#F9C06A"
            fontFamily="serif"
            animate={{ y: [0, -8, 0], rotate: [-8, 8, -8] }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ?
          </motion.text>
        </>
      )}

      {mood === "sleepy" && (
        <>
          {/* closed eyes */}
          <path d="M65 109 q7 7 14 0 M101 109 q7 7 14 0" fill="none" stroke="#FFFEFC" strokeWidth="3.5" strokeLinecap="round" />
          {/* small mouth */}
          <path d="M84 132 q6 5 12 0" fill="none" stroke="#FFFEFC" strokeWidth="3" strokeLinecap="round" />
          {/* floating z's */}
          {["Z", "z"].map((z, i) => (
            <motion.text
              key={i}
              x={134 + i * 14} y={64 - i * 16}
              fontSize={i === 0 ? 24 : 18}
              fontWeight="bold" fill="#F9C06A" fontFamily="serif"
              animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            >
              {z}
            </motion.text>
          ))}
        </>
      )}
    </motion.svg>
  )
}

export default CoffeeCartoon