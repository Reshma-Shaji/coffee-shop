"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
    children: ReactNode
    className?: string
    delay?: number
    x?: number
}

const FadeIn = ({ children, className, delay = 0, x = 0 }: FadeInProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn